import { Component } from '@angular/core';
import { ValidWordsService } from '../valid-words.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent {
  public two: number = 0;
  public five: number = 0;
  public eight: number = 0;
  public fifteen: number = 0;
  public twentyfive: number = 0;
  public forty: number = 0;
  public fifty: number = 0;
  public seventy: number = 0;

  public scoreLevels: { name: string, minScore: number }[] = [];
  public validWords: { word: string, isPangram: boolean }[] = [];
  public score: number = 0;
  public scoreName: string = '';

  constructor(
    private validWordsServiceService: ValidWordsService
  ) {
    //subscribe to the validWordsSubject
    this.validWordsServiceService.validWordsSubject.subscribe(words => {
      console.log('valid words subject', words);
      this.validWords = words;
      const totalScore = this.validWordsServiceService.calculateScore();

      this.two = Math.floor(totalScore * 0.02);
      this.five = Math.floor(totalScore * 0.05);
      this.eight = Math.floor(totalScore * 0.08);
      this.fifteen = Math.floor(totalScore * 0.15);
      this.twentyfive = Math.floor(totalScore * 0.25);
      this.forty = Math.floor(totalScore * 0.40);
      this.fifty = Math.floor(totalScore * 0.50);
      this.seventy = Math.floor(totalScore * 0.70);

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
    });

    // subscribe to the scoreSubject
    this.validWordsServiceService.scoreSubject.subscribe(score => {
      console.log('score', score);
      console.log('totalScore', this.validWordsServiceService.calculateScore());
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
