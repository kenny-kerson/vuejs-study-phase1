<template>
    <div>
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1"><i class="el-icon-more"></i></el-menu-item>
            <el-menu-item index="2">테스트 실행</el-menu-item>
            <el-menu-item index="3">실행내역</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import Constant from "../Constant";

    export default {
        name: "Navigation",
        data() {
            return {
                activeIndex2: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);

                if ( "1" == key ) {
                    this.$store.commit( Constant.CHANGE_IS_COLLAPSE, {
                        isCollapse: !this.$store.state.isCollapse
                    })
                } else if ( "2" == key ) {
                    this.clickTestExecution()
                } else if ( "3" == key ) {
                    this.clickTestHistory()
                }

            },
            clickTestExecution() {
                console.log("clickTestExecution")

                // this.$store.commit( Constant.CHANGE_CURRENT_COMPONENT, {currentComponent: "TestExecution"})
                this.$router.push({name: "TestExecution"})
            },
            clickTestHistory() {
                console.log("clickTestHistory")

                // this.$store.commit( Constant.CHANGE_CURRENT_COMPONENT, {currentComponent: "TestHistory"})
                this.$router.push({name: "TestHistory"})
            }
        }
    }
</script>

<style scoped>

</style>
