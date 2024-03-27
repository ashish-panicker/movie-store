import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../../../users/service/user.service';
import { user } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  userService = inject(UserService);
  router = inject(Router)

  logout() {
    this.userService.logout();
  }

  toLogin() {
    this.router.navigateByUrl('users')
  }
}
