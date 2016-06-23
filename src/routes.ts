import { provideRouter } from '@angular/router';

import { AppRoutes, Home } from "./app/app.routes";
import { RepoRoutes, RepoGuards } from "./app/components/repo/repo.routes";

export const routes = [
    ...AppRoutes,
    ...RepoRoutes,
    { path: '**', component: Home },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    ...RepoGuards
];