import {Component} from '@angular/core';
import {ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {Http} from '@angular/http';
import {RepoService} from '../../../services/repoService';
import {Observable, Subscription} from 'rxjs';

import {Store} from '@ngrx/store';
import {IAppStore} from '../../../IAppStore';

@Component({
  selector: 'repo-owner',
  template: `<pre>this.owner = {{ owner | json }}</pre>`,
  styleUrls: [``],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class RepoOwner {
  repoDetails: Observable<any>;
  org: string = "";
  name: string = "";
  owner = {};
  sub: Subscription;
  constructor(public curr:ActivatedRoute, public repoService: RepoService, private store: Store<IAppStore>) {}

  ngOnInit() {
    this.repoDetails = this.store.select(s => s.selectedRepo);
    this.sub = this.curr.params.subscribe(params => {
        this.org = params['org'];
        this.name = params['name'];

        this.repoService.getRepo(this.org, this.name);
    });

    this.repoDetails.subscribe(repo => { 
      if (repo)
        this.owner = repo.owner;
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}