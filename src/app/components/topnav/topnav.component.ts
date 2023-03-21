import { Component } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent {
  clickOn: boolean = false;
  username: string = 'Raul Rincones';

  opening() {
    this.clickOn = !this.clickOn;
  }

  getInitalsFromName() {
    if (this.username) {
      const initial = this.username.substring(0, 1);
      return initial.toUpperCase();
    }
    return;
  }
}
