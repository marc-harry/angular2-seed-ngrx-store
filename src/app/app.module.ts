import { NgModule }       from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// import {provide} from '@angular/core';

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MdSidenavModule } from "@angular2-material/sidenav";
import { MdListModule } from "@angular2-material/list";
import { MdButtonModule } from "@angular2-material/button";
import { MdInputModule } from "@angular2-material/input";
import { MdIconModule, MdIconRegistry } from "@angular2-material/icon";
import { MdToolbarModule } from "@angular2-material/toolbar";
import { MdTabsModule } from "@angular2-material/tabs";
import { MdCardModule } from "@angular2-material/card";

import {provideStore} from "@ngrx/store";
import {rootReducer} from "./reducers";

import { App }   from "./app";

import {RepoModule} from "./components/repo";
import {Home} from "./components/home/home";
import {About} from "./components/about/about";

import {APP_SERVICES} from "./services";
import { routes, APP_ROUTER_PROVIDERS } from "../routes";

@NgModule({
    declarations: [
        App,
        ...RepoModule,
        Home,
        About
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(routes, { useHash: true }),
        MdListModule,
        MdSidenavModule,
        MdButtonModule,
        MdInputModule,
        MdIconModule,
        MdToolbarModule,
        MdTabsModule,
        MdCardModule
    ],
    providers: [
        ...APP_ROUTER_PROVIDERS,
        ...APP_SERVICES,
        provideStore(rootReducer),
        MdIconRegistry
    ],
    bootstrap: [App],
})
export class AppModule {}