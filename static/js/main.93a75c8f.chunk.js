(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/logo.61bd89c4.png"},24:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADwAAAA8ABA9l7mgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAA9SURBVGiB7dexEQAwCAMxkv13JhOkg4NCmsBfOgIA5pzMzOkRle70gGqCAACgiz+0nSAAAOjiD20nCAD4ex0HDApOZYj1AAAAAElFTkSuQmCC"},25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},31:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c),i=(a(30),a(3)),l=a(4),o=a(6),m=a(5),h=a(7);a(31);var u=function(){return r.a.createElement("div",{className:"loader"},"Loading...",r.a.createElement("div",null),r.a.createElement("div",null))};function d(e){var t=e.searchName,a=e.inputChangeHandler,n=e.peoplesList,c=e.toShow,s=e.showMoreHandler;return r.a.createElement("div",{className:"peoples"},r.a.createElement("input",{value:t,onChange:a,type:"text",placeholder:"find your favourite character"}),r.a.createElement("div",{className:"peoples-list"},n.slice(0,c)),n.length>c?r.a.createElement("div",{onClick:s,className:"showMore"},r.a.createElement("div",{onClick:s},"Show More")):"")}var p=a(13);function f(e,t){var a="";if(e&&t)for(var n in e)e[n]!=t[n]&&(a+=e[n]);return a}function v(){return new Promise(function(e,t){fetch("https://swapi.co/api/people?page=1").then(function(e){return e.json()}).then(function(e){return Math.ceil(e.count/10)}).then(function(t){for(var a=[],n=[],r=function(r){fetch("https://swapi.co/api/people?page=".concat(r)).then(function(e){return e.json()}).then(function(e){return e.results}).then(function(e){return a=[].concat(Object(p.a)(a),Object(p.a)(e))}).then(function(e){return e.map(function(e){return e.id=f(e.url,"https://swapi.co/api/people/"),e})}).then(function(a){n=a,r==t&&e(n)}).catch(function(e){return console.log("Err in pages",e)})},c=1;c<=t;c++)r(c)}).catch(function(e){return console.log("err in first page",e)})})}var E=a(2);var g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleScroll=function(e){document.getElementById("header").style.backgroundColor=window.scrollY>50?"rgba(0,0,0,1)":"rgba(0,0,0,.7)"},e.showMoreHandler=function(){e.setState(function(e){return{toShow:e.toShow+10}})},e.inputChangeHandler=function(t){e.setState({searchName:t.target.value})},e.state={peoples:[],page:1,maxPage:0,charAmount:0,searchName:"",toShow:10},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;v().then(function(t){return e.setState({peoples:t})}),window.addEventListener("scroll",this.handleScroll.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll.bind(this))}},{key:"render",value:function(){var e,t;if(this.state.peoples[10]){console.log(this.state.peoples);var a=(e=this.state.peoples,t=this.state.searchName,e.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}).map(function(e,t){return r.a.createElement("h4",{key:t},r.a.createElement(E.b,{to:"characters/".concat(e.id)},e.name))}));return r.a.createElement(d,{searchName:this.state.searchName,inputChangeHandler:this.state.inputChangeHandler,peoplesList:a,toShow:this.state.toShow,showMoreHandler:this.showMoreHandler})}return r.a.createElement(u,null)}}]),t}(n.Component);function N(e){var t=e.gender,a=e.birthYear,n=e.hairColor,c=e.mass,s=e.height,i=e.eyeColor,l=e.skinColor;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Gender:"),r.a.createElement("div",{className:"desc"},t)),r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Birth year:"),r.a.createElement("div",{className:"desc"},a)),r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Hair color:"),r.a.createElement("div",{className:"desc"},n)),r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Mass:"),r.a.createElement("div",{className:"desc"},c)),r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Height:"),r.a.createElement("div",{className:"desc"},s)),r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Eye color:"),r.a.createElement("div",{className:"desc"},i)),r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Skin color:"),r.a.createElement("div",{className:"desc"},l)))}function A(e){var t=e.films.map(function(e,t){return r.a.createElement("div",{key:t},e)});return r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Related films:"),r.a.createElement("div",{className:"desc"},t))}function w(e){var t=e.starships.map(function(e,t){return r.a.createElement("div",{key:t},e)});return r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Related starships: "),r.a.createElement("div",{className:"desc"},t))}function b(e){return r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Homeworld:"),r.a.createElement("div",{className:"desc"},e.homeworld))}function C(e){var t=e.vehicles.map(function(e,t){return r.a.createElement("div",{key:t},e)});return r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Vehicles:"),r.a.createElement("div",{className:"desc"},t))}var k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).loadData=function(e){(function(e){return new Promise(function(t,a){fetch("https://swapi.co/api/people/".concat(e)).then(function(e){return e.json()}).then(function(e){var a,n,r,c;Promise.all([(c=e.films,new Promise(function(e,t){for(var a=[],n=0;n<c.length;n++)fetch("".concat(c[n])).then(function(e){return e.json()}).then(function(e){return a=[].concat(Object(p.a)(a),[e.title])}).then(function(){c.length==a.length&&e(a)}).catch(function(e){return console.log("err in fetch films",e)})})),(r=e.homeworld,new Promise(function(e,t){fetch(r).then(function(e){return e.json()}).then(function(t){e(t.name)}).catch(function(e){return console.log("err in fetch homeworld",e)})})),(n=e.starships,new Promise(function(e,t){for(var a=[],r=0;r<n.length;r++)fetch("".concat(n[r])).then(function(e){return e.json()}).then(function(e){return a=[].concat(Object(p.a)(a),[e.name])}).then(function(){n.length==a.length&&e(a)}).catch(function(e){return console.log("err in fetch starships",e)})})),(a=e.vehicles,new Promise(function(e,t){for(var n=[],r=0;r<a.length;r++)fetch("".concat(a[r])).then(function(e){return e.json()}).then(function(e){return n=[].concat(Object(p.a)(n),[e.name])}).then(function(){a.length==n.length&&e(n)}).catch(function(e){return console.log("err in fetch vehicles",e)})}))]).then(function(a){var n=a[0],r=a[1],c=a[2],s=a[3];t({data:e,filmsArr:n,homeworld:r,starshipsArr:c,vehiclesArr:s})})})})})(e).then(function(e){v().then(function(t){a.setState({maxCharId:t.length+1,details:e.data,loadDetails:!0,films:e.filmsArr,starships:e.starshipsArr,vehicles:e.vehiclesArr,homeworld:e.homeworld})})})},a.prevNextHandler=function(e){console.log("id",e,"maxChar",a.state.maxCharId),a.setState({loadDetails:!1,loadFilms:!1,id:e},function(){0==e?e=a.state.maxCharId:e==a.state.maxCharId&&(e=1),console.log("id after cond",e),a.loadData(e)})},a.onBackButtonEvent=function(){a.prevNextHandler(f(window.location.href,"https://kamilgawron.github.io/characters"))},a.state={id:e.match.params.id,details:{},films:[],vehicles:[],starships:[],homeworld:"",loadDetails:!1,maxCharId:0},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.onpopstate=this.onBackButtonEvent,this.loadData(this.state.id)}},{key:"componentWillUnmount",value:function(){window.onpopstate=function(){}}},{key:"render",value:function(){return this.state.loadDetails?r.a.createElement("div",{className:"character"},r.a.createElement("h2",null,this.state.details.name),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"left"},r.a.createElement(N,{gender:this.state.details.gender,birthYear:this.state.details.birth_year,hairColor:this.state.details.hair_color,mass:this.state.details.mass,height:this.state.details.height,eyeColor:this.state.details.eye_color,skinColor:this.state.details.skin_color})),r.a.createElement("div",{className:"right"},this.state.films[0]?r.a.createElement(A,{films:this.state.films}):"",this.state.starships[0]?r.a.createElement(w,{starships:this.state.starships}):"",""!=this.state.homeworld?r.a.createElement(b,{homeworld:this.state.homeworld}):"",this.state.vehicles[0]?r.a.createElement(C,{vehicles:this.state.vehicles}):"")),r.a.createElement("div",{className:"buttons"},r.a.createElement(E.b,{to:"../".concat(1!=this.state.id?parseInt(this.state.id)-1:this.state.maxCharId,"/")},r.a.createElement("div",{onClick:this.prevNextHandler.bind(this,parseInt(this.state.id)-1),className:"prev"},"PREV")),r.a.createElement(E.b,{to:"../".concat(this.state.id!=this.state.maxCharId?parseInt(this.state.id)+1:0,"/")},r.a.createElement("div",{onClick:this.prevNextHandler.bind(this,parseInt(this.state.id)+1),className:"next"},"NEXT"))),r.a.createElement("div",{className:"preparation"},"This page is still under preparation.")):r.a.createElement(u,null)}}]),t}(n.Component),j=a(23),O=a.n(j),y=a(24),x=a.n(y);function H(e){var t=e.menuItemClickHandler,a=e.linkTo,n=e.text;return r.a.createElement("div",null,r.a.createElement(E.b,{onClick:t,to:a},n))}function I(e){var t=e.logo,a=e.phoneMenuHandler,n=e.menuItemClickHandler,c=e.menuIcon;return r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"logo"},r.a.createElement(E.b,{to:"/"},r.a.createElement("img",{src:t,alt:""}))),r.a.createElement("div",{id:"menu-items",className:"items"},r.a.createElement("div",{onClick:a,className:"close"},"X"),r.a.createElement(H,{menuItemClickHandler:n,linkTo:"/",text:"Home"}),r.a.createElement(H,{menuItemClickHandler:n,linkTo:"/characters",text:"Characters"}),r.a.createElement(H,{menuItemClickHandler:n,linkTo:"/planets",text:"Planets"}),r.a.createElement(H,{menuItemClickHandler:n,linkTo:"/starships",text:"Starships"})),r.a.createElement("div",{className:"menu-icon-phone"},r.a.createElement("img",{onClick:a,src:c,alt:""})))}var S=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).menuItemClickHandler=function(){var e=document.getElementById("menu-items");e.style.display="flex"==e.style.display?"none":""},e.phoneMenuHandler=function(){var e=document.getElementById("menu-items");e.style.display="flex"==e.style.display?"none":"flex"},e.state={},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(I,{logo:O.a,phoneMenuHandler:this.phoneMenuHandler,menuItemClickHandler:this.menuItemClickHandler,menuIcon:x.a})}}]),t}(n.Component),B=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("h2",null,"Find informations about Your favourites Characters, Planets and Starships!"),r.a.createElement("div",{className:"stormtroopers"}))}}]),t}(n.Component),M=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"preparation"},"This page is under preparation and will be opened at a later stage."),r.a.createElement("div",{className:"stormtroopers"}))}}]),t}(n.Component),D=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"preparation"},"This page is under preparation and will be opened at a later stage."),r.a.createElement("div",{className:"stormtroopers"}))}}]),t}(n.Component),P=a(11),T=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,null,r.a.createElement(S,null),r.a.createElement("div",{className:"padding"}),r.a.createElement(P.a,{exact:!0,path:"/",component:B}),r.a.createElement(P.a,{exact:!0,path:"/ReactJS-StarWarsApi",component:B}),r.a.createElement(P.a,{exact:!0,path:"/planets",component:D}),r.a.createElement(P.a,{exact:!0,path:"/starships",component:M}),r.a.createElement(P.a,{exact:!0,path:"/characters",component:g}),r.a.createElement(P.a,{path:"/characters/:id",component:k})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.93a75c8f.chunk.js.map