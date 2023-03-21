import { Component } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent {
  clickOn: boolean = false;

  opening() {
    this.clickOn = !this.clickOn;
  }
}
