import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from './features/login/login.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthHeaderInterceptor} from './core/interceptors/auth-header-interceptor';
import {AuthService} from './core/services/auth/auth.service';
import {AuthGuard} from './core/services/auth/auth-guard';
import {TokenStorage} from './core/services/auth/token.storage';
import {MainModule} from './features/main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    MainModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    TokenStorage,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
