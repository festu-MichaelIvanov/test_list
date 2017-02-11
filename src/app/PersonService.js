"use strict";
var app_component_1 = require('./app.component');
var PersonService = (function () {
    function PersonService() {
        this.data = [
            { "id": 1, "name": "пупкиН", "mark": 5 },
            { "id": 2, "name": "очевидностЬ", "mark": 3 }
        ];
    }
    PersonService.prototype.getData = function () {
        return this.data;
    };
    PersonService.prototype.addData = function (id, name, mark) {
        this.data.push(new app_component_1.Person(id, name, mark));
    };
    PersonService.prototype.deleteData = function (id) {
        this.data.forEach(function (item, i, arr) {
            if (item.id == id)
                arr.splice(i, 1);
        });
    };
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=PersonService.js.map