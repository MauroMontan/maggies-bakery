<script setup lang="ts">
interface Emit {
  (event: "click"): void;
}

const emit = defineEmits<Emit>();
</script>
<template>
  <button @click="emit('click')" class="material-icons">
    <slot />

    <slot name="badge" />
  </button>
</template>
<style scoped>
button {
  background-color: rgb(46, 46, 79);
  border: none;
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
