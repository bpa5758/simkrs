import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AppStateInterface } from '../data-access/interface/app.state.interface';
import { aboutSelector } from '../data-access/store/about/about.selectors';
import { NgOptimizedImage, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-logo-home',
  standalone: true,
  imports: [NgOptimizedImage, AsyncPipe],
  templateUrl: './logo-home.component.html',
  styleUrl: './logo-home.component.css',
})
export class LogoHomeComponent {
  store = inject(Store<AppStateInterface>);
  env = environment;
  dataAbout$ = combineLatest({
    about: this.store.select(aboutSelector),
  });
}
