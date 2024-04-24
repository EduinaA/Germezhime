import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoneycombsModule } from "./honeycombs/honeycombs.module";
import { WordInputModule } from "./word-input/word-input.module";
import { ValidWordsDisplayModule } from "./valid-words-display/valid-words-display.module";
import { ErrorMessageModule } from "./error-message/error-message.module";
import { ScoreboardModule } from "./scoreboard/scoreboard.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HoneycombsModule, WordInputModule, ValidWordsDisplayModule, ErrorMessageModule, ScoreboardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  letters: string[] = ['i', 'e', 'k', 'r', 'h', 'm', 's'];
  validWords: { word: string, isPangram: boolean }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadWordsFromLocalStorage();
  }

  public addValidWord(word: string): void {
    const isPangram = this.isPangram(word, this.letters);

    // Check for duplicates before adding
    if (!this.validWords.some(entry => entry.word.toLowerCase() === word.toLowerCase())) {
      this.validWords.push({ word, isPangram });
      this.sortValidWords(); // Sort the list alphabetically after adding a new word
      this.saveWordsToLocalStorage();
    } else {
      console.log(`Duplicate word not added: ${word}`);
    }
  }

  public isPangram(word: string, requiredLetters: string[]): boolean {
    const wordLetters = new Set(word.toLowerCase().split(''));
    const requiredSet = new Set(requiredLetters.map(letter => letter.toLowerCase()));

    if (wordLetters.size !== requiredSet.size) return false;

    for (let letter of wordLetters) {
      if (!requiredSet.has(letter)) {
        return false;
      }
    }
    return true;
  }

  private sortValidWords(): void {
    this.validWords.sort((a, b) => a.word.localeCompare(b.word));
  }

  private saveWordsToLocalStorage(): void {
    localStorage.setItem('validWords', JSON.stringify(this.validWords));
  }

  private loadWordsFromLocalStorage(): void {
    const words = localStorage.getItem('validWords');
    if (words) {
      this.validWords = JSON.parse(words);
      this.sortValidWords(); // Ensure the list is sorted after loading
    }
  }
}
