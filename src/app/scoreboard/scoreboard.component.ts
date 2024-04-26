import { Component } from '@angular/core';
import { ValidWordsService } from '../valid-words.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent {
  public scoreLevels: { name: string, minScore: number }[] = [
    { name: 'Fillestar', minScore: 0 },
    { name: 'Fillim i ri!', minScore: 5 },
    { name: 'Ecim...', minScore: 13 },
    { name: 'Mirë', minScore: 20 },
    { name: 'Decent', minScore: 38 },
    { name: 'Najs', minScore: 63 },
    { name: 'Bravo', minScore: 101 },
    { name: 'Jashtëzakoshëm', minScore: 127 },
    { name: 'Gjeni!', minScore: 177 }
  ];
  public validWords: { word: string, isPangram: boolean }[] = [];
  public score: number = 0;
  public scoreName: string = '';

  constructor(
    private validWordsServiceService: ValidWordsService
  ) {
    //subscribe to the validWordsSubject
    this.validWordsServiceService.validWordsSubject.subscribe(words => {
      this.validWords = words;
    });

    // subscribe to the scoreSubject
    this.validWordsServiceService.scoreSubject.subscribe(score => {
      this.score = score;
      this.scoreName = this.getScoreName();
    });
  }
  public getScoreName(): string {
    return this.scoreLevels.find(level => level.minScore >= this.score)?.name || 'Fillestar';
  }
}
