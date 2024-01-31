import { defineStore } from "pinia";
import { goTo } from "../router/index";
import { MenuOption } from "./../interfaces/index";
import { User, Cake } from "../interfaces";

export const useUi = defineStore("uiStore", {
  state: () => ({
    drawerOpen: false,
    loginModalOpen: false,
    loading: false,
    paymentModalOpen: false,
    registerModalOpen: false,
    cakeCardModalOpen: false,
    menuItems: [
      {
        name: "About us",
        route: "/about",
        auth: false,
      },
      {
        name: "Cake shop",
        route: "/shop",
        auth: false,
      },

      {
        name: "Cart",
        route: "/cart",
        auth: false,
      },
    ] as Array<MenuOption>,
  }),
  getters: {
    authMenuOption: (state) => {
      const authUser = useUser();
      if (authUser.isAuth === false) {
        return state.menuItems.filter((item) => item.auth === false);
      }
      if (authUser.isAuth === true) {
        return state.menuItems;
      }
    },
    isLoading(state) {
      return state.loading;
    },
  },
  actions: {
    toggleDrawer(): void {
      this.drawerOpen = !this.drawerOpen;
    },
    toggleLoginModal(): void {
      this.drawerOpen = false;
      this.registerModalOpen = false;
      this.loginModalOpen = !this.loginModalOpen;
    },
    toggleLoading(): void {
      this.loading = !this.loading;
    },
    togglePaymentModal(): void {
      this.drawerOpen = false;
      this.paymentModalOpen = !this.paymentModalOpen;
    },
    toggleRegisterModal(): void {
      this.loginModalOpen = false;
      this.registerModalOpen = !this.registerModalOpen;
    },
    toggleCakeCardModal(): void {
      this.cakeCardModalOpen = !this.cakeCardModalOpen;
    },
  },
});

export const useUser = defineStore("userStore", {
  state: () => ({
    endpoint: "https://cakeshp.deta.dev",
    isAuth: false,
  }),
  getters: {},
  actions: {
    async register(payload: User): Promise<void> {
      const uiStore = useUi();
      uiStore.toggleLoading();
      const response = await fetch(`${this.endpoint}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = response.json();
      if (response.status == 404) {
        uiStore.toggleLoading();
      }
      if (response.status == 422) {
        uiStore.toggleLoading();
      }

      if (response.status === 200) {
        uiStore.toggleRegisterModal();
        uiStore.toggleLoading();
      }
    },

    async login(payload: User): Promise<void> {
      const uiStore = useUi();

      uiStore.toggleLoading();

      const response = await fetch(`${this.endpoint}/login/`, {
        body: `username=${payload.email}&password=${payload.password}`,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const data = await response.json();

      if (response.status == 404) {
        uiStore.toggleLoading();
      }
      if (response.status == 422) {
        uiStore.toggleLoading();
      }

      if (response.status === 200) {
        this.isAuth = true;
        localStorage.setItem("token", data);
        uiStore.toggleLoginModal();
        uiStore.toggleLoading();
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.isAuth = false;
      goTo("/");
    },

    authentication() {
      if (localStorage.getItem("token")) {
        this.isAuth = true;
      }
      if (!localStorage.getItem("token")) {
        this.isAuth = false;
      }
    },
  },
});

export const useCake = defineStore("cakeStore", {
  state: () => ({
    endpoint: "https://cakeshp.deta.dev",
    cakeList: [] as Array<Cake>,
    cartList: [] as Array<Cake>,
    total: "",
    currentCake: {} as Cake,
    loading: false,
  }),
  getters: {
    cakes: (state): Array<Cake> => state.cakeList,
    cartlenght: (state): number => state.cartList.length,
    shoppingCart: (state): Array<Cake> => {
      try {
        if (state.cartList.length === 0) {
          state.cartList = [
            ...(JSON.parse(
              localStorage.getItem("shoppingCart")!
            ) as Array<Cake>),
          ];
        }
      } catch (error) {
        state.cartList = [];
      }
      return state.cartList;
    },

    totalPrice: (state): string => {
      let tempTotal = 0;
      state.cartList.forEach((cake) => {
        tempTotal += cake.price;
      });

      state.total = tempTotal.toFixed(2);

      return state.total;
    },
  },
  actions: {
    async loadCakes(): Promise<void> {
      this.loading = true;
      const response = await fetch(`${this.endpoint}/cakes/`);
      const data = await response.json();

      this.cakeList = [...data];
      this.loading = false;
    },

    addToShoppingCart(cake: Cake): void {
      this.cartList.unshift(cake);

      this.storeCartLocal(this.cartList);
    },
    removeFromShoppingCart(index: number): void {
      const tempCart = this.cartList.filter((cake, i) => i !== index);
      this.cartList = [...tempCart];
      this.storeCartLocal(this.cartList);
    },
    clearAllshoppingCart(): void {
      this.cartList = [];
      this.storeCartLocal([]);
    },

    storeCartLocal(data: Array<Cake>): void {
      localStorage.setItem("shoppingCart", JSON.stringify(data));
    },

    setCurrentCake(cake: Cake): void {
      this.currentCake = cake;
    },
  },
});
