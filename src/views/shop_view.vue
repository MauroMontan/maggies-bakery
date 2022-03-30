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
</script>
<template>
  <div v-if="uiStore.cakeCardModalOpen === false" class="shop-view">
    <h1>Popular</h1>

    <popularRow>
      <div
        v-for="cake in cakes"
        class="carrousel-item"
        @click="openCakeModal(cake)"
      >
        <img :src="cake.cakePhoto" alt="carrousel item image" />
      </div>
    </popularRow>
    <h1>All our flavours</h1>
    <div class="loading" v-if="cakeStore.loading">
      <i class="material-icons rotate">loop</i>
    </div>

    <cakeGrid v-else>
      <cakeCard v-for="cake in cakes" :cake="cake" />
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
