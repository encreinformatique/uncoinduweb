<template>
    <div>
        <app-header/>

        <div id="wrapper">
            <nuxt/>
        </div>

        <app-footer/>
    </div>
</template>

<script>
import AppHeader from '~/components/header'
import AppFooter from '~/components/footer'
export default {
    components: {
        AppHeader,
        AppFooter
    }
}
</script>
