import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-calculator';

  display: any = ''
  displayHistory: any = ''
  actionSign: any
  firstNumber: any
  secondNumber: any
  numLength: number = 0
  fontSize: any = '62px'
  click: boolean = false

  addNumber(num: any) {
    if (this.display === '') {
      this.display = num.toString()
      this.checkNumLength()
    }
    else {
      this.display = this.display + num.toString()
      this.checkNumLength()
    }
  }

  action(sign: any) {
    this.click = false
 

    if (this.displayHistory.split(' ').length === 2) {
      this.firstNumber = this.displayHistory.split(' ')[0]
    } else {
      this.firstNumber = this.display
    }
    this.actionSign = sign
    this.displayHistory = this.firstNumber + ' ' + this.actionSign

   
    this.display = ''
  }

  reset() {
    this.display = ''
    this.displayHistory = ''
    this.click = false
  }

  result() {
    if (this.actionSign === '+') {
      this.secondNumber = this.display
      this.display = parseFloat(this.firstNumber) + parseFloat(this.display)
      this.checkNumLength()
      this.displayHistory = this.firstNumber + ' ' + this.actionSign + ' ' + this.secondNumber
    } else if (this.actionSign === '-') {
      this.secondNumber = this.display
      this.display = parseFloat(this.firstNumber) - parseFloat(this.display)
      this.displayHistory = this.firstNumber + ' ' + this.actionSign + ' ' + this.secondNumber
      this.checkNumLength()
    } else if (this.actionSign === 'x') {
      this.secondNumber = this.display
      this.display = parseFloat(this.firstNumber) * parseFloat(this.display)
      this.displayHistory = this.firstNumber + ' ' + this.actionSign + ' ' + this.secondNumber
      this.checkNumLength()
    } else if (this.actionSign === '/') {
      this.secondNumber = this.display
      this.display = parseFloat(this.firstNumber) / parseFloat(this.display)
      this.displayHistory = this.firstNumber + ' ' + this.actionSign + ' ' + this.secondNumber
      this.checkNumLength()
    }
  }

  checkNumLength() {
    console.log(this.display, this.display.toString().length)
    this.numLength = this.display.toString().length
    if (this.numLength < 7) {
      this.fontSize = '62px'
    } else if (this.numLength >= 7 && this.numLength < 10) {
      this.fontSize = '45px'
    } else if (this.numLength >= 10 && this.numLength < 13) {
      this.fontSize = '32px'
    } else if (this.numLength >= 13 && this.numLength < 16) {
      this.fontSize = '28px'
    } else if (this.numLength >= 16 && this.numLength < 19) {
      this.fontSize = '24px'
    } else if (this.numLength >= 19 && this.numLength < 21) {
      this.fontSize = '20px'
    } else {
      this.fontSize = '19px'
      this.click = true
    }
  }

}
