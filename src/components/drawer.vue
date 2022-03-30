<script setup lang="ts">
import loginButton from "./icon_button.vue";
import { useUi, useUser } from "../store/index";
import { storeToRefs } from "pinia";

const uiStore = useUi();

const userStore = useUser();

const { authMenuOption } = storeToRefs(uiStore);
</script>
<template>
  <div class="drawer">
    <div class="actions">
      <loginButton v-if="!userStore.isAuth" @click="uiStore.toggleLoginModal"
        >login</loginButton
      >
      <loginButton v-else @click="userStore.logout">logout</loginButton>

      <i @click="uiStore.toggleDrawer" class="material-icons">close</i>
    </div>
    <ul>
      <router-link v-for="item in authMenuOption" :to="item.route">
        <li>
          {{ item.name }}
        </li>
      </router-link>
    </ul>
  </div>
</template>
<style scoped>
.drawer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  justify-content: space-around;
}
.actions {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.drawer ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.drawer li {
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  list-style: none;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  padding: 0.3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(39, 39, 68, 0.6);
  border-radius: 0.4rem;
  transition: all 0.3s ease 0s;
  margin: 0.3rem 0rem;
}
a {
  text-decoration: none;
  width: 100%;
}
</style>
