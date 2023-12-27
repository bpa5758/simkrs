import { Component, inject } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { LogoHomeComponent } from 'src/app/shared/logo-home/logo-home.component';

@Component({
  selector: 'app-offcanvas-menu',
  standalone: true,
  imports: [SideMenuComponent, LogoHomeComponent],
  templateUrl: './offcanvas-menu.component.html',
  styleUrl: './offcanvas-menu.component.css',
})
export class OffcanvasMenuComponent {
  activeOffcanvas = inject(NgbActiveOffcanvas);
}
