import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubClientService {

  constructor() { }

  getJSONRepos(query) {
    return fetch('https://api.github.com/search/repositories?q=' + query).then(response => response.json());
  }

  getJSONRepo(id) {
    return fetch('https://api.github.com/repositories/' + id).then(response => response.json());
  }
}
