import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  textoDelDia = $localize `Hoy disfrutarás de la oferta tal...`;
}

// Ejemplo de como traducir en el codigo