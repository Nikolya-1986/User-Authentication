import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:8100/api"
  public error$: Subject<string> = new Subject<string>()//Subject будет имитить новые события (значения)
  
  constructor(
    private http: HttpClient
  ) { }

  private errorsBackend(errorHttp: HttpErrorResponse) {
    const message = errorHttp.error.message

    switch (message) {
      case "Invalid email":
        this.error$.next('Invalid email address!!!')
        break
      case "Invalid password":
        this.error$.next('Invalid password!!!')
        break
      case "Email not found":// не работает этот case
        this.error$.next('The user with the email address is not registered!!!')
        break 
      case "This email is already registered":
        this.error$.next('This email is already registered!!!')
        break
    }

    console.log(message)
    return throwError(errorHttp)
  }
  
  signUp(name: string, email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.authUrl}/register`, {name, email, password})
      .pipe(
        catchError(this.errorsBackend.bind(this))
      )
  }

  login(user: User): Observable<any> {
    return this.http.post<User>(`${this.authUrl}/login`, user, { withCredentials: true })
      .pipe(
        catchError(this.errorsBackend.bind(this))
      )
  }

  logout() {
    return this.http.post(`${this.authUrl}/logout`, {}, { withCredentials: true })
  }
}
// Свойство XMLHttpRequest.withCredentials это Boolean который определяет, должны ли создаваться кросс-доменные Access-Control запросы с 
//использованием таких идентификационных данных как cookie, авторизационные заголовки или TLS сертификаты. Настройка withCredentials бесполезна 
//при запросах на тот же домен. Вдобавок, этот флаг также используется для определения, будут ли проигнорированы куки переданные в ответе. 
//Значение по умолчанию - false. XMLHttpRequest с другого домена не может установить cookie на свой собственный домен в случае, если перед 
//созданием этого запроса флаг withCredentials не установлен в true