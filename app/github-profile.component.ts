import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {GitHubService} from './services/github.service';

@Component({
    selector: 'github-profile',
    styles: [
        `
            .avatar{
                width: 100;
                height: 100;
                border-radius: 100%;
            }
        `
    ],
    templateUrl : 'app/github.component.html',
    providers: [HTTP_PROVIDERS, GitHubService]
})

export class GitHubProfileComponent implements OnInit{
    isLoading = true;
    username = "octocat";
    user = {};
    followers = [];

    constructor(private _gitHubService: GitHubService){}

    ngOnInit(){
        Observable.forkJoin(
            this._gitHubService.getUser(this.username),
            this._gitHubService.getFollowers(this.username)
        )
        .subscribe(
            res=> {
                this.user = res[0];
                this.followers = res[1];
            },
            null,// handle failure
            () => { this.isLoading = false; }
        )
    }
}