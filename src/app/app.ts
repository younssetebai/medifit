import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { HeroSection } from './hero-section/hero-section';
import { MainSection } from './main-section/main-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header, HeroSection, MainSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Medcine');
}
