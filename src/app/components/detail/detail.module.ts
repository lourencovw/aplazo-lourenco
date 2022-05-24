import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    NgxJsonViewerModule,
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
