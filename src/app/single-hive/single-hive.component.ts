import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-single-hive',
  templateUrl: './single-hive.component.html',
  styleUrls: ['./single-hive.component.scss']
})
export class SingleHiveComponent {
  @Input() letters: string[] = [];

  ngOnChanges(): void {
    console.log('Letters updated in Honeycombs:', this.letters);
  }
}
