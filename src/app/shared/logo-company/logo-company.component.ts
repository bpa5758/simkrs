import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-company',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './logo-company.component.html',
  styleUrl: './logo-company.component.css',
})
export class LogoCompanyComponent {}
