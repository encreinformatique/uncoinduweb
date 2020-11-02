<template>
    <div>
        <img :src="source" :alt="alt">
    </div>
</template>

<script>
export default {
    name: 'AppImg',
    props: {
        filename: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: false
        }
    },
    computed: {
        source() {
            return require(`~/assets/${this.filename}`);
        }
    }
}
</script>