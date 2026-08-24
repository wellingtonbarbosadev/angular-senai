import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { PrecoBrlFormatadoPipe } from '../../../shared/pipes/preco-brl-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoBrlFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  @Input() nome = '';
  @Input() preco = 0;
  @Output() produtoSelecionado = new EventEmitter<{ nome: string; preco: number }>();

  selecionarProduto() {
    this.produtoSelecionado.emit({ nome: this.nome, preco: this.preco });
  }
}
