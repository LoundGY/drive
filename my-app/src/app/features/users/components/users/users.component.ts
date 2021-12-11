import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/interfaces/user-table.interface';
import { Users } from 'src/app/common/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  private allUsers: User[] = [];
  public search: string = '';
  public users: User[] = [];
  public loading: boolean = false;
  public selectedUsers: any[] = [];

  constructor(private userService: Users, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getData().subscribe((data: any) => {
      const newUsers: User[] = [];
      data.forEach((element) => {
        const newUser: User = {
          id: element.id,
          login: element.login,
          email: element.email,
          post: element.post,
        };
        newUsers.push(newUser);
      });
      this.users = newUsers;
      this.allUsers = this.users;
      this.cdr.detectChanges();
    });
  }
  public sortUsers(field: string): void {
    this.users.sort((a, b) => {
      if (a[field].toLowerCase() < b[field].toLowerCase()) {
        return -1;
      }
      if (a[field].toLowerCase() > b[field].toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
  public updateSearch(): void {
    this.users = this.allUsers.filter((el) =>
      el.login.toLowerCase().includes(this.search.toLowerCase())
    );
  }
  public chooseItem(index: any): void {
    const indexOfItem = this.selectedUsers.indexOf(index);
    if (indexOfItem > -1) {
      this.selectedUsers.splice(indexOfItem, 1);
    } else {
      this.selectedUsers.push(index);
    }
  }
  public selectAll(): void {
    if (this.selectedUsers.length < 1) {
      this.users.forEach((user) => {
        this.selectedUsers.push(user.id.toString());
      });
    } else {
      this.selectedUsers.length = 0;
    }
  }
  public allow(): void {
    this.loading = true;
    this.userService.allow(this.selectedUsers).subscribe((data) => {
      this.getUsers();
      this.loading = false;
    });
  }
  public ban(): void {
    this.loading = true;
    this.userService.ban(this.selectedUsers).subscribe((data) => {
      this.getUsers();
      this.loading = false;
    });
  }
  public moder(): void {
    this.loading = true;
    this.userService.moder(this.selectedUsers).subscribe((data) => {
      this.getUsers();
      this.loading = false;
    });
  }
}
