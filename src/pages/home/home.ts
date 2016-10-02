import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddTodoPage } from '../add-todo/add-todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoTodoPage(){
    this.navCtrl.push(AddTodoPage);
  }

}
