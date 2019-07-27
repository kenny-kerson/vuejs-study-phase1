<template>
    <div>
        <el-menu default-active="2" class="el-menu-vertical-demo"
                 :collapse="this.$store.state.isCollapse"
        >
            <el-menu-item index="1">
                <i class="el-icon-caret-right"></i>
                <span slot="title">테스트 실행</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-tickets"></i>
                <span slot="title">실행내역</span>
            </el-menu-item>
            <el-menu-item index="3" @click="logout" >
                <i class="el-icon-d-arrow-left"></i>
                <span slot="title">로그아웃</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "AsideMenu",
        methods: {
            logout() {
                this.$router.push({
                    name: "Login"
                })
            }
        }
    }
</script>

<style scoped>

</style>
