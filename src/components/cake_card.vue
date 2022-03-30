<script setup lang="ts">
import buyButton from "./primary_button.vue";
import cartButton from "./icon_button.vue";
import { Cake } from "../interfaces";
import { useCake, useUi, useUser } from "../store";
import { computed } from "vue";

interface Props {
  cake: Cake;
}
defineProps<Props>();
const cakeStore = useCake();
const userStore = useUser();
const uiStore = useUi();

const isModal = computed(() => {
  if (uiStore.cakeCardModalOpen) {
    return "card-modal";
  }
});

const addTocart = (cake: Cake) => {
  if (userStore.isAuth) cakeStore.addToShoppingCart(cake);
  else uiStore.toggleLoginModal();
};
</script>
<template>
  <div :class="isModal" class="card">
    <div class="cover">
      <img :src="cake.cakePhoto" alt="cake-card photo" />

      <div class="overlay">
        <div class="title">
          <h1 v-text="cake.cakeName" />
          <h1>$ {{ cake.price }}</h1>
        </div>
      </div>
    </div>
    <div class="content">
      <p v-text="cake.cakeDescription" />
    </div>

    <div class="actions">
      <buyButton class="button">buy now</buyButton>
      <cartButton @click="addTocart(cake)" class="button">
        add_shopping_cart
      </cartButton>
    </div>
  </div>
</template>
<style scoped>
.card {
  background-color: rgb(242, 211, 171, 1);
  overflow: hidden;
  width: 100%;
  border-radius: 1rem;
  max-height: 26rem;
  min-height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-modal {
  width: 30%;
  height: 100%;
}

.content {
  overflow: auto;
  padding: 0.4rem;
}
.content p {
  text-align: justify;
  font-size: 1rem;
  color: rgb(39, 39, 68);
}

.card .cover {
  height: 50%;
  position: relative;
}
.card .cover .overlay {
  background-color: rgb(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column-reverse;
}

.overlay .title {
  display: flex;
  align-items: center;
  padding: 0.4rem 0.5rem;
  justify-content: space-between;
}
.card .cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: blur(0.03rem);
}
.actions {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.actions .button {
  margin: 0rem 0rem 0rem 1rem;
}

@media (max-width: 768px) {
  .card-modal {
    width: 90%;
    height: 100%;
  }
}
</style>
