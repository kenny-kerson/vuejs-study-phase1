<template>
    <div>
        <el-container>
            <el-aside>
                <AsideMenu></AsideMenu>
            </el-aside>
            <el-container>
                <el-header>
                    <Navigation></Navigation>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>
                    copyright
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
