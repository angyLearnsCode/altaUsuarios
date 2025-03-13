import { Component, inject } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { IResponse } from '../../interfaces/iresponse.interface';
import { IUser } from '../../interfaces/iuser.interface';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-home',
  imports: [UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userService = inject(UsersServiceService);
  arrUsersObservable: IUser[] = [];

  async ngOnInit() {
    this.userService.getAllObservable().subscribe({
      next: (data) => {
        this.arrUsersObservable = data.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
