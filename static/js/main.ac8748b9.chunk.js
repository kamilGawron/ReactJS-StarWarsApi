(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/logo.61bd89c4.png"},24:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADwAAAA8ABA9l7mgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAA9SURBVGiB7dexEQAwCAMxkv13JhOkg4NCmsBfOgIA5pzMzOkRle70gGqCAACgiz+0nSAAAOjiD20nCAD4ex0HDApOZYj1AAAAAElFTkSuQmCC"},25:function(e,t,n){e.exports=n(40)},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),l=(n(30),n(2)),i=n(3),s=n(5),u=n(4),m=n(6),h=(n(31),n(15)),p=n(7);var d=function(){return r.a.createElement("div",{className:"loader"},"Loading...",r.a.createElement("div",null))},f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleScroll=function(e){document.getElementById("header").style.backgroundColor=window.scrollY>50?"rgba(0,0,0,1)":"rgba(0,0,0,.7)",console.log("Scroll",window.scrollY)},e.showMoreHandler=function(){e.setState(function(e){return{toShow:e.toShow+10}})},e.inputChangeHandler=function(t){console.log(t.target.value),e.setState({searchName:t.target.value})},e.state={peoples:[],page:1,maxPage:0,charAmount:0,searchName:"",toShow:10},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.handleScroll);var t=this;fetch("https://cors-anywhere.herokuapp.com/https://swapi.co/api/people?page=".concat(this.state.page)).then(function(e){return e.json()}).then(function(e){var n=Math.ceil(e.count/10);t.setState({charAmount:e.count,maxPage:n})}).then(function(){for(var n=[],a=1;a<=e.state.maxPage;a++)fetch("https://cors-anywhere.herokuapp.com/https://swapi.co/api/people?page=".concat(a)).then(function(e){return e.json()}).then(function(e){return e.results}).then(function(e){return n=[].concat(Object(h.a)(n),Object(h.a)(e))}).then(function(e){return e.map(function(e){return e.id=t.returnDiff(e.url),e})}).then(function(t){return e.setState({peoples:t})})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"returnDiff",value:function(e){var t="",n="https://swapi.co/api/people/";if(e)for(var a in e)e[a]!=n[a]&&(t+=e[a]);return t}},{key:"render",value:function(){var e=this;if(this.state.peoples[10]){var t=this.state.peoples.filter(function(t){return t.name.toLowerCase().includes(e.state.searchName.toLowerCase())}),n=t.map(function(e,t){return r.a.createElement("h4",{key:t},r.a.createElement(p.b,{to:{pathname:"characters/".concat(e.id)}},e.name))});return r.a.createElement("div",{className:"peoples"},r.a.createElement("input",{value:this.state.searchName,onChange:this.inputChangeHandler,type:"text",placeholder:"find your favourite character"}),r.a.createElement("div",{className:"peoples-list"},n.slice(0,this.state.toShow)),t.length>this.state.toShow?r.a.createElement("div",{className:"showMore"},r.a.createElement("div",{onClick:this.showMoreHandler},"Show More")):"")}return r.a.createElement(d,null)}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={id:e.match.params.id,details:{}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/".concat(this.state.id)).then(function(e){return e.json()}).then(function(t){return e.setState({details:t})})}},{key:"render",value:function(){return this.state.details.name?r.a.createElement("div",{className:"character"},r.a.createElement("h2",null,this.state.details.name)):r.a.createElement(d,null)}}]),t}(a.Component),A=n(23),E=n.n(A),b=n(24),j=n.n(b),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).menuItemClickHandler=function(){var e=document.getElementById("menu-items");e.style.display="flex"==e.style.display?"none":""},e.phoneMenuHandler=function(){var e=document.getElementById("menu-items");e.style.display="flex"==e.style.display?"none":"flex"},e.state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:E.a,alt:""})),r.a.createElement("div",{id:"menu-items",className:"items"},r.a.createElement("div",{onClick:this.phoneMenuHandler,className:"close"},"X"),r.a.createElement("div",null,r.a.createElement(p.b,{onClick:this.menuItemClickHandler,to:"/"},"Home")),r.a.createElement("div",null,r.a.createElement(p.b,{onClick:this.menuItemClickHandler,to:"/characters"},"Characters")),r.a.createElement("div",null,r.a.createElement(p.b,{onClick:this.menuItemClickHandler,to:"/planets"},"Planets")),r.a.createElement("div",null,r.a.createElement(p.b,{onClick:this.menuItemClickHandler,to:"/starships"},"Starships"))),r.a.createElement("div",{className:"menu-icon-phone"},r.a.createElement("img",{onClick:this.phoneMenuHandler,src:j.a,alt:""})))}}]),t}(a.Component),g=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("h2",null,"Find informations about Your favourites Characters, Planets and Starships!"),r.a.createElement("div",{className:"stormtroopers"}))}}]),t}(a.Component),w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Starships")}}]),t}(a.Component),k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Planets")}}]),t}(a.Component),C=n(11),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement(O,null),r.a.createElement("div",{className:"padding"}),r.a.createElement(C.a,{exact:!0,path:"/",component:g}),r.a.createElement(C.a,{exact:!0,path:"/planets",component:k}),r.a.createElement(C.a,{exact:!0,path:"/starships",component:w}),r.a.createElement(C.a,{exact:!0,path:"/characters",component:f}),r.a.createElement(C.a,{path:"/characters/:id",component:v})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.ac8748b9.chunk.js.map