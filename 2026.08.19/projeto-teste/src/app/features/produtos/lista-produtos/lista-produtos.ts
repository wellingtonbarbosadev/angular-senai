import { Component, computed, effect, signal, inject } from '@angular/core';
import { Produto } from '../produto/produto';
import { PrecoBrlFormatadoPipe } from '../../../shared/pipes/preco-brl-formatado-pipe';
import { ProdutosService } from '../produtos.service';

export type ProdutoType = { nome: string; preco: number };
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoBrlFormatadoPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = signal<ProdutoType[]>([]);
  carregando = signal(true)
  erro = signal<string | null>(null);

  service = new ProdutosService()


  constructor() {
    this.carregarProdutos()
    effect(() => {
      if (typeof document !== 'undefined') {
        document.title = `${this.totalProdutos()} - Minha loja`;
      }
    });

    effect(() => console.log(this.carrinho()));

    effect(() => {
      console.log(`Lista de produtos alterada: ${this.produtos()}`);
      console.log(`Valor total atualizado: ${this.valorTotal()}`);
    });
  }

  carregarProdutos() {
    this.erro.set(null);
    this.carregando.set(true)
    this.service.buscarProdutos().subscribe({
      next: (dados) => {
        const produtos = this.service.transformarProdutos(dados)
        this.produtos.set(produtos)
        this.carregando.set(false)
      },
      error: (error) => {
        console.error("Ocorreu um erro ao carregar os produtos:", error);
        this.erro.set(error);
        this.carregando.set(false)
      }
    })
  }

  exibirProdutos(produto: ProdutoType) {
    console.log(produto);
    this.produtoSelecionado.set(produto);
  }

  adicionarProduto() {
    this.produtos.update((listaAtual) => [...listaAtual, { nome: 'Teclado', preco: 250 }]);
  }

  adicionarAoCarrinho(produto: ProdutoType) {
    this.carrinho.update((listaAtual) => [...listaAtual, produto]);
  }

  totalProdutos = computed(() => this.produtos().length);

  carrinho = signal<ProdutoType[]>([]);

  quantidadeCarrinho = computed(() => this.carrinho().length);

  totalCarrinho = computed(() => {
    return this.carrinho().reduce((total, produto) => total + produto.preco, 0);
  });

  produtoSelecionado = signal<ProdutoType | null>(null);

  valorTotal = computed(() => {
    return this.produtos().reduce((total, item) => total + item.preco, 0);
  });

}
