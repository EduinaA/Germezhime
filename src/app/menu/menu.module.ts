import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
