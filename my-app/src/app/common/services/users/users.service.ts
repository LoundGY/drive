import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../interfaces/user-table.interface';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private baseUrl: string = '';
  //private baseUrl: string = 'http://drive';
  public users: User[] = [];
  public user: User = {
    id: 0,
    login: '',
    email: '',
    post: '',
  };

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const user$ = this.http
      .get(`${this.baseUrl}/functions/users/all.php`)
      .pipe(map((data: any) => data.data));
    return user$;
  }
  allow(users: any[]): Observable<any> {
    const user$ = this.http.post<any>(
      `${this.baseUrl}/functions/users/allow.php`,
      {
        users,
      }
    );
    return user$;
  }
  ban(users: any[]): Observable<any> {
    const user$ = this.http.post<any>(
      `${this.baseUrl}/functions/users/ban.php`,
      {
        users,
      }
    );
    return user$;
  }
  moder(users: any[]): Observable<any> {
    const user$ = this.http.post<any>(
      `${this.baseUrl}/functions/users/moder.php`,
      {
        users,
      }
    );
    return user$;
  }
}
