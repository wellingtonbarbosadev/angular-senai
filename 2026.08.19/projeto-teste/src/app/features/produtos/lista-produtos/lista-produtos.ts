import { Component, computed, effect, signal } from '@angular/core';
import { Produto } from '../produto/produto';

type ProdutoType = { nome: string; preco: number }
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  constructor() {
    effect(() => {
      if (typeof document !== "undefined") {
        document.title = `${this.totalProdutos()} - Minha loja`
      }
    })

    effect(() => {
      console.log(`Lista de produtos alterada: ${this.produtos()}`);
      console.log(`Valor total atualizado: ${this.valorTotal()}`);
    });
  }

  exibirProdutos(produto: ProdutoType) {
    console.log(produto);
    this.produtoSelecionado.set(produto)
  }

  adicionarProduto() {
    this.produtos.update((listaAtual) => [...listaAtual, { nome: 'Teclado', preco: 250 }]);
  }

  totalProdutos = computed(() => this.produtos().length);

  produtoSelecionado = signal<ProdutoType | null>(null)

  valorTotal = computed(() => {
    return this.produtos().reduce((total, item) => total + item.preco, 0);
  });

  produtos = signal([
    { nome: 'Mouse', preco: 122 },
    { nome: 'Teclado', preco: 252 },
  ]);
}
