import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  userService = inject(UserService);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.nonNullable.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
    console.log(this.userService.currentUser());
  }

  ngOnInit(): void {
    
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    const rawForm = this.loginForm.getRawValue();
    this.userService
      .login(rawForm.username, rawForm.password)
      .subscribe(() => this.router.navigateByUrl('/'));
    this.isSubmitted = true;
  }
}
