import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  isSubmitted: boolean = false;
  userService = inject(UserService);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.nonNullable.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    const rawForm = this.registerForm.getRawValue();
    this.userService
      .register(rawForm.email, rawForm.username, rawForm.password)
      .subscribe({
        next: () => {
          this.isSubmitted = true;
          this.router.navigateByUrl('/users')
        },
      });
  }
}
