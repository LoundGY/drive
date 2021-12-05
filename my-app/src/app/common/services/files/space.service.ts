import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpaceService {
  private baseUrl: string = '';
  //private baseUrl: string = 'http://drive';
  public size_space: string = '';

  constructor(private http: HttpClient) {}

  getSpace(): Observable<any> {
    const space$ = this.http
      .get(`${this.baseUrl}/functions/drive/space.php`)
      .pipe(map((data: any) => data.data));
    return space$;
  }
}
