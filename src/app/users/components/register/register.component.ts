import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  onSubmit(){
    this.isSubmitted = true
  }
}
