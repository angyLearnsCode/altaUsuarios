import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { Router, RouterLink } from '@angular/router';
import { UsersServiceService } from '../../services/users-service.service';
import { toast, NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-buttons',
  imports: [RouterLink],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
  protected readonly toast = toast;
  @Input() myUser: IUser | any;
  userService = inject(UsersServiceService);
  @Output() deleteItemEmit: EventEmitter<Boolean> = new EventEmitter();
  router = inject(Router);
  @Input() return: Boolean = false;

  deleteUser(id: any) {
    toast.warning(
      `Vas a borrar al usuario ${this.myUser.first_name} ${this.myUser.last_name}`,
      {
        action: {
          label: 'Aceptar',
          onClick: async () => {
            let response = await this.userService.delete(id);
            if (this.deleteItemEmit.observed) {
              this.deleteItemEmit.emit(true);
            } else {
              this.router.navigate(['/home']);
            }
            toast.success(`Has borrado a ${this.myUser.first_name} con éxito`);
          },
        },
        cancel: {
          label: 'Cancelar',
        },
      }
    );
  }
}
