import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from "../components/Main";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import TestExecution from "../components/TestExecution";
import TestHistory from "../components/TestHistory";
import Loading from "../components/Loading";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: "/", name: "Login", component: Login},
        {
            path: "/main", name: "Main", component: Main,
            children: [
                {path: "test-execution", name: "TestExecution", component: TestExecution},
                {path: "test-history", name: "TestHistory", component: TestHistory},
            ]
        },
        {path: "/loading", name: "Loading", component: Loading},
        {path: "*", name: "NotFound", component: NotFound},
    ]
})

export default router
