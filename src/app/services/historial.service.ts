import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private historial: string[] = [];

constructor() {
  const guardado = localStorage.getItem('historial');
  this.historial = guardado ? JSON.parse(guardado) : [];
}

private guardarHistorialLocal() {
  localStorage.setItem('historial', JSON.stringify(this.historial));
}

agregarAlHistorial(expresion: string, resultado: number): void {
  const entrada = `${expresion} = ${resultado}`;
  this.historial.unshift(entrada);
  this.guardarHistorialLocal();
}

obtenerHistorial(): string[] {
  return this.historial;
}

limpiarHistorial(): void {
  this.historial = [];
  localStorage.removeItem('historial');
}
}
