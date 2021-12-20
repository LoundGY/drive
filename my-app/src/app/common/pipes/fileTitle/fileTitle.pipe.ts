import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileTitle',
})
export class FileTitlePipe implements PipeTransform {
  transform(value: string, args?: any): string {
    let length = args ? args : 25;
    if (value.length < length) {
      return value;
    }
    return (
      value.substr(0, Math.round(length / 2)) +
      '..' +
      value.substr(value.length - Math.round(length / 2))
    );
  }
}
