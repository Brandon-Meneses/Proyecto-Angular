import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Output() mensajeHijo= new EventEmitter<string>();
  @Output() incrementarHijo= new EventEmitter<string>();
  @Output() decrementarHijo= new EventEmitter<string>();

  mensaje: string =''; //variable que se va a enviar al padre

  enviarMensaje() {
    this.mensajeHijo.emit(this.mensaje);
  }
  incrementar() {
    this.incrementarHijo.emit();
  }
  decrementar() {
    this.decrementarHijo.emit();
  }
}
