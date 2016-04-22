import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppStore} from '../IAppStore';

import {Github} from './github';
import {REMOVE_ALL_ITEMS, ADD_ITEMS} from '../constants/repoActionTypes';
import {SELECT_REPO} from '../constants/selectedRepoActionTypes';

@Injectable()
export class RepoService {
    repos: Observable<Array<any>>;
    activeRepo: Observable<any>;
    
	constructor(private github: Github, private store: Store<IAppStore>) {
        this.repos = store.select(s => s.repos);
        this.activeRepo = store.select(s => s.selectedRepo);
    }
    
    loadRepos(org: string) {
        this.store.dispatch({ type: REMOVE_ALL_ITEMS });
        this.github.getReposForOrg(org).subscribe(repos => {
            this.store.dispatch({type: ADD_ITEMS, payload: repos});
        });
    }
    
    getRepo(org: string, repoName: string) {
        this.github.getRepoForOrg(org, repoName).subscribe(repo => {
           this.store.dispatch({type:SELECT_REPO, payload: repo}); 
        });
    }
}
