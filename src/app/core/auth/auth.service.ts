import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../tokens/api-base-url.token';
import { Observable, tap } from 'rxjs';
import { setUserPayload } from '../stores/user.store';
import { setToken, clearToken } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private baseURL = inject(API_BASE_URL);

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseURL}/donpollo/auth/signin`, { username, password }).pipe(
      tap((response: any) => {
        setToken(response.token); // ✅ reemplaza localStorage.setItem
        const payloadBase64 = response.token.split('.')[1];
        const payloadDecoded = this.decodeBase64_UTF_8(payloadBase64);
        const payload = JSON.parse(payloadDecoded);
        setUserPayload(payload);
      })
    );
  }

  logout() {
    clearToken();        // ✅ reemplaza localStorage.removeItem
    setUserPayload(null);
  }

  decodeBase64_UTF_8(base64: string): string {
    const binary: string = atob(base64);
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  }
}
