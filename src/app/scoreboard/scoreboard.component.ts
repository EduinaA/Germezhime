import { Component } from '@angular/core';
import { ValidWordsService } from '../valid-words.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent {
  public scoreLevels: { name: string, minScore: number }[] = [
    { name: 'Vezë', minScore: 0 },
    { name: 'Larvë', minScore: 5 },
    { name: 'Bletë', minScore: 13 },
    { name: 'Bletë punëtore', minScore: 20 },
    { name: 'Bletë e zgjuar', minScore: 38 },
    { name: 'Bletë mendjendritur', minScore: 63 },
    { name: 'Të lumtë thumbi!', minScore: 101 },
    { name: 'Mbretëreshë', minScore: 127 },
    { name: 'Bletar', minScore: 177 }
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

  public calculateMarkerPosition(score: number): number {
    // Find the next level index the score has not yet achieved
    let nextLevelIndex = this.scoreLevels.findIndex(level => score < level.minScore);

    if (score === 0) {
      return 0; // Start position if score is 0
    } else if (nextLevelIndex === 0) {
      // If score is less than the first minScore and not zero, place it at the first interval
      return (1 / this.scoreLevels.length) * 100;
    } else if (nextLevelIndex === -1) {
      // If score exceeds the highest level's minScore
      return 100; // End position
    }

    // Calculate the percentage position of the next level
    return (nextLevelIndex / this.scoreLevels.length) * 100;
  }
}
