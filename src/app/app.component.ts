import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  num1 = 0;
  num2 = 0;
  wynik = 200;
  op = '';
  error = '';

  zmianaOperacji() {
    if (this.op == '/') {
      if (this.num2 == 0) {
        this.wynik = null;
        this.error = 'NIE DZIEL PRZEZ ZERO!!';
      } else {
        this.wynik = this.num1 / this.num2;
        this.error = '';
      }
    } else if (this.op == '+') {
      this.wynik = this.num1 + this.num2;
      this.error = '';
    } else if (this.op == '-') {
      this.wynik = this.num1 - this.num2;
      this.error = '';
    } else if (this.op == '*') {
      this.wynik = this.num1 * this.num2;
      this.error = '';
    } else {
      this.wynik = null;
      this.error = 'Zły operator!';
    }
  }

  pies = {
    imie: 'Burek',
    rasa: 'Szpic',
    wiek: 10,
  };

  filter: 'all' | 'active' | 'status' = 'all';
  listaZadan = [
    { nazwa: 'ZAD1', status: false },
    { nazwa: 'ZAD2', status: false },
    { nazwa: 'ZAD3', status: false },
    { nazwa: 'ZAD4', status: false },
  ];
  listaSkonczonychZadan = [

  ];

  get zadania() {
    if (this.filter === 'all') {
      return this.listaZadan;
    }
    return this.listaZadan.filter((zadanie) =>
      this.filter === 'status' ? zadanie.status : !zadanie.status
    );
  }
  dodZad(nazwa: string) {
    this.listaZadan.push({
      nazwa,
      status: false,
    });
  }
  przesunZad(nazwa: string) {
    this.listaSkonczonychZadan.push({
      nazwa,
      status: true,
    });
  }
}
