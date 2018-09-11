import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryHeaderComponent } from './primary-header/primary-header.component';
import { PrimaryFooterComponent } from './primary-footer/primary-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrimaryHeaderComponent, PrimaryFooterComponent],
  exports: [
    CommonModule,

    PrimaryHeaderComponent,
    PrimaryFooterComponent,
  ]
})
export class SharedModule { }
