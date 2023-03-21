import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() name: string = '';
  @Input() options: string[] = [];
  @Output() optionSelected = new EventEmitter<string>();
  optionValue: string = '';
  show: boolean = false;

  showing() {
    this.show = !this.show;
  }

  onChanging(value: string) {
    this.optionValue = value;
    this.optionSelected.emit(value);
    this.show = !this.show;
    console.log('value--->', this.optionValue);
  }
}
