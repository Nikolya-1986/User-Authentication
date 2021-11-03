import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AuthEmitter } from 'src/app/shared/emitters/auth.emitter';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  authenticated = false;

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    AuthEmitter.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  // logout(): void {
  //   this.authService.logout()
  //     .subscribe(() => this.authInticated = false);
  // }
  logout(): void {
    this.http.post('http://localhost:8100/api/logout', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
  }

}
