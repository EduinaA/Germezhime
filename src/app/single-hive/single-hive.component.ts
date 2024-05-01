import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-single-hive',
  templateUrl: './single-hive.component.html',
  styleUrls: ['./single-hive.component.scss']
})
export class SingleHiveComponent {
  @Input() letters: string[] = [];
  // create new output event emitter of type string to emit the clicked letter
  @Output() letterClicked = new EventEmitter<string>();

  ngOnChanges(): void {
    console.log('Letters updated in Honeycombs:', this.letters);
  }
  public onLetterClick(letter: string): void {
    this.letterClicked.emit(letter);  // Emit the clicked letter to the parent component
  }
}
