webpackJsonp([5],{Wnje:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n("TdOr"),o=n("TToO"),a=n("rxKx"),d=n("5D2H"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.overrides={swipe:{direction:a.DIRECTION_ALL}},e}return Object(o.__extends)(e,t),e}(d.g),s={animation:"experiments"},m={animation:"experiments1"},r={animation:"experiment2"},i={animation:"experiment3"},u=function(){},f=n("zI1e"),c=n("D0Vv"),y=n("INQx"),g=n("efkn"),b=n("mu/C"),h=n("1OzB"),w=n("BTH+"),O=n("gsbp"),v=n("XHgV"),T=n("U/+3"),k=function(){function t(){this.doubleTap=new l.EventEmitter,this.tripleTap=new l.EventEmitter}return t.prototype.onTap=function(t){2===t.tapCount&&this.doubleTap.emit(t),3===t.tapCount&&this.tripleTap.emit(t)},t}(),N=function(){function t(){}return t.prototype.ngOnInit=function(){},t.prototype.startAnimation=function(t){console.log(t),this.animationState||(this.animationState=t)},t.prototype.resetAnimationState=function(){this.animationState=""},t}(),x=l["\u0275crt"]({encapsulation:0,styles:[["img[_ngcontent-%COMP%]{width:200px}.example-card[_ngcontent-%COMP%]{text-align:center}"]],data:{animation:[{type:7,name:"cardAnimator",definitions:[{type:1,expr:"* => wobble",animation:{type:4,styles:{type:5,steps:[{type:6,styles:{transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",offset:.15},offset:null},{type:6,styles:{transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",offset:.3},offset:null},{type:6,styles:{transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",offset:.45},offset:null},{type:6,styles:{transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",offset:.6},offset:null},{type:6,styles:{transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",offset:.75},offset:null},{type:6,styles:{transform:"none",offset:1},offset:null}]},timings:1e3},options:null},{type:1,expr:"* => swing",animation:{type:4,styles:{type:5,steps:[{type:6,styles:{transform:"rotate3d(0, 0, 1, 15deg)",offset:.2},offset:null},{type:6,styles:{transform:"rotate3d(0, 0, 1, -10deg)",offset:.4},offset:null},{type:6,styles:{transform:"rotate3d(0, 0, 1, 5deg)",offset:.6},offset:null},{type:6,styles:{transform:"rotate3d(0, 0, 1, -5deg)",offset:.8},offset:null},{type:6,styles:{transform:"none",offset:1},offset:null}]},timings:1e3},options:null},{type:1,expr:"* => jello",animation:{type:4,styles:{type:5,steps:[{type:6,styles:{transform:"skewX(-12.5deg) skewY(-12.5deg)",offset:.111},offset:null},{type:6,styles:{transform:"skewX(6.25deg) skewY(6.25deg)",offset:.222},offset:null},{type:6,styles:{transform:"skewX(-3.125deg) skewY(-3.125deg)",offset:.333},offset:null},{type:6,styles:{transform:"skewX(1.5625deg) skewY(1.5625deg)",offset:.444},offset:null},{type:6,styles:{transform:"skewX(-0.78125deg) skewY(-0.78125deg)",offset:.555},offset:null},{type:6,styles:{transform:"skewX(0.390625deg) skewY(0.390625deg)",offset:.666},offset:null},{type:6,styles:{transform:"skewX(0.390625deg) skewY(0.390625deg)",offset:.777},offset:null},{type:6,styles:{transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)",offset:.888},offset:null},{type:6,styles:{transform:"none",offset:1},offset:null}]},timings:1e3},options:null},{type:1,expr:"* => zoomOutRight",animation:{type:4,styles:{type:5,steps:[{type:6,styles:{transform:"scale3d(.475, .475, .475) translate3d(-42px, 0, 0)",offset:.4},offset:null},{type:6,styles:{transform:"scale(.1) translate3d(2000px, 0, 0)","transform-origin":"right center",offset:1},offset:null}]},timings:1e3},options:null},{type:1,expr:"* => slideOutLeft",animation:{type:4,styles:{type:5,steps:[{type:6,styles:{transform:"translate3d(0, 0, 0)",offset:0},offset:null},{type:6,styles:{transform:"translate3d(-150%, 0, 0)",opacity:0,offset:1},offset:null}]},timings:1e3},options:null},{type:1,expr:"* => rotateOutUpRight",animation:{type:4,styles:{type:5,steps:[{type:6,styles:{transform:"rotate3d(0, 0, 0, 0deg)",opacity:1,"transform-origin":"right bottom",offset:0},offset:null},{type:6,styles:{transform:"rotate3d(0, 0, 1, 90deg)",opacity:0,"transform-origin":"right bottom",offset:1},offset:null}]},timings:1e3},options:null},{type:1,expr:"* => flipOutY",animation:{type:4,styles:{type:5,steps:[{type:6,styles:{transform:"perspective(400px)",offset:0},offset:null},{type:6,styles:{transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:1,offset:.33},offset:null},{type:6,styles:{transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:0,offset:1},offset:null}]},timings:1e3},options:null}],options:{}}]}});function C(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,21,"mat-card",[["class","example-card mat-card"]],[[24,"@cardAnimator",0]],[[null,"@cardAnimator.done"],[null,"swipeleft"],[null,"swiperight"],[null,"swipeup"],[null,"swipedown"]],function(t,e,n){var l=!0,o=t.component;return"@cardAnimator.done"===e&&(l=!1!==o.resetAnimationState()&&l),"swipeleft"===e&&(l=!1!==o.startAnimation("slideOutLeft")&&l),"swiperight"===e&&(l=!1!==o.startAnimation("zoomOutRight")&&l),"swipeup"===e&&(l=!1!==o.startAnimation("rotateOutUpRight")&&l),"swipedown"===e&&(l=!1!==o.startAnimation("flipOutY")&&l),l},b.d,b.a)),l["\u0275did"](1,49152,null,0,h.a,[],null,null),(t()(),l["\u0275eld"](2,0,null,0,5,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),l["\u0275did"](3,16384,null,0,h.d,[],null,null),(t()(),l["\u0275eld"](4,0,null,null,1,"img",[["class","mat-card-image"],["mat-card-image",""],["src","https://angular.io/assets/images/logos/angular/angular.svg"]],null,null,null,null,null)),l["\u0275did"](5,16384,null,0,h.f,[],null,null),(t()(),l["\u0275eld"](6,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,[" Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop. "])),(t()(),l["\u0275eld"](8,0,null,0,13,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),l["\u0275did"](9,16384,null,0,h.b,[],null,null),(t()(),l["\u0275eld"](10,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""]],[[8,"disabled",0]],[[null,"tap"]],function(t,e,n){var l=!0;return"tap"===e&&(l=!1!==t.component.startAnimation("wobble")&&l),l},w.d,w.b)),l["\u0275did"](11,180224,null,0,O.b,[l.ElementRef,v.a,T.i],{color:[0,"color"]},null),(t()(),l["\u0275ted"](-1,0,["WOBBLE"])),(t()(),l["\u0275eld"](13,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""]],[[8,"disabled",0]],[[null,"tap"]],function(t,e,n){var l=!0;return"tap"===e&&(l=!1!==t.component.startAnimation("swing")&&l),l},w.d,w.b)),l["\u0275did"](14,180224,null,0,O.b,[l.ElementRef,v.a,T.i],{color:[0,"color"]},null),(t()(),l["\u0275ted"](-1,0,["SWING"])),(t()(),l["\u0275eld"](16,0,null,null,1,"h5",[],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["Custom Events"])),(t()(),l["\u0275eld"](18,0,null,null,3,"button",[["color","accent"],["hammertime",""],["mat-raised-button",""]],[[8,"disabled",0]],[[null,"doubleTap"],[null,"tap"]],function(t,e,n){var o=!0,a=t.component;return"tap"===e&&(o=!1!==l["\u0275nov"](t,20).onTap(n)&&o),"doubleTap"===e&&(o=!1!==a.startAnimation("jello")&&o),o},w.d,w.b)),l["\u0275did"](19,180224,null,0,O.b,[l.ElementRef,v.a,T.i],{color:[0,"color"]},null),l["\u0275did"](20,16384,null,0,k,[],null,{doubleTap:"doubleTap"}),(t()(),l["\u0275ted"](-1,0,["JELLO (doubleTap) "]))],function(t,e){t(e,11,0,"primary"),t(e,14,0,"primary"),t(e,19,0,"accent")},function(t,e){t(e,0,0,e.component.animationState),t(e,8,0,"end"===l["\u0275nov"](e,9).align),t(e,10,0,l["\u0275nov"](e,11).disabled||null),t(e,13,0,l["\u0275nov"](e,14).disabled||null),t(e,18,0,l["\u0275nov"](e,19).disabled||null)})}var M=function(){function t(){}return t.prototype.ngOnInit=function(){},t}(),E=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;padding:1.5%;position:relative}"]],data:{}});function A(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,"app-hammer-card",[],null,null,null,C,x)),l["\u0275did"](1,114688,null,0,N,[],null,null)],function(t,e){t(e,1,0)},null)}var D=l["\u0275ccf"]("app-experiments",M,function(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,"app-experiments",[],null,null,null,A,E)),l["\u0275did"](1,114688,null,0,M,[],null,null)],function(t,e){t(e,1,0)},null)},{},{},[]),R=n("wTuo"),L=n("NzW3"),I=n("9Sd6"),j=n("1T37"),_=n("+j5Y"),U=n("F1jI"),Y=n("a9YB"),P=n("6sdf"),F=n("Uo70"),S=n("8tOD"),B=n("1GLL"),X=n("z7Rf"),Z=n("GNhy"),z=n("704W"),q=n("kINy"),W=n("WQzG"),G=n("NwsS"),H=n("Mcof"),J=n("7u3n"),Q=n("Z+/l"),V=n("p5vt"),K=n("hahM"),$=n("YEB1"),tt=n("B+Nj"),et=n("yZfy"),nt=n("J/GH"),lt=n("Sxl6"),ot=n("RsmO"),at=n("bkcK"),dt=n("ijYI"),pt=n("bq7Y"),st=n("AP/s"),mt=n("+76Z"),rt=n("ZuzD"),it=n("yvW1"),ut=n("q2BM"),ft=n("TBIh"),ct=n("4rwD"),yt=n("sqmn"),gt=n("Xbny"),bt=n("Bp8q"),ht=n("y/Fr"),wt=n("kJ/S"),Ot=n("JkvL"),vt=n("86rF"),Tt=n("6GVX"),kt=n("j06o"),Nt=n("XMYV"),xt=n("W91W"),Ct=n("Oz7M"),Mt=n("RNkg"),Et=n("ab5T"),At=n("RpQI"),Dt=n("qH0t"),Rt=n("QL1P");n.d(e,"ExperimentsModuleNgFactory",function(){return Lt});var Lt=l["\u0275cmf"](u,[],function(t){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[f.a,c.a,y.a,g.a,g.b,D]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[l.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](5120,L.d,L.e,[[3,L.d],[2,L.c],[2,L.k],[2,L.b]]),l["\u0275mpd"](5120,L.h,L.v,[[3,L.h],L.d]),l["\u0275mpd"](5120,L.m,L.w,[[3,L.m],l.NgZone,l.PLATFORM_ID,R.DOCUMENT]),l["\u0275mpd"](4608,L.n,L.n,[L.h,L.m]),l["\u0275mpd"](5120,L.p,L.o,[[3,L.p],L.m,L.h]),l["\u0275mpd"](5120,L.t,L.r,[[3,L.t]]),l["\u0275mpd"](4608,L.s,L.s,[[2,L.t],[2,L.q],l.PLATFORM_ID,[2,L.l]]),l["\u0275mpd"](5120,l.APP_BOOTSTRAP_LISTENER,function(t,e){return[L.u(t,e)]},[R.DOCUMENT,l.PLATFORM_ID]),l["\u0275mpd"](6144,I.b,null,[R.DOCUMENT]),l["\u0275mpd"](4608,I.c,I.c,[[2,I.b]]),l["\u0275mpd"](4608,v.a,v.a,[]),l["\u0275mpd"](5120,j.d,j.b,[[3,j.d],l.NgZone,v.a]),l["\u0275mpd"](5120,j.g,j.f,[[3,j.g],v.a,l.NgZone]),l["\u0275mpd"](4608,_.i,_.i,[j.d,j.g,l.NgZone,R.DOCUMENT]),l["\u0275mpd"](5120,_.e,_.j,[[3,_.e],R.DOCUMENT]),l["\u0275mpd"](4608,_.h,_.h,[j.g,R.DOCUMENT]),l["\u0275mpd"](5120,_.f,_.m,[[3,_.f],R.DOCUMENT]),l["\u0275mpd"](4608,_.c,_.c,[_.i,_.e,l.ComponentFactoryResolver,_.h,_.f,l.ApplicationRef,l.Injector,l.NgZone,R.DOCUMENT,I.c]),l["\u0275mpd"](5120,_.k,_.l,[_.c]),l["\u0275mpd"](5120,U.b,U.c,[_.c]),l["\u0275mpd"](4608,T.k,T.k,[v.a]),l["\u0275mpd"](4608,T.j,T.j,[T.k,l.NgZone,R.DOCUMENT]),l["\u0275mpd"](136192,T.d,T.b,[[3,T.d],R.DOCUMENT]),l["\u0275mpd"](5120,T.n,T.m,[[3,T.n],[2,T.l],R.DOCUMENT]),l["\u0275mpd"](5120,T.i,T.g,[[3,T.i],l.NgZone,v.a]),l["\u0275mpd"](5120,Y.c,Y.d,[[3,Y.c]]),l["\u0275mpd"](4608,P.b,P.b,[]),l["\u0275mpd"](4608,F.d,F.d,[]),l["\u0275mpd"](5120,S.c,S.d,[_.c]),l["\u0275mpd"](4608,S.e,S.e,[_.c,l.Injector,[2,R.Location],[2,S.b],S.c,[3,S.e],_.e]),l["\u0275mpd"](4608,B.h,B.h,[]),l["\u0275mpd"](5120,B.a,B.b,[_.c]),l["\u0275mpd"](5120,X.d,X.a,[[3,X.d],[2,Z.HttpClient],d.c,[2,R.DOCUMENT]]),l["\u0275mpd"](135680,z.a,z.a,[v.a]),l["\u0275mpd"](5120,q.b,q.g,[_.c]),l["\u0275mpd"](4352,F.h,"en-GB",[]),l["\u0275mpd"](4608,F.c,W.b,[F.h]),l["\u0275mpd"](5120,G.a,G.b,[_.c]),l["\u0275mpd"](4608,H.d,H.d,[v.a]),l["\u0275mpd"](135680,H.a,H.a,[H.d,l.NgZone]),l["\u0275mpd"](5120,J.b,J.c,[_.c]),l["\u0275mpd"](5120,Q.c,Q.a,[[3,Q.c]]),l["\u0275mpd"](4608,d.f,p,[]),l["\u0275mpd"](5120,V.b,V.c,[]),l["\u0275mpd"](4608,V.d,V.d,[_.c,T.n,l.Injector,H.a,[3,V.d],V.b]),l["\u0275mpd"](5120,K.d,K.a,[[3,K.d]]),l["\u0275mpd"](4608,$.a,$.a,[]),l["\u0275mpd"](4608,tt.v,tt.v,[]),l["\u0275mpd"](4608,tt.e,tt.e,[]),l["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),l["\u0275mpd"](1073742336,et.r,et.r,[[2,et.w],[2,et.n]]),l["\u0275mpd"](1073742336,L.j,L.j,[]),l["\u0275mpd"](1073742336,I.a,I.a,[]),l["\u0275mpd"](1073742336,nt.d,nt.d,[]),l["\u0275mpd"](1073742336,lt.a,lt.a,[]),l["\u0275mpd"](1073742336,ot.a,ot.a,[[2,L.q],l.PLATFORM_ID]),l["\u0275mpd"](256,F.f,!0,[]),l["\u0275mpd"](1073742336,F.n,F.n,[[2,F.f]]),l["\u0275mpd"](1073742336,v.b,v.b,[]),l["\u0275mpd"](1073742336,F.y,F.y,[]),l["\u0275mpd"](1073742336,F.w,F.w,[]),l["\u0275mpd"](1073742336,F.u,F.u,[]),l["\u0275mpd"](1073742336,at.g,at.g,[]),l["\u0275mpd"](1073742336,j.c,j.c,[]),l["\u0275mpd"](1073742336,_.g,_.g,[]),l["\u0275mpd"](1073742336,U.e,U.e,[]),l["\u0275mpd"](1073742336,T.a,T.a,[]),l["\u0275mpd"](1073742336,dt.b,dt.b,[]),l["\u0275mpd"](1073742336,O.c,O.c,[]),l["\u0275mpd"](1073742336,pt.a,pt.a,[]),l["\u0275mpd"](1073742336,h.g,h.g,[]),l["\u0275mpd"](1073742336,P.c,P.c,[]),l["\u0275mpd"](1073742336,st.c,st.c,[]),l["\u0275mpd"](1073742336,mt.a,mt.a,[]),l["\u0275mpd"](1073742336,S.j,S.j,[]),l["\u0275mpd"](1073742336,B.i,B.i,[]),l["\u0275mpd"](1073742336,rt.b,rt.b,[]),l["\u0275mpd"](1073742336,it.c,it.c,[]),l["\u0275mpd"](1073742336,ut.a,ut.a,[]),l["\u0275mpd"](1073742336,ft.d,ft.d,[]),l["\u0275mpd"](1073742336,F.p,F.p,[]),l["\u0275mpd"](1073742336,ct.b,ct.b,[]),l["\u0275mpd"](1073742336,X.c,X.c,[]),l["\u0275mpd"](1073742336,z.d,z.d,[]),l["\u0275mpd"](1073742336,yt.d,yt.d,[]),l["\u0275mpd"](1073742336,q.e,q.e,[]),l["\u0275mpd"](1073742336,F.A,F.A,[]),l["\u0275mpd"](1073742336,F.r,F.r,[]),l["\u0275mpd"](1073742336,G.d,G.d,[]),l["\u0275mpd"](1073742336,H.c,H.c,[]),l["\u0275mpd"](1073742336,J.e,J.e,[]),l["\u0275mpd"](1073742336,Q.d,Q.d,[]),l["\u0275mpd"](1073742336,gt.b,gt.b,[]),l["\u0275mpd"](1073742336,bt.a,bt.a,[]),l["\u0275mpd"](1073742336,ht.a,ht.a,[]),l["\u0275mpd"](1073742336,wt.h,wt.h,[]),l["\u0275mpd"](1073742336,Ot.a,Ot.a,[]),l["\u0275mpd"](1073742336,vt.a,vt.a,[]),l["\u0275mpd"](1073742336,V.f,V.f,[]),l["\u0275mpd"](1073742336,Tt.i,Tt.i,[]),l["\u0275mpd"](1073742336,kt.b,kt.b,[]),l["\u0275mpd"](1073742336,K.e,K.e,[]),l["\u0275mpd"](1073742336,Nt.l,Nt.l,[]),l["\u0275mpd"](1073742336,xt.l,xt.l,[]),l["\u0275mpd"](1073742336,Ct.d,Ct.d,[]),l["\u0275mpd"](1073742336,$.b,$.b,[]),l["\u0275mpd"](1073742336,Mt.a,Mt.a,[]),l["\u0275mpd"](1073742336,Et.a,Et.a,[]),l["\u0275mpd"](1073742336,At.d,At.d,[]),l["\u0275mpd"](1073742336,tt.t,tt.t,[]),l["\u0275mpd"](1073742336,tt.i,tt.i,[]),l["\u0275mpd"](1073742336,tt.q,tt.q,[]),l["\u0275mpd"](1073742336,W.c,W.c,[]),l["\u0275mpd"](1073742336,W.a,W.a,[]),l["\u0275mpd"](1073742336,Dt.a,Dt.a,[]),l["\u0275mpd"](1073742336,Rt.a,Rt.a,[]),l["\u0275mpd"](1073742336,u,u,[]),l["\u0275mpd"](256,q.a,{overlapTrigger:!0,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"},[]),l["\u0275mpd"](256,F.g,Dt.b,[]),l["\u0275mpd"](256,J.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),l["\u0275mpd"](256,wt.a,!1,[]),l["\u0275mpd"](256,At.a,Rt.b,[]),l["\u0275mpd"](1024,et.l,function(){return[[{path:"",redirectTo:"experiments1",pathMatch:"full",data:s},{path:"experiments1",component:M,data:m},{path:"experiment2",component:M,data:r},{path:"experiment3",component:M,data:i}]]},[])])})}});