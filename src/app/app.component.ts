import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './users/service/user.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  userService = inject(UserService);
  constructor() {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      if (user) {
        user.getIdToken(true).then((t) => {
          this.userService.currentUser.set({
            username: user.displayName!,
            email: user.email!,
            token: t,
          });
        });
      } else {
        this.userService.currentUser.set(null);
      }
    });
  }
}
