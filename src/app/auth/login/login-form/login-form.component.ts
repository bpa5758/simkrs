import { Component } from '@angular/core';
import { LogoCompanyComponent } from 'src/app/shared/logo-company/logo-company.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [LogoCompanyComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {}
