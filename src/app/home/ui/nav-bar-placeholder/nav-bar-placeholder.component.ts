import { Component } from '@angular/core';
import { LogoHomeComponent } from 'src/app/shared/logo-home/logo-home.component';

@Component({
  selector: 'app-nav-bar-placeholder',
  standalone: true,
  imports: [LogoHomeComponent],
  templateUrl: './nav-bar-placeholder.component.html',
  styleUrl: './nav-bar-placeholder.component.css',
})
export class NavBarPlaceholderComponent {}
