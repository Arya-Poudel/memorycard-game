(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var i=c(1),r=c.n(i),a=c(6),n=c.n(a),s=(c(12),c(13),c(7)),o=c(3),d=c(0),l=function(e){var t=e.score,c=e.highScore;return Object(d.jsxs)("div",{className:"game-title",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Memory Card Game"}),Object(d.jsx)("p",{children:"Click on a card to get a point."}),Object(d.jsx)("p",{children:" Don't click on a card twice. "})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Score: ",t," "]}),Object(d.jsxs)("p",{children:["High Score: ",c," "]})]})]})},j=function(e){var t=e.card,c=Object(i.useState)(0),r=Object(o.a)(c,2),a=r[0],n=r[1],j=Object(i.useState)(0),h=Object(o.a)(j,2),p=h[0],b=h[1],u=Object(i.useState)([]),m=Object(o.a)(u,2),O=m[0],f=m[1],g=Object(i.useState)(t),x=Object(o.a)(g,2),T=x[0],v=x[1];Object(i.useEffect)((function(){!function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),i=[e[c],e[t]];e[t]=i[0],e[c]=i[1]}}(t),v(t)}),[a]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{score:a,highScore:p}),Object(d.jsx)("div",{className:"card-container",children:T.map((function(e){return Object(d.jsxs)("div",{className:"card",onClick:function(){return t=e.title,void(O.includes(t)?(alert("Game Over! Score = ".concat(a)),a>p&&b(a),n(0),f([])):(n((function(e){return e+1})),f((function(e){return[].concat(Object(s.a)(e),[t])}))));var t},children:[Object(d.jsx)("img",{src:e.src,alt:e.title}),Object(d.jsx)("p",{children:e.title})]},e.title)}))})]})},h=c.p+"static/media/1984.46c5472d.jpg",p=c.p+"static/media/AThousandSplendidSuns.98e17d64.jpg",b=c.p+"static/media/BraveNewWorld.dec3af2f.jpg",u=c.p+"static/media/Fahrenheit451.1c2cb146.jpg",m=c.p+"static/media/FlowersForAlgernon.3ec4b54b.jpg",O=c.p+"static/media/LifeOfPi.32e370e6.jpg",f=c.p+"static/media/LittleWomen.a12bfd4d.jpg",g=c.p+"static/media/TheBookThief.d0a840e7.jpg",x=c.p+"static/media/TheCatcherInTheRye.466aae1a.jpg",T=c.p+"static/media/TheDiaryOfAYoungGirl.385b8807.jpeg",v=c.p+"static/media/TheHitchhikersGuideToTheGalaxy.c4c8c3b9.jpg",S=c.p+"static/media/ToKillAMockingbird.f972a6ac.jpg",k=function(){var e=[{src:h,title:"1984"},{src:p,title:"A Thousand Splendid Suns"},{src:b,title:"Brave New World"},{src:u,title:"Fahrenheit 451"},{src:m,title:"Flowers For Algernon"},{src:O,title:"Life Of Pi"},{src:f,title:"Little Women"},{src:g,title:"The Book Thief"},{src:x,title:"The Catcher In The Rye"},{src:T,title:"The Diary Of A Young Girl"},{src:v,title:"Hitchhikers Guide To The Galaxy"},{src:S,title:"To Kill A Mockingbird"}];return Object(d.jsx)(j,{card:e})};var y=function(){return Object(d.jsx)("div",{className:"app",children:Object(d.jsx)(k,{})})};n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a4721a41.chunk.js.map