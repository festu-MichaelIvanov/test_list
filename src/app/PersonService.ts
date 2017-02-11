import {Person} from './app.component';

export class PersonService{

    private data: Person[] = [
        { "id":1,"name": "пупкиН", "mark":5 },
        { "id":2,"name": "очевидностЬ", "mark":3 }
    ];

    getData(): Person[] {

        return this.data;
    }

    addData(id:number, name: string, mark: number){

        this.data.push(new Person(id, name, mark));

    }

    deleteData(id:number){

        this.data.forEach(function(item, i, arr) {
            if (item.id == id)
                arr.splice(i,1);
        });

    }

}
