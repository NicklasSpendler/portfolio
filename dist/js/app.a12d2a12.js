(function(){"use strict";var e={9975:function(e,n,t){var r=t(9242),o=t(3396);const a={class:"homeBackgroundImage"},i={class:"wrapper"},c=(0,o._)("br",null,null,-1),s=(0,o._)("br",null,null,-1),d=(0,o._)("br",null,null,-1),l=(0,o._)("br",null,null,-1);function u(e,n,t,r,u,p){const m=(0,o.up)("Header"),f=(0,o.up)("CV"),g=(0,o.up)("Kompetencer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",a,[(0,o.Wm)(m,{name:"Nicklas Spendler Christensen"})]),(0,o._)("div",i,[(0,o.Wm)(f),c,s,d,l,(0,o.Wm)(g)])],64)}var p=t(7139);const m=e=>((0,o.dD)("data-v-0c7f2f91"),e=e(),(0,o.Cn)(),e),f={class:"wrapper"},g=m((()=>(0,o._)("a",{href:"https://portfolioapinicklas.azurewebsites.net/swagger/index.html"},"Se Backend!",-1)));function v(e,n,t,r,a,i){return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("div",f,[(0,o._)("h2",null,(0,p.zw)(t.name),1),g])])}var b={name:"header",props:{name:String}},k=t(89);const h=(0,k.Z)(b,[["render",v],["__scopeId","data-v-0c7f2f91"]]);var _=h,w=t.p+"img/profilpicture2.0a404d0d.jpg";const j={class:"CV"},y=(0,o.uE)('<h1 data-v-a05eb08e>Om Mig</h1><div class="aboutme" data-v-a05eb08e><div class="aboutme__text" data-v-a05eb08e><p data-v-a05eb08e>Jeg er en person som godt kan lide at gå dybt ind i tingende. <br data-v-a05eb08e><br data-v-a05eb08e> For mig er det ikke nok at overfladisk forstå tingende, jeg elsker at have gode kompetencer! <br data-v-a05eb08e><br data-v-a05eb08e> jeg er heller ikke bange for at lære nyt, tvertimod så opsøger jeg nye teknologier jeg aldrig har prøvet før. <br data-v-a05eb08e><br data-v-a05eb08e> Denne side er et bevis for det, dette er mit første fuldendte Vue.js projekt!<br data-v-a05eb08e><br data-v-a05eb08e> Ud over kodning intersserer jeg mig også for elektronisk musik produktion! Og også her elsker jeg ikke bare at komponere en sang. Men også design lyde fra bunden!<br data-v-a05eb08e><br data-v-a05eb08e> I min fritid spiller jeg Computer Spil, tilbringer tid med venner og udøver hobbyer. </p></div><div class="profilepicture" data-v-a05eb08e><img src="'+w+'" alt="" data-v-a05eb08e></div></div>',2),C=[y];function D(e,n,t,r,a,i){return(0,o.wg)(),(0,o.iD)("section",j,C)}var O={name:"CV"};const x=(0,k.Z)(O,[["render",D],["__scopeId","data-v-a05eb08e"]]);var S=x;const K=e=>((0,o.dD)("data-v-79cfb6fa"),e=e(),(0,o.Cn)(),e),B={class:"kompetencer"},I=K((()=>(0,o._)("section",{class:"kompetencer__header"},[(0,o._)("h1",null,"Kompetencer"),(0,o._)("h2",null,"Disse er nogen teknologier jeg har arbejdet med")],-1))),z={class:"kompetenceBoxContainer"};function H(e,n,t,r,a,i){const c=(0,o.up)("KompetenceBox");return(0,o.wg)(),(0,o.iD)("section",B,[I,(0,o._)("div",z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.kompetencer,(e=>((0,o.wg)(),(0,o.j4)(c,{key:e.id,header:e.name,kategorid:e.id},null,8,["header","kategorid"])))),128))]),(0,o.Wm)(c,{header:"Front End",kompetencer:["HTML/CSS","Javascript","Node.JS","Vue.JS"]},null,8,["kompetencer"]),(0,o.Wm)(c,{header:"Back End",kompetencer:["Java (Spring)","C# (Asp.net 6 Core)","Node.JS (Express)","SQL","Firebase"]},null,8,["kompetencer"]),(0,o.Wm)(c,{header:"Andet",kompetencer:["Projekt Dokumentation (FX UML)","Arbejdet Agilt","Machine Learning (Python)","Docker","Postman / Insomnia"]},null,8,["kompetencer"])])}const J={key:0,class:"KompetenceBox"},M={class:"Kompetence"};function V(e,n,t,r,a,i){return a.kompetencer[0]?((0,o.wg)(),(0,o.iD)("div",J,[(0,o._)("h2",null,(0,p.zw)(t.header),1),(0,o._)("ul",M,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.kompetencer,(e=>((0,o.wg)(),(0,o.iD)("li",null,(0,p.zw)(e.name),1)))),256))])])):(0,o.kq)("",!0)}var W={name:"KompetenceBox",props:{header:String,kategorid:Number},data(){return{kompetencer:[]}},mounted(){fetch("https://portfolioapinicklas.azurewebsites.net/api/Competence/byCategoryId/category/"+this.kategorid).then((e=>e.json())).then((e=>this.kompetencer=e)).catch((e=>console.log(e.message)))}};const A=(0,k.Z)(W,[["render",V],["__scopeId","data-v-93bba1b8"]]);var E=A,F={name:"Kompetencer",components:{KompetenceBox:E},data(){return{kompetencer:[]}},mounted(){fetch("https://portfolioapinicklas.azurewebsites.net/api/CompetenceCategory").then((e=>e.json())).then((e=>this.kompetencer=e)).catch((e=>console.log(e.message)))}};const P=(0,k.Z)(F,[["render",H],["__scopeId","data-v-79cfb6fa"]]);var Z=P,L={name:"App",components:{Header:_,CV:S,Kompetencer:Z}};const N=(0,k.Z)(L,[["render",u]]);var T=N;(0,r.ri)(T).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var d=o();void 0!==d&&(n=d)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],c=r[1],s=r[2],d=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(s)var l=s(t)}for(n&&n(r);d<i.length;d++)a=i[d],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(9975)}));r=t.O(r)})();
//# sourceMappingURL=app.a12d2a12.js.map