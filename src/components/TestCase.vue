<template>
    <div>
        <el-container>
            <h3 align="center"><i class="el-icon-d-arrow-right"></i> 테스트 케이스</h3>
        </el-container>
        <el-container>
            <el-table
                :data="filteredTcList"
                stripe
                style="width: 100%"
                @row-click="callTestCaseDetail"
            >
                <el-table-column
                        prop="tcId"
                        label="케이스ID"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="tcName"
                        label="케이스명"
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
    import Constant from "@/Constant";

    export default {
        name: "TestCase",
        data() {
            return {
                tcList: [
                ]
            }
        },
        props: [
            "selectTsId"
        ],
        methods: {
            callTestCaseDetail( id ) {
                this.$router.push({
                    name: "TestCaseDetail" ,
                    params: {
                        tcId: id
                    }})
            }
        },
        computed: {
            filteredTcList() {
                if ( this.selectTsId !== "" ) {
                    return this.$store.state.originTcList.filter( (row) => {
                        return row.tsId === this.selectTsId
                    })
                } else {
                    return [...this.$store.state.originTcList]
                }
            }
        },
        mounted() {
            this.$store.dispatch( Constant.GET_TC_LIST )
        }
    }
</script>

<style scoped>

</style>