<template>
    <section class="md:mt-20">
        <div class="container md:flex md:flex-col md:mb-8 md:py-8">
            <div class="md:w-full md:mb-4">
                <div class="py-4 md:flex md:justify-center">
                    <h1 class="md:text-5xl">Other Skills</h1>
                </div>
            </div>
            <div class="md:flex md:flex-row flex-col gap-4">
                <div class="bg-conten shodow-md rounded md:max-w-xs w-full md:mb-0 mb-4">
                    <div class="py-4 px-8">
                        <div class="md:flex md:flex-col gap-4">
                            <div class="flex items-center md:py-0 py-2">
                                <div class="flex-1">
                                    <div class="flex">
                                        <div
                                            class=" bg-txt rounded-full transition p-1 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
                                            <IconHtml />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex">
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                </div>
                            </div>
                            <div class="flex items-center md:py-0 py-2">
                                <div class="flex-1">
                                    <div class="flex">
                                        <div
                                            class=" bg-txt rounded-full transition p-1 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
                                            <IconCss />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex">
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                </div>
                            </div>
                            <div class="flex items-center md:py-0 py-2">
                                <div class="flex-1">
                                    <div class="flex">
                                        <div
                                            class=" bg-txt rounded-full transition p-1 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
                                            <IconJs />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex">
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                </div>
                            </div>
                            <div class="flex items-center md:py-0 py-2">
                                <div class="flex-1">
                                    <div class="flex">
                                        <div
                                            class=" bg-txt rounded-full transition p-1 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
                                            <IconPhp />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex">
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                </div>
                            </div>
                            <div class="flex items-center md:py-0 py-2">
                                <div class="flex-1">
                                    <div class="flex">
                                        <div
                                            class=" bg-txt rounded-full transition p-1 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
                                            <IconGo />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex">
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-conten shodow-md rounded md:max-w-xs w-full">
                    <div class="py-8 px-4 text-white flex flex-wrap m-auto gap-2">
                        <div class="border border-gray-300 p-1 rounded-full hover:bg-github hover:delay-600 hover:border-conten shadow-xl"
                            v-for="frameWork in frameWorkLibrary" v-bind:key="frameWork.title">
                            <span class="p-4  text-bold text-xs">{{ frameWork.title }}</span>
                        </div>
                    </div>
                </div>
                <div class="bg-conten shodow-md rounded px-4 md:max-w-xl w-full">
                    <!-- <h1 class="text-xl text-white">Tools</h1> -->
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import IconJs from '../../components/icons/IconJs.vue'
import IconStar from '../../components/icons/IconStar.vue'
import IconHtml from '../../components/icons/IconHtml.vue'
import IconCss from '../../components/icons/IconCss.vue'
import IconPhp from '../../components/icons/IconPhp.vue'
import IconGo from '../../components/icons/IconGo.vue'
import { frameWorkLibrary } from "../../utils/util.vue"
export default {
    data() {
        return { frameWorkLibrary }
    },
    components: {
        IconJs,
        IconStar,
        IconHtml,
        IconCss,
        IconPhp,
        IconGo
    },
}
</script>
