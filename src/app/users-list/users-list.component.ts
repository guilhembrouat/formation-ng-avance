import { Router } from '@angular/router';
import { GithubService } from '../github.service';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[]

  constructor(
    private github: GithubService,
    private router: Router
  ) { }

  ngOnInit() {
    this.github.getRandomUsers()
      .subscribe(users => this.users = users)
  }

  gotoUser(user: User) {
    this.router.navigate(['/users', user.login])
  }

}
