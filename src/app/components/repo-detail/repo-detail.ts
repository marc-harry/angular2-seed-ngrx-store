import {Component} from '@angular/core';
import {RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';
import {Http} from '@angular/http';
import {RepoService} from '../../services/repoService';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../IAppStore';
import {UPDATE_FULLNAME} from '../../constants/selectedRepoActionTypes';

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
  constructor(public curr: RouteSegment, public repoService: RepoService, public store: Store<IAppStore>) {}

  ngOnInit() {
    this.org = this.curr.getParam('org');
    this.name = this.curr.getParam('name');
    this.repo = this.store.select(s => s.selectedRepo); 
    this.repo.subscribe(r => {
      if (r !== null) {
        this.repoDetails = r;
      }
    });
    this.repoService.getRepo(this.org, this.name);
  }
  
  updateName() {
    this.store.dispatch({type: UPDATE_FULLNAME, payload: this.repoModel.fullName});
  }
 }
