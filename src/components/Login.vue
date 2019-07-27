<template>
    <div>
        <el-main>
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">
                    <el-col align="center">
                        <h2>UAT Automation</h2>
                    </el-col>

                    <el-form label-position="top" label-width="100px">
                        <el-form-item label="아이디">
                            <el-input v-model="id" @keyup.enter="login"></el-input>
                        </el-form-item>
                        <el-form-item label="비밀번호">
                            <el-input type="password" v-model="password" @keyup.enter="login"></el-input>
                        </el-form-item>
                    </el-form>

                    <el-col align="center">
                        <el-button type="primary" @click="login" @keyup.enter="login">로그인</el-button>
                    </el-col>
                </el-col>
            </el-row>
        </el-main>
    </div>
</template>

<script>
    import Constant from "../Constant";

    export default {
        name: "Login",
        data() {
            return {
                id: "",
                password: "",
            }
        },
        methods: {
            login() {
                this.$store.dispatch(Constant.LOGIN, {
                    id: this.id,
                    password: this.password,
                    router: this.$router
                })
            }
        }
    }
</script>

<style scoped>

</style>
