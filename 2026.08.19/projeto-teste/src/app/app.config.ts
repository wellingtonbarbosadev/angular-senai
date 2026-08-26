import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { provideRouter } from '@angular/router';
import { LOCALE_ID } from '@angular/core';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';

registerLocaleData(localePt, 'pt-BR');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};
