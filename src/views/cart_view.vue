<script setup lang="ts">
import primaryButton from "../components/primary_button.vue";
import iconButton from "../components/icon_button.vue";
import listItem from "../components/list_item.vue";
import { useCake, useUi } from "../store";
import { computed } from "vue";
const uiStore = useUi();
const cakeStore = useCake();

const cartIsEmpty = computed(() => (cakeStore.cartlenght === 0 ? true : false));
</script>
<template>
  <div v-if="cartIsEmpty" class="empty">
    <img src="../assets/empty-cart.svg" alt="cart empty image" />
  </div>

  <div v-else class="cart-view">
    <div class="toolbar">
      <h1>Total: {{ cakeStore.totalPrice }} $</h1>

      <div class="actions">
        <iconButton @click="cakeStore.clearAllshoppingCart" class="delete">
          delete_sweep
        </iconButton>
        <primaryButton @click="uiStore.togglePaymentModal"
          >pay all</primaryButton
        >
      </div>
    </div>
    <listItem
      v-for="(cake, index) in cakeStore.shoppingCart"
      :index="index"
      :cake="cake"
    />
    <!-- list item -->
  </div>
</template>
<style scoped>
.cart-view {
  width: 90%;
  margin: auto;
  height: 100%;
  overflow: scroll;
  gap: 1rem;
  display: grid;
}

.delete {
  color: tomato;
  margin-right: 1rem;
}
.toolbar {
  background-color: rgb(73, 77, 126);
  height: 3rem;
  position: sticky;
  top: 0rem;
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem;
}
.empty {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.empty img {
  width: 70%;
  height: 70%;
  object-fit: contain;
  object-position: center;
}

.actions {
  display: flex;
  align-items: center;
  width: 15%;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .toolbar h1 {
    font-size: 0.9rem;
  }
  .actions {
    width: fit-content;
  }
}
</style>
