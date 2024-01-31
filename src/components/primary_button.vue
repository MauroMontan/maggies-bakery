<script setup lang="ts">
interface Emit {
  (event: "click"): void;
}

const emit = defineEmits<Emit>();
</script>
<template>
  <button @click="emit('click')">
    <slot />
  </button>
</template>
<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  background-color: rgb(46, 46, 79);
  border: none;
  gap: 0.5rem;
  padding: 0.5rem;
  transition: all 0.3s ease 0s;
  border-radius: 0.4rem;
}

button:active {
  transform: scale(90%);
}

button:hover {
  opacity: 0.8;
  color: #8b6d9c;
}
</style>
