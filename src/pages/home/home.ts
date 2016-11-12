import { Component } from '@angular/core';

import { NavController, ActionSheetController  } from 'ionic-angular';

import { AddTodoPage } from '../add-todo/add-todo';
import { EditTodoPage } from '../edit-todo/edit-todo';

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
        console.log('data loaded1'); 
        console.log(this.todoList); 
      }, error => console.log(error));
  }
  

  gotoTodoPage() {
    this.navCtrl.push(AddTodoPage);
  }

  showActionMenu(todo: Todo){

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify '+todo.Name,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
             this.navCtrl.push(EditTodoPage);
            console.log('Destructive clicked');
          }
        },{
          text: 'Delete',
          handler: () => {
            if (this.todoList.indexOf(todo) > -1) {
            this.todoList.splice(this.todoList.indexOf(todo),1);
            NativeStorage.setItem("todoList",this.todoList);
            }
            
            console.log('Archive clicked');
          }
          
        }
      ]
    });
    actionSheet.present();

  }

  deleteAll(){
    //NativeStorage.clear();
    //this.todoList = [];
     console.log('Dont delete all');
  }


}
