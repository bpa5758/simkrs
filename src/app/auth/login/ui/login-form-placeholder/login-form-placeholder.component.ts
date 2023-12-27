import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { LogoCompanyComponent } from 'src/app/shared/logo-company/logo-company.component';

@Component({
  selector: 'app-login-form-placeholder',
  standalone: true,
  imports: [LogoCompanyComponent, AsyncPipe],
  templateUrl: './login-form-placeholder.component.html',
  styleUrl: './login-form-placeholder.component.css',
})
export class LoginFormPlaceholderComponent {}
