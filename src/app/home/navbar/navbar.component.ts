import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoHomeComponent } from 'src/app/shared/logo-home/logo-home.component';
import { RouterModule } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { OffcanvasMenuComponent } from '../offcanvas-menu/offcanvas-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LogoHomeComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  private offcanvasService = inject(NgbOffcanvas);
  openMenu() {
    const offcanvasRef = this.offcanvasService.open(OffcanvasMenuComponent);
    offcanvasRef.componentInstance.name = 'World';
  }
}
