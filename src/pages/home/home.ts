import { Component } from '@angular/core';

import { NavController, ActionSheetController  } from 'ionic-angular';

import { AddTodoPage } from '../add-todo/add-todo';

import { NativeStorage } from 'ionic-native';

import { Todo } from '../add-todo/todo.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  todoList: Todo[] = [];

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewWillEnter(){

     NativeStorage.getItem("todoList")
      .then(data => { 
        this.todoList = data; 
        console.log('data loaded'); 
        console.log(data); 
      }, error => console.log(error));
  }

  gotoTodoPage() {
    this.navCtrl.push(AddTodoPage);
  }

  showActionMenu(todo: Todo){

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify '+todo.title,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Delete',
          handler: () => {
            console.log('Archive clicked');
          }
        }
      ]
    });
    actionSheet.present();

  }

  deleteAll(){
    NativeStorage.clear();
    this.todoList = [];
  }


}
