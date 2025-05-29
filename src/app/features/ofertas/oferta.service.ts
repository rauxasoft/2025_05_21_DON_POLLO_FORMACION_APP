import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from './oferta';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../tokens/api-base-url.token';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private http = inject(HttpClient);
  private baseURL = inject(API_BASE_URL);
  
  getAll(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(`${this.baseURL}/productos/ofertas`);
  }
   
}


