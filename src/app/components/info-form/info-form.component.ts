import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-info-form',
  imports: [InputComponent],
  templateUrl: './info-form.component.html',
  styleUrl: './info-form.component.css',
})
export class InfoFormComponent {
  isInputDisabled: boolean = true;

  toggleDisabled() {
    this.isInputDisabled = !this.isInputDisabled;
  }
}
