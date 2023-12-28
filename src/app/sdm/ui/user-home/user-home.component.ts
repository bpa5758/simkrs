import { Component, inject } from '@angular/core';
import { ListUserComponent } from '../list-user/list-user.component';
import { SearchUserComponent } from '../../search-user/search-user.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterUserComponent } from '../../register-user/register-user.component';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [ListUserComponent, SearchUserComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css',
})
export class UserHomeComponent {
  private modalService = inject(NgbModal);
  onRegister() {
    const modalRef = this.modalService.open(RegisterUserComponent);
    modalRef.componentInstance.name = 'World';
  }
}
