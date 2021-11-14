import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public plus: string = '../../../assets/img/plus.svg';
  public menuRoutes: string[] = ['all', 'maps', 'images', 'movies', 'other'];
  public index: number = 0;
  constructor(private router: Router, private routeasd: ActivatedRoute) {
    console.log(routeasd.url);
  }
  ngOnInit(): void {
    this.routeasd.queryParams.subscribe((params) => {
      console.log(params);
    });
    setTimeout(() => {
      switch (this.router.url) {
        case '/maps':
          {
            this.index = 1;
          }
          break;
        case '/images':
          {
            this.index = 2;
          }
          break;
        case '/movies':
          {
            this.index = 3;
          }
          break;
        case '/other':
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
    }, 100);
  }

  public changeIndex(newIndex: number): void {
    this.index = newIndex;
  }
}
