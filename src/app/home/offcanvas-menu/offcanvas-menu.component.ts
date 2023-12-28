import { Component, inject } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { LogoHomeComponent } from 'src/app/shared/logo-home/logo-home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-offcanvas-menu',
  standalone: true,
  imports: [SideMenuComponent, LogoHomeComponent, RouterModule],
  templateUrl: './offcanvas-menu.component.html',
  styleUrl: './offcanvas-menu.component.css',
})
export class OffcanvasMenuComponent {
  activeOffcanvas = inject(NgbActiveOffcanvas);
  onClose() {
    this.activeOffcanvas.dismiss();
  }
}
