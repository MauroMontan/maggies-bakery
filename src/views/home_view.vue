<script setup lang="ts">
import primaryButton from "../components/primary_button.vue";
import { useUi } from "../store/index";

const cakeStore = useUi();
</script>
<template>
  <div class="banner">
    <div class="box content">
      <h1>Maggie´s Bakery</h1>
      <p>
        Don´t give a cake, give memories and experiences, make someone special
      </p>
      <primaryButton @click="cakeStore.toggleRegisterModal">
        register
      </primaryButton>
    </div>
    <div class="box image">
      <img src="../assets/homeimage.png" alt="homepage image" />
    </div>
  </div>
</template>

<style scoped>
.banner {
  width: 90%;
  margin: auto;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-items: center;
  justify-items: center;
}

button {
  box-shadow: 0 8px 4px rgba(0, 0, 0, 0.15);
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.content h1 {
  font-size: 3rem;
}
.content p {
  margin-top: 2rem;
  line-height: 1.5;
  font-size: 1.5rem;
}

.image {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image img {
  width: 90%;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 768px) {
  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: auto;
  }
  .content h1 {
    font-size: 2rem;
  }
  .box {
    justify-content: center;
    height: fit-content;
  }
  .content p {
    margin-top: 2rem;
    line-height: 1.4;
    font-size: 1.4rem;
  }
}
</style>
