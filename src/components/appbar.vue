<script setup lang="ts">
import primaryButton from "./icon_button.vue";
import { useCake, useUi, useUser } from "../store/index";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { goTo } from "../router";

const uiStore = useUi();
const userStore = useUser();

const { authMenuOption } = storeToRefs(uiStore);

const cakeStore = useCake();

const cartIsEmpty = computed(() => (cakeStore.cartlenght === 0 ? true : false));
</script>
<template>
  <nav>
    <div class="title">
      <router-link to="/">
        <h1>Maggie´s bakery</h1>
      </router-link>
    </div>
    <div class="actions">
      <ul>
        <li v-for="item in authMenuOption">
          <router-link :to="item.route">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <primary-button v-if="!userStore.isAuth" @click="uiStore.toggleLoginModal" class="login">
        login
      </primary-button>
      <primary-button v-else @click="userStore.logout" class="login">
        logout
      </primary-button>
      <primary-button class="drawer-button" @click="uiStore.toggleDrawer">
        widgets
        <template v-slot:badge>
          <span v-if="!cartIsEmpty" class="badge material-icons">shopping_cart</span></template>
      </primary-button>
    </div>
  </nav>
</template>
<style scoped>
nav {
  background-color: rgb(73, 77, 126);
  height: 100%;
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

a {
  text-decoration: none;
}

a:hover {
  color: rgb(26, 27, 38);
}

.title {
  cursor: pointer;
}

.actions {
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.actions ul {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  padding-inline-end: 1rem;
}

.actions ul li {
  list-style: none;
  text-align: center;
}

.drawer-button {
  display: none;
  position: absolute;
}

.badge {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  border-radius: 100%;
  display: flex;
  margin: 0 0.2rem;
  font-size: 0.8rem;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.2rem;
  background-color: tomato;
}

@media (max-width: 768px) {
  .actions {
    justify-content: end;
  }

  .actions ul {
    display: none;
  }

  .login {
    display: none;
  }

  .drawer-button {
    display: block;
  }
}
</style>
