System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/observable/forkJoin', './services/github.service'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, github_service_1;
    var GitHubProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            }],
        execute: function() {
            GitHubProfileComponent = (function () {
                function GitHubProfileComponent(_gitHubService) {
                    this._gitHubService = _gitHubService;
                    this.isLoading = true;
                    this.username = "octocat";
                    this.user = {};
                    this.followers = [];
                }
                GitHubProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    Observable_1.Observable.forkJoin(this._gitHubService.getUser(this.username), this._gitHubService.getFollowers(this.username))
                        .subscribe(function (res) {
                        _this.user = res[0];
                        _this.followers = res[1];
                    }, null, // handle failure
                    function () { _this.isLoading = false; });
                };
                GitHubProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'github-profile',
                        styles: [
                            "\n            .avatar{\n                width: 100;\n                height: 100;\n                border-radius: 100%;\n            }\n        "
                        ],
                        templateUrl: 'app/github.component.html',
                        providers: [http_1.HTTP_PROVIDERS, github_service_1.GitHubService]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GitHubService])
                ], GitHubProfileComponent);
                return GitHubProfileComponent;
            }());
            exports_1("GitHubProfileComponent", GitHubProfileComponent);
        }
    }
});
//# sourceMappingURL=github-profile.component.js.map