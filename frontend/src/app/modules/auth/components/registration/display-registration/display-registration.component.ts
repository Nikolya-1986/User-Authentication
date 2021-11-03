import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../../model/user';

@Component({
  selector: 'app-display-registration',
  templateUrl: './display-registration.component.html',
  styleUrls: ['./display-registration.component.scss']
})
export class DisplayRegistrationComponent implements OnInit {

  @Output() onRegistration = new EventEmitter<User>()
  @Input() errorEmailRegistered!: string

  title: string = "Please register"
  formRegistration!: FormGroup
  showDialog = false;
  user: User = new User()

  constructor(
    private formBilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formRegistration = this.formBilder.group({
      name: ["",
        [
          Validators.required,
          Validators.pattern("^[а-яА-ЯёЁa-zA-Z][а-яА-ЯёЁa-zA-Z0-9]+$")
        ]
      ],
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

  registration() {
    if(this.formRegistration.invalid) {
      return
    }

    const newUser: User = {
      name: this.formRegistration.value.name,
      email: this.formRegistration.value.email,
      password: this.formRegistration.value.password,
    }
    
    this.onRegistration.emit(newUser)
  }

  openModal() {
    if(this.formRegistration.valid) {
      this.showDialog = true
    }
  }

    // registration(): void {
  //   this.http.post('http://localhost:8000/api/register', this.formRegistration.getRawValue())
  //     .subscribe(() => {
  //       this.router.navigate(['/login'])
  //     }, error => {
  //       this.error = error.error.message
  //       console.log(this.error)
  //     }
  //   );
  // }
}
