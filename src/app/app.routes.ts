import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignalDemoComponent } from './components/signal-demo/signal-demo.component';
import { ListadoFamiliasComponent } from './components/listado-familias/listado-familias.component';
import { LoginComponent } from './components/login/login.component';
import { roleGuard } from './core/guards/role.guard';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signaldemo', component: SignalDemoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'familias', component: ListadoFamiliasComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },

    { 
        path: 'pedidos', 
        canActivate: [roleGuard(['ADMIN'])],
        loadComponent: () => import('./components/pedidos/pedidos.component').then(archivo => archivo.PedidosComponent)
    },

    { path: '**', redirectTo: ''}
];
