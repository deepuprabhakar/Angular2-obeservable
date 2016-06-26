import {Component, OnInit} from 'angular2/core';
import {jQueryComponent} from './jquery.component';
import { Observable } from 'rxjs/Rx';
import { PostService } from './services/post.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import {GitHubProfileComponent} from './github-profile.component'
declare var $: any;

@Component({
    selector: 'my-app',
    template: `
        <input type="text" class="form-control" placeholder="Search" id="search"/>
        <div *ngIf="isLoading" class="well text-center text-muted">Getting data...</div>
        <github-profile></github-profile>`,
    directives: [jQueryComponent, GitHubProfileComponent],
    providers: [PostService, HTTP_PROVIDERS]  
})

export class AppComponent implements OnInit {
    isLoading = true;

    constructor(private _postService: PostService){
        //this._postService.createPost({userId: 1, title: "a", body:"b"});
    }
    
    ngOnInit(){
        //get Posts
        this._postService.getPosts()
        .subscribe(posts => {
            this.isLoading = false;
            console.log(posts);
        });
        //search for posts
        var keyups = Observable.fromEvent($('#search'), 'keyup')
            .map(e=> e.target.value)
            .filter(text => text.length >= 3)
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(searchTerm => {
                var url = "https://api.github.com/users/" + searchTerm;
                this.isLoading = true;
                var promise = $.getJSON(url);
                return Observable.fromPromise(promise);
            });
        keyups.subscribe(data => {
            this.isLoading = false;
            console.log(data);
        });
        
    }
}