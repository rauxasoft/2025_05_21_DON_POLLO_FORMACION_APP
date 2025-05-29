import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { APP_VERSION } from './tokens/app-version.token';
import { userPayload } from './core/stores/user.store';
import { AuthService } from './core/auth/auth.service';
import { LoTengoTodoComponent } from './lo-tengo-todo/lo-tengo-todo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, LoTengoTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  appVersion = inject(APP_VERSION);
  private auth = inject(AuthService);

  nombre: string | null = null;
  roles: string[] | null = null;

  constructor() {
    effect(() => {
      const payload = userPayload();
      this.nombre = payload?.nombre ?? null;
      this.roles = payload?.roles ?? null;
    });
  }

  logout() {
    this.auth.logout();
  }
}