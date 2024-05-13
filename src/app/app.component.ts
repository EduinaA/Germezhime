import {Component, OnChanges, OnInit} from '@angular/core';
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
  private readonly appVersion = '14.05.2024'; // Increment this version whenever you push new changes
  private readonly versionKey = 'appVersion';
  private readonly firstVisitKey = 'firstVisit';

  constructor(
    private validWordsServiceService: ValidWordsService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const storedVersion = localStorage.getItem(this.versionKey);
      const isFirstVisit = localStorage.getItem(this.firstVisitKey);

      // Check if the version has changed or if this is the first visit
      if (storedVersion !== this.appVersion || !isFirstVisit) {
        // Show the modal on the first visit or after a version update
        this.dialog.open(WelcomeDialogComponent);

        // Update version and first visit markers
        localStorage.setItem(this.versionKey, this.appVersion);
        localStorage.setItem(this.firstVisitKey, 'true');
      }
    }
  }

  public showValidWords(): void {
    console.log(this.validWordsServiceService.allValidWordsSet);
  }
}
