import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: `./body.component.html`
})

export class BodyComponent{

    // esta prop es usada en el *ngIf del html
    mostrar = true

    frase:any = {
        mensaje: 'Un gran poder, requiere una gran responsabilidad.',
        autor: 'Ben Parker'
    }

    // esta prop la usamos en el *ngFor del html
    personajes:string[] = ['Thor', 'IronMan', 'Hulk', 'Groo']
}