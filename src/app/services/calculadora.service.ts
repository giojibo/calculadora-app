import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() {}

  suma(a: number, b: number): number {
    return a + b;
  }

  resta(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("No se puede dividir entre 0");
    }
    return a / b;
  }

  raizCuadrada(x: number): number {
    if (x < 0) throw new Error('No se puede calcular la raíz de un número negativo');
    return Math.sqrt(x);
  }

  potencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
  }

  logaritmo(x: number): number {
    if (x <= 0) throw new Error('No se puede calcular logaritmo de un número no positivo');
    return Math.log10(x);
  }

  logaritmoNatural(x: number): number {
    if (x <= 0) throw new Error('No se puede calcular logaritmo natural de un número no positivo');
    return Math.log(x);
  }

  seno(x: number): number {
    return Math.sin(x);
  }

  coseno(x: number): number {
    return Math.cos(x);
  }

  tangente(x: number): number {
    // Opcional: podrías verificar si cos(x) es muy cercano a 0 para evitar tangentes indefinidas
    return Math.tan(x);
  }

  arcoSeno(x: number): number {
    if (x < -1 || x > 1) throw new Error('arcsin solo está definido entre -1 y 1');
    return Math.asin(x);
  }

  arcoCoseno(x: number): number {
    if (x < -1 || x > 1) throw new Error('arccos solo está definido entre -1 y 1');
    return Math.acos(x);
  }

  arcoTangente(x: number): number {
    return Math.atan(x);
  }
}
