import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalGuard implements CanActivate {

  constructor(private _router: Router) {}
  // private userService: UserService,

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if (!this.userService.getToken()) {
      return true;
    // }

    // this._router.navigate(['internal/home']);
    return false;
  }
  
}
