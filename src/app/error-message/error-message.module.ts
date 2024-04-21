import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Common module for basic Angular directives
import {ErrorMessageComponent} from "./error-message.component";

@NgModule({
  declarations: [
    ErrorMessageComponent // Declare the component
  ],
  imports: [
    CommonModule // Import CommonModule for directives like ngIf, ngFor, etc.
  ],
  exports: [
    ErrorMessageComponent // Export the component so it can be used in other parts of the app
  ]
})
export class ErrorMessageModule { }
