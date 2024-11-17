import { Component } from '@angular/core';
import { WaterUsageService } from '../services/water-usage.service';
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)] y ngForm
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recursos',
  standalone: true, // Indica que este componente es independiente
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css'],
  imports: [CommonModule, FormsModule], // Importa los módulos necesarios aquí
})

export class RecursosComponent {
  formData = {
    showerMinutesPerDay: null,      // Minutos en la ducha
    dishwashingPerWeek: null,   // Veces que lavas platos
    laundryLoadsPerWeek: null,    // Cargas de ropa lavadas
    potableWaterPerDay: null,  // Litros para regar plantas
    gardenIrrigationMinutesPerWeek: null, // Minutos de riego en jardín
    otherUsesPerDay: null        // Litros para otras actividades
  };
  result: number | null = null;
  message: string = '';

  constructor(private waterUsageService: WaterUsageService) {}

  onSubmit() {
    this.waterUsageService.calculateWaterUsage(this.formData).subscribe(
      (response: number) => {
        this.result = response;

        // Comparar con el promedio (por ejemplo, 200 litros por día -> 1400 litros por semana)
        const averageUsage = 1400;
        if (this.result < averageUsage) {
          this.message = `¡Bien hecho! Tu huella hídrica (${this.result} litros/semana) está por debajo del promedio.`;
        } else {
          this.message = `Debes mejorar. Tu huella hídrica (${this.result} litros/semana) está por encima del promedio.`;
        }
      },
      (error) => {
        console.error('Error al calcular la huella hídrica:', error);
      }
    );
  }
}

