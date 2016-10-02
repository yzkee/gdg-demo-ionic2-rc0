import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Todo } from './todo.interface';
import { NativeStorage } from 'ionic-native';

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

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    this.todo.color = '#387ef5';
  }

  createTodo() {
    let todoList: Todo[];

    NativeStorage.getItem('todoList')
      .then(
      data => {console.log(data); todoList = data;},
      error => console.error(error)
      )
      .then(() => {
        todoList = todoList || [];

        this.todo.id = (new Date()).getTime() + "";
        todoList.push(this.todo);
        return NativeStorage.setItem("todoList", todoList);
      })
      .then(() => {
        console.log('complete');
        this.navCtrl.pop();
      });
  }

  selectColor(color:string){
    this.todo.color = color;
  }

}
