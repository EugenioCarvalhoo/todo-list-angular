import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-todo-list',
  template: `<button class="btn-hover">{{label}}</button>`,
  styleUrls: ['./btn-todo-list.component.scss']
})
export class BtnTodoListComponent implements OnInit {
 
  @Input() label: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
