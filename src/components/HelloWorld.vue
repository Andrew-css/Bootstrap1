<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

let router = useRouter();
let contador = ref(0);



function sum() {
  for (let i = 0; i < 1; i++) {
    contador.value += 1

  }
}



function goToPrueba() {
  router.push(`/prueba`);
}

function borrar(){
  alerta.value = ""
}

console.log(contador)


</script>

<template>
  <div class="container text-center" id="body">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Bootstrap</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown" data-bs-theme="dark">
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
                <li><a class="dropdown-item">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
              </div>
             
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <div class="m-4 bg-primary">
      Hello World
    </div>
    <div class="m-4 bg-danger">I'm here</div>
    <div>
      <button type="button" class="btn btn-primary m-5" @click="sum()">
      Contador : {{ contador }}
    </button>


    <button type="button" class="btn btn-dark m-5" @click="goToPrueba()">
      Siguiente
    </button>
    </div>

    <p class="fs-2 fw-bold">{{ alerta }}</p>

  </div>
</template>

<style scoped>
#body {
  height: 100vh;
  width: 100%;
}
</style>