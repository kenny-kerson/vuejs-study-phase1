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
                if ( this.selectTsId != "" ) {
                    return this.$store.state.originTcList.filter( (row) => {
                        return row.tsId == this.selectTsId
                    })
                } else {
                    return [...this.$store.state.originTcList]
                }
            }
        },
        mounted() {
            this.tcList = [...this.$store.state.originTcList]
        }
    }
</script>

<style scoped>

</style>