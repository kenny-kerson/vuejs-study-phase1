<template>
    <div>
        <el-container>
            <AsideMenu></AsideMenu>
            <el-container>
                <el-header>
                    <Navigation></Navigation>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>
                    copyright 2019 @kakaobank kenny
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import AsideMenu from "./AsideMenu";

    export default {
        name: "Main",
        components: {
            AsideMenu,
            Navigation
        },
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style>
</style>
