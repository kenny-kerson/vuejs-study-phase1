<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="clickTestExecution">테스트 실행 <span class="sr-only">(current)</span></a>
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

                // this.$store.commit( Constant.CHANGE_CURRENT_COMPONENT, {currentComponent: "TestExecution"})
                this.$router.push({name: "TestExecution"})
            },
            clickTestHistory() {
                console.log("clickTestHistory")

                // this.$store.commit( Constant.CHANGE_CURRENT_COMPONENT, {currentComponent: "TestHistory"})
                this.$router.push({name: "TestHistory"})
            }
        }
    }
</script>

<style scoped>

</style>
