import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SignalDemoComponent } from './components/signal-demo/signal-demo.component';
import { ListadoFamiliasComponent } from "./components/listado-familias/listado-familias.component";

@Component({
  selector: 'app-root',     
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}

/**
 *  ✅ ¿Es opcional el selector?
 * 
 *  Puede no incluirse si el componente (normalmente una página) se renderiza sólo a través de una ruta.
 */

/**
 * 🧭 Directivas de control de flujo modernas en Angular 19 (Built-in syntax)
 * 
 * Estas nuevas directivs sustituyen a las clásicas (`*ngIf`, `*ngFor`, etc.) con una sintaxis más clara y reactiva.
 * 
 * ✅ DISPONIBLES
 * 
 * 1. @if
 *    - Sustituye a *ngIf.
 *    - Permite bloques else/then de forma más limpia.
 *    - Ejemplo:
 *      @if (loggedIn) {
 *        <p>Bienvenido</p>
 *      } @else {
 *        <p>Inicia sesión</p>
 *      }
 * 
 * 2. @for
 *    - Sustituye a *ngFor.
 *    - Sintaxis más declarativa y soporte nativo para `track`.
 *    - Ejemplo:
 *      @for (item of items; track item.id) {
 *        <li>{{ item.name }}</li>
 *      }
 * 
 * 3. @switch / @case / @default
 *    - Sustituye a *ngSwitch, *ngSwitchCase y *ngSwitchDefault.
 *    - Uso más estructurado y limpio.
 *    - Ejemplo:
 *      @switch (estado) {
 *        @case ('cargando') { <p>Cargando...</p> }
 *        @case ('error')   { <p>Ha ocurrido un error</p> }
 *        @default          { <p>Todo correcto</p> }
 *      }
 * 
 * 4. @defer
 *    - Permite carga diferida de contenido (mejora LCP y UX).
 *    - Ideal para bloques pesados o contenido no crítico inicial.
 *    - Ejemplo:
 *      @defer (when datosListos()) {
 *        <tabla-de-datos></tabla-de-datos>
 *      } @placeholder {
 *        <p>Cargando tabla...</p>
 *      } @error {
 *        <p>Error al cargar.</p>
 *      }
 * 
 *    Se usa @defer para no aburrir al usuario. 
 *    - Permite una carga momentanea (el contenido se retrasa hasta que sea el mejor momento)
 *    - Permite una carga parcial (el resto de la página ya está interactiva)
 *    - Evita "aburrir al usuario" (con pantallas vacías, spinners eternos o tiempo muertos)
 * 
 *    LCP es Largest Contentful Paint (TIEMPO que se tarda en pintar el contenido más grande)
 *    - es importante minimizarlo por las "sensaciones" que tiene el usuario:
 * 
 *    <= 2,5 segundos  --> BIEN
 *    2,5- 4 segundos  --> REGULERO Hay que mejorarlo
 *       > 4 segundos  --> MUY MAL    
 * 
 * 
 * 🧠 Tabla resumen:
 * 
 * | Directiva  | Sustituye a...    | Uso principal              |
 * |------------|------------------|----------------------------|
 * | @if        | *ngIf            | Condicionales              |
 * | @for       | *ngFor           | Listas                     |
 * | @switch    | *ngSwitch        | Múltiples ramas lógicas    |
 * | @defer     | - (novedad)      | Carga diferida/lazy        |
 * 
 * ℹ️ Disponible a partir de Angular 18 de forma estable (experimental en 17).
 */

