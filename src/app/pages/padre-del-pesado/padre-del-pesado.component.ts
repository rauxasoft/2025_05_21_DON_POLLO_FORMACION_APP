import { Component } from '@angular/core';
import { ComponentePesadoComponent } from '../componente-pesado/componente-pesado.component';

@Component({
  selector: 'app-padre-del-pesado',
  imports: [ComponentePesadoComponent],
  templateUrl: './padre-del-pesado.component.html',
  styleUrl: './padre-del-pesado.component.css'
})
export class PadreDelPesadoComponent {
  palante = true;
}

// on viewport    -> ... cuando es visible en la pantalla del usuario
// on hover       -> ... cuando el usuario pasa el puntero por encima
// on interaction -> ... cuando el usuario interactua
// on idle        -> ... cuando el navegador tiene un pequeño momento de asueto o relax
// on inmediate   -> ... ya!

// when palante   -> ... cuando se cumple la expresión o signal o variable booleana. Cuando el padre quiera
