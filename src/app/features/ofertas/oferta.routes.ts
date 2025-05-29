import { Route } from "@angular/router";
import { ListaOfertasComponent } from "./lista-ofertas/lista-ofertas.component";

export const OFERTA_ROUTES: Route[] = [
  {
    path: '',
    component: ListaOfertasComponent,
    //canActivate: [roleGuard('ADMIN')]
  }

];