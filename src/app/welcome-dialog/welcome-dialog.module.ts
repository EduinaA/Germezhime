import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeDialogComponent} from "./welcome-dialog.component";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@NgModule({
  declarations: [
    WelcomeDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogTitle,
    MatButton,
    MatDialogClose,
    MatDialogContent,
    MatDialogActions
  ],
  exports: [
    WelcomeDialogComponent
  ]
})
export class WelcomeDialogModule { }
