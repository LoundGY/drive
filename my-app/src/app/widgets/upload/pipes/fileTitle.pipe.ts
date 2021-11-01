import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileTitle',
})
export class FileTitlePipe implements PipeTransform {
  transform(value: string, args?: any): string {
    if (value.length < 10) {
      return value;
    }
    return value.substr(0, 4) + '..' + value.substr(value.length - 5);
  }
}
