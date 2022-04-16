import { Component, Input, OnInit } from '@angular/core';

type IItem = {
  id: number | null
  value: string
  checked: boolean
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() value: string = ''
  @Input() checked: boolean = false

  @Input() todoItem: IItem[] = [{ id: null, value: 'testando', checked: true}, { id: null, value: 'tet' ,checked: false}]
  constructor() { }

  addItem() {
    if (this.value.length > 0)
    this.todoItem.push({ id: null, value: this.value, checked: false})
    this.value = ''
  }

  removeItem(item: IItem) {
    const existes = this.todoItem.indexOf(item)
    if (existes >= 0)
    this.todoItem.splice(existes, 1)
  }

  handleChecked(item: IItem) {
    const existes = this.todoItem.indexOf(item)
    if (existes >= 0)
    this.todoItem[existes].checked = !item.checked
  }

  editItem(item: IItem) {
    const existes = this.todoItem.indexOf(item)
    if (existes >= 0)
    this.todoItem[existes].checked = !item.checked
  }

  ngOnInit(): void {
  }

}
