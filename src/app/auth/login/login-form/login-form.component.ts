import { Component, inject } from '@angular/core';
import { LogoCompanyComponent } from 'src/app/shared/logo-company/logo-company.component';
import { LoginService } from '../data-access/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [LogoCompanyComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginService = inject(LoginService);
  router = inject(Router);

  onSubmit() {
    this.router.navigateByUrl('/home');
  }
}
