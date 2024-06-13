<script setup>
import { ref, onMounted } from 'vue'
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

function borrar() {
  alerta.value = ""
}

console.log(contador)

</script>

<template>
  <div class="text-center">
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
    <div class="container">

      <div class="m-4 bg-primary p-2 text-light fw-bold">
        Hello World
      </div>
      <div class="m-4 bg-danger p-2 text-light fw-bold">I'm here</div>

      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-3 bg-primary p-5"></div>
          <div class="col-3 bg-secondary p-5"></div>
          <div class="col-3 bg-danger p-5"></div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-3 bg-info p-5"></div>
          <div class="col-3 bg-color p-5"></div>
          <div class="col-3 bg-warning p-5"></div>
        </div>
      </div>


      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-3 bg-success p-5"></div>
          <div class="col-3 bg-dark p-5"></div>
          <div class="col-3 bg-light p-5"></div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-2">
          <button type="button" class="btn btn-primary m-3" @click="sum()">
            Contador : {{ contador }}
          </button>
        </div>

        <div class="col-2">
          <select class="form-select form-select-sm m-3" aria-label="Default select example">
            <option selected>Abre este menú</option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
          </select>
        </div>

        <!-- Modal -->
        <div class="col-2 m-3">
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Abrir modal
          </button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Prueba modal</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary">Aceptar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-2">
          <button type="button" class="btn btn-dark m-3" @click="goToPrueba()">
           Ver ejemplo 1
          </button>
        </div>





      </div>
    </div>

  </div>
</template>

<style scoped></style>