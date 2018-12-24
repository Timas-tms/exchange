import {Injectable} from '@angular/core';
import {
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import {TokenStorage} from '../services/auth/token.storage';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/do';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorage, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    let authReq = req;
    if (this.token.getToken() != null) {
      authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken())});
    }
    return next.handle(authReq);
    // return next.handle(authReq).do(
    //   (event: any) => {
    //   },
    //   (err: any) => {
    //     if (err instanceof HttpErrorResponse) {
    //       console.log(err);
    //       console.log('req url :: ' + req.url);
    //       if (err.status === 401) {
    //         this.router.navigate(['login']);
    //       }
    //     }
    //   }
    // );
  }
}
