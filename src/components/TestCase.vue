<template>
    <div>
        <h3>
            <i class="el-icon-check"></i> 테스트 케이스
        </h3>
        <el-table
                :data="filteredTcList"
                stripe
                style="width: 100%">
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
