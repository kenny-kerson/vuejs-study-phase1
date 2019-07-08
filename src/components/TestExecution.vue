<template>
    <div>
        <TestScenario></TestScenario>
        <TestCase></TestCase>
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