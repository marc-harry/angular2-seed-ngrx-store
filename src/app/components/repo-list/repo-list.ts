import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {RepoService} from '../../services/repoService';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../IAppStore';

@Component({
  selector: 'repo-list',
  templateUrl: 'app/components/repo-list/repo-list.html',
  styleUrls: ['app/components/repo-list/repo-list.css'],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class RepoList {
  repos: Observable<any>
  constructor(public repoService: RepoService, public params: RouteParams, private store: Store<IAppStore>) {}

  ngOnInit() {
    this.repos = this.store.select(s => s.repos);
    this.repoService.loadRepos(this.params.get('org'));
  }
}
