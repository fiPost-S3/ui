import {createWebHistory, createRouter} from "vue-router";
import HelloWorld from "@/views/HelloWorld.vue";
import RegisterPackage from "@/views/RegisterPackage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HelloWorld,
    },
    {
        path: "/registratie",
        name: "RegisterPackage",
        component: RegisterPackage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;