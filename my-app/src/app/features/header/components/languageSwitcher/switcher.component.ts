import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
})
export class SwitcherComponent {
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  public isMenuOpen: boolean = false;
  public currentLang: string;
  public languages: string[] = ['en', 'pl', 'ru'];
  languageControl = new FormControl('', Validators.required);

  constructor(private renderer: Renderer2, public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(this.languages);
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  public switch(lang: string): void {
    this.translate.use(lang);
  }
}
