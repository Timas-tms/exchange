import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule, InputTextModule, MessageModule, MessagesModule} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule {
}
