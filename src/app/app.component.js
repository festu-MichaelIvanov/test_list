"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PersonService_1 = require("./PersonService");
var ID;
var Person = (function () {
    function Person(id, name, mark) {
        this.id = id;
        this.name = name;
        this.mark = mark;
    }
    return Person;
}());
exports.Person = Person;
var AppComponent = (function () {
    function AppComponent(personService) {
        this.personService = personService;
        this.title = 'Неправильный список';
        this.items = [];
    }
    AppComponent.prototype.addItem = function (id, name, mark) {
        ID++;
        var new_name = name.substring(0, name.length - 1) + name[name.length - 1].toUpperCase();
        this.personService.addData(ID, new_name, mark);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.items = this.personService.getData();
        ID = this.items[this.items.length - 1].id;
    };
    AppComponent.prototype.deleteItem = function (id) {
        this.personService.deleteData(id);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"col-md-6\">\n              <h1>{{title}}</h1>   \n              <table class=\"table table-hover table-bordered\">\n                <tr><th>\u0424\u0430\u043C\u0438\u043B\u0438\u044F</th><th>\u041E\u0446\u0435\u043D\u043A\u0430</th><th>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</th></tr>\n                  <tr *ngFor=\"let person of items\">\n                      <td>{{person.name}}</td><td>{{person.mark}}</td><td><button class=\"btn btn-danger\" (click)=\"deleteItem(person.id)\">X</button></td>\n                  </tr>\n              </table>\n            </div>\n            <div class=\"form-inline col-md-12\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" [(ngModel)]=\"name\" placeholder = \"\u0424\u0430\u043C\u0438\u043B\u0438\u044F\" />\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"mark\" placeholder=\"\u041E\u0446\u0435\u043D\u043A\u0430\" />\n                <button class=\"btn btn-primary\" (click)=\"addItem(ID, name, mark)\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n               </div>\n            </div>",
            providers: [PersonService_1.PersonService]
        }), 
        __metadata('design:paramtypes', [PersonService_1.PersonService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map