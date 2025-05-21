import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL } from '../tokens/api-base-url.token';
import { Observable, tap } from 'rxjs';
import { setUserPayLoad } from '../core/stores/user.store';
import { setToken } from '../core/stores/auth.store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);          // ya se inyecta de esta forma desde la versión 14
  private baseURL = inject(API_BASE_URL);

  login(username:string, password:string): Observable<any> {

    console.log(username + " " + password );

   return this.http.post(`${this.baseURL}/donpollo/auth/signin`, { username, password }).pipe(
    tap((response:any) => {

      setToken(response.token);

      const payloadBase64 = response.token.split('.')[1];
      const payloadDecoded = this.decodeBase64_UTF_8(payloadBase64);
      const payload = JSON.parse(payloadDecoded);

      setUserPayLoad(payload);
    })
   );
  
  }

  decodeBase64_UTF_8(base64: string): string {
    const binary: string = atob(base64);
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  }
}
