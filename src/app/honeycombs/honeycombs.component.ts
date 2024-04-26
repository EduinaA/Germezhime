import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-honeycombs',
  templateUrl: './honeycombs.component.html',
  styleUrls: ['./honeycombs.component.scss']
})
export class HoneycombsComponent implements OnChanges {
  @Input() letters: string[] = [];

  ngOnChanges(): void {
  }
}
