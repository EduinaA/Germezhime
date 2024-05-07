import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ValidWordsService} from "./valid-words.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {WordInputModule} from "./word-input/word-input.module";
import {ScoreboardModule} from "./scoreboard/scoreboard.module";
import {MaintainFocusDirective} from "./maintain-focus.directive";
import {MatDialogActions, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {WelcomeDialogModule} from "./welcome-dialog/welcome-dialog.module";

@NgModule({
  declarations: [
    MaintainFocusDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    WordInputModule,
    MatDialogModule,
    MatButtonModule,
    MatDialogActions,
    WelcomeDialogModule,
    ScoreboardModule
  ],
  providers: [ValidWordsService, HttpClient],
  exports: [
    MaintainFocusDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
