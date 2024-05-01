import {Component, Input} from '@angular/core';
import {ValidWordsService} from "../valid-words.service";

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.scss']
})
export class WordInputComponent {
  letters = this.validWordsService.letters
  public currentWord: string = '';
  public errorMessage: string = '';
  receivedLetter: string = '';

  constructor(private validWordsService: ValidWordsService) {
  }

  public onLetterReceived(letter: string): void {
    this.currentWord += letter;
  }
  public submitWord(): void {
    if(this.currentWord) {
      this.validWordsService.addWord(this.currentWord);
      this.currentWord = '';
    }
  }

}
