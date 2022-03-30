<script setup lang="ts">
import layout from "./components/base_layout.vue";
import appbar from "./components/appbar.vue";
import customFooter from "./components/footer.vue";
import drawer from "./components/drawer.vue";
import { useUser } from "./store/index";
import { onMounted } from "vue";

const userStore = useUser();

onMounted(() => {
  userStore.authentication();
});
</script>

<template>
  <layout>
    <template v-slot:header>
      <appbar />
    </template>

    <router-view />

    <template v-slot:footer> <customFooter /></template>

    <template v-slot:drawer><drawer /></template>
  </layout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
::-webkit-scrollbar {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  color: #f2d3ab;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
</style>
