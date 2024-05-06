import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu.component";
import {RouterLink} from "@angular/router";
import {ModalModule} from "../modal/modal.module";
import {RenditjetModalModule} from "../renditjet-modal/renditjet-modal.module";
import {PreviousResultsModule} from "../previous-results/previous-results.modal";

@NgModule({
  declarations: [
    MenuComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        ModalModule,
        RenditjetModalModule,
        PreviousResultsModule
    ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
