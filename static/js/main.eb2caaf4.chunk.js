(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(30)},25:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),u=a(5),i=(a(25),a(14)),o=a(3),l=a(12),m=a(9),d=a.n(m),f=function(e){return fetch(e).then(function(e){return e.json()})},p={restaurantsListData:null},v=Object(o.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_RESTAURANT":return Object(i.a)({},e,{restaurantsListData:t.payload});default:return e}},p,Object(o.a)(l.a)),E=a(13),g=Object(E.a)(function(e){return e},function(e){var t=e.restaurantsListData;if(!t)return[];var a=t.feedItems,n=t.storesMap;return a.map(function(e){var t=e.uuid;return n[t]})}),h=(a(27),function(e){var t=e.imageUrl,a=e.title,n=e.categories,c=e.etaRange;return r.a.createElement("div",{className:"restaurant-card"},r.a.createElement("img",{src:t,alt:a,className:"restaurant-card__img"}),r.a.createElement("h2",{className:"restaurant-card__title"},a),r.a.createElement("div",{className:"restaurant-card__categories"},n.join(" \xb7 ")),r.a.createElement("div",{className:"restaurant-card__eta"},c))}),b=(a(28),Object(u.b)(function(e){return{restaurantsData:g(e)}},{loadRestaurants:function(){return function(e){var t;return d.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(f("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants"));case 2:t=a.sent,e({type:"SAVE_RESTAURANT",payload:t.data});case 4:case"end":return a.stop()}})}}})(function(e){var t=e.loadRestaurants,a=e.restaurantsData;return Object(n.useEffect)(function(){t()},[]),r.a.createElement("div",{className:"restaurants-list"},a.map(function(e){var t=e.uuid,a=e.title,n=e.heroImageUrl,c=e.categories,s=e.etaRange;return r.a.createElement(h,{key:t,uuid:t,title:a,imageUrl:n,categories:c,etaRange:s?s.text:"20 - 30 min"})}))})),N=function(){return r.a.createElement(u.a,{store:v},r.a.createElement("div",{className:"page"},r.a.createElement("main",{className:"content"},r.a.createElement(b,null))))};a(29);s.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.eb2caaf4.chunk.js.map