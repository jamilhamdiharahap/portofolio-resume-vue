<template>
    <footer :class="[theme ? 'cfooter' : 'shadow-2xl bg-card']" class="md:pt-8">
        <div class="md:flex md:justify-between md:items-center md:mx-8 mx-0 md:px-8 px-0 md:py-0 py-4 md:mb-16 mb-4">
            <div class="flex items-center gap-4  md:max-w-md w-full mb-2 px-4 md:px-0">
                <a href="#" class="md:p-4  p-1 border border-txt  rounded-full hover:bg-conten">
                    <IconCall />
                </a>
                <h1 :class="!theme ? 'text-txt' : 'text-white'" class="md:text-2xl  font-light">+62 81221754676
                </h1>
            </div>
            <div class="flex items-center gap-4  md:max-w-md w-full mb-2 px-4 md:px-0">
                <a href="#" class="md:p-4 p-1 border  border-txt rounded-full hover:bg-conten">
                    <IconMail />
                </a>
                <h1 :class="!theme ? 'text-txt' : 'text-white'" class="md:text-2xl font-light">
                    jamilhamdihrp@gmail.com</h1>
            </div>
            <div class="md:max-w-md w-full flex items-center  gap-4 md:px-0 px-4 justify-end">
                <div v-for="icon in iconFooter" :key="icon.component"
                    class="p-2 border border-txt rounded-full hover:bg-conten">
                    <a :href="icon.url" target="_blank">
                        <component :is="icon.component" :component="icon.component" />
                    </a>
                </div>
            </div>
        </div>
        <div :class="[theme ? 'bfooter' : 'divide-y divide-slate-700']"
            class="border-t-2 flex justify-between items-center">
            <div class="md:mx-8 px-8">
                <h1 :class="!theme ? 'text-txt' : 'text-white'" class="py-8 md:text-lg">© 2022 Jamil Hamdi Harahap</h1>
            </div>
            <div class="md:mx-8 px-8">
                <IconVue />
            </div>
        </div>
    </footer>
</template>

<script>
import IconCall from './icons/IconCall.vue';
import IconMail from './icons/IconMail.vue';
import { iconFooter } from '../utils/util.vue';
import IconVue from './icons/IconVue.vue';

export default {
    components: {
        IconCall,
        IconMail,
        IconVue
    },
    data() {
        return { theme: false, iconFooter }
    },
    props: {
        theme: Boolean
    },
}
</script>