import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostService } from '../services/users/post.service';

@Injectable({ providedIn: 'root' })
export class EditGuard implements CanActivate {
  constructor(private router: Router, private getPost: PostService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const currenPost = this.getPost.getPost();
    return currenPost.pipe(
      map((el) => {
        if (el > 2) {
          this.router.navigate(['/drive']);
          return false;
        }
        return true;
      })
    );
  }
}
