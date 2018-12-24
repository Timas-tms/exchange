import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {TokenStorage} from './token.storage';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router,
              private authService: AuthService,
              private tokenStorage: TokenStorage) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.isAuthorized(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

  isAuthorized(url: string): boolean {
    if (this.tokenStorage.isAuthorized()) {
      return true;
    }
    this.authService.landingPage = url;
    this.router.navigate(['/login']);
    return false;
  }
}
