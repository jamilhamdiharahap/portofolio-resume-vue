<template>
    <section class="container">
        <div class="md:flex flex-col justify-center md:items-center md:py-24 md:my-0 my-20 gap-4">
            <div>
                <h1 class="md:text-5xl text-3xl text-bold text-center mb-4">About Us</h1>
            </div>
            <div class="flex justify-center">
                <div class="border border-gray-400 px-4  py-4 rounded-full space-x-4 hover:bg-conten">
                    <router-link to="/">Home</router-link>
                    <span>||</span>
                    <router-link to="/about">About</router-link>
                </div>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="md:flex md:flex-row flex-col justify-center  md:py-24 gap-32">
            <div class="bg-conten md:mb-0 mb-4 md:max-w-2xl w-full rounded">
                <div class="p-4 md:flex gap-4">
                    <img src="../assets/image/coverme.jpg" alt="" class="rounded  mb-4 md:mb-0 md:w-48">
                    <ul class="space-y-4 leading-5 tracking-wide font-light text-md">
                        <li>Name : Jamil Hamdi Harahap</li>
                        <li>Age : 20 years</li>
                        <li>Religion : Islam</li>
                        <li>Suku : Batak </li>
                        <li>Hobby : Swimming, Coding </li>
                        <li>From : North Sumatra </li>
                    </ul>
                </div>
            </div>
            <div class="md:mb-0 mb-4 md:max-w-xl w-full">
                <div class="md:mb-8 mb-2">
                    <p class="md:text-3xl text-2xl text-bold">Hello! I’m</p>
                    <span class="md:text-5xl text-3xl text-bold">Jamil Hamdi Hrp</span>
                </div>
                <div>
                    <span class="md:text-3xl text-3xl text-bold">Frontend software developer.</span>
                </div>
                <div>
                    <p class="text-txt md:text-lg tracking-normal md:leading-loose leading-normal">
                        Pengembangan antarmuka
                        pengguna
                        grafis dari sebuah
                        situs web,
                        melalui penggunaan
                        HTML, CSS, dan
                        JavaScript, sehingga pengguna dapat melihat dan berinteraksi dengan situs web.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="container">
        <div
            class="md:flex md:flex-row md:justify-between flex-col md:space-y-0 space-y-5 md:mb-0 mb-8 md:text-4xl text-2xl text-center">
            <button @click="()=> this.move = false" :class="!move && 'bg-conten text-white' "
                class="border border-borderOn py-6 px-16 max-w-xl w-full rounded">
                <div>
                    <h1>Education</h1>
                </div>
            </button>
            <button @click="()=> this.move = true" :class="move && 'bg-conten text-white' "
                class="border border-borderOn py-6 px-16 max-w-xl w-full rounded">
                <div>
                    <h1>Experiences</h1>
                </div>
            </button>
        </div>
        <div class="md:flex md:flex-row flex-col  md:py-24 gap-8">
            <Experiences v-if="move" />
            <Education v-else />
        </div>
    </section>
</template>

<script>
import Experiences from './page/Experiences.vue';
import Education from './page/Education.vue';
// import image from '@/assets/image/IMG_2986.jpg';
export default {
    components: {
        Experiences,
        Education
    },
    data() {
        return { move: false }
    },
    // computed: {
    //     getImage() {
    //         return image;
    //     }
    // }
}
</script>