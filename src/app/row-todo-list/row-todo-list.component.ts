import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

type IItem = {
  id: number | null
  value: string
  checked: boolean
  edit: boolean
}

@Component({
  selector: 'app-row-todo',
  templateUrl: './row-todo-list.component.html',
  styleUrls: ['./row-todo-list.component.scss']
})
export class RowTodoListComponent implements OnInit {

  @ViewChild('editfocus') editfocus!: ElementRef

  @Input() item: IItem = {id: null, value:'', checked: false, edit: false}


  @Output() exclud = new EventEmitter()

  @Output() edit = new EventEmitter()

  @Output() sendItem  = new EventEmitter<IItem>()

  validateValueItem: string = ''
     
  constructor() { }

  handleChecked() {
    this.item.checked =  !this.item.checked
    this.sendItem.emit(this.item)
  }

  editItem() {
    if (this.item.edit) {
      this.item.edit = !this.item.edit
      if(this.validateValueItem.length === 0)
      this.throwMessage('Campo em branco. Favor definir um valor.')
      return
    }
  if (this.item.checked) {
    this.throwMessage('Não pode editar um item que já foi conclúido')
    return
  }
    this.validateValueItem = this.item.value
    setTimeout(() => {
      this.editfocus.nativeElement.focus()
    });
    this.item.edit = !this.item.edit
  }

  onExclud() {
    this.exclud.emit()
  }

  throwMessage(msg: string) {
    this.edit.emit({value: msg})

  }
  
  resetItem() {
    this.item.edit = false
  }
  
  ngOnInit(): void {
  }


}
