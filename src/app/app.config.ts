import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { LINKEDIN_SERVICE, RealLinkedinService } from './service/linkedin.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(), {
      provide: "linkedInProfileServiceUrl",
      useValue: "https://linkedin-profile-grabber-76184862476.us-east1.run.app"
    }, {
      provide: LINKEDIN_SERVICE,
      useClass: RealLinkedinService
    }]
};
