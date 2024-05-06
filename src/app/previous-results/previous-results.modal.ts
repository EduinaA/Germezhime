import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreviousResultsComponent} from "./previous-results.component";

@NgModule({
  declarations: [
    PreviousResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PreviousResultsComponent
  ]
})
export class PreviousResultsModule { }
