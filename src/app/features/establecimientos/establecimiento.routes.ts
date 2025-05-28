import { Route } from "@angular/router";

import { roleGuard } from "../../core/guards/role.guard";
import { ListadoEstablecimientosComponent } from "./lista-establecimientos/listado-establecimientos.component";

export const ESTABLECIMIENTO_ROUTES: Route[] = [
  {
    path: '',
    component: ListadoEstablecimientosComponent,
    canActivate: [roleGuard('ADMIN')]
  },
  {
    path: 'nuevo',
    component: ListadoEstablecimientosComponent,  // esto será el nuevo formulario de alta cuando lo tengamos,
    canActivate: [roleGuard('ADMIN')] 
  }
];