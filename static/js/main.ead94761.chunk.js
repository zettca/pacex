(this.webpackJsonppacex=this.webpackJsonppacex||[]).push([[0],{40:function(e,a,n){e.exports=n(50)},50:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(15),c=n.n(r),o=n(75),u=n(35),i=n(70),m=n(72),v=n(65),s=n(74),h=n(66),b=function(e){var a=Math.floor(7*Math.random()),n={background:"url(img/bg".concat(a,".jpg) no-repeat center center fixed"),backgroundSize:"cover",minHeight:"100vh"};return l.a.createElement("main",{style:n},l.a.createElement(m.a,{pt:4},l.a.createElement(v.a,null,l.a.createElement(s.a,null,l.a.createElement(h.a,null,l.a.createElement(e,null))))))},E=n(12),p=n(67),f=n(68),d=n(73),g=n(69),k=n(33),j=n.n(k),y=n(34),M=n.n(y),O=function(e){return function(e){return e<10?"0".concat(e):String(e)}(Math.floor(e))},w=function(e,a){return e/a*3600},x=function(e,a){return 3600*a/e},C=[3600,60,1],S=[{label:"Mile",value:1610},{label:"5K",value:5e3},{label:"10K",value:1e4},{label:"\xbd Marathon",value:21100},{label:"Marathon",value:42200},{label:"50K",value:5e4},{label:"100K",value:1e5}],W=[{label:"Walk",value:6e3},{label:"Jog",value:8e3},{label:"Run",value:12e3},{label:"Fast",value:15e3},{label:"Bekele",value:24e3}],F=function(){var e=Object(t.useState)(5420),a=Object(E.a)(e,2),n=a[0],r=a[1],c=Object(t.useState)(1e4),o=Object(E.a)(c,2),u=o[0],i=o[1],m=Object(t.useState)(1e4),v=Object(E.a)(m,2),s=v[0],h=v[1],b=Object(t.useState)(!0),k=Object(E.a)(b,2),y=k[0],F=k[1],K=function(e,a){var t=a||u+100*-Math.sign(e.deltaY);i(t),y?h(x(n,t)):r(w(t,s))},B=function(e,a){var t=a||s+100*-Math.sign(e.deltaY);h(t),y?i(function(e,a){return a*e/3600}(n,t)):r(w(u,t))},J=s/1e3,Y=60/J,z=[Y,Y%1*60].map(O).join(":"),D=[n/3600,Math.floor(n/60)%60,n%60].map(O).join(":");return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement(p.a,{component:"h1",variant:"h6"},"Time"),l.a.createElement("input",{type:"time",value:D,onChange:function(e,a){var n=a||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(":").reduce((function(e,a,n){return e+(Number(a)*C[n]||0)}),0)}(e.target.value);r(n),h(x(n,u))},step:1}),l.a.createElement(f.a,{onClick:function(){return F(!y)}},y?l.a.createElement(j.a,null):l.a.createElement(M.a,null))),l.a.createElement("section",null,l.a.createElement(p.a,{component:"h1",variant:"h6"},"Distance ".concat((u/1e3).toFixed(1),"km")),l.a.createElement(d.a,{value:u,onChange:K,onWheel:K,min:100,max:5e4,step:100}),l.a.createElement("div",null,S.map((function(e,a){return l.a.createElement(g.a,{color:"primary",key:"d".concat(e.value),onClick:function(){return K("",e.value)}},e.label)})))),l.a.createElement("section",null,l.a.createElement(p.a,{component:"h1",variant:"h6"},"Pace ".concat(z,"/km (").concat(J.toFixed(1),"kph)")),l.a.createElement(d.a,{color:"secondary",value:s,onChange:B,onWheel:B,min:6e3,max:24e3,step:100}),l.a.createElement("div",null,W.map((function(e,a){return l.a.createElement(g.a,{color:"secondary",key:"s".concat(e.value),onClick:function(){return B("",e.value)}},e.label)})))))},K=function(){var e=Object(u.a)();return l.a.createElement(i.a,{theme:e},l.a.createElement(o.a,null),b(F))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.ead94761.chunk.js.map