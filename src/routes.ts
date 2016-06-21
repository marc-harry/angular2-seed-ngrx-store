import { provideRouter } from '@angular/router';

import { AppRoutes } from "./app/app.routes";
import { RepoRoutes } from "./app/components/repo/repo.routes";

export const routes = [
    ...AppRoutes,
    ...RepoRoutes,
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];