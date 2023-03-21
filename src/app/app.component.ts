import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  urlComponent: string = '';
  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        // Hide loading indicator
        console.log(val.url);
        this.urlComponent = val.url;
      }
    });
  }
}
