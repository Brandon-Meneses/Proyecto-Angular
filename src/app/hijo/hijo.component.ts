import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Output() mensajeHijo= new EventEmitter<string>();

  mensaje: string =''; //variable que se va a enviar al padre

  enviarMensaje() {
    this.mensajeHijo.emit(this.mensaje);
  }
}
