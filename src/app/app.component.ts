import {Component, OnChanges, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoneycombsModule } from "./honeycombs/honeycombs.module";
import { WordInputModule } from "./word-input/word-input.module";
import { ErrorMessageModule } from "./error-message/error-message.module";
import { ScoreboardModule } from "./scoreboard/scoreboard.module";
import {ValidWordsService} from "./valid-words.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HoneycombsModule, WordInputModule, ErrorMessageModule, ScoreboardModule, HttpClientModule],
  providers: [ValidWordsService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  letters = this.validWordsServiceService.letters
  constructor(private validWordsServiceService: ValidWordsService) {
  }

  public showValidWords(): void {
    console.log(this.validWordsServiceService.allValidWordsSet);
  }
}
