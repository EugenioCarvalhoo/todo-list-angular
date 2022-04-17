import { IItem } from './todo-list/todo-list.component';
import { Component } from '@angular/core';

type Idata = {
  id: number | null
  value: string
} 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks: Idata[] = [{id: null, value: "Ir ao mercado"}, {id: null, value: "fazer tal...."}]
  list: IItem[] = []

  getTasks(): IItem[] {
    return this.tasks.map(el => ({
      id: el.id,
      value: el.value,
      checked: false,
      edit: false
    }))
  } 

  ngOnInit(): void {
    this.list = this.getTasks()
  }

}
