import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoneycombsComponent } from './honeycombs.component';

@NgModule({
  declarations: [
    HoneycombsComponent  // Declare the HoneycombsComponent
  ],
  imports: [
    CommonModule  // Import CommonModule for basic Angular directives
  ],
  exports: [
    HoneycombsComponent  // Export HoneycombsComponent so it can be used in other modules
  ]
})
export class HoneycombsModule { }
