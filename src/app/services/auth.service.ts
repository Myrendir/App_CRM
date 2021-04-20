import {Injectable} from '@angular/core';
import {EnvService} from '../env.service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../models';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, public env: EnvService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.env.apiUrl + '/login', {username, password})
      .pipe(map(
        clientData => {
          sessionStorage.setItem('currentUser', JSON.stringify(clientData));
          const tokenStr = 'Bearer' + clientData;
          const decode = jwtDecode(tokenStr);
          console.log('decode :' + decode);
          return clientData;
        }
        ),
        catchError(this.handleError<User>('errorLogin')));
  }

  isUserLoggedIn(): boolean {
    const user = localStorage.getItem('currentUser');
    console.log(!(user === null));
    return !(user === null);
  }

  isUserAdmin(): boolean {
    return (localStorage.getItem('role') === 'USER_ADMIN');
  }


  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
