import { HttpInterceptorFn } from "@angular/common/http";
import { token } from "../stores/auth.store";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

    const authToken = token();

    if(!authToken) return next(req);

    const requestConToken = req.clone({
        setHeaders: {
            Authorization: `Bearer ${authToken}`
        }
    });

    return next(requestConToken);

    // ⚠️ Limitaciones del método clone() en HttpRequest:
    // 
    // 1. No se puede cambiar el tipo genérico <T> de la respuesta.
    //    Ejemplo: una HttpRequest<PatitoGoma> no se puede convertir a HttpRequest<Candelabro> al clonar.
    //
    // 2. clone() siempre crea una nueva instancia. No modifica la petición original.
    //
    // 3. No se pueden cambiar propiedades internas. Solo acepta opciones tipo method, url, headers, body, etc.

    // ✅ Casos en los que puede tener sentido cambiar el verbo HTTP con req.clone():
    //
    // 1. Reintento como 'POST' tras un 'GET' fallido:
    //    Por ejemplo, si el backend acepta reenviar los mismos datos como POST ante un error temporal.
    //
    // 2. Conversión dinámica según contexto:
    //    Una petición generada como 'GET' puede transformarse en 'PUT', 'PATCH', etc., según la lógica de negocio.
    //
    // 3. Redirección de un 'DELETE' a un 'POST':
    //    Algunos backends implementan el borrado lógico ('soft delete') mediante un endpoint POST.
    //
    // ⚠️ Advertencia:
    //    Cambiar el verbo HTTP rompe la semántica REST si no se hace con cuidado.
    //    Solo debe aplicarse si el backend lo permite y está documentado para soportarlo correctamente.

}