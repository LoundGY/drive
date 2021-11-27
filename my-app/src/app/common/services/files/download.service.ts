import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DownloaddService {
   private baseUrl: string = '';
  //private baseUrl: string = 'http://drive';
  constructor(private http: HttpClient) {}

  download(file: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/functions/drive/download?filename=` + file,
      {
        responseType: 'blob',
      }
    );
  }
}
