<template>
    <div>
        <h1>테스트케이스 상세내용</h1>
        <h3>{{tcId}}</h3>
    </div>
</template>

<script>
    export default {
        name: "TestCaseDetail",
        data() {
            return {
                tcId: ""
            }
        },
        mounted() {
            this.tcId = this.$route.params.tcId
        }
    }
</script>

<style scoped>

</style>