import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export class RepoGuard implements CanActivate {
  canActivate(next:  ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("RepoGuard#canActivate called");

    // Could do something here can also inject services into Guard Constructor.

    return true;
  }
}