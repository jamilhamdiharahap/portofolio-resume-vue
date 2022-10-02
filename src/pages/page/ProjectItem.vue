<template>
    <section class="md:my-20">
        <div class="container md:flex flex-col  md:mb-8 md:py-8">
            <div class="md:max-w-md w-full">
                <div class="py-4  mb-4">
                    <h1 class="md:text-5xl">Personal Project</h1>
                </div>
            </div>
            <div class="md:flex gap-4 text-white mb-4">
                <div v-for="item in projek" :key="item.name"
                    class="bg-conten md:mb-0 mb-4 md:max-w-md w-full rounded hover:-translate-y-4 hover:duration-300 hover:delay-200">
                    <h1 class="px-4 py-2 text-2xl">{{ item.title }}</h1>
                    <div class="px-4 py-4">
                        <img :src="'./public/images/'+item.path" alt="">
                    </div>
                    <div class="flex justify-end px-4">
                        <a :href="item.url" class="px-4 border  border-github rounded-full bg-github">
                            <IconGithub />
                        </a>
                    </div>
                    <div class="py-1 px-4 text-white flex flex-wrap  gap-2">
                        <div v-for="tool in item.tools" :key="tool.name"
                            class="border border-gray-300 p-1 rounded-full">
                            <span class="p-4  text-bold text-xs">{{ tool.name }}</span>
                        </div>
                    </div>
                    <p class="p-4 text-xs text-txt font-bold">
                        {{ item.desc }}
                    </p>
                </div>
            </div>
            <div class="md:flex gap-4 text-white">
                <div v-for="item in projekSecond" :key="item.name"
                    class="bg-conten md:mb-0 mb-4 md:max-w-md w-full rounded hover:translate-y-4 hover:duration-300 hover:delay-200">
                    <h1 class="px-4 py-2 text-2xl">{{ item.title }}</h1>
                    <div class="px-4 py-4">
                        <img :src="'./public/images/'+item.path" alt="">
                    </div>
                    <div class="flex justify-end px-4">
                        <a :href="item.url" target="_blank" class="px-4 border  border-github rounded-full bg-github">
                            <IconGithub />
                        </a>
                    </div>
                    <div class="py-1 px-4 text-white flex flex-wrap  gap-2">
                        <div v-for="tool in item.tools" :key="tool.name"
                            class="border border-gray-300 p-1 rounded-full">
                            <span class="p-4  text-bold text-xs">{{ tool.name }}</span>
                        </div>
                    </div>
                    <p class="p-4 text-xs text-txt font-bold">
                        {{ item.desc }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import IconGithub from '../../components/icons/IconGithub.vue';
import { projek, projekSecond } from '../../utils/util.vue';
export default {
    components: {
        IconGithub
    },
    data() {
        return { projek, projekSecond }
    }
}
</script>