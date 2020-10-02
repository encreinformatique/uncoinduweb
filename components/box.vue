<template>
    <div class="box">
        <div class="box-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.box {
    border-color: #f0f0f2;
    border-style: solid;
    border-width: 1px;
    border-radius: 0.5rem;

    .box-body {
        padding: 16px;
    }
}
</style>