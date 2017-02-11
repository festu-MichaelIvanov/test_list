import {Component, OnInit} from '@angular/core';
import {PersonService} from "./PersonService";

var ID:number;

export class Person {

  constructor(public id:number,public name: string, public mark: number) { }

}

@Component({
  selector: 'my-app',
  template: `<div class="col-md-6">
              <h1>{{title}}</h1>   
              <table class="table table-hover table-bordered">
                <tr><th>Фамилия</th><th>Оценка</th><th>Удалить</th></tr>
                  <tr *ngFor="let person of items">
                      <td>{{person.name}}</td><td>{{person.mark}}</td><td><button class="btn btn-danger" (click)="deleteItem(person.id)">X</button></td>
                  </tr>
              </table>
            </div>
            <div class="form-inline col-md-12">
              <div class="form-group">
                <input class="form-control" [(ngModel)]="name" placeholder = "Фамилия" />
                <input type="number" class="form-control" [(ngModel)]="mark" placeholder="Оценка" />
                <button class="btn btn-primary" (click)="addItem(ID, name, mark)">Добавить</button>
               </div>
            </div>`,
  providers:[PersonService]
})
export class AppComponent implements OnInit{

  title = 'Неправильный список';

  items: Person[] = [];
  constructor(private personService: PersonService){}

  addItem(id:number, name: string, mark:number){
    ID ++;
    var new_name = name.substring(0,name.length-1)+name[name.length-1].toUpperCase();
    this.personService.addData(ID, new_name, mark);
  }

  ngOnInit(){
    this.items = this.personService.getData();
    ID = this.items[this.items.length-1].id;
  }

  deleteItem(id:number){
    this.personService.deleteData(id);
  }

}
