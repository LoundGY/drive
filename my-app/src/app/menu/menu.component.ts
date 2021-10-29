import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public plus: string = '../../assets/img/plus.svg';
  public menuRoutes: string[] = ['all', 'maps', 'images', 'movies', 'other'];
  index: number = 0;

  public changeIndex(newIndex: number): void {
    this.index = newIndex;
  }
}
