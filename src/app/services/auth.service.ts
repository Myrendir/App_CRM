import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../models';
import {catchError, map} from 'rxjs/operators';


const apiUrl = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentClientSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentClientSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentClientSubject.asObservable();
  }

  public get CurrentClientValue(): User {
    return this.currentClientSubject.value;

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(apiUrl + 'api/login', {username, password})
      .pipe(map(
        userData => {
          localStorage.setItem('currentUser', JSON.stringify(userData));
          return userData;
        }
        ),
        catchError(this.handleError<User>('errorLogin')));
  }

  isUserLoggedIn(): boolean {
    const user = localStorage.getItem('currentUser');
    console.log(!(user === null));
    return !(user === null);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  register(identifiant: User): Observable<User> {
    return this.http.post<User>(apiUrl + '/api/signup', identifiant);
  }

  // user_is_admin() {
  //   const is_admin =
  //
  // }
}
