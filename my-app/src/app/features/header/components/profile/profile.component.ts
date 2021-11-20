import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/common/interfaces/user.interface';
import { LoginService } from 'src/app/common/services/login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  public currentUser: User;
  public isMenuOpen: boolean = false;
  constructor(
    private renderer: Renderer2,
    private router: Router,
    private authenticationService: LoginService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.menu && this.toggleButton) {
        if (
          e.target !== this.toggleButton.nativeElement &&
          e.target !== this.menu.nativeElement
        ) {
          this.isMenuOpen = false;
        }
      }
    });
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
