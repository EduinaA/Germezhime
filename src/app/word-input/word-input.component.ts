import {Component} from '@angular/core';
import {ValidWordsService} from "../valid-words.service";

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.scss']
})
export class WordInputComponent {
  letters = this.validWordsService.letters
  public currentWord: string = '';
  public lastResult: string = '';

  constructor(private validWordsService: ValidWordsService) {
  }

  public onLetterReceived(letter: string): void {
    this.currentWord += letter;
  }
  public submitWord(): void {
    if(this.currentWord) {
      const result = this.validWordsService.addWord(this.currentWord);
      this.lastResult = result.message;
     setTimeout(() => {
        this.lastResult = '';
      }, 1000);
      this.currentWord = '';
    }
  }

  public clearWord(): void {
    this.currentWord = '';
  }

}
