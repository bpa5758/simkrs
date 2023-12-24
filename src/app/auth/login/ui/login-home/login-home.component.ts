import { Component } from '@angular/core';
import { LoginFormComponent } from '../../login-form/login-form.component';
import { LoginFormPlaceholderComponent } from '../login-form-placeholder/login-form-placeholder.component';

@Component({
  selector: 'app-login-home',
  standalone: true,
  imports: [LoginFormComponent, LoginFormPlaceholderComponent],
  templateUrl: './login-home.component.html',
  styleUrl: './login-home.component.css',
})
export class LoginHomeComponent {}
