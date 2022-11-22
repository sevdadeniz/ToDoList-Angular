import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  todos:ToDo[]=[];
  newTodo : string |undefined;
  visible:boolean = true;
  dismissible:boolean = true;

  constructor(public pagesService :PagesService) { 
    this.visible;
    this.dismissible;
   }

  ngOnInit(): void {
  }

  saveTodo(){
    if(this.newTodo){
      let todo = new ToDo();
      todo.name=this.newTodo;
      todo.isComplate=true;
      this.todos.push(todo);
      this.newTodo = '';

    }
    else{
      alert("Lütfen görev giriniz...")
    }
  }

  done(id:number){
    this.todos[id].isComplate=! this.todos[id].isComplate
  }

  remove(id:number){
    this.todos = this.todos.filter((v,i)=>i !==id);
  }
  update(id:number){
    alert("")
    this.todos = this.todos.filter((v,i)=>i !==id);
  }

}
