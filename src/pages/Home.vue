<template>
    <!-- Home -->
    <section class="container">
        <div class="md:flex md:flex-row flex-col justify-center md:items-center md:py-24 gap-4">
            <div class="md:mb-0 mb-4">
                <div class="md:mb-8 mb-2">
                    <p class="md:text-3xl text-2xl text-bold">Hello! I’m</p>
                    <p class="md:text-5xl text-3xl text-bold">Jamil Hamdi Hrp</p>
                </div>
                <p class="text-txt md:text-lg tracking-normal md:leading-loose leading-normal">
                    Pengembangan antarmuka
                    pengguna
                    grafis dari sebuah
                    situs web,
                    melalui penggunaan
                    HTML, CSS, dan
                    JavaScript, sehingga pengguna dapat melihat dan berinteraksi dengan situs web.</p>
            </div>
            <img src="../assets/image/istockphoto.jpg" alt="" class="rounded md:w-1/2">
        </div>
        <div class="flex md:mb-4 md:py-0 py-4">
            <a href="#" class="border flex space-x-3 border-gray-400 px-8 py-4 rounded-lg text-bold">
                <span>
                    <IconDownload />
                </span>
                <span>
                    Resume
                </span>
            </a>
        </div>
    </section>
    <!-- About -->
    <AboutItem />
    <!-- skills -->
    <SkillItem />
    <!-- skills lainnya -->
    <Language />
    <!-- personal projek -->
    <ProjectItem />
</template>

<script>
import IconDownload from '../components/icons/IconDownload.vue';
import AboutItem from './page/AboutItem.vue';
import SkillItem from './page/SkillItem.vue';
import Language from './page/Language.vue';
import ProjectItem from './page/ProjectItem.vue';
export default {
    components: {
        IconDownload,
        AboutItem,
        SkillItem,
        ProjectItem,
        Language
    }
}
</script>