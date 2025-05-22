import { computed, signal } from "@angular/core";

const _userPayLoad = signal<any | null>(loadPayLoadFromLocalStorage()); // DECLARION

export const userPayLoad = computed(() => _userPayLoad());

export function setUserPayLoad(payload: any | null) {
   
    _userPayLoad.set(payload);  // vamos a colocar el payload en el signal local 
    
    if(payload){
        localStorage.setItem('user_payload', JSON.stringify(payload));
    } else {
        localStorage.removeItem('user_payload');
    }
}

function loadPayLoadFromLocalStorage(): any | null {
    const data = localStorage.getItem('user_payload');
    return data ? JSON.parse(data) : null;
}

// ✅ En resumen:
// Un store en Angular 19 no es una clase concreta ni una librería! Es un patrón basado en signals.
// Se usa para mantener y exponer estado reactivo compartido sin añadir dependencias externas.

// Ejemplos de dependencias externas para gestionar estado en Angular:
//
// 1. NgRx: Inspirado en Redux. Potente pero con mucho boilerplate.
// 2. Akita: Gestión de estado basada en entidades. Más sencilla que NgRx. Orientada a proyectos complejos.
// 3. NgXs: Más simple y declarativo. Usa decoradores y clases. Menos verboso que NgRx.
//
// 📌 Todas estas librerías externas se instalan con npm.
// Gracias a signals (Angular 16+), puedes evitar estas dependencias para muchos casos de uso comunes.
