<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="clickTestExecution">테스트 실행</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="clickTestHistory">실행내역</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

</template>

<script>
    import Constant from '../Constant'

    export default {
        name: "Navigation",
        methods: {
            clickTestExecution() {
                console.log("clickTestExecution")

                this.$store.commit( Constant.CHANGE_CURRENT_COMPONENT, {currentComponent: "TestExecution"})
            },
            clickTestHistory() {
                console.log("clickTestHistory")

                this.$store.commit( Constant.CHANGE_CURRENT_COMPONENT, {currentComponent: "TestHistory"})
            }
        }
    }
</script>

<style scoped>
    .mt-n1 {
        margin-top: -0.25rem !important;
    }
</style>
