import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/interfaces/user.interface';
import { LoginService } from 'src/app/common/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public logo: string = '../../../assets/img/logos/logoHeader.png';
  public currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: LoginService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
    this.authenticationService.check().subscribe((response) => {
      console.log(response);
    });
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
