import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

import {RepoList} from '../repo-list/repo-list';
import {RepoDetail} from '../repo-detail/repo-detail';
import {RepoOwner} from '../repo-owner/repo-owner';

import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  selector: 'repo-browser',
  template: require('./repo-browser.html'),
  styles: [require('./repo-browser.css')],
  providers: [],
  directives: [ 
    ROUTER_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_BUTTON_DIRECTIVES
  ],
  pipes: []
})
export class RepoBrowser {
  constructor(private router: Router) {}

  searchForOrg(orgName: string){
    this.router.navigate(['/github', orgName]);
  }
}
