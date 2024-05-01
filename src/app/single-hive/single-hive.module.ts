import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SingleHiveComponent} from "./single-hive.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SingleHiveComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ],
  exports: [
    SingleHiveComponent
  ]
})
export class SingleHiveModule { }
