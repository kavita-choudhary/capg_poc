"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var userService_1 = require("../services/userService");
var common_1 = require("@angular/common");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, router, service, location) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.location = location;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.service.getUser(+params.get('id')); })
            .subscribe(function (user) { return console.log(user); });
        this.currentUser = user;
    };
    DetailsComponent.prototype.updateUser = function (user) {
        var _this = this;
        this.service.updateUser(user).subscribe(function (success) { return _this.goBack(); });
    };
    DetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'user-details',
            templateUrl: './details.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            userService_1.UserService,
            common_1.Location])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map