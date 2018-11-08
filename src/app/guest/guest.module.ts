import { NgModule } from '@angular/core';

import { GuestRoutingModule } from './guest-routing.module';
import {SharedModule} from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    SharedModule,
    GuestRoutingModule,
  ],
  declarations: [LayoutComponent, HomeComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, RecoverPasswordComponent, ContactComponent]
})
export class GuestModule { }
