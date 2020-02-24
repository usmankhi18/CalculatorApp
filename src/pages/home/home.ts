import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MathProvider } from '../../providers/math/math';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  param1: string;
  param2: string;
  answer: string;

  constructor(public math: MathProvider) {

  }

  add()
  {
    let data = {
      param1: this.param1,
      param2: this.param2
    }

    this.math.add(data).then(result => {
      this.answer = result;
    }).catch(err => alert("Error : " + err));
  }
  substract()
  {
    let data = {
      param1: this.param1,
      param2: this.param2
    }

    this.math.substract(data).then(result => {
      this.answer = result;
    }).catch(err => alert("Error : " + err));
  }

  multiply()
  {
    let data = {
      param1: this.param1,
      param2: this.param2
    }

    this.math.multiply(data).then(result => {
      this.answer = result;
    }).catch(err => alert("Error : " + err));
  }
  divide()
  {
    let data = {
      param1: this.param1,
      param2: this.param2
    }

    this.math.divide(data).then(result => {
      this.answer = result;
    }).catch(err => alert("Error : " + err));
  }

}
