<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

</script>

<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class=" mt-3">
        <p>2024</p>
      </div>

      <!-- Primera parte -->

      <section class="border-dark p-6">
        <h1 class="text-uppercase display-1">
          Happy <br />
          <span class="fw-bold">New</span> <br />
          Year
        </h1>
        <p class="fst-italic fs-2">Party</p>
      </section>

      <div class="mt-3">
        <p class="fs-5">31 Night December</p>
        <hr class="m-auto my-4">
        <p class="fs-5">At Downtown</p>
      </div>

      <!-- Segunda parte -->

      <section class="border border-dark border-4 p-4">
        <h1 class="text-uppercase  display-5 fw-bold">
          Get free beer and cocktails <br />
          <p class="m-2">$30</p>
          <button type="button" class="btn btn-dark px-5">
            RSVP
          </button>
        </h1>
      </section>
    </div>


  </div>
</template>

<style scoped>
.display-1 {
  font-size: 3rem;
}

.display-5 {
  font-size: 2rem;
}

.border-dark {
  border: 10px solid black;
  width: 50%;
  padding: 25px;
}

hr {
  background: gray;
  height: 3px;
  border: 0;
  opacity: 1;
  width: 100px;
}
</style>