// src/app/core/stores/auth.store.ts
import { signal, computed } from '@angular/core';

const _token = signal<string | null>(loadTokenFromLocalStorage());

export const token = computed(() => _token());

export function setToken(value: string) {
  _token.set(value);
  localStorage.setItem('token', value);
}

export function clearToken() {
  _token.set(null);
  localStorage.removeItem('token');
}

function loadTokenFromLocalStorage(): string | null {
  return localStorage.getItem('token');
}
