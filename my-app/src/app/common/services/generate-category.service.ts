import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GenerateCategory {
  constructor(private http: HttpClient) {}
  public category: string = '';
  public videoExt: string[] = ['mp4', 'mp3', 'mpg', 'mov', 'wmv', 'avi'];
  public imageExt: string[] = ['jpeg', 'jpg', 'png', 'gif', 'ico'];
  public mapExt: string[] = ['kml', 'mp0'];
  
  getCategory(name: string): string {
    const fileExt = name.split('.').pop();
    if (this.videoExt.includes(fileExt.toLowerCase())) {
      this.category = 'movie';
    } else if (this.imageExt.includes(fileExt.toLowerCase())) {
      this.category = 'image';
    } else if (this.mapExt.includes(fileExt.toLowerCase())) {
      this.category = 'map';
    } else {
      this.category = 'other';
    }
    return this.category;
  }
  
  public formatBytes(bytes, decimals = 2): string {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
