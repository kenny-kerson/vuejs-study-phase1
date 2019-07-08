<template>
    <div>
        <h3>테스트 실행내역</h3>
        <table>
            <thead>
            <th>일자</th>
            <th>시각</th>
            <th>시나리오ID</th>
            </thead>
            <tbody>
            <tr v-for="te in this.$store.state.teList"
                :key="te.time"
            >
                <td>{{te.date}}</td>
                <td>{{te.time}}</td>
                <td>{{te.tsId}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TestHistory",
        data() {
            return {
            }
        }
    }
</script>

<style scoped>

</style>