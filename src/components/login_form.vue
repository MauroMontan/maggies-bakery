<script setup lang="ts">
import { computed, ref, reactive } from "vue";
import loginButton from "./primary_button.vue";
import { useUi, useUser } from "../store/index";

const uiStore = useUi();
const isPasswordVisible = ref(false);

const userStore = useUser();

const user = reactive({
  email: "",
  password: "",
});

const passwordType = computed(() =>
  isPasswordVisible.value === false ? "password" : "text"
);
</script>
<template>
  <div class="login-form">
    <div class="toolbar">
      <h1>Login</h1>

      <i @click="uiStore.toggleLoginModal" class="material-icons">close</i>
    </div>

    <div class="form">
      <input v-model="user.email" type="email" name="email" placeholder="email" />

      <div class="password-input">
        <input v-model="user.password" :type="passwordType" placeholder="password" />

        <button v-if="isPasswordVisible === true" @click="isPasswordVisible = !isPasswordVisible" class="material-icons">
          visibility_off
        </button>
        <button v-else v-if="user.password !== ''" @click="isPasswordVisible = !isPasswordVisible" class="material-icons">
          visibility
        </button>
      </div>
    </div>
    <a @click="uiStore.toggleRegisterModal"> register </a>

    <loginButton @click="userStore.login(user)">
      Login

      <span v-if="uiStore.isLoading" class="rotate material-icons"> loop </span>
    </loginButton>
  </div>
</template>
<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 35%;
  width: 25%;
  padding: 1rem;
  border-radius: 0.8rem;
  border: solid 2px #2E2E4D;
}

a {
  margin: 0.1rem;
  color: grey;
  cursor: pointer;
  font-size: 1rem;
}

a:hover {
  color: rgb(242, 211, 171);
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

.rotate {
  animation: rotation 2s infinite linear;
}

.toolbar {
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
  justify-content: space-between;
}

.toolbar i {
  color: tomato;
  cursor: pointer;
}

.form {
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
}

.password-input {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.password-input button {
  outline: none;
  border: none;
  margin-left: 0.5rem;
  background-color: rgb(73, 77, 126);
  cursor: pointer;
}

.password-input button:hover {
  color: tomato;
}

input {
  background-color: rgb(247, 218, 165);
  width: 100%;
  border: none;
  text-align: center;
  color: rgb(73, 77, 126);
  outline: none;
  height: 2.5rem;
  border-radius: 0.2rem;
}

button {
  margin-top: 0.3rem;
}

::placeholder {
  color: rgb(73, 77, 126);
}

@media (max-width: 768px) {
  .login-form {
    width: 90%;
    height: 14rem;
  }
}
</style>
