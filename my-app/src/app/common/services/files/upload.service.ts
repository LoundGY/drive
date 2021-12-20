import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  //private baseUrl: string = '';
  private baseUrl: string = 'http://drive';
  constructor(private http: HttpClient) {}

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    console.log(file);
    formData.append('file', file);
    formData.append('path', (file as any).path);

    const req = new HttpRequest(
      'POST',
      `${this.baseUrl}/functions/drive/upload`,
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );

    return this.http.request(req);
  }
}
