import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { PrecoBrlFormatadoPipe } from '../../../shared/pipes/preco-brl-formatado-pipe';
import { ProdutoType } from '../lista-produtos/lista-produtos';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoBrlFormatadoPipe, MatButtonModule, MatCardModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  @Input() nome = '';
  @Input() preco = 0;
  @Output() produtoSelecionado = new EventEmitter<{ nome: string; preco: number }>();
  @Output() produtoAdicionado = new EventEmitter<ProdutoType>()

  selecionarProduto() {
    this.produtoSelecionado.emit({ nome: this.nome, preco: this.preco });
  }

  adicionarAoCarrinho() {
    this.produtoAdicionado.emit({nome: this.nome, preco: this.preco})
  }
}
