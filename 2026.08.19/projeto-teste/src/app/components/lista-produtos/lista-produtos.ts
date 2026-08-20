import { Component } from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = [
    { nome: 'Mouse', preco: 122 },
    { nome: 'Teclado', preco: 252 },
  ];
}
