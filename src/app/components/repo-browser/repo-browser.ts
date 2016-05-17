import {Component} from '@angular/core';
import {Router, Routes, RouteSegment, RouteTree, ROUTER_DIRECTIVES} from '@angular/router';

import {RepoList} from '../repo-list/repo-list';
import {RepoDetail} from '../repo-detail/repo-detail';
import {RepoOwner} from '../repo-owner/repo-owner';

import {Github} from '../../services/github';

@Component({
  selector: 'repo-browser',
  template: require('./repo-browser.html'),
  styles: [require('./repo-browser.css')],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
@Routes([
	{path: '/:org',       component: RepoList },
	{path: '/:org/:name', component: RepoDetail },
  {path: '/:org/:name/owner', component: RepoOwner },
])
export class RepoBrowser {
  private currSegment: RouteSegment;
  constructor(private router:Router, private github: Github) {}

  searchForOrg(orgName: string){
    this.github.getOrg(orgName)
      .subscribe(({name}) => {
        console.log(name);
        this.router.navigate([`./${orgName}`], this.currSegment);
      })
  }

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    this.currSegment = curr;
  }
}
