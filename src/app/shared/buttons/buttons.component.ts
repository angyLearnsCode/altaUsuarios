import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { RouterLink } from '@angular/router';
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
  @Input() myUser!: IUser;
  userService = inject(UsersServiceService);

  deleteUser(id: any) {
    toast.warning(
      `Vas a borrar al usuario ${this.myUser.first_name} ${this.myUser.last_name}`,
      {
        action: {
          label: 'Aceptar',
          onClick: async () => {
            let response = await this.userService.delete(id);
          },
        },
      }
    );
  }
}
