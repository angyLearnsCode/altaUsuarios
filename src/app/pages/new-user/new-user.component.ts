import { Component, inject, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersServiceService } from '../../services/users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  @Input() idUser: string = '';
  userForm: FormGroup = new FormGroup({}, []);
  userService = inject(UsersServiceService);
  router = inject(Router);
  user!: IUser;
  title: string = 'Registrar un nuevo usuario';

  checkControl(controlName: string, errorName: string): boolean | undefined {
    return (
      this.userForm.get(controlName)?.hasError(errorName) &&
      this.userForm.get(controlName)?.touched
    );
  }

  async ngOnInit() {
    if (this.idUser) {
      try {
        this.user = await this.userService.getById(this.idUser);
        this.title = 'Actualizar datos de usuario';
      } catch (error) {
        console.log(error);
      }
    }
    this.userForm = new FormGroup(
      {
        _id: new FormControl(this.idUser || null, []),
        first_name: new FormControl(this.user?.first_name || '', [
          Validators.required,
          Validators.minLength(3),
        ]),
        last_name: new FormControl(this.user?.last_name || '', [
          Validators.required,
          Validators.minLength(3),
        ]),
        email: new FormControl(this.user?.email || '', [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        ]),
        image: new FormControl(this.user?.image || '', [Validators.required]),
      },
      []
    );
  }

  getDataForm() {
    let response: IUser | any;
    try {
      if (this.userForm.value._id) {
        response = this.userService.update(this.userForm.value);
      } else {
        response = this.userService.insert(this.userForm.value);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(this.userForm.value);
    this.router.navigate(['/home']);
  }
}
