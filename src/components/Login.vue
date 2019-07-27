<template>
    <div class="container">
        <h1 align="center">로그인</h1>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">ID</span>
            </div>
            <input type="text" class="form-control" placeholder="아이디" aria-label="Username" aria-describedby="basic-addon1"
                   :value="id"
                   @keyup.enter="login"
            >
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">PWD</span>
            </div>
            <input type="password" class="form-control" placeholder="비밀번호" aria-label="Recipient's username" aria-describedby="basic-addon2"
                   :value="password"
                   @keyup.enter="login"
            >
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block"
                @click="login"
                @keyup.enter="login"
        >
            로그인
        </button>
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
