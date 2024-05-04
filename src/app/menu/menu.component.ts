import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  showModal: boolean = false;

  public openModal() {
    this.showModal = true;
    console.log(this.showModal);
  }
}
