import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [  LoginComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FlexLayoutModule

  ]
})
export class SignupModule { }
