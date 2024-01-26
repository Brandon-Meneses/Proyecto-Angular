import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Output() mensajeDesdeHijo= new EventEmitter<string>();
  @Output() incrementarHijo= new EventEmitter<void>();
  @Output() decrementarHijo= new EventEmitter<void>();

  mensaje: string =''; //variable que se va a enviar al padre

  enviarMensaje() {
    this.mensajeDesdeHijo.emit(this.mensaje);
  }
  incrementar() {
    this.incrementarHijo.emit();
  }
  decrementar() {
    this.decrementarHijo.emit();
  }
}
