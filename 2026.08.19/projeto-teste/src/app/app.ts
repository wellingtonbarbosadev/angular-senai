import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { login, logout, usuarioLogado } from './core/auth';
import { MatButtonModule } from '@angular/material/button';
import { Header } from './shared/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatButtonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('projeto-teste');

  usuarioLogado = usuarioLogado
  login = login
  logout = logout
}
