import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment.development';
import { AppStateInterface } from '../data-access/interface/app.state.interface';
import { aboutSelector } from '../data-access/store/about/about.selectors';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-logo-company',
  standalone: true,
  imports: [NgOptimizedImage, AsyncPipe],
  templateUrl: './logo-company.component.html',
  styleUrl: './logo-company.component.css',
})
export class LogoCompanyComponent {
  store = inject(Store<AppStateInterface>);
  env = environment;
  dataAbout$ = combineLatest({
    about: this.store.select(aboutSelector),
  });
}
