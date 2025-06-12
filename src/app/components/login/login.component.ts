import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { fetchData } from '../../utils/fetchData';
import { setCookie } from '../../utils/helper';

@Component({
  selector: 'app-login',
  imports: [InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formData: { [key: string]: any } | any = {};

  handleElementChange(element: HTMLInputElement) {
    this.formData[element.name] = element.value;
  }

  async onSubmit(e: Event) {
    e.preventDefault();
    try {
      const data = await fetchData('/login', 'POST', { ...this.formData });
      console.log(data);
      const cookie = setCookie('token', data.accessToken, 30);
      setCookie('loggedIn', 'true', 30);
      console.log(cookie);
      setTimeout(() => {
        location.href = '/';
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }
}
