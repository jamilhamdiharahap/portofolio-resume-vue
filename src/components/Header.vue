<template>
    <header :class="theme && 'bg-conten'" class="top-0 shadow-2xl  sticky z-1 mb-2">
        <div class="justify-between container items-center md:flex">
            <div class="flex items-center">
                <router-link to="/">
                    <img src="../assets/image/icons8-portfolio-64.png">
                </router-link>
            </div>

            <button @click="OpenMenu()" class="md:hidden absolute right-6 top-5">
                <span>
                    <IconMenu v-if="!open" />
                    <IconClose v-else />
                </span>
            </button>

            <ul :class="[open ? 'left-0  border-t-2 bg-conten md:border-none border-white' : 'flex-none']"
                class="md:flex md:items-center px-8 md:px-0 md:pb-0 pb-10 md:static absolute md:w-auto w-full top-19 duration-500 ease-in">
                <li v-for="route in routes" v-bind:key="route.path" :class="[!open && 'md:flex flex-none hidden']"
                    class=" md:mx-4
                    md:my-0 my-6">
                    <router-link v-bind:to="route.path">{{ route.name }}</router-link>
                </li>
                <button @click="changeTheme" :class="[!open && 'md:flex flex-none hidden']">
                    <IconDark v-if="!theme" />
                    <IconLight v-else />
                </button>
            </ul>
        </div>
    </header>
</template>
<script>
import IconDark from './icons/IconDark.vue';
import IconMenu from './icons/IconMenu.vue';
import IconClose from './icons/IconClose.vue';
import { routes } from '../router/index';
import IconLight from './icons/IconLight.vue';
export default {
    components: {
        IconDark,
        IconMenu,
        IconClose,
        routes,
        IconLight
    },
    props: {
        theme: Boolean,
        changeTheme: Boolean
    },

    data: () => {
        return { open: false, routes, theme: false }
    },
    methods: {
        OpenMenu() {
            this.open = !this.open
        },
    },


}
</script>