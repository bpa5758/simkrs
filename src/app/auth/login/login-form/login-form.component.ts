import { Component, inject } from '@angular/core';
import { LogoCompanyComponent } from 'src/app/shared/logo-company/logo-company.component';
import { LoginService } from '../data-access/login.service';
import { Router } from '@angular/router';
import { AppStateInterface } from 'src/app/shared/data-access/interface/app.state.interface';
import { Store } from '@ngrx/store';
import { getAboutAction } from 'src/app/shared/data-access/store/about/about.actions';
import {
  aboutFeatureSelector,
  aboutSelector,
} from 'src/app/shared/data-access/store/about/about.selectors';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [LogoCompanyComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  store = inject(Store<AppStateInterface>);
  loginService = inject(LoginService);
  router = inject(Router);
  aboutSimkrs = this.store.dispatch(getAboutAction());
  about = this.store.select(aboutSelector);

  onSubmit() {
    this.router.navigateByUrl('/home');
  }
}
