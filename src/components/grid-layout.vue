<script setup lang="ts"></script>
<template>
  <div class="grid">
    <slot />
  </div>
</template>
<style>
.grid {
  display: grid;
  width: 100%;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  overflow: auto;
  align-content: center;
  justify-items: center;
}
</style>
