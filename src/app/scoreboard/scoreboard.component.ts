import { Component } from '@angular/core';
import { ValidWordsService } from '../valid-words.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent {
  public validWords: { word: string, isPangram: boolean }[] = [];

  constructor(
    private validWordsServiceService: ValidWordsService
  ) {
    //subscribe to the validWordsSubject
    this.validWordsServiceService.validWordsSubject.subscribe(words => {
      this.validWords = words;
    });
  }
}
