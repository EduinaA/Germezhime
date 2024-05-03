import { Component } from '@angular/core';
import { ValidWordsService } from '../valid-words.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent {
  public scoreCalculate :number;
  public two: number;
  public five: number;
  public eight: number;
  public fifteen: number;
  public twentyfive: number;
  public forty: number;
  public fifty: number;
  public seventy: number;

  public scoreLevels: { name: string, minScore: number }[]
  public validWords: { word: string, isPangram: boolean }[] = [];
  public score: number = 0;
  public scoreName: string = '';

  constructor(
    private validWordsServiceService: ValidWordsService
  ) {
    this.scoreCalculate = this.validWordsServiceService.calculateScore();
    this.two = Math.floor(this.scoreCalculate * 0.02);
    this.five = Math.floor(this.scoreCalculate * 0.05);
    this.eight = Math.floor(this.scoreCalculate * 0.08);
    this.fifteen = Math.floor(this.scoreCalculate * 0.15);
    this.twentyfive = Math.floor(this.scoreCalculate * 0.25);
    this.forty = Math.floor(this.scoreCalculate * 0.40);
    this.fifty = Math.floor(this.scoreCalculate * 0.50);
    this.seventy = Math.floor(this.scoreCalculate * 0.70);

    this.scoreLevels = [
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

    //subscribe to the validWordsSubject
    this.validWordsServiceService.validWordsSubject.subscribe(words => {
      this.validWords = words;
    });

    // subscribe to the scoreSubject
    this.validWordsServiceService.scoreSubject.subscribe(score => {
      console.log('score', score);
      this.score = score;
      this.scoreName = this.getScoreName();
      console.log('scoreName', this.scoreName);
      console.log('scoreLevels', this.scoreLevels);
    });
  }

  public getScoreName(): string {
    return [...this.scoreLevels].reverse().find(level => level.minScore <= this.score)?.name || 'Vezë';
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
