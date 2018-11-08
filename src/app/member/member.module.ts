import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import {MemberRoutingModule} from './member-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
  ],
  declarations: [DashboardComponent]
})
export class MemberModule { }
