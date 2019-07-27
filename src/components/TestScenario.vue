<template>
    <div>
        <h3>
            <i class="el-icon-check"></i> 테스트 시나리오
        </h3>
        <el-table
                :data="this.$store.state.tsList"
                stripe
                style="width: 100%"
                @row-click="clickTestScenario"
        >
            <el-table-column
                    prop="tsId"
                    label="시나리오ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="tsName"
                    label="시나리오명"
                    width="180">
            </el-table-column>
        </el-table>
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
            clickTestScenario: function(row) {
                // this.eventBus.$emit("clickTestScenario", tsId)
                this.$store.commit( Constant.SELECT_TS_ID, {
                    selectTsId: row.tsId
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
