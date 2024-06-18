<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Img1 from '../assets/image-01.jpg';
import Img2 from '../assets/image-02.jpg';
import Img3 from '../assets/image-03.jpg';
import Img4 from '../assets/image-04.jpg';
import Img5 from '../assets/image-05.jpg';
import Img6 from '../assets/image-06.jpg';
import Img7 from '../assets/image-07.jpg';
import Img8 from '../assets/image-08.jpg';
import Img9 from '../assets/image-09.jpg';

let router = useRouter();

let images = ref([
    { src: Img1, alt: "image01", class: "grid-box-1", href: "#myModal01", id: "myModal01", visible: false },
    { src: Img2, alt: "image02", class: "grid-box-2", href: "#myModal02", id: "myModal02", visible: false },
    { src: Img3, alt: "image03", class: "grid-box-3", href: "#myModal03", id: "myModal03", visible: false },
    { src: Img4, alt: "image04", class: "grid-box-4", href: "#myModal04", id: "myModal04", visible: false },
    { src: Img5, alt: "image05", class: "grid-box-5", href: "#myModal05", id: "myModal05", visible: false },
    { src: Img6, alt: "image06", class: "grid-box-6", href: "#myModal06", id: "myModal06", visible: false },
    { src: Img7, alt: "image07", class: "grid-box-7", href: "#myModal07", id: "myModal07", visible: false },
    { src: Img8, alt: "image08", class: "grid-box-8", href: "#myModal08", id: "myModal08", visible: false },
    { src: Img9, alt: "image09", class: "grid-box-9", href: "#myModal09", id: "myModal09", visible: false },

]);


function openModal(image) {
    image.visible = true;
}

function closeModal(image) {
    image.visible = false;
}



function volver() {
    router.push('/')
}

</script>

<template>
    <main class="grid">
        <a v-for="(image, index) in images" :key="index" :class="image.class" @click="openModal(image)">
            <img :src="image.src" :alt="image.alt">
        </a>
    </main>

    <div v-for="(image, index) in images" :key="index" :id="image.id" class="modal" :class="{ 'show': image.visible }"
        tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <button type="button" class="btn-close m-4 fs-5" style="position: absolute;" data-bs-dismiss="modal" aria-label="Cerrar" @click="closeModal(image)"></button>
                <img :src="image.src" :alt="image.alt" />
            </div>
        </div>
    </div>

    
</template>

<style scoped>
img {
    max-width: 100%;
}

.grid {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.grid-box-1 {
    grid-column: 1;
    grid-row: 1/3;
}

.grid-box-2 {
    grid-column: 2;
    grid-row: 1/2;
}

.grid-box-3 {
    grid-column: 3;
    grid-row: 1/2;
}

.grid-box-4 {
    grid-column: 4;
    grid-row: 1/3;
}

.grid-box-5 {
    grid-column: 1;
    grid-row: 3/4;
}

.grid-box-6 {
    grid-column: 2;
    grid-row: 2/4;
}

.grid-box-7 {
    grid-column: 3;
    grid-row: 2/3;
}

.grid-box-8 {
    grid-column: 3;
    grid-row: 3/4;
}

.grid-box-9 {
    grid-column: 4;
    grid-row: 3/4;
}

.modal {
    display: none;

}

.modal.show {
    display: block;
} 

</style>