<template>
    <div class="bg-background rounded">
        <div class="flex flex-col gap-4 py-8 px-8 md:text-xl">
            <div class="flex">
                <h1 :style="`width: ${skill}%`">
                    <slot></slot>
                </h1>
                <h1 class="">{{ skill }}%</h1>
            </div>
            <div class="bg-txt h-1 w-full">
                <div :style="`width: ${skill}%`" class="bg-white h-1 duration-700 ease-in">

                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {

    props: {
        range: Number
    },
    data() {
        return {
            skill: 0
        }
    },
    mounted() {
        setTimeout(() => {
            this.skill = this.range
        }, 500)
    },

}
</script>
