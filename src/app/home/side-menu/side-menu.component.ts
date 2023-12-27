import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbAccordionModule,
  NgbOffcanvasModule,
} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule, NgbOffcanvasModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {}
