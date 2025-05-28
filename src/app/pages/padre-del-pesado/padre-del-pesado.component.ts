import { Component } from '@angular/core';
import { ComponentePesadoComponent } from '../componente-pesado/componente-pesado.component';

@Component({
  selector: 'app-padre-del-pesado',
  imports: [ComponentePesadoComponent],
  templateUrl: './padre-del-pesado.component.html',
  styleUrl: './padre-del-pesado.component.css'
})
export class PadreDelPesadoComponent {
  visible = true;
}
