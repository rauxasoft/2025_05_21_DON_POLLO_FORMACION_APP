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