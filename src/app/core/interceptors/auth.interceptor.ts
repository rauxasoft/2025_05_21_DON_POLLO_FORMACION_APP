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

    // En el proceso de clonación se podría cambiar cualquier cosa?
}