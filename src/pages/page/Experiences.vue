<template>
    <div>
        <div v-for="exp in experiences" :key="exp.role" class="md:flex md:flex-row gap-8 md:mb-10 mb-8">
            <div class="max-w-sm w-full m-auto  border-l-2 md:mb-0">
                <h1 class="py-4 px-8">{{ exp.year }}</h1>
            </div>
            <div class="max-w-full w-full">
                <h1 class="md:mb-4 text-2xl font-light">{{ exp.role}}</h1>
                <h1 class="mb-2 font-medium">{{ exp.organization }}</h1>
                <p class="text-txt">{{ exp.desc }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { experiences } from '../../utils/util.vue'
export default {
    data() {
        return { experiences }
    }
}
</script>
