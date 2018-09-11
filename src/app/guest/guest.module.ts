import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule
  ],
  declarations: [LayoutComponent, HomeComponent]
})
export class GuestModule { }
