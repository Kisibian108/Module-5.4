import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  a: number;
  b: number;
  total = 0;
  error = '';
  constructor() {
  }

  ngOnInit(): void {
  }
  calculator(ope: string) {
    switch (ope) {
      case '+':
        return this.total = this.a + this.b;
      case '-':
        return this.total = this.a - this.b;
      case '*':
        return this.total = this.a * this.b;
      case '/':
        if (this.b === 0) {
          return this.error = 'Ko duoc chia cho 0';
        } else {
          return this.total = this.a / this.b;
        }
    }
  }
}
