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

  download(files: any[], folders: any[], directory: string): Observable<any> {
    const ids = files.join('|');
    return this.http.get(
      `${this.baseUrl}/functions/drive/download?ids=` +
        ids +
        '&current=' +
        directory +
        `&folders=` +
        JSON.stringify(folders),
      {
        responseType: 'blob',
      }
    );
  }
}
