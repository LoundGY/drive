import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/common/interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class LoginService {
  //private baseUrl: string = '';
  private baseUrl: string = 'http://drive';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  loginSupport() {
    const secret = 'NEU!yhqp5GKDX,t06s3ikAow';
    const authUrl = 'https://support.seacraft.eu/drive/getUserData.php?secret=';
    window.location.href = authUrl + secret;
  }

  login(emailAddress: string, password: string) {
    return this.http
      .post<any>(`${this.baseUrl}/functions/auth/login.php`, {
        emailAddress,
        password,
      })
      .pipe(
        map((user) => {
          if (user.ok) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
          } else {
            return user;
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
