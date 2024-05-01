import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HoneycombsModule} from "./honeycombs/honeycombs.module";
import {FormsModule} from "@angular/forms";
import {ValidWordsService} from "./valid-words.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {WordInputModule} from "./word-input/word-input.module";
import {ErrorMessageModule} from "./error-message/error-message.module";
import {ScoreboardModule} from "./scoreboard/scoreboard.module";
import {MaintainFocusDirective} from "./maintain-focus.directive";

@NgModule({
  declarations: [
    MaintainFocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HoneycombsModule,
    HttpClientModule,
    RouterOutlet,
    WordInputModule,
    ErrorMessageModule,
    ScoreboardModule
  ],
  providers: [ValidWordsService, HttpClient],
  exports: [
    MaintainFocusDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
