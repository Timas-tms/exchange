import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public landingPage = '/main';

  constructor(private http: HttpClient) {
  }

  authenticate(username: string, password: string): Observable<any> {
    const url = environment.authUrl;
    const credentials = { username: username, password: password };
    return this.http.post<any>(url, credentials);
  }
}
