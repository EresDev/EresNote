import { NgModule } from '@angular/core';

import { GuestRoutingModule } from './guest-routing.module';
import {SharedModule} from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    SharedModule,
    GuestRoutingModule,
  ],
  declarations: [LayoutComponent, HomeComponent, LoginComponent]
})
export class GuestModule { }
