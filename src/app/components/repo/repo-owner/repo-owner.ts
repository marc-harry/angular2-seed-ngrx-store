import {Component} from '@angular/core';
import {ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {Http} from '@angular/http';
import {Github} from '../../../services/github';

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
  sub: any;
  constructor(public curr:ActivatedRoute, public github: Github) {}

  ngOnInit() {
    this.sub = this.curr.params.subscribe(params => {
        this.org = params['org'];
        this.name = params['name'];

        this.github.getRepoForOrg(this.org, this.name)
          .subscribe(repoDetails => {
            this.repoDetails = repoDetails;
            this.owner = repoDetails.owner;
          });
    });
  }
 }