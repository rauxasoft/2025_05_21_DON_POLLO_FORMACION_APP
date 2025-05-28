import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-componente-pesado',
  imports: [],
  templateUrl: './componente-pesado.component.html',
  styleUrl: './componente-pesado.component.css'
})
export class ComponentePesadoComponent {

  loaded = signal(false);

  constructor(){
    setTimeout(() => {
      this.loaded.set(true);
    }, 4500);
  }

}
