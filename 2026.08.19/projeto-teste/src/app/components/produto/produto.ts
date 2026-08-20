import { Component } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../pipes/preco-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  nome = 'Mouse';
  preco = 149.99;
  mostrarPreco = true;

  produtos = [
    {
      nome: 'Mouse',
      preco: 149.99,
    },
    {
      nome: 'Teclado',
      preco: 249.99,
    },
    {
      nome: 'Monitor',
      preco: 1349.99,
    },
  ];
}
