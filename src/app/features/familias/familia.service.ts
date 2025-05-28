import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Familia } from "./familia";
import { Observable } from "rxjs";
import { API_BASE_URL } from "../../tokens/api-base-url.token";

@Injectable({providedIn: 'root'})
export class FamiliaService {

    private http = inject(HttpClient);
    private baseURL = inject(API_BASE_URL);

    getAll(): Observable<Familia[]> {
        return this.http.get<Familia[]>(`${this.baseURL}/familias`);
    }

}