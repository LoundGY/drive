import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl: string = '';
  //private baseUrl: string = 'http://drive';

  public post: number;

  constructor(private http: HttpClient) {}

  getPost(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/functions/users/post.php`)
      .pipe(map((user: any) => user.post));
  }
}
