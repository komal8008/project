import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleguardService implements CanActivate{

  constructor( private as: AuthService, private rt: Router) { }
  // tslint:disable-next-line: max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   const user = this.as.getuser();
   if (this.as.getuser() === 'admin' ){
     return true;
   }
   this.rt.navigateByUrl('/404');
   return false;
  }
}
