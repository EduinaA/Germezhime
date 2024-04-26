import {Component, Input} from '@angular/core';
import {ValidWordsService} from "../valid-words.service";

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.scss']
})
export class WordInputComponent {
  public currentWord: string = '';

  errorMessage: string = '';

  constructor(private validWordsService: ValidWordsService) {
  }

  public submitWord(): void {
    console.log('Submitting wordInput:', this.currentWord);
    if(this.currentWord) {
      this.validWordsService.addWord(this.currentWord);
      this.currentWord = '';
    }
  }

}
