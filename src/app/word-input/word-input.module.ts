import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule if you use ngModel
import { WordInputComponent } from './word-input.component';
import { HttpClientModule } from '@angular/common/http';
import {ErrorMessageComponent} from "../error-message/error-message.component";
import {ErrorMessageModule} from "../error-message/error-message.module";
import {HoneycombsModule} from "../honeycombs/honeycombs.module";
import {SingleHiveModule} from "../single-hive/single-hive.module";
import {AppModule} from "../app.module";
import {MaintainFocusDirective} from "../maintain-focus.directive";

@NgModule({
  declarations: [
    WordInputComponent,
    MaintainFocusDirective
  ],
  imports: [
    CommonModule,  // CommonModule includes basic Angular directives like NgIf and NgFor
    FormsModule,   // FormsModule is necessary for using ngModel
    HttpClientModule,
    ErrorMessageModule,
    HoneycombsModule,
    SingleHiveModule
  ],
  exports: [
    WordInputComponent  // Export the WordInputComponent so it can be used in other modules
  ]
})
export class WordInputModule { }
