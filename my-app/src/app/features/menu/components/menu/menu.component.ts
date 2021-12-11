import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SpaceService } from 'src/app/common/services/files/space.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('sidebarMenu') menu: ElementRef;
  public plus: string = '../../../assets/img/plus.svg';
  public menuRoutes: string[] = ['my', 'all', 'map', 'image', 'movie', 'other'];
  public index: number = 0;
  public spaceSize: String = '';
  public menuIsOpen: boolean = false;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private space: SpaceService,
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      const addButt = Array.from(
        this.menu.nativeElement.querySelectorAll('.mainMenu__addFileButton')
      );
      const navLi = Array.from(this.menu.nativeElement.querySelectorAll('li'));
      if (this.menuIsOpen) {
        if (navLi.includes(e.target) || addButt.includes(e.target)) {
          this.menuIsOpen = !this.menuIsOpen;
          // this.cdr.detectChanges();
        }
      }
    });
  }
  ngOnInit(): void {
    switch (this.router.url) {
      case '/drive/my':
        {
          this.index = 0;
        }
        break;
      case '/drive/all':
        {
          this.index = 1;
        }
        break;
      case '/drive/map':
        {
          this.index = 2;
        }
        break;
      case '/drive/image':
        {
          this.index = 3;
        }
        break;
      case '/drive/movie':
        {
          this.index = 4;
        }
        break;
      case '/drive/other':
        {
          this.index = 5;
        }
        break;
      default:
        {
          this.index = 0;
        }
        break;
    }
    this.getSpace();
  }

  public getSpace(): void {
    this.space.getSpace().subscribe((data) => {
      this.spaceSize = data;
    });
  }

  public addFiles(): void {
    const inp = document.getElementById('fileZone');
    if (inp) {
      inp.click();
    } else {
      this.router.navigateByUrl('/drive/my');
      this.index = 0;
      setTimeout(() => {
        const inp1 = document.getElementById('fileZone');
        if (inp1) {
          inp1.click();
        }
      }, 500);
    }
  }

  public changeIndex(newIndex: number): void {
    this.index = newIndex;
    this.getSpace();
  }
}
