<template>
    <picture class="image">
        <img :src="source" :alt="alt">
    </picture>
</template>

<script>
export default {
    name: 'AppImg',
    props: {
        filename: { type: String, required: true },
        alt: { type: String, required: false }
    },
    computed: {
        source() {
            return import(/* @vite-ignore */`/${this.filename}`);
        }
    }
}
// const props = defineProps({
//     filename: { type: String, required: true },
//     alt: { type: String, required: false }
// });

// const source = computed(() => import(/* @vite-ignore */ `~/assets/${this.filename}`));
</script>
