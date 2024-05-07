import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ValidWordsService} from "../valid-words.service";

@Component({
  selector: 'app-renditjet-modal',
  templateUrl: './renditjet-modal.component.html',
  styleUrl: './renditjet-modal.component.scss'
})
export class RenditjetModalComponent implements OnInit {
  @Input() showRenditjet: boolean = false;
  @Output() closeRenditjet = new EventEmitter<void>();
  public two: number = 0;
  public five: number = 0;
  public eight: number = 0;
  public ten: number = 0;
  public twenty: number = 0;
  public thirty: number = 0;
  public fourty: number = 0;
  public fiftyfive: number = 0;
  public score: number = 0;
  public scoreName: string = '';
  public scoreLevels: { name: string, minScore: number }[] = [];

  ngOnInit() {
    this.validWordsServiceService.wordsLoaded.subscribe(loaded => {
      if (loaded) {
        const totalScore = this.validWordsServiceService.calculateScore();

        this.two = Math.floor(totalScore * 0.02);
        this.five = Math.floor(totalScore * 0.05);
        this.eight = Math.floor(totalScore * 0.08);
        this.ten = Math.floor(totalScore * 0.10);
        this.twenty = Math.floor(totalScore * 0.20);
        this.thirty = Math.floor(totalScore * 0.30);
        this.fourty = Math.floor(totalScore * 0.40);
        this.fiftyfive = Math.floor(totalScore * 0.55);

        this.scoreLevels = [
          { name: 'Vezë', minScore: 0 },
          { name: 'Larvë', minScore: this.two },
          { name: 'Bletë', minScore: this.five },
          { name: 'Bletë punëtore', minScore: this.eight },
          { name: 'Bletë e zgjuar', minScore: this.ten },
          { name: 'Bletë mendjendritur', minScore: this.twenty },
          { name: 'Të lumtë thumbi!', minScore: this.thirty },
          { name: 'Bletar', minScore: this.fourty },
          { name: 'Mbretëreshë!', minScore: this.fiftyfive }
        ];

        this.scoreName = this.getScoreName();
      }
    });

    // subscribe to the scoreSubject
    this.validWordsServiceService.scoreSubject.subscribe(score => {
      this.score = score;
      this.scoreName = this.getScoreName();
    });
  }

  constructor(
    private validWordsServiceService: ValidWordsService
  ) {}

  public getScoreName(): string {
    return [...this.scoreLevels].reverse().find(level => level.minScore <= this.score)?.name || 'Vezë';
  }

  public closeRenditjetModal() {
    this.closeRenditjet.emit();
  }
}
