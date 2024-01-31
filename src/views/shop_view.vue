<script setup lang="ts">
import cakeGrid from "../components/grid-layout.vue";
import cakeCard from "../components/cake_card.vue";
import { useCake, useUi } from "../store";
import { computed, onMounted } from "vue";
import popularRow from "../components/popular_row.vue";
import { Cake } from "../interfaces";

const cakeStore = useCake();
const uiStore = useUi();

onMounted(() => {
  if (cakeStore.cakes.length === 0) {
    cakeStore.loadCakes();
  }
});

const cakes = computed(() => {
  return cakeStore.cakes;
});

const openCakeModal = (cake: Cake): void => {
  cakeStore.setCurrentCake(cake);
  uiStore.toggleCakeCardModal();
};


const cake = {
  cakeDescription: "Pastel de Chocolate",
  cakeName: "Pastel Prieto",
  cakePhoto: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cover: "Choolate",
  customMessage: "Happy BirthDay",
  freeLactose: false,
  messageColor: "blue",
  price: 23.0,
}
</script>
<template>
  <div v-if="uiStore.cakeCardModalOpen === false" class="shop-view">
    <h1>Popular</h1>

    <popularRow>
      <div v-for="cake in cakes" class="carrousel-item" @click="openCakeModal(cake)">
        <img :src="cake.cakePhoto" alt="carrousel item image" />
      </div>
    </popularRow>
    <h1>All our flavours</h1>

    <cakeGrid>
      <cakeCard v-for="i in 23" :cake="cake" />
    </cakeGrid>
  </div>
</template>
<style scoped>
.shop-view {
  margin: auto;
  width: 90%;
  height: 100%;
  overflow: auto;
}

h1 {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.carrousel-item {
  background-color: aliceblue;
  margin: 0.5rem;
  display: flex;
  scroll-snap-align: start;
  border-radius: 0.5rem;
  height: 80%;
  overflow: hidden;
  cursor: pointer;
  flex: 0 0 10rem;
  align-items: center;
  justify-content: center;
}

.carrousel-item img {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.loading {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

.rotate {
  animation: rotation 2s infinite linear reverse;
}

.loading i {
  font-size: 4rem;
}
</style>
