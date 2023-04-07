import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'pt-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {

showHeader: boolean = true;
showFooter: boolean = true;

constructor (private router: Router) {
  this.router.events.subscribe((event: any) => {
    if (event instanceof NavigationEnd) {
      if (event.url === '/login') {
        this.showHeader = false;
        this.showFooter = false;
      } else {
        this.showHeader = true;
        this.showFooter = true;
      }
    }
  });
}

}