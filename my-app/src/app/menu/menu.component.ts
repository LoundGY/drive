import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public plus: string = '../../assets/img/plus.svg';
  public menuItems: string[] = ['Все', 'Карты', 'Фото', 'Видео', 'Остальное'];
  public menuRoutes: string[] = ['all', 'maps', 'images', 'movies', 'other'];
  index: number = 0;

  constructor() {}

  ngOnInit(): void {}

  public changeIndex(newIndex: number): void {
    this.index = newIndex;
  }
}
