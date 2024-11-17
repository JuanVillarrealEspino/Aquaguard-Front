import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContactService, ContactForm } from './page/services/contact.service';
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)] y ngForm
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    message: '',
  };
  
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private contactService: ContactService) {}

  onSubmit() {
    console.log('Formulario enviado:', this.formData);
    this.contactService.submitContactForm(this.formData).subscribe(
      (response) => {
        this.successMessage = '¡Tu mensaje fue enviado con éxito!';
        this.errorMessage = '';
        this.resetForm();
      },
      (error) => {
        this.errorMessage = 'Ocurrió un error al enviar el formulario. Inténtalo de nuevo.';
        this.successMessage = '';
        console.error('Error al enviar el formulario de contacto:', error);
      }
    );
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }
}
