import { Repository } from './repository';
import { User } from './user';
import { Observable } from 'rxjs/Rx';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  url = 'https://api.github.com'
  token = '0e2f9781c2d49b10d726b3b16a2d1038de588415'

  constructor(private http: Http) { }

  get searchParams() {
    const search = new URLSearchParams()
    search.set('access_token', this.token)
    return search
  }

  getRandomUsers(): Observable<User[]> {
    const search = this.searchParams
    search.set('since', String(Math.floor(Math.random() * 10000)))

    return this.http
      .get(`${this.url}/users`, { search } )
      .map(res => res.json().slice(0, 5))
  }

  getRepos(login: string): Observable<Repository[]> {
    const search = this.searchParams

    return this.http
      .get(`${this.url}/users/${login}/repos`, { search })
      .map(res => res.json())
  }

}
