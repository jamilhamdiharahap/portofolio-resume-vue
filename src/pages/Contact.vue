<template>
    <section class="container">
        <div class="md:flex flex-col justify-center md:items-center md:py-24 md:my-0 my-20 gap-4">
            <div>
                <h1 class="md:text-5xl text-3xl text-bold text-center mb-4">Contact Me</h1>
            </div>
            <div class="flex justify-center">
                <div class="border border-gray-400 px-4  py-4 rounded-full space-x-4 hover:bg-conten">
                    <router-link to="/">Home</router-link>
                    <span>||</span>
                    <router-link to="/contact">Contact</router-link>
                </div>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="md:flex md:flex-row flex-col mb-8 gap-2">
            <div class="md:max-w-md w-full bg-conten px-8 md:flex flex-col md:mb-0 mb-4 py-4 gap-4 rounded">
                <div class="bg-background px-4 md:py-8 rounded hover-contact md:mb-0 mb-4">
                    <p>
                        Phone :
                    </p>
                    <p>
                        081221754676
                    </p>
                </div>
                <div class="bg-background px-4 md:mb-0 mb-4 md:py-8 rounded hover-contact">
                    <p>
                        Email :
                    </p>
                    <p>
                        jamilhamdihrp@gmail.com
                    </p>
                </div>
                <div class="bg-background px-4 md:mb-0 mb-4 md:py-8 rounded hover-contact">
                    <p>
                        Address :
                    </p>
                    <p>
                        JL.Dakota, Kel.Sukaraja, Kec.Cicendo Kota Bandung
                    </p>
                </div>
            </div>
            <div class="md:max-w-full w-full md:px-5 flex m-auto">
                <div class="m-auto">
                    <h1 class="md:text-4xl text-2xl md:mb-4">Contact me with this contact</h1>
                    <p class="text-txt">Always respond to good things, send me a good and true message.</p>
                </div>
            </div>
        </div>
        <div class="md:flex md:flex-row flex-col mb-8 gap-4 md:gap-16">
            <div
                class="md:max-w-md w-full bg-conten px-8 md:flex items-center md:mb-0 mb-4 flex-col py-4 md:gap-4 space-y-4 rounded">
                <h1 class="md:text-4xl text-xl">Follow Me</h1>
                <div class="flex gap-8">
                    <div class="md:p-4 p-1 border rounded-full">
                        <IconIg />
                    </div>
                    <div class="md:p-4 p-1 border rounded-full">
                        <IconTwitter />
                    </div>
                    <div class="md:p-4 p-1 border rounded-full">
                        <IconLinkedIn />
                    </div>
                </div>
            </div>
            <div class="md:max-w-auto w-full">
                <div class="flex gap-2 mb-2">
                    <input type="text" class="border bg-conten w-full p-4" placeholder="Name">
                    <input type="text" class="border bg-conten w-full p-4" placeholder="Phone">
                </div>
                <div class="flex gap-2 mb-2">
                    <input type="text" class="border bg-conten  w-full  p-4" placeholder="Email">
                    <input type="text" class="border bg-conten w-full p-4" placeholder="Subject">
                </div>
                <textarea name="" class="border bg-conten w-full md:p-4 p-1" placeholder="Comment" id="" cols="30"
                    rows="10"></textarea>
            </div>
        </div>
    </section>
</template>

<script>
import IconIg from '../components/icons/IconIg.vue';
import IconLinkedIn from '../components/icons/IconLinkedIn.vue';
import IconTwitter from '../components/icons/IconTwitter.vue';
export default {
    components: {
        IconIg,
        IconLinkedIn,
        IconTwitter
    }
}
</script>