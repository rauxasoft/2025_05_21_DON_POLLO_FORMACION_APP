import { Route } from "@angular/router";
import { roleGuard } from "../../core/guards/role.guard";
import { ListaProductosComponent } from "./lista-productos/lista-productos.component";

export const PRODUCTO_ROUTES: Route[] = [
  {
    path: '',
    component: ListaProductosComponent,
    //canActivate: [roleGuard('ADMIN')]
  },
  {
    path: 'nuevo',
    component: ListaProductosComponent,  // esto será el nuevo formulario de alta cuando lo tengamos,
    canActivate: [roleGuard('ADMIN')] 
  }
];