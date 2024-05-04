import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu.component";
import {RouterLink} from "@angular/router";
import {ModalModule} from "../modal/modal.module";

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ModalModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
