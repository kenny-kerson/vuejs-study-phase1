<template>
    <div>
        <a href="#" @click="clickTestExecution">테스트 실행</a>
        <a href="#" @click="clickTestHistory">실행내역</a>
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
