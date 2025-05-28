import { signal, computed } from '@angular/core';

const _userPayload = signal<any | null>(loadPayloadFromLocalStorage());

export const userPayload = computed(() => _userPayload());

export function setUserPayload(payload: any | null) {
  _userPayload.set(payload);
  if (payload) {
    localStorage.setItem('user_payload', JSON.stringify(payload));
  } else {
    localStorage.removeItem('user_payload');
  }
}

function loadPayloadFromLocalStorage(): any | null {
  const data = localStorage.getItem('user_payload');
  return data ? JSON.parse(data) : null;
}