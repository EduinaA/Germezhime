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
  constructor(
    private validWordsServiceService: ValidWordsService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    // Check if we're in the browser environment before accessing localStorage
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const isVisit = localStorage.getItem('visit');
      if (!isVisit) {
        // Show the modal on the first visit
        this.dialog.open(WelcomeDialogComponent);
        // Mark the visit
        localStorage.setItem('visit', 'true');
      }
    }
  }

  public showValidWords(): void {
    console.log(this.validWordsServiceService.allValidWordsSet);
  }
}
