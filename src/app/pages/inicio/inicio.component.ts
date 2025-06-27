import { T } from '@angular/cdk/portal-directives.d-DbeNrI5D';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { IonicModule } from '@ionic/angular';
import { IonCard, IonCardTitle, IonCardHeader, IonCardContent } from "@ionic/angular/standalone";
import { CalculadoraService } from 'src/app/services/calculadora.service';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: false,
})
export class InicioComponent  implements OnInit {

  operacion: string = '';
  resultado: number = 0;

  valorActual: string = '';
  acumulado: number = 0;
  operador: string | null = null;

  numerosLista: string[][] = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9']
];

  funcionesLista: string[]=
  [
    '√','log','sin', 'cos','tan', 'asin','atan', 'acos'
  ]

  operaciones: string[] =
  [
    '+','-','*','/','^'
  ]


  constructor(

    private calc: CalculadoraService,
    private historial: HistorialService
  )
  {}

  ngOnInit() {

  }

  agregarNumero(num: string)
  {
    this.valorActual += num;
    this.operacion += num;
  }

  ejecutarOperacion(op: string) {
    const numero = parseFloat(this.valorActual);
    if (!this.operador) {
      this.acumulado = numero;
    } else {
      this.acumulado = this.aplicarOperacion(this.operador, this.acumulado, numero);
    }
    this.operador = op;
    this.valorActual = '';
    this.operacion += ` ${op} `;
    this.resultado = this.acumulado;
  }

  aplicarOperacion(op: string, a: number, b: number): number {
    switch (op) {
      case '+': return this.calc.suma(a, b);
      case '-': return this.calc.resta(a, b);
      case '*': return this.calc.multiplicar(a, b);
      case '/': return this.calc.dividir(a, b);
      case '^': return this.calc.potencia(a, b);
      case '%': return a % b;
      default: return b;
    }
  }

  ejecutarCientifica(func: string) {
  const num = parseFloat(this.valorActual);
  let res = 0;

  try {
    switch (func) {
      case '√': res = this.calc.raizCuadrada(num); break;
      case 'log': res = this.calc.logaritmo(num); break;
      case 'ln': res = this.calc.logaritmoNatural(num); break;
      case 'sin': res = this.calc.seno(num); break;
      case 'cos': res = this.calc.coseno(num); break;
      case 'tan': res = this.calc.tangente(num); break;
      case 'asin': res = this.calc.arcoSeno(num); break;
      case 'acos': res = this.calc.arcoCoseno(num); break;
      case 'atan': res = this.calc.arcoTangente(num); break;
      default: throw new Error('Función no soportada');
    }

    this.valorActual = res.toString();
    this.operacion = `${func}(${num})`;
    this.resultado = res;
    this.historial.agregarAlHistorial(this.operacion, this.resultado);

  } catch (error: any) {
    alert(error.message); //Mensaje que muestra el error 
  }
}


calcular() {
  if (!this.operador || !this.valorActual) return;
  const num = parseFloat(this.valorActual);

  try {
    this.resultado = this.aplicarOperacion(this.operador, this.acumulado, num);
    this.historial.agregarAlHistorial(`${this.acumulado} ${this.operador} ${num}`, this.resultado);
    this.operacion = this.resultado.toString();
    this.valorActual = this.resultado.toString();
    this.operador = null;
  } catch (error: any) {
    alert(error.message);
  }
}

  borrar() {
    this.operacion = '';
    this.resultado = 0;
    this.valorActual = '';
    this.acumulado = 0;
    this.operador = null;
  }

  cambiarSigno() {
  if (!this.valorActual) return;

  if (this.valorActual.startsWith('-')) {
    this.valorActual = this.valorActual.substring(1);
  } else {
    this.valorActual = '-' + this.valorActual;
  }
  this.operacion = this.valorActual;
}



}
