(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\onefac-web\src\main.ts */"zUnb");


/***/ }),

/***/ "5a/1":
/*!*********************************************!*\
  !*** ./src/app/layouts/layout.component.ts ***!
  \*********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/data.service */ "cplz");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");









function LayoutComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.data.waitOrderCount));
} }
class LayoutComponent {
    constructor(data, 
    // private eventService: EventService,
    router, document) {
        this.data = data;
        this.router = router;
        this.document = document;
        this.name = localStorage.getItem('name');
        this.position = localStorage.getItem('position');
        this.companyId = localStorage.getItem('companyId');
        this.logo = `https://smart-factory-s.s3.ap-northeast-2.amazonaws.com/company/${this.companyId}/logo/logo.png` ||
            'assets/img/logo.png';
        this.openSwitch = false;
        //TODO 사이드 메뉴 리스트 넣기
        this.menu = [
            {
                label: '대시보드',
                icon: 'bx-home',
                link: '/dashboard',
            },
            {
                label: '거래처',
                icon: '',
                link: '/client',
            },
            {
                label: '품목',
                icon: '',
                link: '/product',
            },
            {
                label: '회원 관리',
                icon: 'bx-user',
                link: '/user-list',
            },
            {
                label: '컨텐츠 관리',
                icon: 'bx-list-ul',
                subItems: [
                    {
                        label: '카테고리 관리',
                        link: '/category-list',
                    },
                    {
                        label: '게시물 관리',
                        link: '/post-list',
                    },
                    {
                        label: '광고 관리',
                        link: '/ad-edit',
                    },
                    {
                        label: '배너 관리',
                        link: '/banner-edit',
                    },
                ],
            },
            {
                label: '신고 관리',
                icon: 'bx-error',
                subItems: [
                    {
                        label: '회원 신고 관리',
                        link: '/report-user',
                    },
                    {
                        label: '게시물 신고 관리',
                        link: '/report-post',
                    },
                    {
                        label: '댓글 신고 관리',
                        link: '/report-comment',
                    },
                ],
            },
            {
                label: '결제 관리',
                icon: 'bx-credit-card',
                subItems: [
                    {
                        label: '결제 관리',
                        link: '/payment-list',
                    },
                    {
                        label: '환급 관리',
                        link: '/exchange-list',
                    },
                ],
            },
            {
                label: '서비스/정보관리',
                icon: 'bx-note',
                subItems: [
                    {
                        label: '공지사항',
                        link: '/notice',
                    },
                    {
                        label: '1:1 문의',
                        link: '/inquiry',
                    },
                    {
                        label: '자주 묻는 질문',
                        link: '/faq',
                    },
                    {
                        label: '개인정보/서비스 이용약관',
                        link: '/terms',
                    },
                ],
            },
        ];
        this.settingsButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isCondensed = false;
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // this._activateMenuDropdown();
                this.routerUrl = event.url;
            }
        });
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((ev) => ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]))
            .subscribe((ev) => {
            const currentURL = ev.url.split('?')[0];
            if (currentURL !== '/account/login') {
                this.data.getWaitOrderCount();
            }
        });
    }
    ngOnInit() {
        //사이드바 정의
        document.body.setAttribute('data-sidebar', 'dark');
        this.configData = {
            suppressScrollX: true,
            wheelSpeed: 0.3,
        };
        this.configData = {
            suppressScrollX: true,
            wheelSpeed: 0.3,
        };
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
        this.onSettingsButtonClicked();
    }
    /**
     * On mobile toggle button clicked
     */
    onToggleMobileMenu() {
        this.isCondensed = !this.isCondensed;
        document.body.classList.toggle('sidebar-enable');
        document.body.classList.toggle('vertical-collpsed');
        if (window.screen.width <= 768) {
            document.body.classList.remove('vertical-collpsed');
        }
    }
    ngAfterViewInit() {
        // this._activateMenuDropdown();
    }
    toggleMenu(event) {
        event.currentTarget.nextElementSibling.classList.toggle('mm-show');
    }
    scrollable() {
        document.body.setAttribute('data-layout-scrollable', 'true');
    }
    /**
     * Toggles the right sidebar
     */
    toggleRightSidebar() {
        this.settingsButtonClicked.emit();
    }
    /**
     * Toggle the menu bar when having mobile screen
     */
    toggleMobileMenu(event) {
        event.preventDefault();
        // this.mobileMenuButtonClicked.emit();
        this.onToggleMobileMenu();
    }
    hide() {
        document.body.classList.remove('right-bar-enabled');
    }
    open(list, menu, mi) {
        const activeTag = document.querySelector('.active');
        if (activeTag) {
            activeTag.classList.remove('active');
        }
        if (list.openSwitch) {
            list.openSwitch = false;
        }
        else {
            list.openSwitch = true;
            menu.forEach((ele) => {
                if (ele != list && ele.openSwitch == true) {
                    ele.openSwitch = false;
                }
            });
            if (list.subItems && list.subItems.length > 0) {
                for (let index = 0; index < list.subItems.length; index++) {
                    const element = list.subItems[index];
                    if (element.link == this.routerUrl) {
                        const aTag = document.querySelector(`.atag${mi}${index}`);
                        aTag.classList.add('active');
                    }
                }
            }
        }
    }
    close(aTag) {
        aTag.classList.add('active');
        this.menu.forEach((ele) => {
            ele.openSwitch = false;
        });
    }
    //클릭시 active class
    // _activateMenuDropdown() {
    //   this._removeAllClass('mm-active');
    //   this._removeAllClass('mm-show');
    //   const links = document.getElementsByClassName('side-nav-link-ref');
    //   let menuItemEl = null;
    //   // tslint:disable-next-line: prefer-for-of
    //   const paths = [];
    //   for (let i = 0; i < links.length; i++) {
    //     paths.push(links[i]['pathname']);
    //   }
    //   var itemIndex = paths.indexOf(window.location.pathname);
    //   if (itemIndex === -1) {
    //     const strIndex = window.location.pathname.lastIndexOf('/');
    //     const item = window.location.pathname.substr(0, strIndex).toString();
    //     menuItemEl = links[paths.indexOf(item)];
    //   } else {
    //     menuItemEl = links[itemIndex];
    //   }
    //   if (menuItemEl) {
    //     menuItemEl.classList.add('active');
    //     const parentEl = menuItemEl.parentElement;
    //     if (parentEl) {
    //       parentEl.classList.add('mm-active');
    //       const parent2El = parentEl.parentElement.closest('ul');
    //       if (parent2El && parent2El.id !== 'side-menu') {
    //         parent2El.classList.add('mm-show');
    //         const parent3El = parent2El.parentElement;
    //         if (parent3El && parent3El.id !== 'side-menu') {
    //           parent3El.classList.add('mm-active');
    //           const childAnchor = parent3El.querySelector('.has-arrow');
    //           const childDropdown = parent3El.querySelector('.has-dropdown');
    //           if (childAnchor) {
    //             childAnchor.classList.add('mm-active');
    //           }
    //           if (childDropdown) {
    //             childDropdown.classList.add('mm-active');
    //           }
    //           const parent4El = parent3El.parentElement;
    //           if (parent4El && parent4El.id !== 'side-menu') {
    //             parent4El.classList.add('mm-show');
    //             const parent5El = parent4El.parentElement;
    //             if (parent5El && parent5El.id !== 'side-menu') {
    //               parent5El.classList.add('mm-active');
    //               const childanchor = parent5El.querySelector('.is-parent');
    //               if (childanchor && parent5El.id !== 'side-menu') {
    //                 childanchor.classList.add('mm-active');
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // // 메뉴 클릭시 다른주소 remove class
    // _removeAllClass(className) {
    //   const els = document.getElementsByClassName(className);
    //   while (els[0]) {
    //     els[0].classList.remove(className);
    //   }
    // }
    //이동
    goDashboard() {
        this.router.navigateByUrl('/dashboard');
    }
    // 주문/승인
    goOrder() {
        this.router.navigateByUrl('/order');
    }
    // 생산/출하 승인
    goManufacture() {
        this.router.navigateByUrl('/manufacture');
    }
    // 분석
    goAnalysis() {
        this.router.navigateByUrl('/analysis');
    }
    //자재/생산품
    goProduct() {
        this.router.navigate(['/product']);
    }
    //거래처
    goClient() {
        this.router.navigate(['/client']);
    }
    //설정
    goSetting() {
        this.router.navigate(['/setting']);
    }
    //bom
    goBom() {
        this.router.navigate(['/bom-manage']);
    }
    //공정
    goProcess() {
        this.router.navigate(['/process']);
    }
    redirectToUrl(link) {
        this.router.navigate([link]);
    }
    // 로그아웃
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('companyId');
        localStorage.removeItem('autoLogin');
        localStorage.removeItem('name');
        localStorage.removeItem('position');
        // localStorage.removeItem('logo');
        this.router.navigate(['/account/login']);
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], outputs: { settingsButtonClicked: "settingsButtonClicked", mobileMenuButtonClicked: "mobileMenuButtonClicked" }, decls: 85, vars: 4, consts: [[1, "body-bind"], [1, "header-wrap"], [1, "horizontal-menu"], [1, "left-menu"], [3, "click"], ["alt", "", 2, "object-fit", "contain", "object-position", "left", 3, "src"], [1, "gnb", 3, "click"], [1, "main-menu"], [1, "gnb"], [1, "sub"], [1, "sub", "environment-detection"], [1, "button-wrap"], [1, "alarm-button", 3, "click"], ["src", "assets/img/alarm-icon.png", "alt", ""], [4, "ngIf"], [1, "profile"], ["src", "assets/img/profile-icon.png", "alt", ""], ["ngbDropdown", "", 1, "btn-group"], ["type", "button", "ngbDropdownToggle", "", 1, "dropdown-toggle"], ["src", "assets/img/drop-down-icon.png", "alt", "", 1, "arrow-icon"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "click"], [1, "main-content"], [1, "page-content"], [1, "con"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_h1_click_5_listener() { return ctx.goDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_8_listener() { return ctx.goDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\uB300\uC2DC\uBCF4\uB4DC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\uC8FC\uBB38/\uC2B9\uC778");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_15_listener() { return ctx.goOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\uC8FC\uBB38");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_18_listener() { return ctx.goManufacture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\uC0DD\uC0B0/\uCD9C\uD558 \uC2B9\uC778");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_21_listener() { return ctx.goAnalysis(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\uBD84\uC11D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\uC790\uC7AC/\uC0DD\uC0B0\uD488");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_28_listener() { return ctx.goProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\uD488\uBAA9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_31_listener() { return ctx.goBom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "BOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_34_listener() { return ctx.goProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\uACF5\uC815");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_37_listener() { return ctx.goClient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\uAC70\uB798\uCC98");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_40_listener() { return ctx.goSetting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\uC124\uC815");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\uD658\uACBD\uAC10\uC9C0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_47_listener() { return ctx.redirectToUrl("detector-information"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\uAC10\uC9C0\uAE30 \uC815\uBCF4/\uADF8\uB798\uD504");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_50_listener() { return ctx.redirectToUrl("detector-history-information"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\uAC10\uC9C0\uAE30 \uC774\uB825\uC815\uBCF4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_53_listener() { return ctx.redirectToUrl("alarm-history"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\uC704\uD5D8\uC0AC\uD56D \uC54C\uB9BC\uC815\uBCF4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_56_listener() { return ctx.redirectToUrl("drawing-management"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\uB3C4\uBA74\uAD00\uB9AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_59_listener() { return ctx.redirectToUrl("alarm-user-setting"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\uC54C\uB9BC\uC815\uBCF4 \uC124\uC815");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_li_click_62_listener() { return ctx.redirectToUrl("user-manage"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\uC0AC\uC6A9\uC790 \uC124\uC815");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_66_listener() { return ctx.goManufacture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, LayoutComponent_span_68_Template, 3, 3, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_76_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\uB85C\uADF8\uC544\uC6C3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Copyright \u24D2 2022 C&TECH Corp. ALL Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.waitOrderCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.name, " ", ctx.position, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: ["#sidebar-menu[_ngcontent-%COMP%]   .has-arrow.up-arrow[_ngcontent-%COMP%] {\n  color: #fff;\n}\n#sidebar-menu[_ngcontent-%COMP%]   .has-arrow.up-arrow[_ngcontent-%COMP%]:after {\n  transform: rotate(180deg);\n  transition: transform 0.2s;\n}\n#sidebar-menu[_ngcontent-%COMP%]   .has-arrow.up-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #fff;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.logo-box[_ngcontent-%COMP%] {\n  max-width: 250px;\n  height: 70px;\n  padding: 0 3rem;\n}\n.logo-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n  height: auto;\n}\n.header-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 9999;\n  min-width: 850px;\n}\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 3.5rem;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n  background-color: #fff;\n}\nheader[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n}\nheader[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]:hover   .sub[_ngcontent-%COMP%] {\n  display: block;\n  transform: translateY(0);\n}\n.horizontal-menu[_ngcontent-%COMP%] {\n  padding-right: 24.3px;\n  padding-left: 19px;\n  width: 100%;\n  max-width: 90rem;\n  margin: 0 auto;\n  height: 3.5rem;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.left-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  z-index: 100;\n}\n.left-menu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-right: 60px;\n  min-width: 9.3125rem;\n  height: 2.1875rem;\n  cursor: pointer;\n}\n.left-menu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.left-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.left-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .gnb[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 3.5rem;\n  text-align: center;\n}\n.left-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .gnb[_ngcontent-%COMP%]:hover   .main-menu[_ngcontent-%COMP%] {\n  color: #2967d3;\n}\n.left-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .gnb[_ngcontent-%COMP%]:hover   .main-menu[_ngcontent-%COMP%]::after, .left-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .gnb[_ngcontent-%COMP%]:active   .main-menu[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  left: 50%;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n}\n.left-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .gnb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 1.375rem;\n  display: inline-block;\n  position: relative;\n  font-family: \"nanum\";\n  font-size: 1.25rem;\n  line-height: 3.5rem;\n  color: #0c0c0e;\n  text-align: center;\n  white-space: nowrap;\n}\n.left-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .gnb[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 3.5rem;\n  margin: 0;\n}\n.left-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .gnb[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  text-align: center;\n  line-height: 3rem;\n  text-align: center;\n  color: #0c0c0e;\n  font-size: 1.25rem;\n  font-family: \"nanum\";\n}\n.left-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .gnb[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .left-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .gnb[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%] {\n  color: #2967d3;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.button-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.button-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0;\n  background-color: transparent;\n}\n.button-wrap[_ngcontent-%COMP%]   button.alarm-button[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 1.1875rem;\n  width: 1.125rem;\n  height: 1.25rem;\n}\n.button-wrap[_ngcontent-%COMP%]   button.alarm-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ff8300;\n  display: block;\n  color: #fff;\n  width: 1.1875rem;\n  height: 1rem;\n  font-size: 0.75rem;\n  font-family: \"nanum\";\n  line-height: 0.8125rem;\n  padding: 0.0625rem 0.125rem;\n  border-radius: 5px;\n  position: absolute;\n  top: -5px;\n  left: 8px;\n}\n.button-wrap[_ngcontent-%COMP%]   button.profile[_ngcontent-%COMP%] {\n  margin-right: 0.4063rem;\n  width: 1.5625rem;\n  height: 1.5625rem;\n}\n.dropdown-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  font-family: \"nanum\";\n  color: #7f8e95;\n  text-align: left;\n}\n.dropdown-toggle[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  margin-left: 5.7px;\n  width: 12px;\n  height: 7.5px;\n  background: url('drop-down-icon.png') no-repeat center right/100% 100%;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 1.875rem;\n}\n.sub[_ngcontent-%COMP%] {\n  display: none;\n  height: 270px;\n}\n.sub[_ngcontent-%COMP%]:after {\n  z-index: -1;\n  content: \"\";\n  position: absolute;\n  top: 56px;\n  left: 0;\n  width: 100%;\n  height: 180px;\n  background: rgba(255, 255, 255, 0.8);\n}\n.sub[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sub[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 100%;\n}\n.sub[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 3.5rem;\n  text-align: center;\n  color: #0c0c0e;\n  font-size: 1rem;\n  font-weight: 400;\n}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .sub[_ngcontent-%COMP%] {\n  display: block;\n  transition: height ease-out 1s 0s;\n}\n.body-bind[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 850px;\n  padding-top: 56px;\n  padding-bottom: 56px;\n  min-height: 100%;\n}\nfooter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 5;\n  width: 100%;\n  height: 56px;\n  line-height: normal;\n  word-break: keep-all;\n  background-color: #f5f5f5 !important;\n}\nfooter[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%] {\n  padding-left: 3.125rem;\n  width: 100%;\n  max-width: 1440px;\n  margin: 0 auto;\n}\nfooter[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7f8e95;\n  font-family: \"nanum\";\n  font-size: 12px;\n  line-height: 56px;\n}\n@media screen and (max-width: 1440px) {\n  .sub-menu[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%] {\n    transform: translateX(-0.9375rem);\n    margin: 0;\n    margin-left: 24.0625rem;\n  }\n}\n@media screen and (max-width: 1080px) {\n  .sub-menu[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%] {\n    transform: translateX(-1px);\n    margin: 0;\n    margin-left: 24.0625rem;\n  }\n}\n@media screen and (max-width: 965px) {\n  .sub-menu[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%] {\n    transform: translateX(18px);\n    margin: 0;\n    margin-left: 24.0625rem;\n  }\n}\n.environment-detection[_ngcontent-%COMP%]:after {\n  height: 340px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtFLFdBQUE7QUFIRjtBQURFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQUdKO0FBQUU7RUFDRSxXQUFBO0FBRUo7QUFJSTtFQUNFLFdBQUE7QUFETjtBQUVNO0VBQ0UsV0FBQTtBQUFSO0FBTUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSEY7QUFJRTtFQUNFLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKO0FBTUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUhGO0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQkFBQTtBQUhGO0FBTUk7RUFDRSxnQkFBQTtBQUpOO0FBS007RUFDRSxjQUFBO0VBQ0Esd0JBQUE7QUFIUjtBQVNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQU5GO0FBU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQVBGO0FBU0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBUEo7QUFRSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTk47QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUFSSjtBQVVJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVJOO0FBVVE7RUFDRSxjQUFBO0FBUlY7QUFhUTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVhWO0FBZ0JNO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFkUjtBQW1CUTtFQUVFLGNBQUE7RUFFQSxTQUFBO0FBbkJWO0FBcUJVO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQW5CWjtBQXdCWTtFQUNFLGNBQUE7QUF0QmQ7QUErQkE7RUFDRSxxQkFBQTtBQTVCRjtBQThCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQTNCRjtBQTRCRTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtBQTFCSjtBQTJCSTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQXpCTjtBQTBCTTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQXhCUjtBQTRCSTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQTFCTjtBQStCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTVCRjtBQTZCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzRUFBQTtBQTNCSjtBQStCQTtFQUNFLG1CQUFBO0FBNUJGO0FBZ0NBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUE3QkY7QUErQkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FBN0JKO0FBZ0NFO0VBQ0UsV0FBQTtBQTlCSjtBQWlDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBL0JKO0FBd0NJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF0Q047QUErQ1E7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7QUE1Q1Y7QUF1REE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxvQkFBQTtFQUVBLGdCQUFBO0FBdERGO0FBeURBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtBQXRERjtBQXVERTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXJESjtBQXVESTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXJETjtBQTBEQTtFQUNFO0lBQ0UsaUNBQUE7SUFFQSxTQUFBO0lBQ0EsdUJBQUE7RUF4REY7QUFDRjtBQTBEQTtFQUNFO0lBQ0UsMkJBQUE7SUFFQSxTQUFBO0lBQ0EsdUJBQUE7RUF6REY7QUFDRjtBQTREQTtFQUNFO0lBQ0UsMkJBQUE7SUFFQSxTQUFBO0lBQ0EsdUJBQUE7RUEzREY7QUFDRjtBQStERTtFQUNFLGFBQUE7QUE3REoiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZGViYXItbWVudSAuaGFzLWFycm93LnVwLWFycm93IHtcclxuICAmOmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuICB9XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbiNzaWRlYmFyLW1lbnUgdWwge1xyXG4gIGxpIHtcclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sb2dvLWJveCB7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgcGFkZGluZzogMCAzcmVtO1xyXG4gIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLXdyYXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIG1pbi13aWR0aDogODUwcHg7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgLm1haW4tbWVudSB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLnN1YiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1tZW51IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNC4zcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogOTByZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubGVmdC1tZW51IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy8gZ2FwOiA5NHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gICAgbWluLXdpZHRoOiA5LjMxMjVyZW07XHJcbiAgICBoZWlnaHQ6IDIuMTg3NXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gID4gdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC5nbmIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGhlaWdodDogMy41cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5tYWluLW1lbnUge1xyXG4gICAgICAgICAgY29sb3I6ICMyOTY3ZDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIsXHJcbiAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAubWFpbi1tZW51OjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy9nbmIg6riA7JSoXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMS4zNzVyZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJuYW51bVwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMy41cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjMGMwYzBlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL+yEnOu4jOuplOuJtFxyXG4gICAgICAuc3ViIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuXHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogIzBjMGMwZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJuYW51bVwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMjk2N2QzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmJ1dHRvbi13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICYuYWxhcm0tYnV0dG9uIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuMTg3NXJlbTtcclxuICAgICAgd2lkdGg6IDEuMTI1cmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjgzMDA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEuMTg3NXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm5hbnVtXCI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuODEyNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjA2MjVyZW0gMC4xMjVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgbGVmdDogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5wcm9maWxlIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjQwNjNyZW07XHJcbiAgICAgIHdpZHRoOiAxLjU2MjVyZW07XHJcbiAgICAgIGhlaWdodDogMS41NjI1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwibmFudW1cIjtcclxuICBjb2xvcjogIzdmOGU5NTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC5hcnJvdy1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1LjdweDtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiA3LjVweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2Ryb3AtZG93bi1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciByaWdodCAvIDEwMCUgMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBtaW4td2lkdGg6IDEuODc1cmVtO1xyXG59XHJcblxyXG4vLyDshJzruIzrqZTribRcclxuLnN1YiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IDI3MHB4O1xyXG4gIC8v7ISc67iMIOuwsOqyvVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gc3BhbiB7XHJcbiAgICAvLyAgICY6aG92ZXIsXHJcbiAgICAvLyAgICY6YWN0aXZlIHtcclxuICAgIC8vICAgICBwIHtcclxuICAgIC8vICAgICAgIGNvbG9yOiAjMjk2N2QzO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG4gICAgcCB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICMwYzBjMGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sZWZ0LW1lbnUge1xyXG4gIHVsIHtcclxuICAgIGxpIHtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLnN1YiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCBlYXNlLW91dCAxcyAwcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGJvZHkge1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG5cclxuLmJvZHktYmluZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi13aWR0aDogODUwcHg7XHJcblxyXG4gIHBhZGRpbmctdG9wOiA1NnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1NnB4O1xyXG5cclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiA1O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTZweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjUgIWltcG9ydGFudDtcclxuICAuY29uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjN2Y4ZTk1O1xyXG4gICAgICBmb250LWZhbWlseTogXCJuYW51bVwiO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgLnN1Yi1tZW51ID4gLmlubmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC45Mzc1cmVtKTtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNC4wNjI1cmVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICAuc3ViLW1lbnUgPiAuaW5uZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0LjA2MjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjVweCkge1xyXG4gIC5zdWItbWVudSA+IC5pbm5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjQuMDYyNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5lbnZpcm9ubWVudC1kZXRlY3Rpb24ge1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgaGVpZ2h0OiAzNDBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss'],
            }]
    }], function () { return [{ type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { settingsButtonClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mobileMenuButtonClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "5wG6":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.component */ "5a/1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









class LayoutsModule {
}
LayoutsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutsModule });
LayoutsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                // tslint:disable-next-line: max-line-length
                declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: "http://192.168.24.224:3000",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "NUQi":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (localStorage.getItem('token')) {
                return true;
            }
            else {
                this.router.navigate(['/account/login']);
                return false;
            }
        });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "KZTq");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/layouts.module */ "5wG6");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @crystalui/angular-lightbox */ "k/Yu");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_11__["CrystalLightboxModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_8__["LayoutsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAccordionModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__["ScrollToModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_11__["CrystalLightboxModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_8__["LayoutsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAccordionModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__["ScrollToModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_11__["CrystalLightboxModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_8__["LayoutsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAccordionModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"],
                    _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__["ScrollToModule"].forRoot(),
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "bUwk":
/*!***********************************************!*\
  !*** ./src/app/core/services/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HttpService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        // public URL = 'http://3.36.50.41:80';
        // public URL = 'https://onefac-api-prod.cntech.pro';
        // public URL = 'https://onefac-api-poc-dev.cntech.pro';
        this.URL = 'https://onefac-api-dev.cntech.pro';
        this.URL;
    }
    post(path, body, headers, url) {
        return new Promise((resolve, reject) => {
            this.http
                .post(`${url || this.URL}${path}`, body, {
                headers: localStorage.getItem('token')
                    ? Object.assign(Object.assign({}, headers), { Authorization: `Bearer ${localStorage.getItem('token')}` }) : Object.assign({}, headers),
            })
                .subscribe((data) => resolve(data), (error) => {
                reject(error.error || error);
                if ((error === null || error === void 0 ? void 0 : error.error.message) === 'JWT expired') {
                    localStorage.removeItem('token');
                    localStorage.removeItem('companyId');
                    localStorage.removeItem('autoLogin');
                    localStorage.removeItem('name');
                    localStorage.removeItem('position');
                    // localStorage.removeItem('logo');
                    this.router.navigateByUrl('/account/login');
                }
            });
        });
    }
    get(path, url) {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${url || this.URL}${path}`, {
                headers: {
                    Authorization: localStorage.getItem('token')
                        ? `Bearer ${localStorage.getItem('token')}`
                        : null,
                },
            })
                .subscribe((data) => resolve(data), (error) => {
                reject(error.error || error);
                if ((error === null || error === void 0 ? void 0 : error.error.message) === 'JWT expired') {
                    localStorage.removeItem('token');
                    localStorage.removeItem('companyId');
                    localStorage.removeItem('autoLogin');
                    localStorage.removeItem('name');
                    localStorage.removeItem('position');
                    // localStorage.removeItem('logo');
                    this.router.navigateByUrl('/account/login');
                }
            });
        });
    }
    patch(path, headers, body, url) {
        return new Promise((resolve, reject) => {
            this.http
                .patch(`${url || this.URL}${path}`, body, {
                headers: Object.assign(Object.assign({}, headers), { Authorization: localStorage.getItem('token')
                        ? `Bearer ${localStorage.getItem('token')}`
                        : null }),
            })
                .subscribe((data) => resolve(data), (error) => {
                reject(error.error || error);
                if ((error === null || error === void 0 ? void 0 : error.error.message) === 'JWT expired') {
                    localStorage.removeItem('token');
                    localStorage.removeItem('companyId');
                    localStorage.removeItem('autoLogin');
                    localStorage.removeItem('name');
                    localStorage.removeItem('position');
                    // localStorage.removeItem('logo');
                    this.router.navigateByUrl('/account/login');
                }
            });
        });
    }
    delete(path, url) {
        return new Promise((resolve, reject) => {
            this.http
                .delete(`${url || this.URL}${path}`, {
                headers: {
                    Authorization: localStorage.getItem('token')
                        ? `Bearer ${localStorage.getItem('token')}`
                        : null,
                },
            })
                .subscribe((data) => resolve(data), (error) => {
                reject(error.error || error);
                if ((error === null || error === void 0 ? void 0 : error.error.message) === 'JWT expired') {
                    localStorage.removeItem('token');
                    localStorage.removeItem('companyId');
                    localStorage.removeItem('autoLogin');
                    localStorage.removeItem('name');
                    localStorage.removeItem('position');
                    // localStorage.removeItem('logo');
                    this.router.navigateByUrl('/account/login');
                }
            });
        });
    }
    uploadFile(item, type, formData) {
        return new Promise((resolve, reject) => {
            this.http
                .post(`https://4sajgce8nk.execute-api.ap-northeast-2.amazonaws.com/api/files/company/${item.company_id}/${item.form_of_product === 'items' ? 'item' : 'parts'}/${item.id}/${type}`, formData)
                .subscribe((data) => resolve(data[0].data.Location), (error) => reject(error.error || error));
        });
    }
    getX(path, headers) {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.URL}${path}`, Object.assign({}, headers))
                .subscribe((data) => resolve(data), (error) => {
                reject(error.error || error);
                if ((error === null || error === void 0 ? void 0 : error.error.message) === "JWT expired") {
                    localStorage.removeItem("token");
                    localStorage.removeItem("companyId");
                    localStorage.removeItem("autoLogin");
                    localStorage.removeItem("name");
                    localStorage.removeItem("position");
                    this.router.navigateByUrl("/account/login");
                }
            });
        });
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "cplz":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "bUwk");




class DataService {
    constructor(http) {
        this.http = http;
        this.waitOrderCount = 0;
        this.getWaitOrderCount();
    }
    /** 승인 대기 주문 개수 */
    getWaitOrderCount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const waitOrderList = yield this.http.get('/work_waiting_approval?select=id, work_instruction_id, instruction_type, input_quantity, memo, memo_updated_at, is_accepted, orders(id, clients(name), order_number, order_date, due_date, items(id,name, model_name, code_number, stocks))&is_accepted=eq.false&is_canceled=eq.false');
                this.waitOrderCount = waitOrderList.length;
            }
            catch (error) { }
        });
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "tR7z":
/*!******************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.component.ts ***!
  \******************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PrivacyPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(); };
PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 5, vars: 0, consts: [[2, "padding", "16px", "min-height", "100vh", "background-color", "#ffffff"], [2, "margin-bottom", "12px", "font-size", "24px", "text-align", "center"], [2, "margin", "0", "white-space", "pre-wrap"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "< (\uC8FC)\uC528\uC564\uD14C\uD06C >('http://iot-cntech.com/'\uC774\uD558 '\uC528\uC564\uD14C\uD06C \uC2A4\uB9C8\uD2B8 \uACF5\uC7A5 \uC194\uB8E8\uC158 \uC6D0\uD329')\uC740(\uB294) \u300C\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\u300D \uC81C30\uC870\uC5D0 \uB530\uB77C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0 \uC774\uC640 \uAD00\uB828\uD55C \uACE0\uCDA9\uC744 \uC2E0\uC18D\uD558\uACE0 \uC6D0\uD65C\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68\uC744 \uC218\uB9BD\u00B7\uACF5\uAC1C\uD569\uB2C8\uB2E4.\n\n\u25CB \uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 2022\uB144 1\uC6D4 1\uBD80\uD130 \uC801\uC6A9\uB429\uB2C8\uB2E4.\n\n\uC81C1\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801)\n\n< (\uC8FC)\uC528\uC564\uD14C\uD06C >('http://iot-cntech.com/'\uC774\uD558 '\uC528\uC564\uD14C\uD06C \uC2A4\uB9C8\uD2B8 \uACF5\uC7A5 \uC194\uB8E8\uC158 \uC6D0\uD329')\uC740(\uB294) \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uCC98\uB9AC\uD558\uACE0 \uC788\uB294 \uAC1C\uC778\uC815\uBCF4\uB294 \uB2E4\uC74C\uC758 \uBAA9\uC801 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C\uB294 \uC774\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70 \uC774\uC6A9 \uBAA9\uC801\uC774 \uBCC0\uACBD\uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \u300C\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\u300D \uC81C18\uC870\uC5D0 \uB530\uB77C \uBCC4\uB3C4\uC758 \uB3D9\uC758\uB97C \uBC1B\uB294 \uB4F1 \uD544\uC694\uD55C \uC870\uCE58\uB97C \uC774\uD589\uD560 \uC608\uC815\uC785\uB2C8\uB2E4.\n\n\uD648\uD398\uC774\uC9C0 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uAD00\uB9AC\n\n\uD68C\uC6D0 \uAC00\uC785\uC758\uC0AC \uD655\uC778, \uD68C\uC6D0\uC81C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uB530\uB978 \uBCF8\uC778 \uC2DD\uBCC4\u00B7\uC778\uC99D, \uD68C\uC6D0\uC790\uACA9 \uC720\uC9C0\u00B7\uAD00\uB9AC, \uC11C\uBE44\uC2A4 \uBD80\uC815\uC774\uC6A9 \uBC29\uC9C0 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\n\n\uC7AC\uD654 \uB610\uB294 \uC11C\uBE44\uC2A4 \uC81C\uACF5\n\n\uC11C\uBE44\uC2A4 \uC81C\uACF5, \uCF58\uD150\uCE20 \uC81C\uACF5, \uB9DE\uCDA4\uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\n\n\uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9\n\n\uC2E0\uADDC \uC11C\uBE44\uC2A4(\uC81C\uD488) \uAC1C\uBC1C \uBC0F \uB9DE\uCDA4 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\n\n\uAC1C\uC778\uC601\uC0C1\uC815\uBCF4\n\n\uC2DC\uC124\uC548\uC804 \uBC0F \uD654\uC7AC\uC608\uBC29 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\n\n\uC81C2\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04)\n\n\u2460 < (\uC8FC)\uC528\uC564\uD14C\uD06C >\uC740(\uB294) \uBC95\uB839\uC5D0 \uB530\uB978 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\u00B7\uC774\uC6A9\uAE30\uAC04 \uB610\uB294 \uC815\uBCF4\uC8FC\uCCB4\uB85C\uBD80\uD130 \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1 \uC2DC\uC5D0 \uB3D9\uC758\uBC1B\uC740 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\u00B7\uC774\uC6A9\uAE30\uAC04 \uB0B4\uC5D0\uC11C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\u00B7\uBCF4\uC720\uD569\uB2C8\uB2E4.\n\n\u2461 \uAC01\uAC01\uC758 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.\n\n1.<\uC7AC\uD654 \uB610\uB294 \uC11C\uBE44\uC2A4 \uC81C\uACF5>\n<\uC7AC\uD654 \uB610\uB294 \uC11C\uBE44\uC2A4 \uC81C\uACF5>\uC640 \uAD00\uB828\uD55C \uAC1C\uC778\uC815\uBCF4\uB294 \uC218\uC9D1.\uC774\uC6A9\uC5D0 \uAD00\uD55C \uB3D9\uC758\uC77C\uB85C\uBD80\uD130<\uC601\uAD6C>\uAE4C\uC9C0 \uC704 \uC774\uC6A9\uBAA9\uC801\uC744 \uC704\uD558\uC5EC \uBCF4\uC720.\uC774\uC6A9\uB429\uB2C8\uB2E4.\n\uBCF4\uC720\uADFC\uAC70 : \uC11C\uBE44\uC2A4 \uC0AC\uC6A9 \uAE30\uB85D \uD655\uC778.\n\uAD00\uB828\uBC95\uB839 : 1)\uC2E0\uC6A9\uC815\uBCF4\uC758 \uC218\uC9D1/\uCC98\uB9AC \uBC0F \uC774\uC6A9 \uB4F1\uC5D0 \uAD00\uD55C \uAE30\uB85D : 3\uB144\n2) \uC18C\uBE44\uC790\uC758 \uBD88\uB9CC \uB610\uB294 \uBD84\uC7C1\uCC98\uB9AC\uC5D0 \uAD00\uD55C \uAE30\uB85D : 3\uB144\n3) \uB300\uAE08\uACB0\uC81C \uBC0F \uC7AC\uD654 \uB4F1\uC758 \uACF5\uAE09\uC5D0 \uAD00\uD55C \uAE30\uB85D : 5\uB144\n4) \uACC4\uC57D \uB610\uB294 \uCCAD\uC57D\uCCA0\uD68C \uB4F1\uC5D0 \uAD00\uD55C \uAE30\uB85D : 5\uB144\n5) \uD45C\uC2DC/\uAD11\uACE0\uC5D0 \uAD00\uD55C \uAE30\uB85D : 6\uAC1C\uC6D4\n\uC608\uC678\uC0AC\uC720 :\n\n\uC81C3\uC870(\uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9)\n\n\u2460 < (\uC8FC)\uC528\uC564\uD14C\uD06C >\uC740(\uB294) \uB2E4\uC74C\uC758 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\uC744 \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\n1< \uC7AC\uD654 \uB610\uB294 \uC11C\uBE44\uC2A4 \uC81C\uACF5 >\n\uD544\uC218\uD56D\uBAA9 : \uC774\uBA54\uC77C, \uBE44\uBC00\uBC88\uD638, \uB85C\uADF8\uC778ID, \uD68C\uC0AC\uC804\uD654\uBC88\uD638, \uC9C1\uCC45, \uD68C\uC0AC\uBA85\n\uC120\uD0DD\uD56D\uBAA9 :\n\n\uC81C4\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uC0AC\uD56D)\n\n\u2460 < (\uC8FC)\uC528\uC564\uD14C\uD06C >\uC740(\uB294) \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C1\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801)\uC5D0\uC11C \uBA85\uC2DC\uD55C \uBC94\uC704 \uB0B4\uC5D0\uC11C\uB9CC \uCC98\uB9AC\uD558\uBA70, \uC815\uBCF4\uC8FC\uCCB4\uC758 \uB3D9\uC758, \uBC95\uB960\uC758 \uD2B9\uBCC4\uD55C \uADDC\uC815 \uB4F1 \u300C\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\u300D \uC81C17\uC870 \uBC0F \uC81C18\uC870\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD569\uB2C8\uB2E4.\n\n\u2461 < (\uC8FC)\uC528\uC564\uD14C\uD06C >\uC740(\uB294) \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\n< >\n\uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uBC1B\uB294 \uC790 :\n\uC81C\uACF5\uBC1B\uB294 \uC790\uC758 \uAC1C\uC778\uC815\uBCF4 \uC774\uC6A9\uBAA9\uC801 :\n\uC81C\uACF5\uBC1B\uB294 \uC790\uC758 \uBCF4\uC720.\uC774\uC6A9\uAE30\uAC04:\n\n\uC81C5\uC870(\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC758 \uC704\uD0C1\uC5D0 \uAD00\uD55C \uC0AC\uD56D)\n\n\u2460 < (\uC8FC)\uC528\uC564\uD14C\uD06C >\uC740(\uB294) \uC6D0\uD65C\uD55C \uAC1C\uC778\uC815\uBCF4 \uC5C5\uBB34\uCC98\uB9AC\uB97C \uC704\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5C5\uBB34\uB97C \uC704\uD0C1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\n< >\n\uC704\uD0C1\uBC1B\uB294 \uC790 (\uC218\uD0C1\uC790) :\n\uC704\uD0C1\uD558\uB294 \uC5C5\uBB34\uC758 \uB0B4\uC6A9 :\n\uC704\uD0C1\uAE30\uAC04 :\n\u2461 < (\uC8FC)\uC528\uC564\uD14C\uD06C >\uC740(\uB294) \uC704\uD0C1\uACC4\uC57D \uCCB4\uACB0\uC2DC \u300C\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\u300D \uC81C26\uC870\uC5D0 \uB530\uB77C \uC704\uD0C1\uC5C5\uBB34 \uC218\uD589\uBAA9\uC801 \uC678 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uAE08\uC9C0, \uAE30\uC220\uC801\u2024\uAD00\uB9AC\uC801 \uBCF4\uD638\uC870\uCE58, \uC7AC\uC704\uD0C1 \uC81C\uD55C, \uC218\uD0C1\uC790\uC5D0 \uB300\uD55C \uAD00\uB9AC\u2024\uAC10\uB3C5, \uC190\uD574\uBC30\uC0C1 \uB4F1 \uCC45\uC784\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uACC4\uC57D\uC11C \uB4F1 \uBB38\uC11C\uC5D0 \uBA85\uC2DC\uD558\uACE0, \uC218\uD0C1\uC790\uAC00 \uAC1C\uC778\uC815\uBCF4\uB97C \uC548\uC804\uD558\uAC8C \uCC98\uB9AC\uD558\uB294\uC9C0\uB97C \uAC10\uB3C5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\n\u2462 \uC704\uD0C1\uC5C5\uBB34\uC758 \uB0B4\uC6A9\uC774\uB098 \uC218\uD0C1\uC790\uAC00 \uBCC0\uACBD\uB420 \uACBD\uC6B0\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uBCF8 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68\uC744 \uD1B5\uD558\uC5EC \uACF5\uAC1C\uD558\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4.\n\n\uC81C6\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uAD6D\uC678 \uC774\uC804\uC5D0 \uAD00\uD55C \uC0AC\uD56D)\n\n\u2460 <\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC790\uBA85>\uC740(\uB294) \u25CB\u25CB \uC5C5\uBB34\uB97C \uAD6D\uC678 \uBC95\uC778\uC778 \u25CB\u25CB\u25CB\u25CB\uC5D0 \uC544\uB798\uC640 \uAC19\uC774 \uC704\uD0C1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\n\uC218\uD0C1\uC5C5\uCCB4: \u25CB\u25CB\u25CB\u25CB \uBC95\uC778\n\n\uC218\uD0C1\uC5C5\uCCB4\uC758 \uC704\uCE58: \u25CB\uAD6D\uAC00 \u25CB\uC2DC \u25CB\uAD6C \u25CB\uB3D9 \uAC74\uBB3C\uBA85(\uAD6D\uAC00, \uB3C4\uC2DC \uB4F1 \uAD6C\uCCB4\uC801 \uC8FC\uC18C \uC791\uC131)\n\n\uC704\uD0C1 \uC77C\uC2DC \uBC0F \uBC29\uBC95: \u25CB\uB144 \u25CB\uC6D4 \u25CB\uC77C \uC804\uC6A9\uB124\uD2B8\uC6CC\uD06C\uB97C \uC774\uC6A9\uD55C \uC6D0\uACA9\uC9C0 \uC804\uC1A1\n\n\uC815\uBCF4\uAD00\uB9AC\uCC45\uC784\uC790\uC758 \uC5F0\uB77D\uCC98 : \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C, \uC804\uD654\uBC88\uD638\n\n\uC704\uD0C1\uD558\uB294 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9 : <\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC790\uC758 \uC704\uD0C1\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9>\uBCF5\uAD6C\uC5D0 \uD544\uC694\uD55C \uC774\uC6A9\uC790 \uB370\uC774\uD130(\u25CB, \u25CB, \u25CB)\n\n\uC704\uD0C1 \uC5C5\uBB34 \uB0B4\uC6A9 : <\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC790\uC758 \uC704\uD0C1\uD558\uB294 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5C5\uBB34> \uC7AC\uB09C, \uC7AC\uD574 \uB4F1\uC73C\uB85C\uBD80\uD130 \uC774\uC6A9\uC790 \uB370\uC774\uD130 \uBCF4\uD638\uB97C \uC704\uD55C \uAD6D\uAC00\uAC04 \uB370\uC774\uD130 \uBC31\uC5C5(\uBCF4\uAD00)\n\n\uAC1C\uC778\uC815\uBCF4\uC758 \uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04 : \u25CB\uB144 \u25CB\uC6D4\uAE4C\uC9C0\n\n\uC81C7\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30\uC808\uCC28 \uBC0F \uD30C\uAE30\uBC29\uBC95)\n\n\u2460 < (\uC8FC)\uC528\uC564\uD14C\uD06C > \uC740(\uB294) \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uACBD\uACFC, \uCC98\uB9AC\uBAA9\uC801 \uB2EC\uC131 \uB4F1 \uAC1C\uC778\uC815\uBCF4\uAC00 \uBD88\uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.\n\n\u2461 \uC815\uBCF4\uC8FC\uCCB4\uB85C\uBD80\uD130 \uB3D9\uC758\uBC1B\uC740 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC774 \uACBD\uACFC\uD558\uAC70\uB098 \uCC98\uB9AC\uBAA9\uC801\uC774 \uB2EC\uC131\uB418\uC5C8\uC74C\uC5D0\uB3C4 \uBD88\uAD6C\uD558\uACE0 \uB2E4\uB978 \uBC95\uB839\uC5D0 \uB530\uB77C \uAC1C\uC778\uC815\uBCF4\uB97C \uACC4\uC18D \uBCF4\uC874\uD558\uC5EC\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0\uB294, \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCC4\uB3C4\uC758 \uB370\uC774\uD130\uBCA0\uC774\uC2A4(DB)\uB85C \uC62E\uAE30\uAC70\uB098 \uBCF4\uAD00\uC7A5\uC18C\uB97C \uB2EC\uB9AC\uD558\uC5EC \uBCF4\uC874\uD569\uB2C8\uB2E4.\n\n\uBC95\uB839 \uADFC\uAC70 :\n\n\uBCF4\uC874\uD558\uB294 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9 : \uACC4\uC88C\uC815\uBCF4, \uAC70\uB798\uB0A0\uC9DC\n\n\u2462 \uAC1C\uC778\uC815\uBCF4 \uD30C\uAE30\uC758 \uC808\uCC28 \uBC0F \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.\n\n\uD30C\uAE30\uC808\uCC28\n< (\uC8FC)\uC528\uC564\uD14C\uD06C > \uC740(\uB294) \uD30C\uAE30 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uC120\uC815\uD558\uACE0, < (\uC8FC)\uC528\uC564\uD14C\uD06C > \uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uC758 \uC2B9\uC778\uC744 \uBC1B\uC544 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.\n\n\uC81C8\uC870(\uBBF8\uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4 \uD30C\uAE30 \uB4F1\uC5D0 \uAD00\uD55C \uC870\uCE58)\n\n\u2460 <\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC790\uBA85>\uC740(\uB294) 1\uB144\uAC04 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uC9C0 \uC54A\uC740 \uC774\uC6A9\uC790\uC758 \uC815\uBCF4\uB97C \uD30C\uAE30\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC, \uB2E4\uB978 \uBC95\uB839\uC5D0\uC11C \uC815\uD55C \uBCF4\uC874\uAE30\uAC04\uC774 \uACBD\uACFC\uD560 \uB54C\uAE4C\uC9C0 \uB2E4\uB978 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uC640 \uBD84\uB9AC\uD558\uC5EC \uBCC4\uB3C4\uB85C \uC800\uC7A5\u00B7\uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\u2461 <\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC790\uBA85>\uC740(\uB294) \uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30 30\uC77C \uC804\uAE4C\uC9C0 \uAC1C\uC778\uC815\uBCF4\uAC00 \uD30C\uAE30\uB418\uB294 \uC0AC\uC2E4, \uAE30\uAC04 \uB9CC\uB8CC\uC77C \uBC0F \uD30C\uAE30\uB418\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9\uC744 \uC774\uBA54\uC77C, \uBB38\uC790 \uB4F1 \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0 \uAC00\uB2A5\uD55C \uBC29\uBC95\uC73C\uB85C \uC54C\uB9AC\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\u2462 \uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30\uB97C \uC6D0\uD558\uC9C0 \uC54A\uC73C\uC2DC\uB294 \uACBD\uC6B0, \uAE30\uAC04 \uB9CC\uB8CC \uC804 \uC11C\uBE44\uC2A4 \uB85C\uADF8\uC778\uC744 \uD558\uC2DC\uBA74 \uB429\uB2C8\uB2E4.\n\n\uC81C9\uC870(\uC815\uBCF4\uC8FC\uCCB4\uC640 \uBC95\uC815\uB300\uB9AC\uC778\uC758 \uAD8C\uB9AC\u00B7\uC758\uBB34 \uBC0F \uADF8 \uD589\uC0AC\uBC29\uBC95\uC5D0 \uAD00\uD55C \uC0AC\uD56D)\n\n\u2460 \uC815\uBCF4\uC8FC\uCCB4\uB294 (\uC8FC)\uC528\uC564\uD14C\uD06C\uC5D0 \uB300\uD574 \uC5B8\uC81C\uB4E0\uC9C0 \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C\u00B7\uC815\uC815\u00B7\uC0AD\uC81C\u00B7\uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C \uB4F1\uC758 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n\u2461 \uC81C1\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294(\uC8FC)\uC528\uC564\uD14C\uD06C\uC5D0 \uB300\uD574 \u300C\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\u300D \uC2DC\uD589\uB839 \uC81C41\uC870\uC81C1\uD56D\uC5D0 \uB530\uB77C \uC11C\uBA74, \uC804\uC790\uC6B0\uD3B8, \uBAA8\uC0AC\uC804\uC1A1(FAX) \uB4F1\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC73C\uBA70 (\uC8FC)\uC528\uC564\uD14C\uD06C\uC740(\uB294) \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4.\n\n\u2462 \uC81C1\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1 \uB300\uB9AC\uC778\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\uC774 \uACBD\uC6B0 \u201C\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC \uBC29\uBC95\uC5D0 \uAD00\uD55C \uACE0\uC2DC(\uC81C2020-7\uD638)\u201D \uBCC4\uC9C0 \uC81C11\uD638 \uC11C\uC2DD\uC5D0 \uB530\uB978 \uC704\uC784\uC7A5\uC744 \uC81C\uCD9C\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.\n\n\u2463 \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C \uBC0F \uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C\uB294 \u300C\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\u300D \uC81C35\uC870 \uC81C4\uD56D, \uC81C37\uC870 \uC81C2\uD56D\uC5D0 \uC758\uD558\uC5EC \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uB9AC\uAC00 \uC81C\uD55C \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n\u2464 \uAC1C\uC778\uC815\uBCF4\uC758 \uC815\uC815 \uBC0F \uC0AD\uC81C \uC694\uAD6C\uB294 \uB2E4\uB978 \uBC95\uB839\uC5D0\uC11C \uADF8 \uAC1C\uC778\uC815\uBCF4\uAC00 \uC218\uC9D1 \uB300\uC0C1\uC73C\uB85C \uBA85\uC2DC\uB418\uC5B4 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\n\n\u2465 (\uC8FC)\uC528\uC564\uD14C\uD06C\uC740(\uB294) \uC815\uBCF4\uC8FC\uCCB4 \uAD8C\uB9AC\uC5D0 \uB530\uB978 \uC5F4\uB78C\uC758 \uC694\uAD6C, \uC815\uC815\u00B7\uC0AD\uC81C\uC758 \uC694\uAD6C, \uCC98\uB9AC\uC815\uC9C0\uC758 \uC694\uAD6C \uC2DC \uC5F4\uB78C \uB4F1 \uC694\uAD6C\uB97C \uD55C \uC790\uAC00 \uBCF8\uC778\uC774\uAC70\uB098 \uC815\uB2F9\uD55C \uB300\uB9AC\uC778\uC778\uC9C0\uB97C \uD655\uC778\uD569\uB2C8\uB2E4.\n\n\uC81C10\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4\uC870\uCE58\uC5D0 \uAD00\uD55C \uC0AC\uD56D)\n\n< (\uC8FC)\uC528\uC564\uD14C\uD06C >\uC740(\uB294) \uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4\uB97C \uC704\uD574 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC870\uCE58\uB97C \uCDE8\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\n\uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09 \uC9C1\uC6D0\uC758 \uCD5C\uC18C\uD654 \uBC0F \uAD50\uC721\n\uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uAE09\uD558\uB294 \uC9C1\uC6D0\uC744 \uC9C0\uC815\uD558\uACE0 \uB2F4\uB2F9\uC790\uC5D0 \uD55C\uC815\uC2DC\uCF1C \uCD5C\uC18C\uD654 \uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uAD00\uB9AC\uD558\uB294 \uB300\uCC45\uC744 \uC2DC\uD589\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\n\uAC1C\uC778\uC815\uBCF4\uC758 \uC554\uD638\uD654\n\uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uBE44\uBC00\uBC88\uD638\uB294 \uC554\uD638\uD654 \uB418\uC5B4 \uC800\uC7A5 \uBC0F \uAD00\uB9AC\uB418\uACE0 \uC788\uC5B4, \uBCF8\uC778\uB9CC\uC774 \uC54C \uC218 \uC788\uC73C\uBA70 \uC911\uC694\uD55C \uB370\uC774\uD130\uB294 \uD30C\uC77C \uBC0F \uC804\uC1A1 \uB370\uC774\uD130\uB97C \uC554\uD638\uD654 \uD558\uAC70\uB098 \uD30C\uC77C \uC7A0\uAE08 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uB294 \uB4F1\uC758 \uBCC4\uB3C4 \uBCF4\uC548\uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\n\uBE44\uC778\uAC00\uC790\uC5D0 \uB300\uD55C \uCD9C\uC785 \uD1B5\uC81C\n\uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uAD00\uD558\uACE0 \uC788\uB294 \uBB3C\uB9AC\uC801 \uBCF4\uAD00 \uC7A5\uC18C\uB97C \uBCC4\uB3C4\uB85C \uB450\uACE0 \uC774\uC5D0 \uB300\uD574 \uCD9C\uC785\uD1B5\uC81C \uC808\uCC28\uB97C \uC218\uB9BD, \uC6B4\uC601\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\n\uC81C11\uC870(\uAC1C\uC778\uC815\uBCF4\uB97C \uC790\uB3D9\uC73C\uB85C \uC218\uC9D1\uD558\uB294 \uC7A5\uCE58\uC758 \uC124\uCE58\u00B7\uC6B4\uC601 \uBC0F \uADF8 \uAC70\uBD80\uC5D0 \uAD00\uD55C \uC0AC\uD56D)\n\n\u2460 (\uC8FC)\uC528\uC564\uD14C\uD06C \uC740(\uB294) \uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uBCC4\uC801\uC778 \uB9DE\uCDA4\uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uC774\uC6A9\uC815\uBCF4\uB97C \uC800\uC7A5\uD558\uACE0 \uC218\uC2DC\uB85C \uBD88\uB7EC\uC624\uB294 \u2018\uCFE0\uD0A4(cookie)\u2019\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.\n\u2461 \uCFE0\uD0A4\uB294 \uC6F9\uC0AC\uC774\uD2B8\uB97C \uC6B4\uC601\uD558\uB294\uB370 \uC774\uC6A9\uB418\uB294 \uC11C\uBC84(http)\uAC00 \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uAC8C \uBCF4\uB0B4\uB294 \uC18C\uB7C9\uC758 \uC815\uBCF4\uC774\uBA70 \uC774\uC6A9\uC790\uB4E4\uC758 PC \uCEF4\uD4E8\uD130\uB0B4\uC758 \uD558\uB4DC\uB514\uC2A4\uD06C\uC5D0 \uC800\uC7A5\uB418\uAE30\uB3C4 \uD569\uB2C8\uB2E4.\n\uAC00. \uCFE0\uD0A4\uC758 \uC0AC\uC6A9 \uBAA9\uC801 : \uC774\uC6A9\uC790\uAC00 \uBC29\uBB38\uD55C \uAC01 \uC11C\uBE44\uC2A4\uC640 \uC6F9 \uC0AC\uC774\uD2B8\uB4E4\uC5D0 \uB300\uD55C \uBC29\uBB38 \uBC0F \uC774\uC6A9\uD615\uD0DC, \uC778\uAE30 \uAC80\uC0C9\uC5B4, \uBCF4\uC548\uC811\uC18D \uC5EC\uBD80, \uB4F1\uC744 \uD30C\uC545\uD558\uC5EC \uC774\uC6A9\uC790\uC5D0\uAC8C \uCD5C\uC801\uD654\uB41C \uC815\uBCF4 \uC81C\uACF5\uC744 \uC704\uD574 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.\n\uB098. \uCFE0\uD0A4\uC758 \uC124\uCE58\u2022\uC6B4\uC601 \uBC0F \uAC70\uBD80 : \uC6F9\uBE0C\uB77C\uC6B0\uC800 \uC0C1\uB2E8\uC758 \uB3C4\uAD6C>\uC778\uD130\uB137 \uC635\uC158>\uAC1C\uC778\uC815\uBCF4 \uBA54\uB274\uC758 \uC635\uC158 \uC124\uC815\uC744 \uD1B5\uD574 \uCFE0\uD0A4 \uC800\uC7A5\uC744 \uAC70\uBD80 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\uB2E4. \uCFE0\uD0A4 \uC800\uC7A5\uC744 \uAC70\uBD80\uD560 \uACBD\uC6B0 \uB9DE\uCDA4\uD615 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uC5B4\uB824\uC6C0\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n\uC81C12\uC870(\uD589\uD0DC\uC815\uBCF4\uC758 \uC218\uC9D1\u00B7\uC774\uC6A9\u00B7\uC81C\uACF5 \uBC0F \uAC70\uBD80 \uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D)\n\n\uD589\uD0DC\uC815\uBCF4\uC758 \uC218\uC9D1\u00B7\uC774\uC6A9\u00B7\uC81C\uACF5 \uBC0F \uAC70\uBD80\uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D\n\n<\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC790\uBA85>\uC740(\uB294) \uC628\uB77C\uC778 \uB9DE\uCDA4\uD615 \uAD11\uACE0 \uB4F1\uC744 \uC704\uD55C \uD589\uD0DC\uC815\uBCF4\uB97C \uC218\uC9D1\u00B7\uC774\uC6A9\u00B7\uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\n\n\uC81C13\uC870(\uCD94\uAC00\uC801\uC778 \uC774\uC6A9\u00B7\uC81C\uACF5 \uD310\uB2E8\uAE30\uC900)\n\n< (\uC8FC)\uC528\uC564\uD14C\uD06C > \uC740(\uB294) \uFF62\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\uFF63 \uC81C15\uC870\uC81C3\uD56D \uBC0F \uC81C17\uC870\uC81C4\uD56D\uC5D0 \uB530\uB77C \uFF62\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC2DC\uD589\uB839\uFF63 \uC81C14\uC870\uC7582\uC5D0 \uB530\uB978 \uC0AC\uD56D\uC744 \uACE0\uB824\uD558\uC5EC \uC815\uBCF4\uC8FC\uCCB4\uC758 \uB3D9\uC758 \uC5C6\uC774 \uAC1C\uC778\uC815\uBCF4\uB97C \uCD94\uAC00\uC801\uC73C\uB85C \uC774\uC6A9\u00B7\uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\uC774\uC5D0 \uB530\uB77C < (\uC8FC)\uC528\uC564\uD14C\uD06C > \uAC00(\uC774) \uC815\uBCF4\uC8FC\uCCB4\uC758 \uB3D9\uC758 \uC5C6\uC774 \uCD94\uAC00\uC801\uC778 \uC774\uC6A9\u00B7\uC81C\uACF5\uC744 \uD558\uAE30 \uC704\uD574\uC11C \uB2E4\uC74C\uACFC \uAC19\uC740 \uC0AC\uD56D\uC744 \uACE0\uB824\uD558\uC600\uC2B5\uB2C8\uB2E4.\n\u25B6 \uAC1C\uC778\uC815\uBCF4\uB97C \uCD94\uAC00\uC801\uC73C\uB85C \uC774\uC6A9\u00B7\uC81C\uACF5\uD558\uB824\uB294 \uBAA9\uC801\uC774 \uB2F9\uCD08 \uC218\uC9D1 \uBAA9\uC801\uACFC \uAD00\uB828\uC131\uC774 \uC788\uB294\uC9C0 \uC5EC\uBD80\n\n\u25B6 \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD55C \uC815\uD669 \uB610\uB294 \uCC98\uB9AC \uAD00\uD589\uC5D0 \uBE44\uCD94\uC5B4 \uBCFC \uB54C \uCD94\uAC00\uC801\uC778 \uC774\uC6A9\u00B7\uC81C\uACF5\uC5D0 \uB300\uD55C \uC608\uCE21 \uAC00\uB2A5\uC131\uC774 \uC788\uB294\uC9C0 \uC5EC\uBD80\n\n\u25B6 \uAC1C\uC778\uC815\uBCF4\uC758 \uCD94\uAC00\uC801\uC778 \uC774\uC6A9\u00B7\uC81C\uACF5\uC774 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC774\uC775\uC744 \uBD80\uB2F9\uD558\uAC8C \uCE68\uD574\uD558\uB294\uC9C0 \uC5EC\uBD80\n\n\u25B6 \uAC00\uBA85\uCC98\uB9AC \uB610\uB294 \uC554\uD638\uD654 \uB4F1 \uC548\uC804\uC131 \uD655\uBCF4\uC5D0 \uD544\uC694\uD55C \uC870\uCE58\uB97C \uD558\uC600\uB294\uC9C0 \uC5EC\uBD80\n\n\u203B \uCD94\uAC00\uC801\uC778 \uC774\uC6A9\u00B7\uC81C\uACF5 \uC2DC \uACE0\uB824\uC0AC\uD56D\uC5D0 \uB300\uD55C \uD310\uB2E8\uAE30\uC900\uC740 \uC0AC\uC5C5\uC790/\uB2E8\uCCB4 \uC2A4\uC2A4\uB85C \uC790\uC728\uC801\uC73C\uB85C \uD310\uB2E8\uD558\uC5EC \uC791\uC131\u00B7\uACF5\uAC1C\uD568\n\n\uC81C14\uC870(\uAC00\uBA85\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0 \uAC00\uBA85\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC0AC\uD56D)\n\n< (\uC8FC)\uC528\uC564\uD14C\uD06C > \uC740(\uB294) \uB2E4\uC74C\uACFC \uAC19\uC740 \uBAA9\uC801\uC73C\uB85C \uAC00\uBA85\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\n\u25B6 \uAC00\uBA85\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801\n\n\uC9C1\uC811\uC791\uC131 \uAC00\uB2A5\uD569\uB2C8\uB2E4.\n\n\u25B6 \uAC00\uBA85\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720\uAE30\uAC04\n\n\uC9C1\uC811\uC791\uC131 \uAC00\uB2A5\uD569\uB2C8\uB2E4.\n\n\u25B6 \uAC00\uBA85\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uC0AC\uD56D(\uD574\uB2F9\uB418\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uC791\uC131)\n\n\uC9C1\uC811\uC791\uC131 \uAC00\uB2A5\uD569\uB2C8\uB2E4.\n\n\u25B6 \uAC00\uBA85\uC815\uBCF4 \uCC98\uB9AC\uC758 \uC704\uD0C1\uC5D0 \uAD00\uD55C \uC0AC\uD56D(\uD574\uB2F9\uB418\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uC791\uC131)\n\n\uC9C1\uC811\uC791\uC131 \uAC00\uB2A5\uD569\uB2C8\uB2E4.\n\n\u25B6 \uAC00\uBA85\uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9\n\n\uC9C1\uC811\uC791\uC131 \uAC00\uB2A5\uD569\uB2C8\uB2E4.\n\n\u25B6 \uBC95 \uC81C28\uC870\uC7584(\uAC00\uBA85\uC815\uBCF4\uC5D0 \uB300\uD55C \uC548\uC804\uC870\uCE58 \uC758\uBB34 \uB4F1)\uC5D0 \uB530\uB978 \uAC00\uBA85\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4\uC870\uCE58\uC5D0 \uAD00\uD55C \uC0AC\uD56D\n\n\uC9C1\uC811\uC791\uC131 \uAC00\uB2A5\uD569\uB2C8\uB2E4.\n\n\uC81C15\uC870 (\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uC5D0 \uAD00\uD55C \uC0AC\uD56D)\n\n\u2460 (\uC8FC)\uC528\uC564\uD14C\uD06C \uC740(\uB294) \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC5C5\uBB34\uB97C \uCD1D\uAD04\uD574\uC11C \uCC45\uC784\uC9C0\uACE0, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBD88\uB9CC\uCC98\uB9AC \uBC0F \uD53C\uD574\uAD6C\uC81C \uB4F1\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\n\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\n\uC131\uBA85 :\uCC44\uC0C1\uBE48\n\uC9C1\uCC45 :\uC774\uC0AC\n\uC9C1\uAE09 :\uC774\uC0AC\n\uC5F0\uB77D\uCC98 :0428620142, sbchae@cntech.pro, 0428630142\n\u203B \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uB2F4\uB2F9\uBD80\uC11C\uB85C \uC5F0\uACB0\uB429\uB2C8\uB2E4.\n\n\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uB2F4\uB2F9\uBD80\uC11C\n\uBD80\uC11C\uBA85 :\n\uB2F4\uB2F9\uC790 :\n\uC5F0\uB77D\uCC98 :, ,\n\u2461 \uC815\uBCF4\uC8FC\uCCB4\uAED8\uC11C\uB294 (\uC8FC)\uC528\uC564\uD14C\uD06C \uC758 \uC11C\uBE44\uC2A4(\uB610\uB294 \uC0AC\uC5C5)\uC744 \uC774\uC6A9\uD558\uC2DC\uBA74\uC11C \uBC1C\uC0DD\uD55C \uBAA8\uB4E0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uBB38\uC758, \uBD88\uB9CC\uCC98\uB9AC, \uD53C\uD574\uAD6C\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uB2F4\uB2F9\uBD80\uC11C\uB85C \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. (\uC8FC)\uC528\uC564\uD14C\uD06C \uC740(\uB294) \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBB38\uC758\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uB2F5\uBCC0 \uBC0F \uCC98\uB9AC\uD574\uB4DC\uB9B4 \uAC83\uC785\uB2C8\uB2E4.\n\n\uC81C16\uC870(\uAD6D\uB0B4\uB300\uB9AC\uC778\uC758 \uC9C0\uC815)\n\n\uC815\uBCF4\uC8FC\uCCB4\uB294 \uFF62\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\uFF63 \uC81C39\uC870\uC75811\uC5D0 \uB530\uB77C \uC9C0\uC815\uB41C < (\uC8FC)\uC528\uC564\uD14C\uD06C >\uC758 \uAD6D\uB0B4\uB300\uB9AC\uC778\uC5D0\uAC8C \uAC1C\uC778\uC815\uBCF4 \uAD00\uB828 \uACE0\uCDA9\uCC98\uB9AC \uB4F1\uC758 \uC5C5\uBB34\uB97C \uC704\uD558\uC5EC \uC5F0\uB77D\uC744 \uCDE8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. < (\uC8FC)\uC528\uC564\uD14C\uD06C >\uC740(\uB294) \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAC1C\uC778\uC815\uBCF4 \uAD00\uB828 \uACE0\uCDA9\uCC98\uB9AC \uB4F1 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uC758 \uC5C5\uBB34 \uB4F1\uC744 \uC2E0\uC18D\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uB178\uB825\uD558\uACA0\uC2B5\uB2C8\uB2E4.\n\n\u25B6 < (\uC8FC)\uC528\uC564\uD14C\uD06C > \uC740(\uB294) \uFF62\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\uFF63 \uC81C39\uC870\uC75811\uC5D0 \uB530\uB77C \uAD6D\uB0B4\uB300\uB9AC\uC778\uC744 \uC9C0\uC815\uD558\uC600\uC2B5\uB2C8\uB2E4.\n\n\uAD6D\uB0B4\uB300\uB9AC\uC778\uC758 \uC131\uBA85 : [\uB300\uB9AC\uC778 \uC131\uBA85_\uC9C1\uC811\uC785\uB825] (\uBC95\uC778\uC758 \uACBD\uC6B0 \uBC95\uC778\uBA85, \uB300\uD45C\uC790\uC758 \uC131\uBA85)\n\n\uAD6D\uB0B4\uB300\uB9AC\uC778\uC758 \uC8FC\uC18C : [\uB300\uB9AC\uC778 \uC8FC\uC18C_\uC9C1\uC811\uC785\uB825] (\uBC95\uC778\uC758 \uACBD\uC6B0 \uC601\uC5C5\uC18C \uC18C\uC7AC\uC9C0)\n\n\uAD6D\uB0B4\uB300\uB9AC\uC778\uC758 \uC804\uD654\uBC88\uD638 : [\uB300\uB9AC\uC778 \uC804\uD654\uBC88\uD638_\uC9C1\uC811\uC785\uB825]\n\n\uAD6D\uB0B4\uB300\uB9AC\uC778\uC758 \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C : [\uB300\uB9AC\uC778 \uC804\uC790\uC6B0\uD3B8_\uC9C1\uC811\uC785\uB825]\n\n\uC81C17\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uC5F4\uB78C\uCCAD\uAD6C\uB97C \uC811\uC218\u00B7\uCC98\uB9AC\uD558\uB294 \uBD80\uC11C)\n\uC815\uBCF4\uC8FC\uCCB4\uB294 \uFF62\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\uFF63 \uC81C35\uC870\uC5D0 \uB530\uB978 \uAC1C\uC778\uC815\uBCF4\uC758 \uC5F4\uB78C \uCCAD\uAD6C\uB97C \uC544\uB798\uC758 \uBD80\uC11C\uC5D0 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n< (\uC8FC)\uC528\uC564\uD14C\uD06C >\uC740(\uB294) \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C\uCCAD\uAD6C\uAC00 \uC2E0\uC18D\uD558\uAC8C \uCC98\uB9AC\uB418\uB3C4\uB85D \uB178\uB825\uD558\uACA0\uC2B5\uB2C8\uB2E4.\n\n\u25B6 \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C\uCCAD\uAD6C \uC811\uC218\u00B7\uCC98\uB9AC \uBD80\uC11C\n\uBD80\uC11C\uBA85 :\n\uB2F4\uB2F9\uC790 :\n\uC5F0\uB77D\uCC98 : , ,\n\n\uC81C18\uC870(\uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uC775\uCE68\uD574\uC5D0 \uB300\uD55C \uAD6C\uC81C\uBC29\uBC95)\n\n\uC815\uBCF4\uC8FC\uCCB4\uB294 \uAC1C\uC778\uC815\uBCF4\uCE68\uD574\uB85C \uC778\uD55C \uAD6C\uC81C\uB97C \uBC1B\uAE30 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uBD84\uC7C1\uC870\uC815\uC704\uC6D0\uD68C, \uD55C\uAD6D\uC778\uD130\uB137\uC9C4\uD765\uC6D0 \uAC1C\uC778\uC815\uBCF4\uCE68\uD574\uC2E0\uACE0\uC13C\uD130 \uB4F1\uC5D0 \uBD84\uC7C1\uD574\uACB0\uC774\uB098 \uC0C1\uB2F4 \uB4F1\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBC16\uC5D0 \uAE30\uD0C0 \uAC1C\uC778\uC815\uBCF4\uCE68\uD574\uC758 \uC2E0\uACE0, \uC0C1\uB2F4\uC5D0 \uB300\uD558\uC5EC\uB294 \uC544\uB798\uC758 \uAE30\uAD00\uC5D0 \uBB38\uC758\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\n\n\uAC1C\uC778\uC815\uBCF4\uBD84\uC7C1\uC870\uC815\uC704\uC6D0\uD68C : (\uAD6D\uBC88\uC5C6\uC774) 1833-6972 (www.kopico.go.kr)\n\n\uAC1C\uC778\uC815\uBCF4\uCE68\uD574\uC2E0\uACE0\uC13C\uD130 : (\uAD6D\uBC88\uC5C6\uC774) 118 (privacy.kisa.or.kr)\n\n\uB300\uAC80\uCC30\uCCAD : (\uAD6D\uBC88\uC5C6\uC774) 1301 (\uB300\uAC80\uCC30\uCCAD )\n\n\uACBD\uCC30\uCCAD : (\uAD6D\uBC88\uC5C6\uC774) 182 (\uC0AC\uC774\uBC84\uBC94\uC8C4 \uC2E0\uACE0\uC2DC\uC2A4\uD15C (ECRM) )\n\n\u300C\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95\u300D\uC81C35\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uC5F4\uB78C), \uC81C36\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uC815\uC815\u00B7\uC0AD\uC81C), \uC81C37\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC\uC815\uC9C0 \uB4F1)\uC758 \uADDC\uC815\uC5D0 \uC758\uD55C \uC694\uAD6C\uC5D0 \uB300 \uD558\uC5EC \uACF5\uACF5\uAE30\uAD00\uC758 \uC7A5\uC774 \uD589\uD55C \uCC98\uBD84 \uB610\uB294 \uBD80\uC791\uC704\uB85C \uC778\uD558\uC5EC \uAD8C\uB9AC \uB610\uB294 \uC774\uC775\uC758 \uCE68\uD574\uB97C \uBC1B\uC740 \uC790\uB294 \uD589\uC815\uC2EC\uD310\uBC95\uC774 \uC815\uD558\uB294 \uBC14\uC5D0 \uB530\uB77C \uD589\uC815\uC2EC\uD310\uC744 \uCCAD\uAD6C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n\u203B \uD589\uC815\uC2EC\uD310\uC5D0 \uB300\uD574 \uC790\uC138\uD55C \uC0AC\uD56D\uC740 \uC911\uC559\uD589\uC815\uC2EC\uD310\uC704\uC6D0\uD68C(\uC628\uB77C\uC778\uD589\uC815\uC2EC\uD310 ) \uD648\uD398\uC774\uC9C0\uB97C \uCC38\uACE0\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\n\n\uC81C19\uC870(\uC601\uC0C1\uC815\uBCF4\uCC98\uB9AC\uAE30\uAE30 \uC6B4\uC601\u00B7\uAD00\uB9AC\uC5D0 \uAD00\uD55C \uC0AC\uD56D)\n\u2460 < (\uC8FC)\uC528\uC564\uD14C\uD06C >\uC740(\uB294) \uC544\uB798\uC640 \uAC19\uC774 \uC601\uC0C1\uC815\uBCF4\uCC98\uB9AC\uAE30\uAE30\uB97C \uC124\uCE58\u00B7\uC6B4\uC601\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\n1.\uC601\uC0C1\uC815\uBCF4\uCC98\uB9AC\uAE30\uAE30 \uC124\uCE58\uADFC\uAC70\u00B7\uBAA9\uC801 : < (\uC8FC)\uC528\uC564\uD14C\uD06C >\uC758\n\n2.\uC124\uCE58 \uB300\uC218, \uC124\uCE58 \uC704\uCE58, \uCD2C\uC601 \uBC94\uC704 :\n\uC124\uCE58\uB300\uC218 : \uB300\n\uC124\uCE58\uC704\uCE58 :\n\uCD2C\uC601\uBC94\uC704 :\n3.\uAD00\uB9AC\uCC45\uC784\uC790, \uB2F4\uB2F9\uBD80\uC11C \uBC0F \uC601\uC0C1\uC815\uBCF4\uC5D0 \uB300\uD55C \uC811\uADFC\uAD8C\uD55C\uC790 :\n\n4.\uC601\uC0C1\uC815\uBCF4 \uCD2C\uC601\uC2DC\uAC04, \uBCF4\uAD00\uAE30\uAC04, \uBCF4\uAD00\uC7A5\uC18C, \uCC98\uB9AC\uBC29\uBC95\n\uCD2C\uC601\uC2DC\uAC04 : \uC2DC\uAC04\n\uBCF4\uAD00\uAE30\uAC04 : \uCD2C\uC601\uC2DC\uBD80\uD130\n\uBCF4\uAD00\uC7A5\uC18C \uBC0F \uCC98\uB9AC\uBC29\uBC95 :\n5.\uC601\uC0C1\uC815\uBCF4 \uD655\uC778 \uBC29\uBC95 \uBC0F \uC7A5\uC18C :\n\n6.\uC815\uBCF4\uC8FC\uCCB4\uC758 \uC601\uC0C1\uC815\uBCF4 \uC5F4\uB78C \uB4F1 \uC694\uAD6C\uC5D0 \uB300\uD55C \uC870\uCE58 : \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4 \uC5F4\uB78C.\uC874\uC7AC\uD655\uC778 \uCCAD\uAD6C\uC11C\uB85C \uC2E0\uCCAD\uD558\uC5EC\uC57C \uD558\uBA70, \uC815\uBCF4\uC8FC\uCCB4 \uC790\uC2E0\uC774 \uCD2C\uC601\uB41C \uACBD\uC6B0 \uB610\uB294 \uBA85\uBC31\uD788 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC0DD\uBA85.\uC2E0\uCCB4.\uC7AC\uC0B0 \uC774\uC775\uC744 \uC704\uD574 \uD544\uC694\uD55C \uACBD\uC6B0\uC5D0 \uD55C\uD574 \uC5F4\uB78C\uC744 \uD5C8\uC6A9\uD568\n\n7.\uC601\uC0C1\uC815\uBCF4 \uBCF4\uD638\uB97C \uC704\uD55C \uAE30\uC220\uC801.\uAD00\uB9AC\uC801.\uBB3C\uB9AC\uC801 \uC870\uCE58 :\n\n\uC81C20\uC870(\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68 \uBCC0\uACBD)\n\n\u2460 \uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 2022\uB144 1\uC6D4 1\uBD80\uD130 \uC801\uC6A9\uB429\uB2C8\uB2E4.\n\n\u2461 \uC774\uC804\uC758 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68\uC740 \uC544\uB798\uC5D0\uC11C \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5LXBvbGljeS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy-policy',
                templateUrl: './privacy-policy.component.html',
                styleUrls: ['./privacy-policy.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guards/auth.guard */ "NUQi");
/* harmony import */ var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/layout.component */ "5a/1");
/* harmony import */ var _pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/privacy-policy/privacy-policy.component */ "tR7z");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/http.service */ "bUwk");








const routes = [
    {
        path: '',
        component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        loadChildren: () => Promise.all(/*! import() | pages-pages-module */[__webpack_require__.e("default~account-account-module~pages-pages-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(m => m.PagesModule),
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
    {
        path: 'account',
        loadChildren: () => Promise.all(/*! import() | account-account-module */[__webpack_require__.e("default~account-account-module~pages-pages-module"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null, /*! ./account/account.module */ "jcJX")).then(m => m.AccountModule),
    },
    {
        path: 'privacy-policy',
        component: _pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyPolicyComponent"],
    },
    { path: '**', redirectTo: '' },
];
class AppRoutingModule {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.logging();
            }
        });
    }
    logging() {
        const id = localStorage.getItem('email');
        const token = localStorage.getItem('token');
        if (!id || !token)
            return;
        this.http.post('/log_history', {
            user_id: id,
            requested_url: location.href,
            header_info: '',
            body_info: '',
        });
    }
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"])); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'top',
                relativeLinkResolution: 'legacy',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'top',
                        relativeLinkResolution: 'legacy',
                    }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map