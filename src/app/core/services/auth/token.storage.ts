import {Injectable} from '@angular/core';
import {isNullOrUndefined} from 'util';

const TOKEN_KEY = 'AuthToken';
const USER_KEY = 'UserInfo';

@Injectable({
  providedIn: 'root'
})
export class TokenStorage {

  constructor() {
  }

  public signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public isAuthorized(): boolean {
    return !isNullOrUndefined(sessionStorage.getItem(TOKEN_KEY));
  }

  public saveUser(username: string) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, username);
  }

  public getUser(): string {
    return sessionStorage.getItem(USER_KEY);
  }
}
