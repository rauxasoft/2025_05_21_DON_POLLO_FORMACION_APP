import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  textoDelDia = $localize `Disfruta de nuestras ofertas!!`;
}

// Ejemplo de como traducir en el codigo