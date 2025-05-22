import { inject } from "@angular/core"
import { Router } from "@angular/router";
import { userPayLoad } from "../stores/user.store";

export const roleGuard = (expectedRoles: string[]) => {

    return () => {
        const router = inject(Router);
        const payload = userPayLoad();
        const roles = payload?.roles || [];

        const authorized = expectedRoles.some(role => roles.includes(role));

        if(!authorized){
            return router.createUrlTree(['/unauthorized']);
        }

        return true;

    }

}