import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-honeycombs',
  templateUrl: './honeycombs.component.html',
  styleUrls: ['./honeycombs.component.scss']
})
export class HoneycombsComponent implements OnChanges {
  @Input() letters: string[] = []; // Accepts letters from parent component

  ngOnChanges(): void {
    console.log('Letters updated in Honeycombs:', this.letters);
    // Additional logic to handle letter changes can be added here
  }
}
