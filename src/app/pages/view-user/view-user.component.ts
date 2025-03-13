import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersServiceService } from '../../services/users-service.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css',
})
export class ViewUserComponent {
  @Input() idUser: string = '';
  theUser!: IUser;
  usersService = inject(UsersServiceService);

  async ngOnInit() {
    let id = Number(this.idUser);

    try {
      this.theUser = await this.usersService.getById(id);
    } catch (error) {
      console.log(error);
    }
  }
}
