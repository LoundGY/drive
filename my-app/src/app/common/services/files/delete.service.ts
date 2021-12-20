import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteService {
  private baseUrl: string = '';
  //private baseUrl: string = 'http://drive';
  constructor(private http: HttpClient) {}

  delete(file: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/functions/drive/delete?filename=` + file
    );
  }

  deleteFolder(path: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/functions/drive/delete?folder=` + path
    );
  }
}
