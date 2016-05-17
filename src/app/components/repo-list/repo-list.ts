import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RouteSegment, ROUTER_DIRECTIVES, Router} from '@angular/router';

import {RepoService} from '../../services/repoService';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../IAppStore';

@Component({
  selector: 'repo-list',
  template: require('./repo-list.html'),
  styles: [require('./repo-list.css')],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class RepoList {
  repos: Observable<any>
  constructor(public repoService: RepoService, private router: Router, public curr: RouteSegment, private store: Store<IAppStore>) {}

  ngOnInit() {
    this.repos = this.store.select(s => s.repos);
    this.repoService.loadRepos(this.curr.getParam('org'));
  }
  
  public loadDetails(org: string, name: string) {
      this.router.navigateByUrl(`/github/${org}/${name}`);
  }
  
  public loadOwners(org: string, name: string) {
    this.router.navigate([`/github/${org}/${name}/owners`], this.curr);
  }
}
