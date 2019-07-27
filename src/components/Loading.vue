<template>
    <div class="vld-parent">
        <loading :active.sync="this.$store.state.isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"
                 color="blue"
        ></loading>
    </div>
</template>

<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        data() {
            return {
                fullPage: true
            }
        },
        components: {
            Loading
        },
        methods: {
            doAjax() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.isLoading = false
                },5000)
            },
            onCancel() {
                console.log('User cancelled the loader.')
            }
        }
    }
</script>

<style scoped>

</style>
