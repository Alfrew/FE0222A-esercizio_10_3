import { Component } from '@angular/core';
import { Itodolist } from './interface/todolist';
import { loadDB, loadDBAxios } from './service/todolist.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'es1';
    listToDo!: Itodolist[];

    constructor() {
        loadDB().then((resp) => {
            console.log('Fetch:');
            console.log(resp);
            this.listToDo = resp;
            this.completed();
            console.log('Fetch:');
            console.log(this.listToDo);
        });
        loadDBAxios().then((resp) => {
            console.log('Axios:');
            console.log(resp);
            this.listToDo = resp;
            this.completed();
            console.log('Axios:');
            console.log(this.listToDo);
        });
    }

    completed() {
        this.listToDo = this.listToDo.map((elenco) => {
            return { ...elenco, complete: true };
        });
    }
}
