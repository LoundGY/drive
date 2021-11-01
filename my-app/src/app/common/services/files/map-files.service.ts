import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableRow } from '../../interfaces/table.interface';
import { mapFiles } from '../../../features/table/maps/constants/maps.constants';
import { Observable, from } from 'rxjs';
import { scan } from 'rxjs/operators';

@Injectable()
export class MapFiles {
  constructor(private http: HttpClient) {}
  public files: TableRow[];

  getData(): TableRow[] {
    const files$ = from(mapFiles).pipe(scan((acc, val) => acc.concat(val), []));
    files$.subscribe((val) => {
      this.files = val;
    });
    return this.files;
  }
}
