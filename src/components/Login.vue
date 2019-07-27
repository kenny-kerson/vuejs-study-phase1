<template>
    <div>
        <h4>로그인</h4>
        <p>
            ID : <input v-model="id"
                        @keyup.enter="login"/>
        </p>
        <p>
            PASSWORD : <input type="password"
                              v-model="password"
                              @keyup.enter="login"/>
        </p>
        <p>
            <button @click="login" @keyup.enter="login">로그인</button>
        </p>
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
