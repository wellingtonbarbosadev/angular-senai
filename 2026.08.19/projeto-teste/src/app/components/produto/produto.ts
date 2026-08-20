import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../pipes/preco-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  @Input() nome = '';
  @Input() preco = 0;
}
