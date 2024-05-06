import {Component, EventEmitter, Input, Output} from '@angular/core';
import {wordsList} from "./previous-results.types";

@Component({
  selector: 'app-previous-results',
  templateUrl: './previous-results.component.html',
  styleUrl: './previous-results.component.scss'
})
export class PreviousResultsComponent {
  @Input() showPreviousResults: boolean = false;
  @Output() closePreviousResults = new EventEmitter<void>();
  public wordsList: string[] = wordsList;

  public closePreviousResultsModal() {
    this.closePreviousResults.emit(); // Emit an event when the modal is closed
  }
}
