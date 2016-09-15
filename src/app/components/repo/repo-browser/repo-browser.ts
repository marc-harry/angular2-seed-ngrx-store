import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {RepoList} from '../repo-list/repo-list';
import {RepoDetail} from '../repo-detail/repo-detail';
import {RepoOwner} from '../repo-owner/repo-owner';

@Component({
  selector: 'repo-browser',
  template: require('./repo-browser.html'),
  styles: [require('./repo-browser.css')],
  providers: []
})
export class RepoBrowser {
  constructor(private router: Router) {}

  searchForOrg(orgName: string){
    this.router.navigate(['/github', orgName]);
  }
}
