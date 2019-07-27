<template>
    <div class="container">
        <header>
            <h1 align="center">UAT Automation</h1>
        </header>
        <nav>
            <Navigation></Navigation>
        </nav>
        <section>
<!--            <component :is="this.$store.state.currentComponent"></component>-->
            <router-view></router-view>
        </section>
        <footer>
            copyright
        </footer>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation'

    export default {
        name: "Main",
        components: {
            Navigation
        },
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style>
</style>
