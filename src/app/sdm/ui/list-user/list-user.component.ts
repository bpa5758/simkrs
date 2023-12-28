import { Component, inject } from '@angular/core';
import {
  NgbDropdownModule,
  NgbModal,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from '../../edit-user/edit-user.component';
import { ResetPasswordUserComponent } from '../../reset-password-user/reset-password-user.component';
import { DeleteUserComponent } from '../../delete-user/delete-user.component';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [NgbPaginationModule, NgbDropdownModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
})
export class ListUserComponent {
  private modalService = inject(NgbModal);
  page = 1;
  onEdit() {
    const modalRef = this.modalService.open(EditUserComponent);
    modalRef.componentInstance.name = 'World';
  }
  onResetPassword() {
    const modalRef = this.modalService.open(ResetPasswordUserComponent);
    modalRef.componentInstance.name = 'World';
  }
  onDelete() {
    const modalRef = this.modalService.open(DeleteUserComponent);
    modalRef.componentInstance.name = 'World';
  }
}
