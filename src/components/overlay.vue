<script setup lang="ts">
interface Emit {
  (event: "close-overlay"): void;
}

const emit = defineEmits<Emit>();
</script>
<template>
  <div @click.self="emit('close-overlay')" class="overlay">
    <slot />
  </div>
</template>

<style scoped>
.overlay {
  background-color: rgb(73, 77, 126, 0.2);
  width: 100%;
  height: 100%;
  backdrop-filter: blur(0.3rem);
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  position: fixed;
  z-index: 2;
}
</style>
