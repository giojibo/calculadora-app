import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
  standalone: false
})
export class HistorialComponent  implements OnInit
{
  historial: string[] = [];

  constructor(
    private historialServices: HistorialService,
  )
  { }

  ngOnInit()
  {
    this.actualizarHistorial();
  }

  public actualizarHistorial()
  {
    this.historial = this.historialServices.obtenerHistorial();
  }

  public limpiarHistorial()
  {
    this.historialServices.limpiarHistorial();
    this.actualizarHistorial();
  }
}
