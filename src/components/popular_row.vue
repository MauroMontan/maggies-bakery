<script setup lang="ts"></script>
<template>
  <div class="row-carrousel">
    <slot />
  </div>
</template>
<style scoped>
.row-carrousel {
  height: 8rem;
  overflow: auto;
  width: 100%;
  scroll-snap-type: x mandatory;
  align-items: center;
  display: flex;
}
</style>
