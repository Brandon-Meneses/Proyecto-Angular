import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  nombre?: string;
  fecha?: Date= new Date();
  dolar?: number = 3.80;
  pi?: number = Math.PI;
  factor?: number = 0.5;
  
  constructor(private _servicioFamiliar : ServicioFamiliarService) { 


  }
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('juan');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }
  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '');
  }
  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
}
