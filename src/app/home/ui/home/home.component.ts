import { Component } from '@angular/core';
import { SideMenuComponent } from '../../side-menu/side-menu.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SideMenuPlacholderComponent } from '../side-menu-placholder/side-menu-placholder.component';
import { NavBarPlaceholderComponent } from '../nav-bar-placeholder/nav-bar-placeholder.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SideMenuComponent,
    NavbarComponent,
    RouterModule,
    SideMenuPlacholderComponent,
    NavBarPlaceholderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
