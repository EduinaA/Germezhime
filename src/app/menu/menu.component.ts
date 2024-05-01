import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(public router: Router) {}

  isActive(url: string): boolean {
    // Return true if the current route is the same as the passed url
    return this.router.url === url;
  }
}
