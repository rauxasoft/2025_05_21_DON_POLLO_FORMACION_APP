import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ResourceDemoComponent } from './pages/resource-demo/resource-demo.component';
import { SignalDemoComponent } from './pages/signal-demo/signal-demo.component';
import { PadreDelPesadoComponent } from './pages/padre-del-pesado/padre-del-pesado.component';

export const routes: Routes = [

    {   path: '', component: HomeComponent },
    {   path: 'resource-demo', component: ResourceDemoComponent },
    {   path: 'signal-demo', component: SignalDemoComponent },
    {   path: 'defer-demo', component: PadreDelPesadoComponent },

    {
        path: 'familias',
        loadChildren: () => import('./features/familias/familia.routes').then(archivo => archivo.FAMILIA_ROUTES)
    },

    {
        path: 'establecimientos',
        loadChildren: () => import('./features/establecimientos/establecimiento.routes').then(archivo => archivo.ESTABLECIMIENTO_ROUTES)
    },

    {
        path: 'productos',
        loadChildren: () => import('./features/productos/producto.routes').then(archivo => archivo.PRODUCTO_ROUTES)
    },

    
    {
        path: 'ofertas',
        loadChildren: () => import('./features/ofertas/oferta.routes').then(archivo => archivo.OFERTA_ROUTES)
    },

    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];
