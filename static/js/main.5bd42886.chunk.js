(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.61bd89c4.png"},25:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADwAAAA8ABA9l7mgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAA9SURBVGiB7dexEQAwCAMxkv13JhOkg4NCmsBfOgIA5pzMzOkRle70gGqCAACgiz+0nSAAAOjiD20nCAD4ex0HDApOZYj1AAAAAElFTkSuQmCC"},26:function(e,t,a){e.exports=a(41)},31:function(e,t,a){},32:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),s=(a(31),a(2)),i=a(3),o=a(5),m=a(4),u=a(6),h=(a(32),a(13)),d=a(7);var p=function(){return r.a.createElement("div",{className:"loader"},"Loading...",r.a.createElement("div",null))},v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleScroll=function(e){document.getElementById("header").style.backgroundColor=window.scrollY>50?"rgba(0,0,0,1)":"rgba(0,0,0,.7)"},e.showMoreHandler=function(){e.setState(function(e){return{toShow:e.toShow+10}})},e.inputChangeHandler=function(t){console.log(t.target.value),e.setState({searchName:t.target.value})},e.state={peoples:[],page:1,maxPage:0,charAmount:0,searchName:"",toShow:10},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.handleScroll);var t=this;fetch("https://cors-anywhere.herokuapp.com/https://swapi.co/api/people?page=".concat(this.state.page)).then(function(e){return e.json()}).then(function(e){var a=Math.ceil(e.count/10);t.setState({charAmount:e.count,maxPage:a})}).then(function(){for(var a=[],n=1;n<=e.state.maxPage;n++)fetch("https://swapi.co/api/people?page=".concat(n)).then(function(e){return e.json()}).then(function(e){return e.results}).then(function(e){return a=[].concat(Object(h.a)(a),Object(h.a)(e))}).then(function(e){return e.map(function(e){return e.id=t.returnDiff(e.url),e})}).then(function(t){return e.setState({peoples:t})})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"returnDiff",value:function(e){var t="",a="https://swapi.co/api/people/";if(e)for(var n in e)e[n]!=a[n]&&(t+=e[n]);return t}},{key:"render",value:function(){var e=this;if(this.state.peoples[10]){var t=this.state.peoples.filter(function(t){return t.name.toLowerCase().includes(e.state.searchName.toLowerCase())}),a=t.map(function(e,t){return r.a.createElement("h4",{key:t},r.a.createElement(d.b,{to:{pathname:"characters/".concat(e.id)}},e.name))});return r.a.createElement("div",{className:"peoples"},r.a.createElement("input",{value:this.state.searchName,onChange:this.inputChangeHandler,type:"text",placeholder:"find your favourite character"}),r.a.createElement("div",{className:"peoples-list"},a.slice(0,this.state.toShow)),t.length>this.state.toShow?r.a.createElement("div",{onClick:this.showMoreHandler,className:"showMore"},r.a.createElement("div",{onClick:this.showMoreHandler},"Show More")):"")}return r.a.createElement(p,null)}}]),t}(n.Component),f=a(14),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).fetchRestOfData=function(){var e=Object(f.a)(a);a.state.details.films[0]&&new Promise(function(t,a){for(var n=[],r=0;r<e.state.details.films.length;r++)fetch("https://cors-anywhere.herokuapp.com/".concat(e.state.details.films[r])).then(function(e){return e.json()}).then(function(e){return n=[].concat(Object(h.a)(n),[e.title])}).then(function(){return console.log("films",n)}).then(function(){n.length==e.state.details.films.length&&t(n)})}).then(function(e){return a.setState({films:e,loadFilms:!0})})},a.state={id:e.match.params.id,details:{},films:[],vehicles:[],starships:[],homeworld:{},loadDetails:!1,loadFilms:!1,loadVehicles:!1,loadStarships:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/".concat(this.state.id)).then(function(e){return e.json()}).then(function(t){return e.setState({details:t,loadDetails:!0})}).then(function(){return e.fetchRestOfData()})}},{key:"render",value:function(){return console.log(this.state.details),this.state.loadDetails&&this.state.loadFilms?r.a.createElement("div",{className:"character"},r.a.createElement("h2",null,this.state.details.name),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Gender:"),r.a.createElement("div",{className:"desc"},this.state.details.gender)),r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Birth year:"),r.a.createElement("div",{className:"desc"},this.state.details.birth_year)),r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Hair color:"),r.a.createElement("div",{className:"desc"},this.state.details.hair_color)),r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Mass:"),r.a.createElement("div",{className:"desc"},this.state.details.mass)),r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Height:"),r.a.createElement("div",{className:"desc"},this.state.details.height)),r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Eye color:"),r.a.createElement("div",{className:"desc"},this.state.details.eye_color)),r.a.createElement("div",{className:"prop"},r.a.createElement("div",{className:"title"},"Skin color:"),r.a.createElement("div",{className:"desc"},this.state.details.skin_color))),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"prop films"},r.a.createElement("div",{className:"title"},"Related films:"),r.a.createElement("div",{className:"desc"},this.state.films.map(function(e){return r.a.createElement("div",null,e)}))),"")),r.a.createElement("div",{className:"preparation"},"This page is still under preparation.")):r.a.createElement(p,null)}}]),t}(n.Component),A=a(24),g=a.n(A),b=a(25),N=a.n(b),O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).menuItemClickHandler=function(){var e=document.getElementById("menu-items");e.style.display="flex"==e.style.display?"none":""},e.phoneMenuHandler=function(){var e=document.getElementById("menu-items");e.style.display="flex"==e.style.display?"none":"flex"},e.state={},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"logo"},r.a.createElement(d.b,{to:"/"},r.a.createElement("img",{src:g.a,alt:""}))),r.a.createElement("div",{id:"menu-items",className:"items"},r.a.createElement("div",{onClick:this.phoneMenuHandler,className:"close"},"X"),r.a.createElement("div",null,r.a.createElement(d.b,{onClick:this.menuItemClickHandler,to:"/"},"Home")),r.a.createElement("div",null,r.a.createElement(d.b,{onClick:this.menuItemClickHandler,to:"/characters"},"Characters")),r.a.createElement("div",null,r.a.createElement(d.b,{onClick:this.menuItemClickHandler,to:"/planets"},"Planets")),r.a.createElement("div",null,r.a.createElement(d.b,{onClick:this.menuItemClickHandler,to:"/starships"},"Starships"))),r.a.createElement("div",{className:"menu-icon-phone"},r.a.createElement("img",{onClick:this.phoneMenuHandler,src:N.a,alt:""})))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("h2",null,"Find informations about Your favourites Characters, Planets and Starships"),r.a.createElement("div",{className:"stormtroopers"}))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"preparation"},"This page is under preparation and will be opened at a later stage."),r.a.createElement("div",{className:"stormtroopers"}))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"preparation"},"This page is under preparation and will be opened at a later stage."),r.a.createElement("div",{className:"stormtroopers"}))}}]),t}(n.Component),C=a(11),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(O,null),r.a.createElement("div",{className:"padding"}),r.a.createElement(C.a,{exact:!0,path:"/",component:j}),r.a.createElement(C.a,{exact:!0,path:"/ReactJS-StarWarsApi",component:j}),r.a.createElement(C.a,{exact:!0,path:"/planets",component:k}),r.a.createElement(C.a,{exact:!0,path:"/starships",component:w}),r.a.createElement(C.a,{exact:!0,path:"/characters",component:v}),r.a.createElement(C.a,{path:"/characters/:id",component:E})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.5bd42886.chunk.js.map