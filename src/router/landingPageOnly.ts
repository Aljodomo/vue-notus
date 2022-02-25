// views without layouts
import Landing from "@/views/Landing.vue";

export const routes = [
    {
        path: "/",
        component: Landing,
    },
    {path: "/:pathMatch(.*)*", redirect: "/"},
];
