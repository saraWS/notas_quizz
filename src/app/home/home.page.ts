import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importación necesaria para ngModel
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption, FormsModule],
})
export class HomePage {
  selectedSemestre: string | undefined; // Variable para guardar el semestre seleccionado

  constructor() {}

  crearMateria() {
    if (this.selectedSemestre) {
      // Lógica para crear materia según el semestre
      console.log(`Registrando materia en el semestre ${this.selectedSemestre}`);
    } else {
      console.log('Por favor selecciona un semestre antes de registrar una materia');
    }
  }

  modificarMateria() {
    if (this.selectedSemestre) {
      // Lógica para modificar materia según el semestre
      console.log(`Modificando materia en el semestre ${this.selectedSemestre}`);
    } else {
      console.log('Por favor selecciona un semestre antes de modificar una materia');
    }
  }

  eliminarMateria() {
    if (this.selectedSemestre) {
      // Lógica para eliminar materia según el semestre
      console.log(`Eliminando materia en el semestre ${this.selectedSemestre}`);
    } else {
      console.log('Por favor selecciona un semestre antes de eliminar una materia');
    }
  }
}
