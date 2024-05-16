import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordInputModule } from "./word-input/word-input.module";
import { ScoreboardModule } from "./scoreboard/scoreboard.module";
import {ValidWordsService} from "./valid-words.service";
import {HttpClientModule} from "@angular/common/http";
import {MenuModule} from "./menu/menu.module";
import {MatDialog} from "@angular/material/dialog";
import {WelcomeDialogComponent} from "./welcome-dialog/welcome-dialog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordInputModule, ScoreboardModule, HttpClientModule, MenuModule],
  providers: [ValidWordsService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly versionKey = 'appVersion';
  private readonly firstVisitKey = 'firstVisit';
  private appVersion: string = '';

  constructor(
    private validWordsServiceService: ValidWordsService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    this.appVersion = this.formatDate(currentDate);

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const storedVersion = localStorage.getItem(this.versionKey);
      const isFirstVisit = localStorage.getItem(this.firstVisitKey);

      if (storedVersion !== this.appVersion || !isFirstVisit) {
        this.dialog.open(WelcomeDialogComponent);

        localStorage.setItem(this.versionKey, this.appVersion);
        localStorage.setItem(this.firstVisitKey, 'true');
      }
    }
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${day}.${month}.${year}`;
  }

  public showValidWords(): void {
    console.log(this.validWordsServiceService.allValidWordsSet);
  }
}
