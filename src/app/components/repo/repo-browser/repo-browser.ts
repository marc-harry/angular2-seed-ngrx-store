import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {RepoList} from '../repo-list/repo-list';
import {RepoDetail} from '../repo-detail/repo-detail';
import {RepoOwner} from '../repo-owner/repo-owner';

import {Github} from '../../../services/github';

@Component({
  selector: 'repo-browser',
  template: require('./repo-browser.html'),
  styles: [require('./repo-browser.css')],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class RepoBrowser {
  constructor(private github: Github) {}

  searchForOrg(orgName: string){
    this.github.getOrg(orgName)
      .subscribe(({name}) => {
        console.log(name);
      });
  }
}
