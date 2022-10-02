<template>
    <section class="md:mt-20">
        <div class="container md:flex md:flex-row  m-auto md:mb-8 md:py-8">
            <div class="md:max-w-xl w-full mb-4 md:mb-0">
                <div class="leading-4">
                    <h1 class="md:text-5xl">My Special Skill Field Here.</h1>
                </div>
            </div>
            <div class="flex flex-col gap-4 text-white md:max-lg w-full">
                <SkillCard :range="75">Komunikasi</SkillCard>
                <SkillCard :range="80">Fleksibilitas</SkillCard>
                <SkillCard :range="95">Politeness</SkillCard>
            </div>
        </div>
    </section>
</template>

<script>
import SkillCard from '../../components/SkillCard.vue';
export default {
    components: {
        SkillCard
    },
}
</script>