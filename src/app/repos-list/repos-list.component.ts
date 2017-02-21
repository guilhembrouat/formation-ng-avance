import { ActivatedRoute } from '@angular/router';
import { Repository } from '../repository';
import { GithubService } from '../github.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {

  login: string
  repos: Repository[]

  constructor(
    private github: GithubService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap(params => {
        this.login = params['login']
        return this.github.getRepos(this.login)
      })
      .subscribe(repos => this.repos = repos)
  }

  gotoRepo(repo: Repository) {
    window.location.href = repo.html_url
  }

}
