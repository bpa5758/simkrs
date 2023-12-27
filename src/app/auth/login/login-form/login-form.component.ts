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
  isAboutSubmittingSelector,
} from 'src/app/shared/data-access/store/about/about.selectors';
import { combineLatest } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [LogoCompanyComponent, AsyncPipe],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  store = inject(Store<AppStateInterface>);
  loginService = inject(LoginService);
  router = inject(Router);
  aboutSimkrs = this.store.dispatch(getAboutAction());

  dataAbout$ = combineLatest({
    about: this.store.select(aboutSelector),
    isSubmitting: this.store.select(isAboutSubmittingSelector),
  });

  onSubmit() {
    this.router.navigateByUrl('/home');
  }
}
