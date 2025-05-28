import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL } from '../../tokens/api-base-url.token';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient);
  private baseURL = inject(API_BASE_URL);
  
  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseURL}/productos`);
  }

  getById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseURL}/productos/${id}`);
  }
    
}
