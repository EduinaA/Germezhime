import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoneycombsComponent } from './honeycombs.component';
import {SingleHiveModule} from "../single-hive/single-hive.module";

@NgModule({
  declarations: [
    HoneycombsComponent
  ],
  imports: [
    CommonModule,
    SingleHiveModule
  ],
  exports: [
    HoneycombsComponent
  ]
})
export class HoneycombsModule { }
