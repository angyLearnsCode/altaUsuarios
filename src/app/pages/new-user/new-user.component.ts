import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup(
      {
        first_name: new FormControl('', []),
        last_name: new FormControl('', []),
        email: new FormControl('', []),
        username: new FormControl('', []),
        password: new FormControl('', []),
        repitepassword: new FormControl('', []),
      },
      []
    );
  }
  getDataForm() {}
}
