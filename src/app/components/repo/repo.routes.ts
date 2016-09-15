import { Routes } from "@angular/router";

import {RepoBrowser} from "./repo-browser/repo-browser";
import {RepoList} from "./repo-list/repo-list";
import {RepoDetail} from "./repo-detail/repo-detail";
import {RepoOwner} from "./repo-owner/repo-owner";

import {RepoGuard} from "./repo.guard";

export const RepoGuards = [
    RepoGuard
];

export const RepoRoutes: Routes = [
    {
        path: "github",
        component: RepoBrowser,
        children: [
            {path: ":org",       component: RepoList },
            {path: ":org/:name", component: RepoDetail },
            {
                path: ":org/:name/owner",
                component: RepoOwner,
                canActivate: [RepoGuard]
            }
        ]
    }
];