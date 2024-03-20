import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  num1 = 0;
  num2 = 0;
  operation = '+';
  result = 0;
  operations = ['+', '-', '*', '/'];
  history: { operation: string; result: number; time: string }[] = new Array();

  calculate() {
    let { num1, num2, operation, history, result } = this;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
    const time = new Date().toLocaleString();
    history.push({
      operation: `${num1} ${operation} ${num2}`,
      result: result,
      time: time,
    });
    this.result = result;
  }

  removeHistory(index: number) {
    this.history.splice(index, 1);
  }
}
