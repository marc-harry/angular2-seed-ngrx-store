import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppStore} from "../IAppStore";

import {REMOVE_ALL_ITEMS, ADD_ITEMS} from "../actions/repoActionTypes";
import {SELECT_REPO} from "../actions/selectedRepoActionTypes";

import { BaseService } from "./baseService";

@Injectable()
export class RepoService extends BaseService {
    constructor(store: Store<IAppStore>, http: Http) {
        super(store, http);
    }

    getOrg(org: string) {
        return this.getRequest("https://api.github.com", `orgs/${org}`);
    }

    loadRepos(org: string) {
        this.store.dispatch({ type: REMOVE_ALL_ITEMS });
        this.fireGet("https://api.github.com", `orgs/${org}/repos`, [{key: "per_page", value: "100"}], repos => {
            this.store.dispatch({type: ADD_ITEMS, payload: repos});
        });
    }

    getRepo(org: string, repoName: string) {
        this.getRequest("https://api.github.com", `repos/${org}/${repoName}`)
            .subscribe(repo => {
                this.store.dispatch({type: SELECT_REPO, payload: repo});
            });
    }
}
