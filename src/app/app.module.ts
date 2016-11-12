import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddTodoPage } from '../pages/add-Todo/add-Todo';
import { EditTodoPage } from '../pages/edit-Todo/edit-Todo';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddTodoPage,
    EditTodoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddTodoPage,
    EditTodoPage
  ],
  providers: []
})
export class AppModule {}
