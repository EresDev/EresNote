import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { PrimaryHeaderComponent } from './primary-header/primary-header.component';
import { PrimaryFooterComponent } from './primary-footer/primary-footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [PrimaryHeaderComponent, PrimaryFooterComponent],
  exports: [
    CommonModule,
    RouterModule,
    PrimaryHeaderComponent,
    PrimaryFooterComponent,
  ]
})
export class SharedModule { }
