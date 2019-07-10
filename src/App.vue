<template>
  <div>
      <el-container>
          <el-menu default-active="2"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   @close="handleClose"
                   :collapse="this.$store.state.isCollapse">
              <el-menu-item index="1"
                            @click="changeComponent('TestExecution')"
              >
                  <i class="el-icon-menu"></i>
                  <span slot="title">테스트 실행</span>
              </el-menu-item>
              <el-menu-item index="2"
                            @click="changeComponent('TestHistory')"
              >
                  <i class="el-icon-document"></i>
                  <span slot="title">실행내역</span>
              </el-menu-item>
              <el-menu-item index="3"
              >
                  <i class="el-icon-warning-outline"></i>
                  <span slot="title">로그아웃</span>
              </el-menu-item>
          </el-menu>
          <el-container>
            <nav>
              <Navigation></Navigation>
            </nav>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer align="center">
                copyright 2019 @kenny
            </el-footer>
          </el-container>
      </el-container>
  </div>
</template>

<script>
  import Navigation from './components/Navigation'
  import Constant from "@/Constant";

  export default {
    name: "App",
    components: {
        Navigation
    },
    data() {
      return {

      }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        changeComponent(comp) {
            this.$router.push({name: comp})
        }
    }
  }
</script>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
