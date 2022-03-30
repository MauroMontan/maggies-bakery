<script setup lang="ts">
import { useCake, useUi } from "../store";

const cakeStore = useCake();

const uiStore = useUi();
</script>

<template>
  <div class="payment-modal">
    <div class="header">
      <div class="title"><h1>Payment</h1></div>

      <div class="close">
        <i @click="uiStore.togglePaymentModal" class="material-icons">
          close
        </i>
      </div>
    </div>

    <div class="concept">
      <h1>Total: {{ cakeStore.totalPrice }} $</h1>
    </div>

    <div class="payment-form">
      <div class="form">
        <input class="name" placeholder="ful name" type="text" name="name" />
        <input
          class="tel"
          placeholder="Phone number"
          type="number"
          name="tel"
        />
        <input
          class="numbers"
          placeholder="Card number "
          type="number"
          name="date"
        />
        <input
          class="expiration"
          placeholder="Expiration date "
          type="date"
          name="date"
        />
        <input class="cvv" placeholder="CVV " type="number" name="date" />

        <input class="cp" type="number" placeholder="Zip code" />

        <input class="adress" placeholder="Adress" type="text" name="adress" />

        <div class="gift">
          <h1>for gift</h1>
          <input type="checkbox" name="isAgift" id="gift" />
        </div>

        <button @click="uiStore.togglePaymentModal" class="submit">buy</button>

        <div class="blank"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  background-color: #f2d3ab;
  outline: none;
  text-align: center;
  border: none;
  color: #272744;
  border-radius: 0.5rem;
}

button {
  background-color: #494d7e;
  color: #f2d3ab;
  border-radius: 0.5rem;
  border: none;
}
::placeholder {
  color: #494d7e;
}

.payment-modal {
  background-color: #272744;
  width: 100%;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.payment-form {
  padding: 1rem;
  height: 100%;
  width: 100%;
}

.payment-form .form {
  margin: auto;
  width: 90%;
  height: 100%;
  display: grid;
  gap: 2rem;
  grid-auto-rows: 3rem;
  align-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "name name tel tel "
    "numbers numbers numbers expiration "
    "cvv cvv cp gift "
    "adress adress adress adress"
    "blank blank blank submit";
}

.payment-form .form .numbers {
  grid-area: numbers;
}

.payment-form .form .expiration {
  grid-area: expiration;
}
.payment-form .form .cvv {
  grid-area: cvv;
}

.payment-form .form .name {
  grid-area: name;
}

.payment-form .form .tel {
  grid-area: tel;
}
.payment-form .form .submit {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: submit;
}

.payment-form .form .blank {
  grid-area: blank;
}

.payment-form .form .cp {
  grid-area: cp;
}
.payment-form .form .adress {
  grid-area: adress;
}

.payment-form .form .gift {
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-area: gift;
}
.payment-form .form .gift input {
  height: 1.7rem;
  width: 1.7rem;
  border-radius: 100%;
}

.header {
  padding: 0 1rem;
  display: flex;
  height: 5rem;
  align-items: center;
  background-color: #494d7e;
  justify-content: space-between;
  width: 100%;
}
.header .title {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.concept {
  width: 100%;
  margin-top: 1rem;
  padding-left: 1rem;
  align-items: center;
  height: 2rem;
}
.header .close {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .header {
    height: 4rem;
  }
  .payment-form .form {
    margin: auto;
    width: 100%;
    height: 100%;
    display: grid;
    gap: 1rem;
    grid-auto-rows: 2.7rem;
    align-content: unset;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "name name name name"
      "tel tel tel tel"
      "numbers numbers numbers numbers"
      " expiration  expiration expiration expiration"
      "cvv cvv gift gift"
      "cp cp cp cp"
      "adress adress adress adress"
      "blank blank submit submit";
  }
}
</style>
