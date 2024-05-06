import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  showModal: boolean = false;
  showModal2: boolean = false;
  showPreviousResults: boolean = false;

  public openModal() {
    this.showModal = true;
  }

  public openModal2() {
    this.showModal2 = true;
  }

  public openPreviousResults() {
    this.showPreviousResults = true;
  }
}
