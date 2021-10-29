import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
})
export class SwitcherComponent {
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  public isMenuOpen: boolean = false;
  public languages: string[] = ['en', 'pl', 'ru'];

  constructor(private renderer: Renderer2, public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(this.languages);
    this.renderer.listen('window', 'click', (e: Event) => {
      try {
        if (
          e.target !== this.toggleButton.nativeElement &&
          e.target !== this.menu.nativeElement
        ) {
          this.isMenuOpen = false;
        }
      } catch {
        console.log('click outside');
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  public switch(lang: string): void {
    this.translate.use(lang);
  }
}
