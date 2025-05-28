import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ResourceDemoComponent } from './pages/resource-demo/resource-demo.component';
import { SignalDemoComponent } from './pages/signal-demo/signal-demo.component';

export const routes: Routes = [

    {   path: '', component: HomeComponent },
    {   path: 'resource-demo', component: ResourceDemoComponent },
    {   path: 'signal-demo', component: SignalDemoComponent },

    {
        path: 'familias',
        loadChildren: () => import('./features/familias/familia.routes').then(m => m.FAMILIA_ROUTES)
    },

    {
        path: 'establecimientos',
        loadChildren: () => import('./features/establecimientos/establecimiento.routes').then(m => m.ESTABLECIMIENTO_ROUTES)
    },

    {
        path: 'productos',
        loadChildren: () => import('./features/productos/producto.routes').then(m => m.PRODUCTO_ROUTES)
    },

    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];
