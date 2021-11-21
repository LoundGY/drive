import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public plus: string = '../../../assets/img/plus.svg';
  public menuRoutes: string[] = ['all', 'map', 'image', 'movie', 'other'];
  public index: number = 0;
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    switch (this.router.url) {
      case '/drive/maps':
        {
          this.index = 1;
        }
        break;
      case '/drive/images':
        {
          this.index = 2;
        }
        break;
      case '/drive/movies':
        {
          this.index = 3;
        }
        break;
      case '/drive/other':
        {
          this.index = 4;
        }
        break;
      default:
        {
          this.index = 0;
        }
        break;
    }
  }

  public changeIndex(newIndex: number): void {
    this.index = newIndex;
  }
}
