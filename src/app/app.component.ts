import { Component } from '@angular/core';

@Component({
  selector: 'pt-root',
  template: '<pt-layout><router-outlet></router-outlet></pt-layout>',
})
export class AppComponent {
  title = 'angular_default_template';
}
