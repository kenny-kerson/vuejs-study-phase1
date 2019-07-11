<template>
    <div class="container">
        <h4>+ 테스트 시나리오</h4>
        <table class="table">
            <thead class="thead-light">
                <th scope="col">시나리오ID</th>
                <th scope="col">시나리오명</th>
            </thead>
            <tbody>
            <tr v-for="ts in this.$store.state.tsList"
                :key="ts.tsId"
                @click="clickTestScenario(ts.tsId)"
            >

                <td>{{ts.tsId}}</td>
                <td>{{ts.tsName}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Constant from '../Constant'
    export default {
        name: "TestScenario",
        data: function() {
            return {
            }
        },
        methods: {
            clickTestScenario: function(tsId) {
                // this.eventBus.$emit("clickTestScenario", tsId)
                this.$store.commit( Constant.SELECT_TS_ID, {
                    selectTsId: tsId
                })
            }
        },
        mounted() {
            this.$store.dispatch( Constant.GET_TS_LIST )
        }
    }
</script>

<style scoped>

</style>
