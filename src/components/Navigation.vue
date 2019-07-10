<template>
    <div>
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="0"
                          @click="asideMenuOpenClose"
            >
                <i class="el-icon-more-outline"></i>
            </el-menu-item>
            <el-menu-item index="1">테스트 실행</el-menu-item>
            <el-menu-item index="2">실행내역</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import Constant from '../Constant'

    export default {
        name: "Navigation",
        data() {
            return {
                activeIndex: "1",
            }
        },
        methods: {
            // clickTestExecution() {
            //     console.log("clickTestExecution")
            //
            //     // this.$store.commit( Constant.CHANGE_CURRENT_COMPONENT, {currentComponent: "TestExecution"})
            //     this.$router.push({name: "TestExecution"})
            // },
            // clickTestHistory() {
            //     console.log("clickTestHistory")
            //
            //     // this.$store.commit( Constant.CHANGE_CURRENT_COMPONENT, {currentComponent: "TestHistory"})
            //     this.$router.push({name: "TestHistory"})
            // },
            handleSelect(key, keyPath) {
                console.log( key )
                if ( 1 == key) {
                    this.$router.push({name: "TestExecution"})
                } else if ( 2 == key) {
                    this.$router.push({name: "TestHistory"})
                }
            },
            asideMenuOpenClose() {
                console.log( "asideMenuOpenClose" )
                this.$store.commit( Constant.CHANGE_IS_COLLAPSE, {})
            }
        }
    }
</script>

<style scoped>

</style>