<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

let router = useRouter();

function volver() {
    router.push('/')
}

</script>

<template>
    <div class="text-center">
        <!-- Nav -->
        <header class="bg-primary">
            <nav class="navbar navbar-expand-lg p-4 ">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" style="font-size: 2rem;" href="#">Corporate</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="" id="navbarNavAltMarkup">
                        <div class="navbar-nav ">
                            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                            <a class="nav-link text-light" href="#">Features</a>
                            <a class="nav-link text-light" href="#">Services</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <!-- Primera parte -->

        <section class="bg-primary d-flex " style="height: 70vh;">
            <div class="col-7 row align-items-center">
                <div class="">
                    <h1 class="display-3 text-light text-start" style="margin-left: 100px;">
                        Professional Corporate <br />
                        Langing Page for <br />
                        <span class="fw-bold">Business</span>
                    </h1>
                    <p class="text-light fs-5" style="width: 60%;text-align: start; margin-left: 100px;;">Lorem ipsum dolor,
                        sit
                        amet consectetur adipisicing elit. Repellendus architecto eius praesentium modi
                        dolor ea?
                    </p>

                </div>

            </div>
            <div class="col-4 bg-light mt-5" style="height: 80%; width: 40%; border-radius: 10px;">
                <p class="fw-bold fs-5 mt-3">Get 30 day FREE trial</p>
                <div >
                    <p class="text-capitalize">First name</p>
                    <div class="input-group mb-">
                        <input type="text" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default">
                    </div>
                </div>

                <div>
                    <p>Last name</p>
                    <div class="input-group mb-">
                        <input type="text" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default">
                    </div>
                </div>

                <div>
                    <p>Email</p>
                    <div class="input-group mb-">
                        <input type="text" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default">
                    </div>
                </div>

                <div>
                    <button type="button" class="bg-dark text-light">Enviar</button>
                </div>

            </div>

        </section>

        <!-- Features -->

        <section>
            <div class="">
                <div class="mt-4 row justify-content-center" style="width: 100%;">
                    <h2 class=" text-center fw-light pb-3 text-capitalize">the features that <span class="fw-bold">we
                            present</span></h2>
                    <p class="" style="width: 50%;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                        culpa tenetur libero numquam ut, fugiat quisquam aperiam perspiciatis?</p>
                </div>
            </div>

            <div class="row pt-5" style="width: 100%;">
                <div class="col-md-6">
                    <h3 class="pb-5 fw-light">We love make things<span class="fw-bold"> amazing and simple</span></h3>
                    <div class="d-flex gap-4 pb-5" style="margin-left: 100px;">
                        <i class="fas fa-user fa-3x text-primary"></i>
                        <div>
                            <h5 class="fw-bold text-start">Website Performance</h5>
                            <p class="text-muted text-start">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, dignissimos ullam. Sunt ab
                                voluptatibus neque soluta impedit autem?
                            </p>
                        </div>
                    </div>
                    <div class="d-flex gap-4 pb-5" style="margin-left: 100px;">
                        <i class="fas fa-arrow-trend-up fa-3x text-primary"></i>
                        <div>
                            <h5 class="fw-bold text-start">Marketing Performance</h5>
                            <p class="text-muted text-start">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, dignissimos ullam. Sunt ab
                                voluptatibus neque soluta impedit autem?
                            </p>
                        </div>
                    </div>
                    <div class="d-flex gap-4 pb-5" style="margin-left: 100px;">
                        <i class="fas fa-rocket fa-3x text-primary"></i>
                        <div>
                            <h5 class="fw-bold text-start">SEP Performance</h5>
                            <p class="text-muted text-start">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, dignissimos ullam. Sunt ab
                                voluptatibus neque soluta impedit autem?
                            </p>
                        </div>
                    </div>

                    
                </div>
                <div class="col-md-5">
                        <img src="../assets/features.jpg" alt="" class="img-fluid">
                    </div>
            </div>

        </section>

    </div>
</template>

<style scoped></style>