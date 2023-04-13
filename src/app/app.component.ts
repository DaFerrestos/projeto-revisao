import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Gaelzinho';

  userData = {
    email: 'gaelzinhozicamemo@gmail.com',
    role: 'Admin',
    idade: 4,
    signo: 'Libra',
  };

  title = 'projeto_revisao';
}
