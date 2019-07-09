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
            <tr v-for="tc in filteredTcList"
                :key="tc.tcId"
                @click="callTestCaseDetail(tc.tcId)"
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