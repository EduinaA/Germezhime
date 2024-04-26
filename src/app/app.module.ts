import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HoneycombsComponent } from './honeycombs/honeycombs.component';
import {HoneycombsModule} from "./honeycombs/honeycombs.module";
import {FormsModule} from "@angular/forms";
import {WordInputComponent} from "./word-input/word-input.component";
import {ValidWordsService} from "./valid-words.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {WordInputModule} from "./word-input/word-input.module";
import {ValidWordsDisplayModule} from "./valid-words-display/valid-words-display.module";
import {ErrorMessageModule} from "./error-message/error-message.module";
import {ScoreboardModule} from "./scoreboard/scoreboard.module";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HoneycombsModule,
    HttpClientModule,
    RouterOutlet,
    WordInputModule,
    ValidWordsDisplayModule,
    ErrorMessageModule,
    ScoreboardModule
  ],
  providers: [ValidWordsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
