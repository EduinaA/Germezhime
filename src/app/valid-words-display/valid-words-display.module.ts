import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Common module for basic Angular directives
import { ValidWordsDisplayComponent } from './valid-words-display.component';

@NgModule({
  declarations: [
    ValidWordsDisplayComponent // Declare the component
  ],
  imports: [
    CommonModule // Import CommonModule for directives like ngIf, ngFor, etc.
  ],
  exports: [
    ValidWordsDisplayComponent // Export the component so it can be used in other parts of the app
  ]
})
export class ValidWordsDisplayModule { }
