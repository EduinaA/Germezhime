import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-honeycombs',
  templateUrl: './honeycombs.component.html',
  styleUrls: ['./honeycombs.component.scss']
})
export class HoneycombsComponent implements OnChanges {
  @Input() letters: string[] = [];
  @Output() letterClicked = new EventEmitter<string>();

  public onLetterReceived(letter: string): void {
    //console.log('Received letter from child:', letter);
    // Perform further actions as necessary with the received letter
  }
  ngOnChanges(): void {
  }
}
