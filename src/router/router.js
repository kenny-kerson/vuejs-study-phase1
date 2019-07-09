import Vue from 'vue'
import VueRouter from 'vue-router'
import TestExecution from "@/components/TestExecution"
import TestHistory from "../components/TestHistory";
import NotFound from "@/components/NotFound";
import TestCaseDetail from "@/components/TestCaseDetail";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: "/", name: "root", component: TestExecution},
        {
            path: "/test-execution", name: "TestExecution", component: TestExecution,
            children: [
                {path: "detail", name: "TestCaseDetail", component: TestCaseDetail}
            ]
        },
        {path: "/test-history", name: "TestHistory", component: TestHistory},
        {path: "*", name: "notfound", component: NotFound},
    ]
})

export default router