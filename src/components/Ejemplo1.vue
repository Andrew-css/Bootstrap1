<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

let router = useRouter();

function volver (){
 router.push('/')
}

</script>

<template>
  <div class="text-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="mt-2 h5" style="width: 90%;">
          <p class="text-primary fw-bold ">2024</p>
        </div>

        <!-- Primera parte -->

        <section class="border-dark">
          <h1 class="text-uppercase display-1 text-light">
            Happy <br />
            <span class="fw-bold">New</span> <br />
            Year
          </h1>
          <p class="fst-italic fs-2 text-primary">Party</p>
        </section>

        <div class="mt-3" style="width: 90%;">
          <p class="fs-5 text-light">31 Night December</p>
          <hr class="m-auto my-4 bg-primary">
          <p class="fs-5 text-light">At Downtown</p>
        </div>

        <!-- Segunda parte -->

        <section class="border border-dark border-4 p-4">
          <h1 class="text-uppercase display-5 fw-bold text-light">
            Get free beer and cocktails <br />
            <p class="m-2">$30</p>
            <button type="button" class="btn btn-dark text-uppercase px-5 bg-primary fw-bold " @click="volver()">
              regresar
            </button>
          </h1>
        </section>
      </div>
    </div>



  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.text-center {
  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-repeat:no-repeat;
  background-position: right;
  width: 100vw;
  height: 100vh;
  font-family: 'Monserrat', sans-serif;

}

.text-primary {
  color: #cfa674 !important;
}

.bg-primary {
  background-color: #cfa674 !important;
}
.display-1 {
  font-size: 3.2rem;
}

.display-5 {
  font-size: 2rem;
}

.border-dark {
  border: 10px solid #cfa674 !important;
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

@media screen and (min-width: 501px) and (max-width: 1500px) {
  .text-center{
  height: 100%;
  }
  
}

@media screen and (min-width: 100px) and (max-width: 500px){
  .text-light{
  font-size: 0.9rem;
  }
  
  .text-center{
  height: 100vh;
  }

  .border{
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin: 10px;
  }

  .btn{
  width: 150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  
}

</style>