(this.webpackJsonpworkout=this.webpackJsonpworkout||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(8),r=n.n(c),s=n(5),o=n(17),l=n(16),u=n(18),i=n(4);function b(e,t){if(e.length>3)return t.length>0?["deck","Click on the card to start"]:["deck","It's over congrats!!!!"];var n=null,a=null,c=null,r=null;switch(e.slice(0,e.length-1)){case"A":n="Ace",r=14;break;case"J":n="Jack",r=11;break;case"Q":n="Queen",r=12;break;case"K":n="King",r=13;break;default:n=String(e[0]),r=e.slice(0,e.length-1)}switch(e[e.length-1]){case"S":a="Spades",c="push ups";break;case"H":a="Hearts",c="squats";break;case"D":a="Diamonds",c="sit ups";break;case"C":a="Clubs",c="burpees";break;default:a="oopsie woopsie something went wrong",c="rest"}return["".concat(n," of ").concat(a),"".concat(r," ").concat(c)]}var h=function(e){var t=e.startOver,n=e.setStartOver,c=e.showRemainingCount,r=["blue_back","green_back","purple_back","gray_back","red_back","yellow_back"],h=Object(a.useState)(r[Math.floor(Math.random()*r.length)]),j=Object(s.a)(h,2),O=j[0],f=j[1],g=Object(a.useState)([]),d=Object(s.a)(g,2),v=d[0],k=d[1],m=Object(a.useState)(new Date),w=Object(s.a)(m,2),p=w[0],S=w[1],x=Object(a.useState)(p),D=Object(s.a)(x,2),C=D[0],M=D[1],N=Object(a.useState)(!1),A=Object(s.a)(N,2),_=A[0],y=A[1],J=Object(a.useState)("http://localhost:3000"===window.location.origin),H=Object(s.a)(J,2),I=H[0],R=(H[1],Object(a.useRef)(null)),E=Object(a.useState)(!1),K=Object(s.a)(E,2);K[0],K[1];return Object(a.useEffect)((function(e,t){var a=function(e){var t,n;e?(t=["A",2],n=["S","H"]):(t=["A",2,3,4,5,6,7,8,9,10,"J","Q","K"],n=["S","H","C","D"]);for(var a=[],c=0;c<n.length;c++)for(var r=0;r<t.length;r++){var s={value:t[r],suit:n[c]};a.push(s)}return a}(I);!function(e){for(var t=0;t<1e3;t++){var n=Math.floor(Math.random()*e.length),a=Math.floor(Math.random()*e.length),c=e[n];e[n]=e[a],e[a]=c}}(a);var c=[];for(var s in a)c.push(String(a[s].value).concat(a[s].suit));return k(c),function(){y(!1),n(!1),S(new Date),M(new Date),f(r[Math.floor(Math.random()*r.length)])}}),[t]),Object(a.useEffect)((function(){if(_&&(S(new Date),y(!1),R.current=setInterval((function(){M(new Date)}),1e3)),t)return function(){clearInterval(R.current),M(new Date)}}),[_,t]),Object(i.jsxs)("div",{onClick:function(){if(console.log(v.length),v.length>0){var e=!0===I?4:52;v.length===e&&y(!0),f(v.shift())}else clearInterval(R.current),f(r[Math.floor(Math.random()*r.length)])},className:"ui centered card",children:[Object(i.jsx)("div",{className:"image",children:Object(i.jsx)("img",{src:"".concat("/workout","/images/").concat(O,".png"),alt:b(O,v)[0]})}),Object(i.jsxs)("div",{style:{textAlign:"center"},className:"content",children:[Object(i.jsx)("a",{className:"header",children:b(O,v)[1]}),Object(i.jsxs)("a",{children:[c?"Remaining: ".concat(v.length," | "):"","Elapsed time: ",Object(o.a)(Object(l.a)(new Date(0),Object(u.a)(C,p)),"mm:ss")]})]})]})},j=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),o=Object(s.a)(r,2),l=o[0],u=o[1];return Object(i.jsxs)("div",{style:{textAlign:"center"},className:"ui container",children:[Object(i.jsx)(h,{startOver:n,setStartOver:c,showRemainingCount:l}),Object(i.jsx)("button",{onClick:function(){return c(!0)},className:"positive ui button",children:"Shuffle Deck"}),Object(i.jsx)("button",{onClick:function(){return u(!l)},className:"ui toggle ".concat(l?"positive":""," button"),children:"Show Count Left"})]})},O=function(){return Object(i.jsx)(j,{})};r.a.render(Object(i.jsx)(O,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.822aa0a9.chunk.js.map