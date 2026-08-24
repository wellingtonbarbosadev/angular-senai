import { CurrencyPipe, formatCurrency } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precoBrlFormatado',
})
export class PrecoBrlFormatadoPipe implements PipeTransform {
  transform(value?: number | unknown): unknown {
    if (value == null || typeof value !== "number") return null;

    
    const [_, amount] = formatCurrency(value, 'pt-BR', 'R$', 'BRL', '1.2-2').split('R$');

    return `R$${amount}`;
  }
}
