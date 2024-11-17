import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto asegura que el servicio esté disponible en toda la aplicación
})
export class WaterUsageService {
  private apiUrl = 'http://localhost:8080/api/water-usage/calculate';

  constructor(private http: HttpClient) {}

  calculateWaterUsage(data: any): Observable<number> {
    return this.http.post<number>(this.apiUrl, data);
  }
}
