import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { GithubClientService } from '../gb-client.service';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedTab: Number;
  repos: Array<any>;
  kudos: Array<any>;

  constructor(
    private oktaAuth: OktaAuthService,
    private githubClient: GithubClientService,
    private apiClient: ApiClientService
  ) {
    this.selectedTab = 0;
    this.repos = [];
    this.kudos = [];
  }

  async ngOnInit() {
    this.apiClient.getKudos().then( (kudos) => {
      this.kudos = kudos;
    } )
  }

  async logout(event) {
    event.preventDefault();
    await this.oktaAuth.logout('/');
  }

  onSearch = (event) => {
    const target = event.target;
    if (!target.value || target.length < 3) { return; }
    if (event.which !== 13) { return; }

    this.githubClient
      .getJSONRepos(target.value)
      .then((response) => {
        target.blur();
        this.selectedTab = 1;
        this.repos = response.items;
      })
  }

  onKudo(event, repo) {
    event.preventDefault();
    this.updateBackend(repo);
  }

  updateState(repo) {
    if (this.isKudo(repo)) {
      this.kudos = this.kudos.filter( r => r['id'] !== repo.id );
    } else {
      this.kudos = [repo, ...this.kudos];
    }
  }

  isKudo(repo) {
    return this.kudos.find( r => r['id'] === repo.id );
  }

  updateBackend = (repo) => {
    if (this.isKudo(repo)) {
      this.apiClient.deleteKudo(repo);
    } else {
      this.apiClient.createKudo(repo);
    }
    this.updateState(repo);
  }
}
