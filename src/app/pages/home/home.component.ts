import { Component, inject } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { IResponse } from '../../interfaces/iresponse.interface';
import { IUser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userService = inject(UsersServiceService);
  arrUsersObservable: IUser[] = [];

  async ngOnInit() {
    this.userService.getAllObservable().subscribe({
      next: (data) => {
        this.arrUsersObservable = data.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
