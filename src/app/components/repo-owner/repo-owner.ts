import {Component} from '@angular/core';
import {RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';
import {Http} from '@angular/http';
import {Github} from '../../services/github';

@Component({
  selector: 'repo-owner',
  template: `<pre>this.owner = {{ owner | json }}</pre>`,
  styleUrls: [``],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class RepoOwner {
  repoDetails = {};
  org: string = "";
  name: string = "";
  owner = {};
  constructor(public curr:RouteSegment, public github: Github) {}

  ngOnInit() {
    this.org = this.curr.getParam('org');
    this.name = this.curr.getParam('name');
    this.github.getRepoForOrg(this.org, this.name)
      .subscribe(repoDetails => {
        this.repoDetails = repoDetails;
        this.owner = repoDetails.owner;
      });
  }
 }