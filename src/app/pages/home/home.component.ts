import { Component, inject } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { IUser } from '../../interfaces/iuser.interface';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userService = inject(UsersServiceService);
  arrUsersObservable: IUser[] = [];
  router = inject(Router);

  async loadUsers() {
    this.userService.getAllObservable().subscribe({
      next: (data) => {
        this.arrUsersObservable = data.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnInit() {
    this.loadUsers();
  }

  deleteUser(event: Boolean) {
    if (event) {
      this.loadUsers();
    }
  }

  gotoPrev() {}

  gotoNext() {}
}
