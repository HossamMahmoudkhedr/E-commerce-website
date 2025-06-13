import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [NgIf, NgClass],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() name: string = '';
  @Input() value: string | undefined | number = '';
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() hasIcon: boolean = false;

  @Output() valueChagne = new EventEmitter<HTMLInputElement>();

  onInputChagne(event: Event) {
    const target = event.target as HTMLInputElement;

    this.valueChagne.emit(target);
  }

  constructor() {}
}
