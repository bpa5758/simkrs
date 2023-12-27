import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateInterface } from './shared/data-access/interface/app.state.interface';
import { getAboutAction } from './shared/data-access/store/about/about.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet],
})
export class AppComponent {
  store = inject(Store<AppStateInterface>);
  aboutSimkrs = this.store.dispatch(getAboutAction());
  title = 'simkrs';
}
