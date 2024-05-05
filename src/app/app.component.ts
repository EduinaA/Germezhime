import {Component, OnChanges, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordInputModule } from "./word-input/word-input.module";
import { ScoreboardModule } from "./scoreboard/scoreboard.module";
import {ValidWordsService} from "./valid-words.service";
import {HttpClientModule} from "@angular/common/http";
import {MenuModule} from "./menu/menu.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordInputModule, ScoreboardModule, HttpClientModule, MenuModule],
  providers: [ValidWordsService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private validWordsServiceService: ValidWordsService) {
  }

  public showValidWords(): void {
    console.log(this.validWordsServiceService.allValidWordsSet);
  }
}
