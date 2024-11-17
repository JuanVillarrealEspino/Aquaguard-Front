import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Configuración de rutas
    provideHttpClient()     // Habilitar HttpClient para solicitudes al backend
  ]
}).catch((err) => console.error(err));
