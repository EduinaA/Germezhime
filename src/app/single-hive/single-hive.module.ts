import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SingleHiveComponent} from "./single-hive.component";

@NgModule({
  declarations: [
    SingleHiveComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingleHiveComponent
  ]
})
export class SingleHiveModule { }
