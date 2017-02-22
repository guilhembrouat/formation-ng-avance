import { Router } from '@angular/router';
import { GithubService } from '../github.service';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Observable<User[]>

  constructor(
    private github: GithubService,
    private router: Router
  ) { }

  ngOnInit() {
    this.users = this.github.getRandomUsers()
  }

  gotoUser(user: User) {
    this.router.navigate(['/users', user.login])
  }

}
