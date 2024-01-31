<script setup lang="ts">
import overlay from "./overlay.vue";
import loginForm from "./login_form.vue";
import paymentForm from "./payment_form.vue";
import registerForm from "./register_modal.vue";
import cakeCard from "./cake_card.vue";
import { useUi, useCake } from "../store/index";

const uiStore = useUi();

const cakeStore = useCake();
</script>
<template>
  <header>
    <slot name="header" />
  </header>
  <main>
    <slot />
    <!-- here will be router-vue  -->
  </main>
  <Transition :duration="250" name="nested">
    <overlay @close-overlay="uiStore.toggleDrawer" v-if="uiStore.drawerOpen">
      <div class="drawer inner">
        <slot name="drawer" />
      </div>
    </overlay>
  </Transition>
  <footer>
    <slot name="footer" />
  </footer>
  <Transition :duration="250" name="nested">
    <overlay @close-overlay="uiStore.toggleLoginModal" v-if="uiStore.loginModalOpen">
      <loginForm class="inner" />
    </overlay>
  </Transition>
  <Transition name="bounce">
    <paymentForm v-if="uiStore.paymentModalOpen" />
  </Transition>
  <Transition :duration="250" name="nested">
    <overlay @close-overlay="uiStore.toggleRegisterModal" v-if="uiStore.registerModalOpen">
      <registerForm class="inner" />
    </overlay>
  </Transition>
  <Transition :duration="0" name="nested">
    <overlay @click="uiStore.toggleCakeCardModal" class="cakeOverlay" v-if="uiStore.cakeCardModalOpen">
      <cakeCard class="inner" :cake="cakeStore.currentCake" />
    </overlay>
  </Transition>
</template>
<style scoped>
* {
  background-color: rgb(73, 77, 126);
}

header {
  height: 10vh;
}

main {
  height: 85vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

footer {
  height: 5vh;
}

.drawer {
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  height: 45%;
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.bounce-enter-active {
  animation: bounce-in 0.2s;
}

/* vue animations */

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

/* nested  */

.nested-enter-active,
.nested-leave-active {
  transition: all 0.1s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.1s;
}

.nested-enter-from,
.nested-leave-to {
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
  animation: bounce-in 0.3s reverse;
}

/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.1s;
  animation: bounce-in 0.3s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  opacity: 0.001;
  animation: bounce-in 0.3s reverse;
}
</style>
