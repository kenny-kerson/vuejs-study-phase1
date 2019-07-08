<template>
    <div>
        <TestScenario></TestScenario>
        <TestCase :select-ts-id="this.$store.state.selectTsId"></TestCase>
    </div>
</template>

<script>
    import TestScenario from './TestScenario'
    import TestCase from './TestCase'

    export default {
        name: "TestExecution",
        components: {
            TestScenario,
            TestCase
        }
    }
</script>

<style scoped>

</style>