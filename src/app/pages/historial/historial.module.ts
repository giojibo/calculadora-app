import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialRoutingModule } from './historial-routing.module';
import { HistorialComponent } from './historial.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [HistorialComponent],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    ComponentsModule,
    IonicModule
  ]
})
export class HistorialModule { }
