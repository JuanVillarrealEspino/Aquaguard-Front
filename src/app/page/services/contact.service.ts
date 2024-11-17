import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactForm {
  id?: number; // Este campo será generado por el backend
  name: string;
  email: string;
  message: string;
  createdAt?: string; // Este será asignado automáticamente por el backend
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/contact'; // Cambia el puerto si es necesario

  constructor(private http: HttpClient) {}

  submitContactForm(contactForm: ContactForm): Observable<ContactForm> {
    return this.http.post<ContactForm>(this.apiUrl, contactForm);
  }
}
