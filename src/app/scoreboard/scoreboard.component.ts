import { Component } from '@angular/core';
import { ValidWordsService } from '../valid-words.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent {
  public scoreCalculate = this.validWordsServiceService.calculateScore();
  public two: number = Math.floor(this.scoreCalculate * 0.02);
  public five: number = Math.floor(this.scoreCalculate * 0.05);
  public eight: number = Math.floor(this.scoreCalculate * 0.08);
  public fifteen: number = Math.floor(this.scoreCalculate * 0.15);
  public twentyfive: number = Math.floor(this.scoreCalculate * 0.25);
  public forty: number = Math.floor(this.scoreCalculate * 0.40);
  public fifty: number = Math.floor(this.scoreCalculate * 0.50);
  public seventy: number = Math.floor(this.scoreCalculate * 0.70);

  public scoreLevels: { name: string, minScore: number }[] = [
    { name: 'Vezë', minScore: 0 },
    { name: 'Larvë', minScore: this.two },
    { name: 'Bletë', minScore: this.five },
    { name: 'Bletë punëtore', minScore: this.eight },
    { name: 'Bletë e zgjuar', minScore: this.fifteen },
    { name: 'Bletë mendjendritur', minScore: this.twentyfive },
    { name: 'Të lumtë thumbi!', minScore: this.forty },
    { name: 'Bletar', minScore: this.fifty },
    { name: 'Mbretëreshë!', minScore: this.seventy }
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
    return this.scoreLevels.slice().reverse().find(level => level.minScore <= this.score)?.name || 'Vezë';
  }

  public calculateMarkerPosition(score: number): number {
    let nextLevelIndex = 0;
    for (let i = this.scoreLevels.length - 1; i >= 0; i--) {
      if (score >= this.scoreLevels[i].minScore) {
        nextLevelIndex = i;
        break;
      }
    }

    if (nextLevelIndex === 0) {
      return 0;
    }
    // console.log((1/this.scoreLevels.length) * 100);
    // console.log((nextLevelIndex / this.scoreLevels.length) * 100);
    // Calculate the percentage position of the next level
    return (nextLevelIndex / (this.scoreLevels.length - 1)) * 100;
  }
}
