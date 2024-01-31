<script setup lang="ts">
import primaryButton from "./primary_button.vue";
import { useUser, useUi } from "../store/index";
import { reactive } from "vue";
import { User } from "../interfaces";

const userStore = useUser();
const uiStore = useUi();

const user = reactive({
  email: "",
  password: "",
});

const submit = (user: User) => {
  if (user.email !== "") {
    if (user.password !== "") {
      userStore.register(user);

      alert("ewfewfw");
    }
  }
};
</script>
<template>
  <div class="register-modal">
    <div class="toolbar">

      <i class="material-icons" @click="uiStore.toggleRegisterModal()">
        close</i>
    </div>

    <div class="form">
      <input v-model="user.email" placeholder="e-mail" type="email" name="email" />
      <input v-model="user.password" placeholder="password" type="password" name="password" />
      <input placeholder="confirm your password" type="password" name="password" />

      <a @click="uiStore.toggleLoginModal"> Login </a>
    </div>
    <div class="actions">
      <primaryButton @click="submit(user)">
        register
        <i v-if="uiStore.isLoading" class="material-icons rotate">loop</i>
      </primaryButton>
    </div>
  </div>
</template>
<style scoped>
.register-modal {
  background-color: rgb(26, 27, 38);
  border-radius: 0.9rem;
  width: 30%;
  height: 20rem;
  display: flex;
  flex-direction: column;
}

a {
  font-size: 1rem;
  color: gray;
  cursor: pointer;
}

a:hover {
  color: rgb(242, 211, 171);
}

input {
  border: none;
  outline: none;
  height: 2.4rem;
  width: 100%;
  border-radius: 0.4rem;
  background-color: rgb(73, 77, 126);
  text-align: center;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
}

::placeholder {
  color: rgb(242, 211, 171);
}

.toolbar {
  display: flex;
  padding-top: 1rem;
  width: 90%;
  margin: auto;
  align-items: center;
  justify-content: end;
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

.toolbar i:hover {
  background-color: tomato;
  border-radius: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  gap: 1.2rem;
  margin: auto;
  align-items: center;
  height: 90%;
  width: 95%;
}

.actions {
  display: flex;
  padding-bottom: 2rem;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .register-modal {
    width: 90%;
    height: 20rem;
  }
}
</style>
