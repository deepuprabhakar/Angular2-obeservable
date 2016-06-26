System.register(['angular2/core', './jquery.component', 'rxjs/Rx', './services/post.service', 'angular2/http', './github-profile.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, jquery_component_1, Rx_1, post_service_1, http_1, github_profile_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jquery_component_1_1) {
                jquery_component_1 = jquery_component_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (github_profile_component_1_1) {
                github_profile_component_1 = github_profile_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_postService) {
                    this._postService = _postService;
                    this.isLoading = true;
                    //this._postService.createPost({userId: 1, title: "a", body:"b"});
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //get Posts
                    this._postService.getPosts()
                        .subscribe(function (posts) {
                        _this.isLoading = false;
                        console.log(posts);
                    });
                    //search for posts
                    var keyups = Rx_1.Observable.fromEvent($('#search'), 'keyup')
                        .map(function (e) { return e.target.value; })
                        .filter(function (text) { return text.length >= 3; })
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .flatMap(function (searchTerm) {
                        var url = "https://api.github.com/users/" + searchTerm;
                        _this.isLoading = true;
                        var promise = $.getJSON(url);
                        return Rx_1.Observable.fromPromise(promise);
                    });
                    keyups.subscribe(function (data) {
                        _this.isLoading = false;
                        console.log(data);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"search\"/>\n        <div *ngIf=\"isLoading\" class=\"well text-center text-muted\">Getting data...</div>\n        <github-profile></github-profile>",
                        directives: [jquery_component_1.jQueryComponent, github_profile_component_1.GitHubProfileComponent],
                        providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map