<template>
    <div>
        <el-container>
            <h3 align="center"><i class="el-icon-d-arrow-right"></i> 테스트 실행내역</h3>
        </el-container>
        <el-container>
            <el-table
                    :data="this.$store.state.thList"
                    stripe
                    style="width: 100%"
                    v-loading="this.$store.state.isLoading"
            >
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
        </el-container>
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