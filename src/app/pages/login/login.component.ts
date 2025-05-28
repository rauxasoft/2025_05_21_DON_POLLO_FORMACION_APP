import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = signal('');
  password = signal('');
  error = signal<string | null>(null);

  private auth = inject(AuthService);

  login() {
    this.auth.login(this.username(), this.password()).subscribe({

      next: () => this.error.set(null),
      error: () => this.error.set('Usuario o Password incorrectos')

    });
  }

}
