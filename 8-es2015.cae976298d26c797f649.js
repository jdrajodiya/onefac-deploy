(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{jcJX:function(e,t,n){"use strict";n.r(t),n.d(t,"AccountModule",function(){return f});var o=n("ofXK"),r=n("tyNb"),i=n("mrSG");function a(e){this.message=e}(a.prototype=new Error).name="InvalidCharacterError";var c="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new a("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,r=0,i=0,c="";o=t.charAt(i++);~o&&(n=r%4?64*n+o:o,r++%4)?c+=String.fromCharCode(255&n>>(-2*r&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function l(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(c(e).replace(/(.)/g,function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}(t)}catch(e){return c(t)}}function s(e){this.message=e}(s.prototype=new Error).name="InvalidTokenError";var g=n("fXoL"),d=n("jKJn"),p=n("bUwk"),b=n("3Pt+");const u=[{path:"login",component:(()=>{class e{constructor(e,t,n){this.router=e,this.alert=t,this.http=n,this.saveEmail="true"===localStorage.getItem("saveEmail"),this.autoLogin="true"===localStorage.getItem("autoLogin"),this.user={email:this.saveEmail&&localStorage.getItem("email")||"",user_password:""},localStorage.getItem("token")&&this.router.navigateByUrl("/dashboard")}ngOnInit(){}login(){return Object(i.b)(this,void 0,void 0,function*(){try{const{token:e}=yield this.http.post("/rpc/login",this.user),t=function(e,t){if("string"!=typeof e)throw new s("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(l(e.split(".")[n]))}catch(e){throw new s("Invalid token specified: "+e.message)}}(e);localStorage.setItem("token",e),localStorage.setItem("companyId",t.company_id),localStorage.setItem("email",this.user.email),localStorage.setItem("saveEmail",String(this.saveEmail)),localStorage.setItem("autoLogin",String(this.autoLogin)),localStorage.setItem("name",t.user_name),localStorage.setItem("position",t.user_position),this.router.navigateByUrl("/dashboard")}catch(e){this.alert.errormsg("\ub85c\uadf8\uc778 \uc624\ub958","\uc544\uc774\ub514 \ub610\ub294 \ube44\ubc00\ubc88\ud638\ub97c\n\ud655\uc778\ud574 \uc8fc\uc138\uc694.")}})}}return e.\u0275fac=function(t){return new(t||e)(g.Mb(r.d),g.Mb(d.a),g.Mb(p.a))},e.\u0275cmp=g.Gb({type:e,selectors:[["app-login"]],decls:25,vars:5,consts:[[1,"account-pages","my-5","pt-sm-5"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-8","col-lg-6","col-xl-5"],[1,"card","overflow-hidden"],[1,"card-body"],[1,"logo"],["src","assets/imgs/logo.png","alt",""],[1,"input-item","mb-16"],["type","email","id","email","placeholder","\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694.","name","email",3,"ngModel","ngModelChange"],[1,"input-item"],["type","password","placeholder","\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",3,"ngModel","ngModelChange","keyup.enter"],[1,"check-wrap"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","all",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","all",1,"custom-control-label"],["type","checkbox","id","login",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","login",1,"custom-control-label"],[1,"login-btn",3,"disabled","click"]],template:function(e,t){1&e&&(g.Rb(0,"div",0),g.Rb(1,"div",1),g.Rb(2,"div",2),g.Rb(3,"div",3),g.Rb(4,"div",4),g.Rb(5,"div",5),g.Rb(6,"div",6),g.Nb(7,"img",7),g.Rb(8,"p"),g.Ic(9,"\uc27d\uace0 \ud3b8\ub9ac\ud55c \uc2a4\ub9c8\ud2b8 \uacf5\uc7a5, \uc6d0\ud329"),g.Qb(),g.Qb(),g.Rb(10,"div",8),g.Rb(11,"input",9),g.bc("ngModelChange",function(e){return t.user.email=e}),g.Qb(),g.Qb(),g.Rb(12,"div",10),g.Rb(13,"input",11),g.bc("ngModelChange",function(e){return t.user.user_password=e})("keyup.enter",function(){return t.login()}),g.Qb(),g.Qb(),g.Rb(14,"div",12),g.Rb(15,"div",13),g.Rb(16,"input",14),g.bc("ngModelChange",function(e){return t.saveEmail=e}),g.Qb(),g.Rb(17,"label",15),g.Ic(18,"ID \uc800\uc7a5\ud558\uae30"),g.Qb(),g.Qb(),g.Rb(19,"div",13),g.Rb(20,"input",16),g.bc("ngModelChange",function(e){return t.autoLogin=e}),g.Qb(),g.Rb(21,"label",17),g.Ic(22,"\uc790\ub3d9 \ub85c\uadf8\uc778\ud558\uae30"),g.Qb(),g.Qb(),g.Qb(),g.Rb(23,"button",18),g.bc("click",function(){return t.login()}),g.Ic(24," \ub85c\uadf8\uc778 "),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb()),2&e&&(g.yb(11),g.kc("ngModel",t.user.email),g.yb(2),g.kc("ngModel",t.user.user_password),g.yb(3),g.kc("ngModel",t.saveEmail),g.yb(4),g.kc("ngModel",t.autoLogin),g.yb(3),g.kc("disabled",!t.user.email||!t.user.user_password))},directives:[b.b,b.k,b.n,b.a],styles:['.account-pages[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100vh;padding:0!important;margin:0!important;background:linear-gradient(115.68deg,#2967d3 33.77%,#51c4d9 107.7%)}.card[_ngcontent-%COMP%]{min-width:548px;padding:4.375rem 3.125rem 4.8125rem}.card[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%;text-align:center;line-height:0}.card[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1f94f1;font-weight:400;font-size:18px;line-height:20px;text-align:center;margin-bottom:41px}.card[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;width:96px;height:79px;margin-bottom:.9063rem}.mb-16[_ngcontent-%COMP%]{margin-bottom:16px}.input-item[_ngcontent-%COMP%]{width:100%;height:40px;border:1px solid #e1e1e1;border-radius:5px;padding:.5rem .9375rem}.input-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:100%}.login-btn[_ngcontent-%COMP%]{width:100%;height:38px;background:#2967d3;border-radius:5px;font-weight:400;font-size:16px;line-height:18px;margin-top:2.6875rem;color:#fff}.check-wrap[_ngcontent-%COMP%]{width:17.5rem;display:flex;align-items:center;justify-content:space-between;margin:1.625rem auto 0}.check-wrap[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:400;font-size:14px;line-height:25px;color:#0c0c0e;margin-left:8px}.custom-checkbox[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]:before{width:20px;height:20px;border-radius:3px;display:flex;align-items:center}.custom-control-label[_ngcontent-%COMP%]:before{top:.109375rem;left:-29px;pointer-events:none;background-color:#fff;border:1px solid #adb5bd}.custom-control-label[_ngcontent-%COMP%]:after, .custom-control-label[_ngcontent-%COMP%]:before{position:absolute;display:block;width:1rem;height:1rem;content:""}.custom-control-label[_ngcontent-%COMP%]:after{top:2px;left:-27px;background:100%/100% 100% no-repeat}input[type=password][_ngcontent-%COMP%]{font-family:"sans-serif"}input[type=password][_ngcontent-%COMP%]::-moz-placeholder{font-family:"sans-serif"}input[type=password][_ngcontent-%COMP%]:-ms-input-placeholder{font-family:"sans-serif"}input[type=password][_ngcontent-%COMP%]::placeholder{font-family:"sans-serif"}']}),e})()},{path:"**",redirectTo:"login"}];let m=(()=>{class e{}return e.\u0275mod=g.Kb({type:e}),e.\u0275inj=g.Jb({factory:function(t){return new(t||e)},imports:[[r.e.forChild(u)],r.e]}),e})();var h=n("1kSV");let f=(()=>{class e{}return e.\u0275mod=g.Kb({type:e}),e.\u0275inj=g.Jb({factory:function(t){return new(t||e)},imports:[[o.b,m,b.q,h.c,b.g]]}),e})()}}]);