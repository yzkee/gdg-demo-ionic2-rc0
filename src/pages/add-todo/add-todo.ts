import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Todo } from './todo.interface';
/*
  Generated class for the AddTodo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html'
})
export class AddTodoPage {

  todo: Todo = new Todo();
  
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AddTodo Page');
  }

  createTodo(){
    console.log(this.todo);
  }

}
