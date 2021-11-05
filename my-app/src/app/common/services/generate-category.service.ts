import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { scan } from 'rxjs/operators';

@Injectable()
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
}
