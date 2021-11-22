import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherComponent {
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  public isMenuOpen: boolean = false;
  public currentLang: string;
  public languages: string[] = ['en', 'pl', 'ru'];

  constructor(
    private renderer: Renderer2,
    public translate: TranslateService,
    private cdr: ChangeDetectorRef
  ) {
    translate.setDefaultLang('en');
    translate.addLangs(this.languages);
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.menu && this.toggleButton) {
        if (
          e.target !== this.toggleButton.nativeElement &&
          e.target !== this.menu.nativeElement
        ) {
          this.isMenuOpen = false;
          this.cdr.detectChanges();
        }
      }
    });
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  public switch(lang: string): void {
    this.translate.use(lang);
    this.toggleMenu();
  }
}
