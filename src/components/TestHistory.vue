<template>
    <div>
        <h3>
            <i class="el-icon-check"></i> 테스트 실행내역
        </h3>
        <el-table
                :data="this.$store.state.thList"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="일자"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="시각"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="tsId"
                    label="시나리오ID"
                    width="180">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import Constant from '../Constant'
    export default {
        name: "TestHistory",
        data() {
            return {
            }
        },
        mounted() {
            this.$store.dispatch( Constant.GET_TH_LIST )
        }
    }
</script>

<style scoped>

</style>
