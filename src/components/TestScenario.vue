<template>
    <div>
        <h3>테스트 시나리오</h3>
        <table>
            <thead>
            <th>시나리오ID</th>
            <th>시나리오명</th>
            </thead>
            <tbody>
            <tr v-for="ts in this.$store.state.tsList"
                :key="ts.tsId"
                @click="clickTestScenario(ts.tsId)"
            >
                <td>{{ts.tsId}}</td>
                <td>{{ts.tsName}}</td>
            </tr>
             }
        },
        methods: {
            clickTestScenario( tsId ) {
                this.eventBus.$emit("clickTestScenario", tsId)
            }
        }
    }
</script>

<style scoped>

</style>