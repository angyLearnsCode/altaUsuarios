import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersServiceService } from '../../services/users-service.service';
import { lastValueFrom } from 'rxjs';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';

@Component({
  selector: 'app-view-user',
  imports: [ButtonsComponent],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css',
})
export class ViewUserComponent {
  @Input() idUser: string = '';
  theUser: IUser | any;
  userService = inject(UsersServiceService);

  async ngOnInit() {
    let id = this.idUser;
    try {
      this.theUser = await this.userService.getById(id);
      console.log(this.theUser);
    } catch (error) {
      console.log(error);
    }
  }
}
