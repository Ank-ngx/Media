(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{CS9Q:function(n,l,t){"use strict";var u=t("mrSG"),e=function(){function n(l,t){void 0===t&&(t=n.now),this.SchedulerAction=l,this.now=t}return n.prototype.schedule=function(n,l,t){return void 0===l&&(l=0),new this.SchedulerAction(this,n).schedule(t,l)},n.now=function(){return Date.now()},n}();t.d(l,"a",function(){return o});var o=function(n){function l(t,u){void 0===u&&(u=e.now);var o=n.call(this,t,function(){return l.delegate&&l.delegate!==o?l.delegate.now():u()})||this;return o.actions=[],o.active=!1,o.scheduled=void 0,o}return u.d(l,n),l.prototype.schedule=function(t,u,e){return void 0===u&&(u=0),l.delegate&&l.delegate!==this?l.delegate.schedule(t,u,e):n.prototype.schedule.call(this,t,u,e)},l.prototype.flush=function(n){var l=this.actions;if(this.active)l.push(n);else{var t;this.active=!0;do{if(t=n.execute(n.state,n.delay))break}while(n=l.shift());if(this.active=!1,t){for(;n=l.shift();)n.unsubscribe();throw t}}},l}(e)},Dg1S:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),i=t("oBZk"),r=t("ZZ/e"),c=t("ZYCi"),s=t("Ip0R"),a=t("mrSG"),b=t("a3Cf"),p=t("6blF"),h=function(){function n(n){var l=this;this._objectInstance=n,this.onSuccess=new p.a(function(n){return l.successCallback=n.next.bind(n),function(){return l.successCallback=function(){}}}),this.onError=new p.a(function(n){return l.errorCallback=n.next.bind(n),function(){return l.errorCallback=function(){}}}),this.onStatusUpdate=new p.a(function(n){return l.statusCallback=n.next.bind(n),function(){return l.statusCallback=function(){}}})}return n.prototype.getCurrentAmplitude=function(){return Object(b.cordovaInstance)(this,"getCurrentAmplitude",{},arguments)},n.prototype.getCurrentPosition=function(){return Object(b.cordovaInstance)(this,"getCurrentPosition",{},arguments)},n.prototype.getDuration=function(){return Object(b.cordovaInstance)(this,"getDuration",{sync:!0},arguments)},n.prototype.play=function(n){return Object(b.cordovaInstance)(this,"play",{sync:!0},arguments)},n.prototype.pause=function(){return Object(b.cordovaInstance)(this,"pause",{sync:!0},arguments)},n.prototype.release=function(){return Object(b.cordovaInstance)(this,"release",{sync:!0},arguments)},n.prototype.seekTo=function(n){return Object(b.cordovaInstance)(this,"seekTo",{sync:!0},arguments)},n.prototype.setVolume=function(n){return Object(b.cordovaInstance)(this,"setVolume",{sync:!0},arguments)},n.prototype.setRate=function(n){return Object(b.cordovaInstance)(this,"setRate",{sync:!0},arguments)},n.prototype.startRecord=function(){return Object(b.cordovaInstance)(this,"startRecord",{sync:!0},arguments)},n.prototype.stopRecord=function(){return Object(b.cordovaInstance)(this,"stopRecord",{sync:!0},arguments)},n.prototype.pauseRecord=function(){return Object(b.cordovaInstance)(this,"pauseRecord",{sync:!0},arguments)},n.prototype.resumeRecord=function(){return Object(b.cordovaInstance)(this,"resumeRecord",{sync:!0},arguments)},n.prototype.stop=function(){return Object(b.cordovaInstance)(this,"stop",{sync:!0},arguments)},Object.defineProperty(n.prototype,"successCallback",{get:function(){return Object(b.instancePropertyGet)(this,"successCallback")},set:function(n){Object(b.instancePropertySet)(this,"successCallback",n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"errorCallback",{get:function(){return Object(b.instancePropertyGet)(this,"errorCallback")},set:function(n){Object(b.instancePropertySet)(this,"errorCallback",n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"statusCallback",{get:function(){return Object(b.instancePropertyGet)(this,"statusCallback")},set:function(n){Object(b.instancePropertySet)(this,"statusCallback",n)},enumerable:!0,configurable:!0}),n}(),f=function(n){function l(){var l=null!==n&&n.apply(this,arguments)||this;return l.MEDIA_NONE=0,l.MEDIA_STARTING=1,l.MEDIA_RUNNING=2,l.MEDIA_PAUSED=3,l.MEDIA_STOPPED=4,l.MEDIA_ERR_ABORTED=1,l.MEDIA_ERR_NETWORK=2,l.MEDIA_ERR_DECODE=3,l.MEDIA_ERR_NONE_SUPPORTED=4,l}return Object(a.d)(l,n),l.prototype.create=function(n){var t;return!0===Object(b.checkAvailability)(l.getPluginRef(),null,l.getPluginName())&&(t=new(l.getPlugin())(n)),new h(t)},l.pluginName="Media",l.repo="https://github.com/apache/cordova-plugin-media",l.plugin="cordova-plugin-media",l.pluginRef="Media",l.platforms=["Android","Browser","iOS","Windows"],l}(b.IonicNativePlugin),m=t("f19z"),d=t("wq8c"),y=t.n(d),g=t("xXU7"),k=function(){function n(n,l,t,u,e,o,i,r){this.events=n,this.route=l,this.router=t,this.apiService=u,this.platform=e,this.media=o,this.actionSheetController=i,this.storage=r,this.slideOpts={zoom:!1,initialSlide:1,spaceBetween:-65,speed:400},this.slides=[{id:1,author:"Armin van Buuren",title:"Imagine (The remixes)",time:"04:49",imgSrc:"assets/Rectangle 4.png"},{id:2,author:"Armin van Buuren",title:"Imagine (The remixes)",time:"04:49",imgSrc:"assets/Rectangle 4.png"}],this.advise=[{id:1,author:"Armin van Buuren",title:"Imagine (The remixes)",time:"04:49",imgSrc:"assets/Rectangle 4.png"},{id:2,author:"Armin van Buuren",title:"Imagine (The remixes)",time:"04:49",imgSrc:"assets/Rectangle 4.png"}],this.news=[{id:1,author:"Armin van Buuren",title:"Imagine (The remixes)",time:"04:49",imgSrc:"assets/Rectangle 4.png"},{id:2,author:"Armin van Buuren",title:"Imagine (The remixes)",time:"04:49",imgSrc:"assets/Rectangle 4.png"}],this.popular=[{id:1,author:"Armin van Buuren",title:"Imagine (The remixes)",time:"04:49",imgSrc:"assets/Rectangle 4.png"},{id:2,author:"Armin van Buuren",title:"Imagine (The remixes)",time:"04:49",imgSrc:"assets/Rectangle 4.png"}],Object(s.p)(y.a,"ru"),this.platform.backButton.subscribe(function(){})}return n.prototype.play=function(n){this.trackData=n;var l=this.media.create("assets/music.mp3");l.onStatusUpdate.subscribe(function(n){return console.log(n)}),l.onSuccess.subscribe(function(){return console.log("Action is successful")}),l.onError.subscribe(function(n){return console.log("Error!",n)}),l.play()},n.prototype.presentActionSheet=function(n){return l=this,void 0,u=function(){return function(n,l){var t,u,e,o,i={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,u&&(e=2&o[0]?u.return:o[0]?u.throw||((e=u.return)&&e.call(u),0):u.next)&&!(e=e.call(u,o[1])).done)return e;switch(u=0,e&&(o=[2&o[0],e.value]),o[0]){case 0:case 1:e=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,u=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(e=(e=i.trys).length>0&&e[e.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!e||o[1]>e[0]&&o[1]<e[3])){i.label=o[1];break}if(6===o[0]&&i.label<e[1]){i.label=e[1],e=o;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(o);break}e[2]&&i.ops.pop(),i.trys.pop();continue}o=l.call(n,i)}catch(r){o=[6,r],u=0}finally{t=e=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}}(this,function(n){switch(n.label){case 0:return event.stopPropagation(),[4,this.actionSheetController.create({buttons:[{text:"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",icon:"heart",handler:function(){}},{text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442",icon:"list",handler:function(){}},{text:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f",icon:"share",handler:function(){}},{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",handler:function(){}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})},new((t=void 0)||(t=Promise))(function(n,e){function o(n){try{r(u.next(n))}catch(l){e(l)}}function i(n){try{r(u.throw(n))}catch(l){e(l)}}function r(l){l.done?n(l.value):new t(function(n){n(l.value)}).then(o,i)}r((u=u.apply(l,[])).next())});var l,t,u},n.prototype.ngOnInit=function(){var n=this;this.events.publish("stopLoading");var l=Object(g.a)(100).subscribe(function(t){n.apiService.getAuth()&&l.unsubscribe()})},n.prototype.openModal=function(n){this.events.publish("openModal",n)},n.prototype.ngOnDestroy=function(){this.events.publish("stopLoading")},n}(),v=t("iw74"),x=u.mb({encapsulation:0,styles:[["ion-checkbox[_ngcontent-%COMP%]{margin-left:15px}ion-card[_ngcontent-%COMP%]{padding-left:5px}ion-segment[_ngcontent-%COMP%]{padding:10px 15px 0}.sc-ion-segment-md-h[_ngcontent-%COMP%]{padding-top:0}.footer-media-info[_ngcontent-%COMP%]{color:#fff;background:#000;width:100%;height:50px;position:fixed;line-height:.8;font-size:18px;bottom:0}.footer-media-info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:31px}.content-mdeia-list[_ngcontent-%COMP%]{margin-bottom:50px}ion-slides[_ngcontent-%COMP%]{margin:25px 0 5px}.swiper-slide[_ngcontent-%COMP%]{display:block}.track-time[_ngcontent-%COMP%]{font-size:11px;margin-right:15px}ion-item[_ngcontent-%COMP%], ion-list-header[_ngcontent-%COMP%]{margin-right:10px;margin-bottom:10px}ion-list-header[_ngcontent-%COMP%]{padding-right:20px;text-transform:none}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px}ion-list[_ngcontent-%COMP%]{margin-bottom:15px}"]],data:{animation:[{type:7,name:"FadeIn",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translatey(0%)",opacity:0},offset:null},{type:4,styles:{type:6,styles:{transform:"translatey(0%)",opacity:1},offset:null},timings:".3s ease-in-out"}],options:null}],options:{}},{type:7,name:"SlideLeft",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translatex(50%)",opacity:0},offset:null},{type:4,styles:{type:6,styles:{transform:"translatex(0%)",opacity:1},offset:null},timings:".5s ease-in-out"}],options:null},{type:1,expr:":leave",animation:[{type:6,styles:{transform:"translatex(0%)",opacity:1},offset:null},{type:4,styles:{type:6,styles:{transform:"translatex(50%)",opacity:0},offset:null},timings:"0.3s ease-in-out"}],options:null}],options:{}},{type:7,name:"SlideUp",definitions:[{type:1,expr:":leave",animation:[{type:6,styles:{transform:"translatey(0%)",opacity:1},offset:null},{type:4,styles:{type:6,styles:{transform:"translatey(50%)",opacity:0},offset:null},timings:"0.5s ease-in-out"}],options:null}],options:{}},{type:7,name:"SlideRight",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translatey(50%)",opacity:0},offset:null},{type:4,styles:{type:6,styles:{transform:"translatey(0%)",opacity:1},offset:null},timings:"1s ease-in-out"}],options:null},{type:1,expr:":leave",animation:[{type:6,styles:{transform:"translatex(0%)",opacity:1},offset:null},{type:4,styles:{type:6,styles:{transform:"translatex(-50%)",opacity:0},offset:null},timings:"0.5s ease-in-out"}],options:null}],options:{}}]}});function w(n){return u.Db(0,[(n()(),u.ob(0,0,null,null,10,"ion-slide",[["routerDirection","forward"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.xb(n,2).onClick()&&e),"click"===l&&(e=!1!==u.xb(n,4).onClick(t)&&e),e},i.F,i.h)),u.nb(1,49152,null,0,r.Y,[u.h,u.k],null,null),u.nb(2,16384,null,0,c.n,[c.m,c.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.yb(3,1),u.nb(4,737280,null,0,r.sb,[s.g,r.ob,u.k,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),u.ob(5,0,null,0,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(n()(),u.ob(6,0,null,0,4,"h4",[["class","mt-5"]],null,null,null,null,null)),(n()(),u.Cb(7,null,["",""])),(n()(),u.ob(8,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.ob(9,0,null,null,1,"small",[],null,null,null,null,null)),(n()(),u.Cb(10,null,["",""]))],function(n,l){var t=n(l,3,0,"/media/news/album/"+l.context.$implicit.id);n(l,2,0,t),n(l,4,0,"forward")},function(n,l){n(l,5,0,l.context.$implicit.imgSrc),n(l,7,0,l.context.$implicit.author),n(l,10,0,l.context.$implicit.title)})}function O(n){return u.Db(0,[(n()(),u.ob(0,0,null,null,14,"ion-item",[["lines","none"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.play(n.context.$implicit)&&u),u},i.z,i.b)),u.nb(1,49152,null,0,r.q,[u.h,u.k],{lines:[0,"lines"]},null),(n()(),u.ob(2,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,i.K,i.m)),u.nb(3,49152,null,0,r.gb,[u.h,u.k],null,null),(n()(),u.ob(4,0,null,0,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),u.ob(5,0,null,0,5,"ion-label",[],null,null,null,i.A,i.c)),u.nb(6,49152,null,0,r.w,[u.h,u.k],null,null),(n()(),u.ob(7,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),u.Cb(8,null,["",""])),(n()(),u.ob(9,0,null,0,1,"h3",[["class","text-muted"]],null,null,null,null,null)),(n()(),u.Cb(10,null,["",""])),(n()(),u.ob(11,0,null,0,1,"p",[["class","track-time text-muted"]],null,null,null,null,null)),(n()(),u.Cb(12,null,["",""])),(n()(),u.ob(13,0,null,0,1,"ion-icon",[["name","more"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.presentActionSheet(n.context.$implicit)&&u),u},i.V,i.x)),u.nb(14,49152,null,0,r.Rb,[u.h,u.k],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"none"),n(l,14,0,"more")},function(n,l){n(l,4,0,l.context.$implicit.imgSrc,l.context.$implicit.title),n(l,8,0,l.context.$implicit.author),n(l,10,0,l.context.$implicit.title),n(l,12,0,l.context.$implicit.time)})}function C(n){return u.Db(0,[(n()(),u.ob(0,0,null,null,14,"ion-item",[["lines","none"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.play(n.context.$implicit)&&u),u},i.z,i.b)),u.nb(1,49152,null,0,r.q,[u.h,u.k],{lines:[0,"lines"]},null),(n()(),u.ob(2,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,i.K,i.m)),u.nb(3,49152,null,0,r.gb,[u.h,u.k],null,null),(n()(),u.ob(4,0,null,0,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),u.ob(5,0,null,0,5,"ion-label",[],null,null,null,i.A,i.c)),u.nb(6,49152,null,0,r.w,[u.h,u.k],null,null),(n()(),u.ob(7,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),u.Cb(8,null,["",""])),(n()(),u.ob(9,0,null,0,1,"h3",[["class","text-muted"]],null,null,null,null,null)),(n()(),u.Cb(10,null,["",""])),(n()(),u.ob(11,0,null,0,1,"p",[["class","track-time text-muted"]],null,null,null,null,null)),(n()(),u.Cb(12,null,["",""])),(n()(),u.ob(13,0,null,0,1,"ion-icon",[["name","more"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.presentActionSheet(n.context.$implicit)&&u),u},i.V,i.x)),u.nb(14,49152,null,0,r.Rb,[u.h,u.k],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"none"),n(l,14,0,"more")},function(n,l){n(l,4,0,l.context.$implicit.imgSrc,l.context.$implicit.title),n(l,8,0,l.context.$implicit.author),n(l,10,0,l.context.$implicit.title),n(l,12,0,l.context.$implicit.time)})}function I(n){return u.Db(0,[(n()(),u.ob(0,0,null,null,14,"ion-item",[["lines","none"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.play(n.context.$implicit)&&u),u},i.z,i.b)),u.nb(1,49152,null,0,r.q,[u.h,u.k],{lines:[0,"lines"]},null),(n()(),u.ob(2,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,i.K,i.m)),u.nb(3,49152,null,0,r.gb,[u.h,u.k],null,null),(n()(),u.ob(4,0,null,0,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),u.ob(5,0,null,0,5,"ion-label",[],null,null,null,i.A,i.c)),u.nb(6,49152,null,0,r.w,[u.h,u.k],null,null),(n()(),u.ob(7,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),u.Cb(8,null,["",""])),(n()(),u.ob(9,0,null,0,1,"h3",[["class","text-muted"]],null,null,null,null,null)),(n()(),u.Cb(10,null,["",""])),(n()(),u.ob(11,0,null,0,1,"p",[["class","track-time text-muted"]],null,null,null,null,null)),(n()(),u.Cb(12,null,["",""])),(n()(),u.ob(13,0,null,0,1,"ion-icon",[["name","more"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.presentActionSheet(n.context.$implicit)&&u),u},i.V,i.x)),u.nb(14,49152,null,0,r.Rb,[u.h,u.k],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"none"),n(l,14,0,"more")},function(n,l){n(l,4,0,l.context.$implicit.imgSrc,l.context.$implicit.title),n(l,8,0,l.context.$implicit.author),n(l,10,0,l.context.$implicit.title),n(l,12,0,l.context.$implicit.time)})}function R(n){return u.Db(0,[(n()(),u.ob(0,0,null,null,0,"br",[],null,null,null,null,null))],null,null)}function D(n){return u.Db(0,[(n()(),u.ob(0,0,null,null,0,"br",[],null,null,null,null,null))],null,null)}function S(n){return u.Db(0,[(n()(),u.ob(0,0,null,null,19,"div",[["class","footer-media-info"]],null,null,null,null,null)),(n()(),u.ob(1,0,null,null,18,"ion-grid",[],null,null,null,i.T,i.v)),u.nb(2,49152,null,0,r.Pb,[u.h,u.k],null,null),(n()(),u.ob(3,0,null,0,16,"ion-row",[],null,null,null,i.D,i.f)),u.nb(4,49152,null,0,r.R,[u.h,u.k],null,null),(n()(),u.ob(5,0,null,0,3,"ion-col",[["class","icon"],["size","3"]],null,null,null,i.R,i.t)),u.nb(6,49152,null,0,r.Ib,[u.h,u.k],{size:[0,"size"]},null),(n()(),u.ob(7,0,null,0,1,"ion-icon",[["name","arrow-dropup"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.openModal([{id:0}])&&u),u},i.V,i.x)),u.nb(8,49152,null,0,r.Rb,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.ob(9,0,null,0,6,"ion-col",[["class","text-center"]],null,null,null,i.R,i.t)),u.nb(10,49152,null,0,r.Ib,[u.h,u.k],null,null),(n()(),u.ob(11,0,null,0,4,"small",[],null,null,null,null,null)),(n()(),u.Cb(-1,null,["Prodigy"])),(n()(),u.ob(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.ob(14,0,null,null,1,"small",[],null,null,null,null,null)),(n()(),u.Cb(-1,null,["Smack my bitch up"])),(n()(),u.ob(16,0,null,0,3,"ion-col",[["class","text-right icon"],["size","3"]],null,null,null,i.R,i.t)),u.nb(17,49152,null,0,r.Ib,[u.h,u.k],{size:[0,"size"]},null),(n()(),u.ob(18,0,null,0,1,"ion-icon",[["name","pause"]],null,null,null,i.V,i.x)),u.nb(19,49152,null,0,r.Rb,[u.h,u.k],{name:[0,"name"]},null)],function(n,l){n(l,6,0,"3"),n(l,8,0,"arrow-dropup"),n(l,17,0,"3"),n(l,19,0,"pause")},null)}function P(n){return u.Db(0,[(n()(),u.ob(0,0,null,null,37,"ion-header",[],null,null,null,i.U,i.w)),u.nb(1,49152,null,0,r.Qb,[u.h,u.k],null,null),(n()(),u.ob(2,0,null,0,35,"ion-toolbar",[["color","secondary"]],null,null,null,i.L,i.n)),u.nb(3,49152,null,0,r.jb,[u.h,u.k],{color:[0,"color"]},null),(n()(),u.ob(4,0,null,0,33,"ion-buttons",[],null,null,null,i.Q,i.s)),u.nb(5,49152,null,0,r.Ab,[u.h,u.k],null,null),(n()(),u.ob(6,0,null,0,31,"ion-row",[],null,null,null,i.D,i.f)),u.nb(7,49152,null,0,r.R,[u.h,u.k],null,null),(n()(),u.ob(8,0,null,0,5,"ion-col",[["class","active"]],null,null,null,i.R,i.t)),u.nb(9,49152,null,0,r.Ib,[u.h,u.k],null,null),(n()(),u.ob(10,0,null,0,3,"ion-button",[],null,null,null,i.P,i.r)),u.nb(11,49152,null,0,r.zb,[u.h,u.k],null,null),(n()(),u.ob(12,0,null,0,1,"ion-icon",[["name","headset"],["slot","icon-only"]],null,null,null,i.V,i.x)),u.nb(13,49152,null,0,r.Rb,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.ob(14,0,null,0,5,"ion-col",[],null,null,null,i.R,i.t)),u.nb(15,49152,null,0,r.Ib,[u.h,u.k],null,null),(n()(),u.ob(16,0,null,0,3,"ion-button",[],null,null,null,i.P,i.r)),u.nb(17,49152,null,0,r.zb,[u.h,u.k],null,null),(n()(),u.ob(18,0,null,0,1,"ion-icon",[["name","bookmarks"],["slot","icon-only"]],null,null,null,i.V,i.x)),u.nb(19,49152,null,0,r.Rb,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.ob(20,0,null,0,5,"ion-col",[],null,null,null,i.R,i.t)),u.nb(21,49152,null,0,r.Ib,[u.h,u.k],null,null),(n()(),u.ob(22,0,null,0,3,"ion-button",[],null,null,null,i.P,i.r)),u.nb(23,49152,null,0,r.zb,[u.h,u.k],null,null),(n()(),u.ob(24,0,null,0,1,"ion-icon",[["name","mail"],["slot","icon-only"]],null,null,null,i.V,i.x)),u.nb(25,49152,null,0,r.Rb,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.ob(26,0,null,0,5,"ion-col",[],null,null,null,i.R,i.t)),u.nb(27,49152,null,0,r.Ib,[u.h,u.k],null,null),(n()(),u.ob(28,0,null,0,3,"ion-button",[],null,null,null,i.P,i.r)),u.nb(29,49152,null,0,r.zb,[u.h,u.k],null,null),(n()(),u.ob(30,0,null,0,1,"ion-icon",[["name","text"],["slot","icon-only"]],null,null,null,i.V,i.x)),u.nb(31,49152,null,0,r.Rb,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.ob(32,0,null,0,5,"ion-col",[],null,null,null,i.R,i.t)),u.nb(33,49152,null,0,r.Ib,[u.h,u.k],null,null),(n()(),u.ob(34,0,null,0,3,"ion-button",[],null,null,null,i.P,i.r)),u.nb(35,49152,null,0,r.zb,[u.h,u.k],null,null),(n()(),u.ob(36,0,null,0,1,"ion-icon",[["name","person"],["slot","icon-only"]],null,null,null,i.V,i.x)),u.nb(37,49152,null,0,r.Rb,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.ob(38,0,null,null,55,"ion-content",[["class","background"]],null,null,null,i.S,i.u)),u.nb(39,49152,null,0,r.Jb,[u.h,u.k],null,null),(n()(),u.ob(40,0,null,0,1,"h1",[["class","title"]],null,null,null,null,null)),(n()(),u.Cb(-1,null,["\u041c\u0443\u0437\u044b\u043a\u0430"])),(n()(),u.ob(42,0,null,0,3,"ion-slides",[],null,null,null,i.G,i.i)),u.nb(43,49152,null,0,r.Z,[u.h,u.k],{options:[0,"options"]},null),(n()(),u.gb(16777216,null,0,1,null,w)),u.nb(45,278528,null,0,s.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.ob(46,0,null,0,13,"ion-list",[["class","mb-0"]],null,null,null,i.B,i.d)),u.nb(47,49152,null,0,r.x,[u.h,u.k],null,null),(n()(),u.ob(48,0,null,0,9,"ion-list-header",[["class","mb-0"],["routerDirection","forward"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.xb(n,50).onClick()&&e),"click"===l&&(e=!1!==u.xb(n,52).onClick(t)&&e),e},i.C,i.e)),u.nb(49,49152,null,0,r.y,[u.h,u.k],null,null),u.nb(50,16384,null,0,c.n,[c.m,c.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.yb(51,1),u.nb(52,737280,null,0,r.sb,[s.g,r.ob,u.k,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),u.ob(53,0,null,0,1,"h4",[["class","strong"]],null,null,null,null,null)),(n()(),u.Cb(-1,null,["\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0432\u0430\u043c"])),(n()(),u.ob(55,0,null,0,2,"h3",[],null,null,null,null,null)),(n()(),u.ob(56,0,null,null,1,"ion-icon",[["name","arrow-forward"]],null,null,null,i.V,i.x)),u.nb(57,49152,null,0,r.Rb,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.gb(16777216,null,0,1,null,O)),u.nb(59,278528,null,0,s.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.ob(60,0,null,0,13,"ion-list",[["class","mb-0"]],null,null,null,i.B,i.d)),u.nb(61,49152,null,0,r.x,[u.h,u.k],null,null),(n()(),u.ob(62,0,null,0,9,"ion-list-header",[["class","mb-0"],["routerDirection","forward"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.xb(n,64).onClick()&&e),"click"===l&&(e=!1!==u.xb(n,66).onClick(t)&&e),e},i.C,i.e)),u.nb(63,49152,null,0,r.y,[u.h,u.k],null,null),u.nb(64,16384,null,0,c.n,[c.m,c.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.yb(65,1),u.nb(66,737280,null,0,r.sb,[s.g,r.ob,u.k,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),u.ob(67,0,null,0,1,"h4",[["class","strong"]],null,null,null,null,null)),(n()(),u.Cb(-1,null,["\u041d\u043e\u0432\u0438\u043d\u043a\u0438"])),(n()(),u.ob(69,0,null,0,2,"h3",[],null,null,null,null,null)),(n()(),u.ob(70,0,null,null,1,"ion-icon",[["name","arrow-forward"]],null,null,null,i.V,i.x)),u.nb(71,49152,null,0,r.Rb,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.gb(16777216,null,0,1,null,C)),u.nb(73,278528,null,0,s.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.ob(74,0,null,0,13,"ion-list",[],null,null,null,i.B,i.d)),u.nb(75,49152,null,0,r.x,[u.h,u.k],null,null),(n()(),u.ob(76,0,null,0,9,"ion-list-header",[["class","mb-0"],["routerDirection","forward"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.xb(n,78).onClick()&&e),"click"===l&&(e=!1!==u.xb(n,80).onClick(t)&&e),e},i.C,i.e)),u.nb(77,49152,null,0,r.y,[u.h,u.k],null,null),u.nb(78,16384,null,0,c.n,[c.m,c.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.yb(79,1),u.nb(80,737280,null,0,r.sb,[s.g,r.ob,u.k,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),u.ob(81,0,null,0,1,"h4",[["class","strong"]],null,null,null,null,null)),(n()(),u.Cb(-1,null,["\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435"])),(n()(),u.ob(83,0,null,0,2,"h3",[],null,null,null,null,null)),(n()(),u.ob(84,0,null,null,1,"ion-icon",[["name","arrow-forward"]],null,null,null,i.V,i.x)),u.nb(85,49152,null,0,r.Rb,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.gb(16777216,null,0,1,null,I)),u.nb(87,278528,null,0,s.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.gb(16777216,null,0,1,null,R)),u.nb(89,16384,null,0,s.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,D)),u.nb(91,16384,null,0,s.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,S)),u.nb(93,16384,null,0,s.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,3,0,"secondary"),n(l,13,0,"headset"),n(l,19,0,"bookmarks"),n(l,25,0,"mail"),n(l,31,0,"text"),n(l,37,0,"person"),n(l,43,0,t.slideOpts),n(l,45,0,t.slides);var u=n(l,51,0,"/media/news/list/recommend/");n(l,50,0,u),n(l,52,0,"forward"),n(l,57,0,"arrow-forward"),n(l,59,0,t.advise);var e=n(l,65,0,"/media/news/list/news/");n(l,64,0,e),n(l,66,0,"forward"),n(l,71,0,"arrow-forward"),n(l,73,0,t.news);var o=n(l,79,0,"/media/news/list/popular/");n(l,78,0,o),n(l,80,0,"forward"),n(l,85,0,"arrow-forward"),n(l,87,0,t.popular),n(l,89,0,t.trackData),n(l,91,0,t.trackData),n(l,93,0,t.trackData)},null)}function A(n){return u.Db(0,[(n()(),u.ob(0,0,null,null,2,"app-news",[],null,null,null,P,x)),u.zb(512,null,f,f,[]),u.nb(2,245760,null,0,k,[r.c,c.a,c.m,m.a,r.j,f,r.a,v.b],null,null)],function(n,l){n(l,2,0)},null)}var j=u.kb("app-news",k,A,{},{},[]),M=t("ruHB");t.d(l,"NewsModuleNgFactory",function(){return _});var _=u.lb(e,[],function(n){return u.ub([u.vb(512,u.j,u.bb,[[8,[o.a,j]],[3,u.j],u.x]),u.vb(4608,s.k,s.j,[u.u,[2,s.r]]),u.vb(4608,r.rb,r.rb,[u.z,u.g]),u.vb(4608,r.vb,r.vb,[r.rb,u.j,u.q]),u.vb(4608,r.wb,r.wb,[r.rb,u.j,u.q]),u.vb(1073742336,s.b,s.b,[]),u.vb(1073742336,r.d,r.d,[]),u.vb(1073742336,M.a,M.a,[]),u.vb(1073742336,c.p,c.p,[[2,c.v],[2,c.m]]),u.vb(1073742336,e,e,[]),u.vb(1024,c.k,function(){return[[{path:"",component:k}]]},[])])})},T1DM:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=t("h9Dq"),e=new(t("CS9Q").a)(u.a)},h9Dq:function(n,l,t){"use strict";var u=t("mrSG"),e=function(n){function l(l,t){return n.call(this)||this}return u.d(l,n),l.prototype.schedule=function(n,l){return void 0===l&&(l=0),this},l}(t("pugT").a);t.d(l,"a",function(){return o});var o=function(n){function l(l,t){var u=n.call(this,l,t)||this;return u.scheduler=l,u.work=t,u.pending=!1,u}return u.d(l,n),l.prototype.schedule=function(n,l){if(void 0===l&&(l=0),this.closed)return this;this.state=n;var t=this.id,u=this.scheduler;return null!=t&&(this.id=this.recycleAsyncId(u,t,l)),this.pending=!0,this.delay=l,this.id=this.id||this.requestAsyncId(u,this.id,l),this},l.prototype.requestAsyncId=function(n,l,t){return void 0===t&&(t=0),setInterval(n.flush.bind(n,this),t)},l.prototype.recycleAsyncId=function(n,l,t){if(void 0===t&&(t=0),null!==t&&this.delay===t&&!1===this.pending)return l;clearInterval(l)},l.prototype.execute=function(n,l){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var t=this._execute(n,l);if(t)return t;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},l.prototype._execute=function(n,l){var t=!1,u=void 0;try{this.work(n)}catch(e){t=!0,u=!!e&&e||new Error(e)}if(t)return this.unsubscribe(),u},l.prototype._unsubscribe=function(){var n=this.id,l=this.scheduler,t=l.actions,u=t.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==u&&t.splice(u,1),null!=n&&(this.id=this.recycleAsyncId(l,n,null)),this.delay=null},l}(e)},xXU7:function(n,l,t){"use strict";var u=t("6blF"),e=t("T1DM"),o=t("isby");function i(n,l){var t;return void 0===n&&(n=0),void 0===l&&(l=e.a),t=n,(Object(o.a)(t)||!(t-parseFloat(t)+1>=0)||n<0)&&(n=0),l&&"function"==typeof l.schedule||(l=e.a),new u.a(function(t){return t.add(l.schedule(r,n,{subscriber:t,counter:0,period:n})),t})}function r(n){var l=n.subscriber,t=n.counter,u=n.period;l.next(t),this.schedule({subscriber:l,counter:t+1,period:u},u)}t.d(l,"a",function(){return i})}}]);