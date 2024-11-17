import { Component } from '@angular/core';
import { ContactService, ContactForm } from '../services/contact.service';
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)] y ngForm
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  imports: [CommonModule, FormsModule], 
})
export class ContactoComponent {
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
