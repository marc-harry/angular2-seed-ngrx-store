import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';
import {RepoService} from '../../../services/repoService';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../../IAppStore';
import {UPDATE_FULLNAME} from '../../../constants/selectedRepoActionTypes';

@Component({
  selector: 'repo-detail',
  template: require('./repo-detail.html'),
  styles: [require('./repo-detail.css')],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class RepoDetail {
  repo: Observable<any>;
  repoDetails = {};
  repoModel: {fullName: string;} = {fullName: ""};
  org: string = "";
  name: string = "";
  sub: Subscription;
  constructor(public curr: ActivatedRoute, public repoService: RepoService, public store: Store<IAppStore>) {}

  ngOnInit() {
    this.sub = this.curr.params.subscribe(params => {
      this.org = params['org'];
      this.name = params['name'];

      this.repoService.getRepo(this.org, this.name);
    });

    this.repo = this.store.select(s => s.selectedRepo); 
    this.repo.subscribe(r => {
      if (r !== null) {
        this.repoDetails = r;
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  
  updateName() {
    this.store.dispatch({type: UPDATE_FULLNAME, payload: this.repoModel.fullName});
  }
 }
