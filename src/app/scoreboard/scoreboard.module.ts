import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScoreboardComponent} from "./scoreboard.component";

@NgModule({
  declarations: [
    ScoreboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScoreboardComponent
  ]
})
export class ScoreboardModule { }
