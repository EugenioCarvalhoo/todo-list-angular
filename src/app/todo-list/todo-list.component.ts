import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

type IItem = {
  id: number | null
  value: string
  checked: boolean
  edit: boolean
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

 @ViewChild('editfocus', {static: false}) editFocus!: ElementRef
  alert: string =  ""

  value: string = ''
  checked: boolean = false

  @ViewChild('element') element!: any 


  @Input() todoItem: IItem[] = [{ id: null, value: 'testando', checked: true, edit: false }, { id: null, value: 'tet', checked: false, edit: false }]
  constructor() { }

  addItem() {
    if (this.value.length > 0) {
      this.todoItem.forEach(el => el.edit = false)
      this.todoItem.push({ id: null, value: this.value, checked: false, edit: false })
      this.value = ''
    }
  }

  removeItem(item: IItem) {
    const existes = this.todoItem.indexOf(item)
    if (existes >= 0)
      this.todoItem.splice(existes, 1)
  }

  // handleChecked(item: IItem) {
  //   const existes = this.todoItem.indexOf(item)
  //   if (existes >= 0)
  //     this.todoItem[existes].checked = !item.checked
  // }

  // editItem(item: IItem) {
  //   if (item.checked) {
      
  //     this.alertMessage('Não pode editar um item que já foi conclúido!')
  //     return
  //   }
  //   const existes = this.todoItem.indexOf(item)
  //   if (existes >= 0) {
  //     item.edit = !item.edit
  //     this.todoItem[existes] = item
  //     setTimeout(() => {
  //       this.editFocus.nativeElement.focus()
  //     });
  //   }
  // }
  private alertMessage (msg: string) {
    this.alert = msg
    const time = setTimeout(() => {
       this.alert = ''
     }, 2000);
  }

  handleItem(item: IItem) {
    const exist = this.todoItem.indexOf(item)
    if (exist>=0) {
      this.todoItem[exist] = item
    }
  }

  editItem(event: any) {
    this.alertMessage(event.value)
  }

  ngOnInit(): void {

    
  }

}
