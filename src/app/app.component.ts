import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HoneycombsModule} from "./honeycombs/honeycombs.module";
import {WordInputModule} from "./word-input/word-input.module";
import {ValidWordsDisplayModule} from "./valid-words-display/valid-words-display.module";
import {ErrorMessageModule} from "./error-message/error-message.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HoneycombsModule, WordInputModule, ValidWordsDisplayModule, ErrorMessageModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentLetters: string[] = [];
  letters: string[] = ['r', 'i', 'm', 'e', 'h', 'k', 'o'];
  validWords: string[] = [];

  constructor() { }

  addValidWord(word: string): void {
    this.validWords.push(word);
  }
}
