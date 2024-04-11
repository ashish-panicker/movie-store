import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../../../users/service/user.service';
import { Router, RouterLink } from '@angular/router';
import { DashBoardService } from '../../../dashboard/services/dashboard.service';
import { Store } from '@ngrx/store';
import { dashBoardActions } from '../../../dashboard/store/actions';

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
  service = inject(DashBoardService)

  constructor(private store: Store){}
  
  load(url:string){
    this.service.inSelection.set(url)
    this.store.dispatch(dashBoardActions.load())
  }
  
  login(url:string){
    this.router.navigateByUrl(url)
  }
  
  logout() {
    this.userService.logout();
  }
}
