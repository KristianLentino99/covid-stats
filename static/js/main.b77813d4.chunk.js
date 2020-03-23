(this["webpackJsonpCodive-site"]=this["webpackJsonpCodive-site"]||[]).push([[0],{41:function(e,t,a){e.exports=a(70)},46:function(e,t,a){},47:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(46),a(5)),i=a(6),s=a(7),u=a(8),d=(a(47),a(13)),m=a(73),h=a(74),v=a(75);var p=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,{defaultActiveKey:"1"},r.a.createElement(h.a,null,r.a.createElement(h.a.Header,null,r.a.createElement(m.a.Toggle,{as:v.a,variant:"link",eventKey:"0"},function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=new Date(1e3*e),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=a.getFullYear(),l=n[a.getMonth()],c=a.getDate(),o=a.getHours(),i=a.getMinutes(),s=a.getSeconds(),u=c+" "+l+" "+r;return t||(u+=" "+o+":"+i+":"+s),u}(this.props.maintext))),r.a.createElement(m.a.Collapse,{eventKey:"0"},r.a.createElement(h.a.Body,null,"Cases : ",this.props.cases," ",r.a.createElement("br",null),"Deaths : ",this.props.deaths," ",r.a.createElement("br",null),"Recovered : ",this.props.recovered))))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={data:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({data:this.props.dates})}},{key:"render",value:function(){var e=this.state.data,t=null;return e&&(t=e.map((function(e){return console.log(e),r.a.createElement(p,{maintext:e.t,deaths:e.d,recovered:e.r,cases:e.c})}))),r.a.createElement("div",null,t)}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,deathInWorld:0,casesInWorld:0,healedInWorld:0,lastUpdate:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){if(this.props.items){var e=this.props.items;this.setState({deathInWorld:e.deaths,casesInWorld:e.confirmed,healedInWorld:e.recovered,lastUpdate:new Date(e.last_update),isLoading:!1})}}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.lastUpdate,n=null;if(a instanceof Date){var l=a.getMonth()+1;n=a.getDate()+"/"+l+"/"+a.getFullYear()}var c=t?null:r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("p",null,"Total Coronavirus cases in the world : ",new Intl.NumberFormat("it-IT").format(this.state.casesInWorld))),r.a.createElement("div",null,r.a.createElement("p",null,"Total deaths in the world : ",new Intl.NumberFormat("it-IT").format(this.state.deathInWorld))),r.a.createElement("div",null,r.a.createElement("p",null,"Total healed in the world : ",new Intl.NumberFormat("it-IT").format(this.state.healedInWorld))),r.a.createElement("div",null,r.a.createElement("p",null," Last update info : ",n))),r.a.createElement("div",{className:"flex flex-center"},r.a.createElement(f,{dates:this.props.itemsPerDate})));return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"globe"},r.a.createElement("i",{className:"fa fa-globe fa-10x",style:{color:"#fff"}})),c)}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader center"},r.a.createElement("i",{className:"fa fa-cog fa-spin fa-7x"}))}}]),a}(n.Component),g=a(37),j=a.n(g),O=a(15),y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,datas:null,dataPerDate:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get("https://enrichman.github.io/covid19/world/full.json").then((function(t){var a=t.data;e.setState({datas:a,dataPerDate:a.ts.reverse()})})).then((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.datas,a=e.dataPerDate,n=this.state.isLoading?r.a.createElement(b,null):r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Covid Site"),r.a.createElement("div",{className:"header-right"},r.a.createElement("p",null,r.a.createElement(O.b,{to:"/nations",className:"link"},"Nations")))),r.a.createElement(E,{items:t,itemsPerDate:a}));return r.a.createElement("div",{className:"App"},n)}}]),a}(n.Component),w=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Nations"))}}]),a}(n.Component),N=a(9),k=Object(N.a)();function I(){return r.a.createElement(O.a,{history:k,basename:"/covid-stats"},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:y}),r.a.createElement(d.a,{path:"/home",component:E}),r.a.createElement(d.a,{path:"/nations",component:w})))}var D=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(I,null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.b77813d4.chunk.js.map