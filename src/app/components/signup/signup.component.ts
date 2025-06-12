import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-signup',
  imports: [InputComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  formData: { [key: string]: any } = {};

  handleElementChange(element: HTMLInputElement) {
    this.formData[element.name] = element.value;
  }

  async handleSubmit(event: Event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(this.formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data);
      setTimeout(() => {
        location.href = '/login';
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }
}
