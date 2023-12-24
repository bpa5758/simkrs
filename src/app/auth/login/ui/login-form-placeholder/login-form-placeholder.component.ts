import { Component, inject } from '@angular/core';
import { LogoCompanyComponent } from 'src/app/shared/logo-company/logo-company.component';
import { LoginService } from '../../data-access/login.service';

@Component({
  selector: 'app-login-form-placeholder',
  standalone: true,
  imports: [LogoCompanyComponent],
  templateUrl: './login-form-placeholder.component.html',
  styleUrl: './login-form-placeholder.component.css',
})
export class LoginFormPlaceholderComponent {
  loginService = inject(LoginService);
}
