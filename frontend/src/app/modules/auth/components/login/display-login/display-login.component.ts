import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../../model/user';

@Component({
  selector: 'app-display-login',
  templateUrl: './display-login.component.html',
  styleUrls: ['./display-login.component.scss']
})
export class DisplayLoginComponent implements OnInit {

  @Output() onLogin = new EventEmitter<User>()
  title: string = "Please sign in"
  formLogin!: FormGroup
  
  constructor(
    private formBilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBilder.group({
      email: ["",
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ["",
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
  }

  login() {
    if(this.formLogin.invalid) {
      return
    }

    const userLogin = this.formLogin.getRawValue()
    this.onLogin.emit(userLogin)
  }

}
