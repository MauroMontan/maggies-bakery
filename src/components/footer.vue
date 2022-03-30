<script setup lang="ts"></script>
<template>
  <div class="footer">
    <div class="legal">© Mauro Montaño 2022</div>
    <div class="social"></div>
  </div>
</template>
<style scoped>
.footer {
  width: 90%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
}

@media (max-width: 768px) {
  .footer {
    justify-content: center;
  }
  .legal {
    font-size: 0.8rem;
  }
}
</style>
