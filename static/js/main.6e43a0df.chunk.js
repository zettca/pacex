(this.webpackJsonppacex=this.webpackJsonppacex||[]).push([[0],{209:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(24),c=a.n(o),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var r=a(234),u=a(184),d=a(23),b=a(235),m=a(236),v=a(11),j=a(13),p=a(238),h=a(185),O=a(46),f=a(229),g=a(233),x=a(237),k=a(227),L=a(228),w=a(225),S=a(3),C=function(e){var t=e.locked,a=Object(O.a)(e,["locked"]);return Object(S.jsx)(w.a,Object(v.a)(Object(v.a)({size:"small",disabled:t},a),{},{children:t?Object(S.jsx)(k.a,{}):Object(S.jsx)(L.a,{})}))},M=3600,T=function(e,t){return e/t*M},E=function(e,t){return t*e/M},y=function(e,t){return t*M/e},A=function(e){return function(e){return e<10?"0".concat(e):String(e)}(Math.floor(e))},U="TIME",N="DIST",D="SPEED";var R,W=a(18),F={DEFAULT:"DEFAULT",ALL:"ALL",SHORT:"SHORT",MEDIUM:"MEDIUM",LONG:"LONG",ULTRA:"ULTRA"},I=[{label:"1 mi",value:1610},{label:"5K",value:5e3},{label:"10K",value:1e4},{label:"\xbd Marathon",value:21097},{label:"Marathon",value:42195},{label:"50K",value:5e4},{label:"50 mi",value:80467},{label:"100K",value:1e5},{label:"100 Mi",value:160934}],B=[{label:"\ud83d\udeb6",value:6e3},{label:"\ud83d\udeb6\ud83d\udca8",value:8e3},{label:"\ud83c\udfc3",value:12e3},{label:"\ud83c\udfc3\ud83d\udca8",value:15e3},{label:"Kipchoge",value:21e3},{label:"Bekele",value:24e3},{label:"Bolt",value:38e3}],K=(R={},Object(W.a)(R,F.DEFAULT,{time:{min:60,max:3600,value:1800,step:10,buttons:[{label:"12'",value:720},{label:"30'",value:1800},{label:"1h",value:3600},{label:"2h",value:7200},{label:"3h",value:10800},{label:"4h",value:14400},{label:"6h",value:21600},{label:"8h",value:28800},{label:"12h",value:43200},{label:"24h",value:86400}]},dist:{min:1e3,max:1e4,value:5e3,step:100,buttons:I},speed:{min:6e3,max:16e3,value:12e3,step:100,buttons:B}}),Object(W.a)(R,F.SHORT,{time:{min:6,max:120,step:1,value:10},dist:{min:60,max:400,step:10,value:200,buttons:I},speed:{min:1e4,max:5e4,step:100,value:16e3,buttons:B}}),Object(W.a)(R,F.MEDIUM,{time:{min:40,max:3600,step:1,value:600},dist:{min:400,max:5e3,step:100,value:1500,buttons:I},speed:{min:8e3,max:4e4,step:100,value:14e3,buttons:B}}),Object(W.a)(R,F.LONG,{time:{min:600,max:21600,step:2,value:1200},dist:{min:5e3,max:42e3,step:100,value:1e4,buttons:I},speed:{min:4e3,max:32e3,step:100,value:12e3,buttons:B}}),Object(W.a)(R,F.ULTRA,{time:{min:10,max:100,step:2,value:10},dist:{min:10,max:100,step:2,value:10,buttons:I},speed:{min:10,max:100,step:2,value:10,buttons:B}}),Object(W.a)(R,F.ALL,{time:{min:60,max:86400,step:20},dist:{min:100,max:5e4,step:100,buttons:I},speed:{min:6e3,max:24e3,step:100,buttons:B}}),R),P=F.DEFAULT;var H=function(e){var t=e.min,a=void 0===t?0:t,i=e.max,o=void 0===i?100:i,c=e.value,l=void 0===c?10:c,s=e.incMult,r=void 0===s?1.2:s,u=e.decMult,d=void 0===u?1.1:u,b=e.incThresh,m=void 0===b?.95:b,v=e.decThresh,p=void 0===v?.6:v,h=Object(n.useState)(o),O=Object(j.a)(h,2),f=O[0],g=O[1],x=Object(n.useState)(l),k=Object(j.a)(x,2),L=k[0],w=k[1];return[{min:a,max:f,value:L,onChange:function(e,t){L===t&&t<f||w(t)},onChangeCommitted:function(){L<o?g(o):L<f*p?g(Math.floor(L*d)):L>f*m&&g(Math.floor(L*r))}},w]},G=a(230),z=a(231),J=a(232),V=Object(f.a)((function(e){return{root:{backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundAttachment:"fixed",backgroundSize:"cover",minHeight:"100vh",display:"flex"},card:{padding:e.spacing(3)}}})),$=function(e){return function(t){var a=V(),n=Math.floor(7*Math.random());return Object(S.jsx)("main",{className:a.root,style:{backgroundImage:"url(img/bg".concat(n,".jpg)")},children:Object(S.jsx)(G.a,{style:{margin:"auto",width:"100vw"},children:Object(S.jsx)(z.a,{children:Object(S.jsx)(J.a,{className:a.card,children:Object(S.jsx)(e,Object(v.a)({},t))})})})})}},q=Object(f.a)((function(e){return{root:{"&:not(:last-child)":{marginBottom:e.spacing(3)}},mark:{color:e.palette.primary.light},titleContainer:{display:"flex"},title:{display:"inline-block",marginRight:e.spacing(1)}}})),Q=function(e){var t=e.id,a=e.title,i=e.locked,o=void 0!==i&&i,c=e.buttons,l=void 0===c?[]:c,s=e.onChange,r=e.onLockClick,u=e.min,d=e.max,b=e.value,m=Object(O.a)(e,["id","title","locked","buttons","onChange","onLockClick","min","max","value"]),p=q(),f=H({min:u,max:d,value:b}),k=Object(j.a)(f,2),L=k[0],w=k[1];Object(n.useEffect)((function(){w(b)}),[b,w]);var M=[].concat(Object(h.a)(l.filter((function(e){return e.value<L.max}))),[{value:L.max,label:"+"}]);return Object(S.jsxs)("section",{className:p.root,children:[Object(S.jsxs)("div",{className:p.titleContainer,children:[Object(S.jsx)(g.a,{id:t,component:"h1",variant:"h6",className:p.title,children:a}),Object(S.jsx)(C,{locked:o,onClick:r,"aria-label":"Lock"})]}),Object(S.jsx)(x.a,Object(v.a)(Object(v.a)({classes:{markLabel:p.mark},disabled:o,"aria-labelledby":t},L),{},{marks:M,onChange:function(e,t){L.onChange(e,t),null===s||void 0===s||s(e,t)}},m))]})},X=$((function(){var e,t=Object(p.a)().t,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=Object(n.useState)(K[F[e]]),a=Object(j.a)(t,2),i=a[0],o=a[1];return[i,function(e){var t;o(null!==(t=K[F[e]])&&void 0!==t?t:K[P])}]}(),i=Object(j.a)(a,1)[0],o=function(e){var t=e.time,a=e.dist,i=e.speed,o=e.lock,c=void 0===o?D:o,l=Object(n.useState)(t),s=Object(j.a)(l,2),r=s[0],u=s[1],d=Object(n.useState)(a),b=Object(j.a)(d,2),m=b[0],v=b[1],p=Object(n.useState)(i),h=Object(j.a)(p,2),O=h[0],f=h[1],g=Object(n.useState)(c),x=Object(j.a)(g,2),k=x[0],L=x[1];return{time:r,dist:m,speed:O,update:{time:function(e,t){u(t),k===N&&v(E(t,O)),k===D&&f(y(t,m))},dist:function(e,t){v(t),k===U&&u(T(t,O)),k===D&&f(y(r,t))},speed:function(e,t){f(t),k===U&&u(T(m,t)),k===N&&v(E(r,t))}},lock:k,setLock:L}}({time:i.time.value,dist:i.dist.value,speed:i.speed.value}),c=o.time,l=o.dist,s=o.speed,r=o.lock,u=o.setLock,d=o.update,b=s/1e3,m=60/b,h=[m,m%1*60].map(A).join(":");return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Q,Object(v.a)(Object(v.a)({id:"time",title:"".concat(t("components.main.time")," ").concat((e=c,[e/3600,e%3600/60,e%60].map(A).join(":"))),locked:r===U,onChange:d.time,onLockClick:function(){return u(U)}},i.time),{},{value:c})),Object(S.jsx)(Q,Object(v.a)(Object(v.a)({id:"dist",title:"".concat(t("components.main.distance")," ").concat((l/1e3).toFixed(1),"km"),locked:r===N,onChange:d.dist,onLockClick:function(){return u(N)}},i.dist),{},{value:l})),Object(S.jsx)(Q,Object(v.a)(Object(v.a)({id:"pace",title:"".concat(t("components.main.speed")," ").concat(h,"/km (").concat(b.toFixed(1),"kph)"),locked:r===D,onChange:d.speed,onLockClick:function(){return u(D)}},i.speed),{},{value:s}))]})})),Y=a(52),Z=a(181),_=a(183),ee=a(37);Y.a.use(Z.a).use(_.a).use(ee.e).init({fallbackLng:["en"],nonExplicitSupportedLngs:!0,debug:!0,detection:{caches:[]},backend:{loadPath:"/locales/{{lng}}.json"},interpolation:{escapeValue:!1}});Y.a;var te=function(){var e=Object(r.a)("(prefers-color-scheme: dark)"),t=Object(n.useMemo)((function(){return Object(u.a)({palette:{type:e?"dark":"light",primary:{main:d.a.orange[400]||d.a.teal[400]}}})}),[e]);return Object(S.jsx)(n.Suspense,{fallback:Object(S.jsx)("div",{}),children:Object(S.jsxs)(b.a,{theme:t,children:[Object(S.jsx)(m.a,{}),Object(S.jsx)(X,{})]})})};c.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(te,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):s(t,e)}))}}()}},[[209,1,2]]]);
//# sourceMappingURL=main.6e43a0df.chunk.js.map