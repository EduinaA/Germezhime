import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HoneycombsComponent } from './honeycombs/honeycombs.component';
import {HoneycombsModule} from "./honeycombs/honeycombs.module";
import {FormsModule} from "@angular/forms";
import {WordInputComponent} from "./word-input/word-input.component";  // Ensure this import is correct

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HoneycombsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
