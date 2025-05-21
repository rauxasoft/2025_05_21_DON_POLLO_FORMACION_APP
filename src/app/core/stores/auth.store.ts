import { computed, signal } from "@angular/core";

const _token = signal<any | null>(loadTokenFromLocalStorage());

export const token = computed(() => _token());

export function setToken(value: any | null) {
    _token.set(value);  
    localStorage.setItem('token', value);
}

export function clearToken(){
    _token.set(null);
    localStorage.removeItem('token');
}

function loadTokenFromLocalStorage(): string | null {
    return localStorage.getItem('token');
}