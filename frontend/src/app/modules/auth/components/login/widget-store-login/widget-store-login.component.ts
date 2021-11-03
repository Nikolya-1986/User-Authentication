import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import AppState from 'src/app/modules/posts/store/state';
import { User } from '../../../model/user';
import { AuthService } from '../../../services/auth.service';
import * as userAction from '../../../store/action.registration';

@Component({
  selector: 'app-widget-store-login',
  templateUrl: './widget-store-login.component.html',
  styleUrls: ['./widget-store-login.component.scss']
})
export class WidgetStoreLoginComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    public authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(userLogin: User) {
    console.log("Login User:", userLogin)
    this.store.dispatch(new userAction.LoginUpRequest(userLogin))

    this.authService.login(userLogin).subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
