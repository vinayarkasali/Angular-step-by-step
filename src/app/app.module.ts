import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoginAuthModule} from './login-auth/login-auth.module'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
