import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  plus: string = '../../assets/img/plus.svg';
  menuItems = ['Мои файлы', 'Карты', 'Видео', 'Фото', 'Остальное'];
  index: number = 0;

  filesMap = [
    {
      name: '1.kml',
      author: 'Pushkin Alex',
      size: '54.5 MB',
      category: 'Карты',
      date: new Date(),
    },
    {
      name: '2.mp0',
      author: 'Pushkin Alex',
      size: '5.5 MB',
      category: 'Карты',
      date: new Date(),
    },
  ];
  filesMovie = [
    {
      name: '1.mp3',
      author: 'Pushkin Alex',
      size: '54.5 MB',
      category: 'Видео',
      date: new Date(),
    },
    {
      name: '2.mp3',
      author: 'Pushkin Alex',
      size: '5.5 MB',
      category: 'Видео',
      date: new Date(),
    },
  ];
  filesImg = [
    {
      name: '1.jpg',
      author: 'Pushkin Alex',
      size: '54.5 MB',
      category: 'Фото',
      date: new Date(),
    },
    {
      name: '2.png',
      author: 'Pushkin Alex',
      size: '5.5 MB',
      category: 'Фото',
      date: new Date(),
    },
  ];
  filesOther = [
    {
      name: '1.txt',
      author: 'Pushkin Alex',
      size: '54.5 MB',
      category: 'Текст',
      date: new Date(),
    },
  ];
  files = this.filesMap.concat(this.filesMovie, this.filesImg, this.filesOther);
  ngOnInit(): void {}

  changeIndex(newIndex: number) {
    this.index = newIndex;
    switch (newIndex) {
      case 0:
        {
          this.files = this.filesMap.concat(
            this.filesMovie,
            this.filesImg,
            this.filesOther
          );
        }
        break;
      case 1:
        {
          this.files = this.filesMap;
        }
        break;
      case 2:
        {
          this.files = this.filesMovie;
        }
        break;
      case 3:
        {
          this.files = this.filesImg;
        }
        break;
      case 4:
        {
          this.files = this.filesOther;
        }
        break;
    }
  }
}
