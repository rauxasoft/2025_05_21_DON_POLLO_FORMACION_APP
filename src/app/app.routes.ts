import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignalDemoComponent } from './components/signal-demo/signal-demo.component';
import { ListadoFamiliasComponent } from './components/listado-familias/listado-familias.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signaldemo', component: SignalDemoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'familias', component: ListadoFamiliasComponent },
    { path: '**', redirectTo: ''}
];
