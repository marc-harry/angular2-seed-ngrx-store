import { Routes } from "@angular/router";

import {Home} from "./components/home/home";
import {About} from "./components/about/about";

export {Home};

export const AppRoutes: Routes = [
    { path: "",         component: Home},
    { path: "home",     component: Home },
    { path: "about",    component: About },
    { path: "**", component: Home },
];

export const APP_ROUTER_PROVIDERS = [
];