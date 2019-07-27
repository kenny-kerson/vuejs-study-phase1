<template>
    <div>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span>테스트 실행</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span>실행내역</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span>로그아웃</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "AsideMenu"
    }
</script>

<style scoped>

</style>
