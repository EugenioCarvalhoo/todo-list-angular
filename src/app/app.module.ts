import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RowTodoListComponent } from './row-todo-list/row-todo-list.component';
import { BtnTodoListComponent } from './btn-todo-list/btn-todo-list.component';
import { CheckboxTodoComponent } from './checkbox-todo/checkbox-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    RowTodoListComponent,
    BtnTodoListComponent,
    CheckboxTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
