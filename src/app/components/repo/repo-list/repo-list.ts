import {Component} from "@angular/core";
import {Observable, Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";

import {RepoService} from "../../../services/repoService";
import {Store} from "@ngrx/store";
import {IAppStore} from "../../../IAppStore";

@Component({
  selector: "repo-list",
  templateUrl: "./repo-list.html",
  styleUrls: ["./repo-list.css"],
  providers: []
})
export class RepoList {
  repos: Observable<any>;
  sub: Subscription;
  org: string;
  constructor(public repoService: RepoService, private router: Router, public curr: ActivatedRoute, private store: Store<IAppStore>) {}

  ngOnInit() {
    this.repos = this.store.select(s => s.repos);
    this.sub = this.curr.params.subscribe(params => {
      this.org = params["org"];
      this.repoService.loadRepos(this.org);
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public loadDetails(org: string, name: string) {
      this.router.navigate(["/github", org, name]);
  }
}
