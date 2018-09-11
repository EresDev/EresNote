import { NgModule } from '@angular/core';

import { GuestRoutingModule } from './guest-routing.module';
import {SharedModule} from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    SharedModule,
    GuestRoutingModule,
  ],
  declarations: [LayoutComponent, HomeComponent]
})
export class GuestModule { }
