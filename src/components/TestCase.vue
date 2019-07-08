<template>
    <div>
        <h3>테스트 케이스</h3>
        <table>
            <thead>
            <th>케이스ID</th>
            <th>케이스명</th>
            <th>시나리오ID</th>
            </thead>
            <tbody>
            <tr v-for="tc in tcList"
                :key="tc.tcId"
            >
                <td>{{tc.tcId}}</td>
                <td>{{tc.tcName}}</td>
                <td>{{tc.tsId}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    // import eventBus from '../EventBus'

    export default {
        name: "TestCase",
        data() {
            return {
                tcList: [
                ]
            }
        },
        methods: {
            filterTcList( tsId ) {
                this.tcList = this.$store.state.originTcList.filter( function(row) {
                    return row.tsId == tsId
                })
            }
        },
        mounted() {
            this.tcList = [...this.$store.state.originTcList]

            this.eventBus.$on("clickTestScenario", this.filterTcList )
        }
    }
</script>

<style scoped>

</style>