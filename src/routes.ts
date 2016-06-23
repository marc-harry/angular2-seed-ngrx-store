import { provideRouter } from '@angular/router';

import { AppRoutes } from "./app/app.routes";
import { RepoRoutes, RepoGuards } from "./app/components/repo/repo.routes";

import {Home} from './app/components/home/home';

export const routes = [
    ...AppRoutes,
    ...RepoRoutes,
    { path: '**', component: Home },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    ...RepoGuards
];