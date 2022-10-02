<template>
    <div>
        <div v-for="edu in educations" :key="edu.year" class="md:flex md:flex-row gap-8 md:mb-10 mb-8">
            <div class="max-w-sm w-full m-auto  border-l-2 md:mb-0 mb-3">
                <h1 class="py-4 px-8">{{ edu.year }}</h1>
            </div>
            <div class="max-w-full w-full">
                <h1 class="md:mb-4 text-2xl font-light">{{ edu.major }}</h1>
                <h1 class="mb-2 font-medium">{{ edu.school }}</h1>
                <p class="text-txt">{{ edu.desc }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { educations } from '../../utils/util.vue'
export default {
    data() {
        return { educations }
    }
}
</script>
