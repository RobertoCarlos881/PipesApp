import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'roberto';
  nombreUpper: string = 'ROBERTO';
  nombreCompleto: string = 'RoBeRtO CaRlOs CoRtEs RaMiReZ';

  fecha: Date = new Date(); //fecha del dia
  //para cambiar el idioma de la fecha, se va desde al app.module

}
