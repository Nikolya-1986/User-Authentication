import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import AppState from 'src/app/modules/posts/store/state';
import { User } from '../../../model/user';
import { AuthService } from '../../../services/auth.service';
import * as userAction from '../../../store/action.registration';

@Component({
  selector: 'app-widget-store-registration',
  templateUrl: './widget-store-registration.component.html',
  styleUrls: ['./widget-store-registration.component.scss']
})
export class WidgetStoreRegistrationComponent implements OnInit {

  errorEmailRegistered: string = ""

  constructor(
    private store: Store<AppState>,
    public authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  registration(newUser: User) {
    console.log("Create User:", newUser)
    this.store.dispatch(new userAction.SignUpRequest(newUser))

    this.authService.signUp(newUser.name, newUser.email, newUser.password)
      .subscribe(() => {
        this.router.navigate(['/login'])
      }, errorEmailRegistered => {
          this.errorEmailRegistered = errorEmailRegistered.error.message
      })
  }

}
