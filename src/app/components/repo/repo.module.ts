import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import {RepoOwner} from "./repo-owner/repo-owner";
import {RepoList} from "./repo-list/repo-list";
import {RepoDetail} from "./repo-detail/repo-detail";
import {RepoBrowser} from "./repo-browser/repo-browser";
import {RepoGuards, RepoRoutes} from "./repo.routes";

import { MdButtonModule } from "@angular2-material/button";
import { MdInputModule } from "@angular2-material/input";

const RepoComponents = [
    RepoOwner,
    RepoList,
    RepoDetail,
    RepoBrowser
];

@NgModule({
    declarations: [
        ...RepoComponents
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(RepoRoutes),
        MdButtonModule,
        MdInputModule
    ],
    exports: [
        RepoBrowser
    ],
    providers: [
        ...RepoGuards
    ]
})
export class RepoModule {}