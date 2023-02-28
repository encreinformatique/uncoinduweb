<template>
    <div>
        <img :src="source" :alt="alt">
    </div>
</template>

<script setup>
const props = defineProps({
    filename: { type: String, required: true },
    alt: { type: String, required: false }
});

const source = computed(() => import(/* @vite-ignore */ `~/assets/${this.filename}`));
</script>
