import { inject, Injectable } from '@angular/core';
import { ProductoService } from './features/productos/producto.service';
import { OfertaService } from './features/ofertas/oferta.service';
import { EstablecimientoService } from './features/establecimientos/establecimiento.service';
import { FamiliaService } from './features/familias/familia.service';


@Injectable({
  providedIn: 'root'
})
export class LoTengoTodoService {

  // Objeto Todopoderoso  (God Object antipattern)

  // Sane mucho y hace de todo

  productoService = inject(ProductoService);
  ofertaService = inject(OfertaService);
  protected establecimientoService = inject(EstablecimientoService);
}

@Injectable({providedIn: 'root'})
export class Foo extends LoTengoTodoService {
  familiaService = inject(FamiliaService);

  getEstablecimientoService() {
    return this.establecimientoService;
  }

}
