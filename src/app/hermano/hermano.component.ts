import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit{
  nombre?: string;
  // constructor(private _servicioFamiliar : ServicioFamiliarService) { 
    
  // }
  private _servicioFamiliar2 = inject(ServicioFamiliarService);

  ngOnInit(): void {
    this._servicioFamiliar2.setHermanoPequeno('pedro');
    this.nombre = this._servicioFamiliar2.getHermanoPequeno();
  }
  saludar() {
    this._servicioFamiliar2.saludar(this._servicioFamiliar2.getHermanoGrande() || '');
  }
  preguntar() {
    console.log(this._servicioFamiliar2.preguntarPorHijo());
  }
}
