import { Route } from "@angular/router";

import { roleGuard } from "../../core/guards/role.guard";
import { ListadoFamiliasComponent } from "./lista-familias/listado-familias.component";

export const FAMILIA_ROUTES: Route[] = [
  {
    path: '',
    component: ListadoFamiliasComponent,
    //canActivate: [roleGuard('ADMIN')]
  },
  {
    path: 'nuevo',
    component: ListadoFamiliasComponent,  // esto será el nuevo formulario de alta cuando lo tengamos,
    canActivate: [roleGuard('ADMIN')] 
  }
];