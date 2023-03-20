import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() checkboxOptions: any[] = [];
  checkboxValue: string = '';

  changingCheckBox(value: any) {
    this.checkboxValue = value;
    console.log('this.checkboxValue--->', this.checkboxValue);
    this.result();
  }

  result() {
    console.log(this.checkboxOptions.filter((item) => item.checked));
    return this.checkboxOptions.filter((item) => item.checked);
  }
}
