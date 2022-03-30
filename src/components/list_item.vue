<script setup lang="ts">
import iconButton from "../components/icon_button.vue";
import { Cake } from "../interfaces";
import { useCake } from "../store";

interface Props {
  cake: Cake;
  index: number;
}
const cakeStore = useCake();

defineProps<Props>();
</script>
<template>
  <div class="list-item">
    <div class="about-article">
      <img :src="cake.cakePhoto" alt="cake-card photo" />
    </div>
    <h1 v-text="cake.cakeName" />

    <div class="actions">
      <h1>$ {{ cake.price }}</h1>
      <iconButton
        @click="cakeStore.removeFromShoppingCart(index)"
        class="delete"
      >
        close
      </iconButton>
    </div>
  </div>
</template>
<style scoped>
.about-article {
  height: 100%;
  width: 20%;
  margin-right: 1rem;
}
.about-article img {
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: 100%;
}
.list-item {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  background-color: rgb(84, 84, 109, 0.8);
  width: 100%;
  height: 6rem;
  display: flex;
  overflow: hidden;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: space-between;
}

.actions {
  display: flex;
  align-items: center;
  width: 17%;
  justify-content: space-between;
  margin: 1rem;
}

@media (max-width: 768px) {
  .list-item {
    height: 5rem;
  }
  .about-article {
    height: 100%;
    width: 4rem;
  }
  .actions {
    width: 6rem;
    margin: 0.5rem;
  }

  .list-item h1 {
    font-size: 0.8rem;
  }
}
</style>
