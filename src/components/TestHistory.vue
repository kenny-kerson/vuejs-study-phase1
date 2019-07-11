<template>
    <div class="container">
        <h4>+ 테스트 실행내역</h4>
        <table class="table">
            <thead class="thead-light">
                <th scope="col">일자</th>
                <th scope="col">시각</th>
                <th scope="col">시나리오ID</th>
            </thead>
            <tbody>
            <tr v-for="th in this.$store.state.thList"
                :key="th.time"
            >
                <td>{{th.date}}</td>
                <td>{{th.time}}</td>
                <td>{{th.tsId}}</td>
            </tr>
            </tbody>
        </table>
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
