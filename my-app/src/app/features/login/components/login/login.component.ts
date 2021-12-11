import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginService } from 'src/app/common/services/login/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('200ms ease-in', style({ opacity: '1' })),
      ]),
      transition(':leave', [animate('200ms ease-in', style({ opacity: '0' }))]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  private loginErrors: any[] = [
    ['1', 'not_login'],
    ['2', 'not_allowed'],
    ['3', 'wait_allowed'],
    ['4', 'not_login'],
  ];
  public loginForm: FormGroup;
  public loginEmail: boolean = false;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public errorMap: Map<any, string> = new Map(this.loginErrors);
  public currentError: string = '';
  public error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private authenticationService: LoginService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.currentError = this.route.snapshot.queryParams['error'];
    if (this.currentError == '4' || this.currentError == '1') {
      const loginURL = 'https://support.seacraft.eu/wp-login.php';
      window.open(
        loginURL,
        'Login',
        'width=560, height=470, top=' +
          (screen.height - 470) / 2 +
          ',left=' +
          (screen.width - 560) / 2 +
          ', resizable=yes, scrollbars=no, status=yes'
      );
    }
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService
      .login(this.form.username.value, this.form.password.value)
      .pipe(first())
      .subscribe((data) => {
        if (data.error) {
          this.error = data.error;
        } else {
          this.router.navigate([this.returnUrl]);
        }
        this.loading = false;
        this.cdr.detectChanges();
      });
  }
  public loginWithSupport(): void {
    this.authenticationService.loginSupport();
  }
}
