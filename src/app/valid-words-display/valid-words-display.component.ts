import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-valid-words-display',
  templateUrl: './valid-words-display.component.html',
  styleUrl: './valid-words-display.component.scss'
})
export class ValidWordsDisplayComponent {
  @Input() validWords: string[] = [];

  constructor() { }
}
