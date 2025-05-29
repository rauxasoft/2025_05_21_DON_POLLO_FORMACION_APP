import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { API_BASE_URL } from './tokens/api-base-url.token';
import { APP_VERSION } from './tokens/app-version.token';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { POLLING_SPEED } from './tokens/polling-speed.token';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
              provideRouter(routes),
              provideHttpClient(withInterceptors([authInterceptor])),
              { provide: API_BASE_URL, useValue: 'http://localhost:8080' },
              { provide: POLLING_SPEED, useValue: 10000 },
              { provide: APP_VERSION, useValue: '1.0.0'}]
};
