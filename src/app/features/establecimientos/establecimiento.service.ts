import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { API_BASE_URL } from "../../tokens/api-base-url.token";
import { Observable } from "rxjs";
import { EstablecimientoDTO2 } from "./establecimientoDTO2";

@Injectable({providedIn: 'root'})

export class EstablecimientoService {

    private http = inject(HttpClient);
    private baseURL = inject(API_BASE_URL);

    getAll(): Observable<EstablecimientoDTO2[]> {
        return this.http.get<EstablecimientoDTO2[]>(`${this.baseURL}/establecimientos?view=DTO2`);
    }
}