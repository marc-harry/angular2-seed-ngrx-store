import { RouterConfig } from "@angular/router";

import {Home} from './components/home/home';
import {About} from './components/about/about';

export const AppRoutes: RouterConfig = [
    { path: '',         component: Home},
    { path: 'home',     component: Home },
    { path: 'about',    component: About }
];