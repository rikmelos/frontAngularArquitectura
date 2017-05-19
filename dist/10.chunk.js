webpackJsonp([10,17],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_routing_module__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__(602);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__login_routing_module__["a" /* LoginRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/*import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    formEmail:string;
    formPassword:string;

    constructor() { }

    doLoggin(){
    console.log('El correo es '+this.formEmail+', La clave es: '+this.formPassword);
    }

    ngOnInit() {
    }

}
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    /*
    public loginForm = this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
    });

    public singIn = this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
    });*/
    function LoginComponent(requestService, router) {
        this.requestService = requestService;
        this.router = router;
        this.checkClick = false;
        this.checkClickSingIn = false;
        this.requestService;
    }
    LoginComponent.prototype.init = function () {
        if (localStorage.getItem("email") != null) {
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.doLogin = function (event) {
        //console.log(event);
        //console.log(this.loginForm.value);
        this.emailOP = this.formEmail;
        this.passwordOP = this.formPassword;
        console.log(this.emailOP);
        console.log(this.passwordOP);
        this.checkClick = true;
        this.authenticate();
    };
    /*doSingIn(event){
        this.emailSing = this.singIn.value.email;
        this.passwordSing = this.singIn.value.password;
        console.log('register email '+this.emailSing);
        console.log('register password '+this.passwordSing);
        this.checkClickSingIn=true;

        if( localStorage.getItem("email")!=null && this.checkClickSingIn){
            alert('erro esta sesion ya esta activa');
        }
        else{
            this.singInNewUser();
        }

    }*/
    /*
    logout(){

        this.requestService.logoutSession(
            'http://localhost:3000/logout',
            {
                "email": localStorage.getItem("email")
            },
            new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) })
        )
            .subscribe(
                logoutS=>{
                },
                err => { console.log(err);}
            )

        localStorage.clear();

    }*/
    /*
    singInNewUser():void{

        this.requestService.singInUsr(
            'http://localhost:3000/signup',
            {
                "email": this.emailSing,
                "password": this.passwordSing
            },
            new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) })
        )
            .subscribe(
                singUp=>{
                    this.singUp =singUp;
                    console.log('imprimiendo error '+ JSON.stringify(this.singUp["error"]) );
                    if( this.singUp["error"] ){
                        alert('Este usuario ya existe');
                        return;
                    }



                },
                err => { console.log(err);}
            )
    }*/
    LoginComponent.prototype.authenticate = function () {
        var _this = this;
        this.requestService.authentication('http://192.168.99.101:5000/authenticate', {
            "email": this.emailOP,
            "password": this.passwordOP
        }, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' }) }))
            .subscribe(function (login) {
            _this.login = login;
            //console.log('this.users=' + JSON.stringify(this.login));
            if (_this.login['error'] && _this.checkClick) {
                alert('Este usuario no esta registrado o el password esta mal');
                return;
            }
            else {
                if (localStorage.getItem("email") != null) {
                    alert('ya esta alguien registrado');
                    return;
                }
            }
            //true - > si hay error
            _this.requestService.getToken('http://192.168.99.101:5000/token', {
                "email": _this.emailOP
            }, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' }) }))
                .subscribe(function (thoken) {
                _this.thoken = thoken;
                console.log('imprimiendo thoken= ' + JSON.stringify(_this.thoken));
                _this.tokenOP = JSON.stringify(_this.thoken["token"]);
                console.log('**********' + _this.tokenOP);
                if (typeof (Storage) !== "undefined") {
                    localStorage.setItem("email", _this.emailOP);
                    localStorage.setItem("token", _this.tokenOP);
                    _this.router.navigate(['/dashboard']);
                }
                else {
                    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage!";
                }
                //ir a otra pagina
            }, function (err) { console.log(err); });
        }, function (err) { console.log(err); });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.init();
        this.authenticate();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(696),
        styles: [__webpack_require__(668)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__(602);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], LoginRoutingModule);

//# sourceMappingURL=login-routing.module.js.map

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #8A4B08;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n  .login-page .col-lg-4 {\n    padding: 0; }\n  .login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n  .login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #FFF;\n    border-radius: 0; }\n  .login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n  .login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #8A4B08;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n  .login-page .rounded-btn:hover, .login-page .rounded-btn:focus, .login-page .rounded-btn:active, .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n    .login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .login-page .form-group {\n    padding: 8px 0; }\n    .login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n  .login-page .form-content {\n    padding: 40px 0; }\n  .login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n    <div class=\"row\">\n        <div class=\"col-md-4 push-md-4\">\n            <img src=\"assets/images/logo.png\" width=\"150px\"/>\n            <h1>Mappache Login</h1>\n            <form role=\"form\" (submit)=\"doLogin()\">\n                <div class=\"form-content\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" [(ngModel)]=\"formEmail\" name=\"formEmail\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Correo Electronico\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"password\" [(ngModel)]=\"formPassword\" name=\"formPassword\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Contraseña\">\n                    </div>\n                </div>\n                <input type=\"submit\" class=\"btn rounded-btn\" value=\"Conectarse\">\n                <!--a class=\"btn rounded-btn\" [routerLink]=\"['/dashboard']\"> Conectarse </a-->\n                &nbsp;\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/signup']\">Registrarse</a>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=10.chunk.js.map