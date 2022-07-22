import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Roberto";
  genero: string = "masculino";

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  //i18nPlural
  clientes: string[] = ['Roberto', 'Jimena', 'Miguel', 'Jose', 'Jesus'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombre = "Jimena";
    this.genero = "femenino";
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //keyvalue pipe
  persona = {
    nombre: 'Roberto Carlos',
    edad: 21,
    direccion: 'CDMX, México'
  }

  //JSON pipe
  heroes = [{
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
  ]

  //async pipe
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
