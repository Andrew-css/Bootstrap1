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
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav grid justify-content-end" style="width: 100%; margin-right: 1%;">
                            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                            <a class="nav-link text-light" href="#">Features</a>
                            <a class="nav-link text-light" href="#">Services</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <!-- Home -->

        <section class="bg-primary d-flex " style="height: 70vh;" id="home">
            <div class="col-7 row align-items-center">
                <div class="">
                    <h1 class="display-3 text-light text-start" style="margin-left: 100px;">
                        Professional Corporate <br />
                        Langing Page for <br />
                        <span class="fw-bold">Business</span>
                    </h1>
                    <p class="text-light fs-5" style="width: 60%;text-align: start; margin-left: 100px;;">Lorem ipsum
                        dolor,
                        sit
                        amet consectetur adipisicing elit. Repellendus architecto eius praesentium modi
                        dolor ea?
                    </p>

                </div>

            </div>
            <div class="col-4 bg-light mt-5" style="height: 80%; width: 40%; border-radius: 10px;">
                <p class="fw-bold fs-5 mt-3">Get 30 day FREE trial</p>
                <div class="text-capitalize text-start lh-1 mt-4" style="margin-left: 10%;">
                    <p>first name</p>
                    <div class="input-group mb-">
                        <input type="text" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default">
                    </div>
                </div>

                <div class="text-capitalize text-start lh-1 mt-3" style="margin-left: 10%;">
                    <p>last name</p>
                    <div class="input-group">
                        <input type="text" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default">
                    </div>
                </div>

                <div class="text-capitalize text-start lh-1 mt-3" style="margin-left: 10%;">
                    <p>email</p>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default">
                    </div>
                </div>

                <div>
                    <input type="submit" class="btn btn-dark" style="width: 80%;">
                </div>

            </div>

        </section>

        <!-- Features -->

        <section >
            <div class="" id="features">
                <div class="mt-5 row justify-content-center" style="width: 100%;">
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
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, dignissimos ullam. Sunt
                                ab
                                voluptatibus neque soluta impedit autem?
                            </p>
                        </div>
                    </div>
                    <div class="d-flex gap-4 pb-5" style="margin-left: 100px;">
                        <i class="fas fa-arrow-trend-up fa-3x text-primary"></i>
                        <div>
                            <h5 class="fw-bold text-start">Marketing Performance</h5>
                            <p class="text-muted text-start">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, dignissimos ullam. Sunt
                                ab
                                voluptatibus neque soluta impedit autem?
                            </p>
                        </div>
                    </div>
                    <div class="d-flex gap-4 pb-5" style="margin-left: 100px;">
                        <i class="fas fa-rocket fa-3x text-primary"></i>
                        <div>
                            <h5 class="fw-bold text-start">SEP Performance</h5>
                            <p class="text-muted text-start">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, dignissimos ullam. Sunt
                                ab
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

        <!-- Stadistics -->

        <section class="d-flex py-5 bg-dark justify-content-center">
            <div class="col-2 text-center m-2">
                <h2 class="text-light fw-bold display-2">228</h2>
                <p class="text-capitalize text-light">happy customers</p>
            </div>
            <div class="col-2 text-center m-2">
                <h2 class="text-light fw-bold display-2">285</h2>
                <p class="text-capitalize text-light">Issues Solved</p>
            </div>
            <div class="col-2 text-center m-2">
                <h2 class="text-light fw-bold display-2">159</h2>
                <p class="text-capitalize text-light">Good Reviews</p>
            </div>
            <div class="col-2 text-center m-2">
                <h2 class="text-light fw-bold display-2">128</h2>
                <p class="text-capitalize text-light">Case Studies</p>
            </div>
        </section>

        <!-- Services -->

        <section class="bg-primary py-5" id="services">
            <div class="row justify-content-center" style="width: 100%;">
                <h2 class="text-center fw-light pb-3 text-capitalize text-light">the services that <span
                        class="fw-bold text-light">we
                        introduce</span></h2>
                <p class="text-light" style="width: 50%;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                    vitae
                    numquam aperiam explicabo tempora maxime repellat esse aliquam sequi voluptate, itaque fugiat, quasi
                    eligendi pariatur dolores non distinctio, aspernatur natus.</p>
            </div>

            <!-- Cards -->

            <div class="row py-5 text-center justify-content-center " style="width: 100%; ">

                <div class="col-4 card m-5" style="width: 20rem;">
                    <div class="card-body">
                        <span class="fa-stack mb-4">
                            <i class="fa fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-user fa-stack-1x text-white"></i>
                        </span>
                        <p class="text-capitalize fw-bold fs-5">website perfomance</p>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
                            repellendus dolor minima? Consectetur, dolores.</p>
                        <a href="#" class="btn btn-link text-primary text-decoration-none">Read More <i
                                class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="card m-5" style="width: 20rem;">
                    <div class="card-body">
                        <span class="fa-stack mb-4">
                            <i class="fa fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-arrow-trend-up fa-stack-1x text-white"></i>
                        </span>
                        <p class="text-capitalize fw-bold fs-5">marketing perfomance</p>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
                            repellendus dolor minima? Consectetur, dolores.</p>
                        <a href="#" class="btn btn-link text-primary text-decoration-none">Read More <i
                                class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="card m-5" style="width: 20rem;" id="card">
                    <div class="card-body">
                        <span class="fa-stack mb-4">
                            <i class="fa fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-rocket fa-stack-1x text-white"></i>
                        </span>
                        <p class="text-capitalize fw-bold fs-5">SEO perfomance</p>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
                            repellendus dolor minima? Consectetur, dolores.</p>
                        <a href="#" class="btn btn-link text-primary text-decoration-none">Read More <i
                                class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Ultima parte -->

        <section class="d-flex bg-primary py-3">
            <div class="col-4 text-center">
                <p class="text-capitalize text-light fs-5">Corporate</p>
            </div>

            <div class="col-6 text-end">
                <p class="text-capitalize text-light fs-5">Copyright © Corporate 2023</p>
            </div>

        </section>

    </div>
</template>

<style scoped>
.form-control {
    flex: none;
    width: 89%;
}



</style>