(function(e){function t(t){for(var a,r,s=t[0],c=t[1],d=t[2],l=0,u=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(u.length)u.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dsprogsav/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var m=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1819:function(e,t,n){"use strict";n("2a8d")},"2a8d":function(e,t,n){},"4db0":function(e,t,n){"use strict";n("7d2e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:"background-image: url("+e.images.bg+")",attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("img",{attrs:{src:n("a173"),id:"fire"}}),a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:n("6e71")}})]),a("div",{staticClass:"separator"}),a("div",{staticClass:"appControls"},[a("button",{on:{click:e.save}},[e._v("Save")]),a("button",{on:{click:e.load}},[e._v("Load")])]),a("router-link",{attrs:{to:"/dsRemastered/armory"}},[a("img",{attrs:{src:n("f721")}})]),a("router-link",{attrs:{to:"/dsRemastered/pyromancy"}},[a("img",{attrs:{src:n("bebd")}})]),a("router-link",{attrs:{to:"/dsRemastered/religion"}},[a("img",{attrs:{src:n("bf0f")}})])],1),a("transition",[a("router-view")],1)],1)},o=[],r=n("5530"),s={bg:n("86d5")},c=n("2f62"),d=(n("c740"),n("b0c0"),n("a434"),n("4fad"),n("d3b7"),n("3ca3"),n("ddb0"),n("a002")),m=n.n(d);a["a"].use(c["a"]);var l=new c["a"].Store({state:{dsRemastered:{armory:[],pyromancy:[],religion:[]},loading:!0},mutations:{addNewItem:function(e,t){e[t.gameName][t.sectionName].push(t.data)},toggleDone:function(e,t){var n=e[t.gameName][t.sectionName].findIndex((function(e){return e.name===t.key}));e[t.gameName][t.sectionName][n].done=!e[t.gameName][t.sectionName][n].done},deleteItem:function(e,t){var n=e[t.gameName][t.sectionName].findIndex((function(e){return e.name===t.key}));e[t.gameName][t.sectionName].splice(n,1)},setGameData:function(e,t){e[t.gameName]=t.data,e.needsUpdate=!0},setLoading:function(e,t){e.loading=t}},actions:{save:function(e){for(var t=Object.entries(e.state),n=[],a=0;a<t.length-1;a++)m.a.setItem(t[a][0],t[a][1]),n.push(t[a][0]);m.a.setItem("keys",n)},load:function(e){e.commit("setLoading",!0),m.a.getItem("keys").then((function(t){var n=[];for(var a in t)n.push(m.a.getItem(t[a]));Promise.all(n).then((function(n){for(var a in n)e.commit("setGameData",{gameName:t[a],data:n[a]});e.commit("setLoading",!1)}))}))}},getters:{loading:function(e){return e.loading}}}),u={name:"App",computed:{images:function(){return s}},methods:Object(r["a"])({},Object(c["b"])(["save","load"])),mounted:function(){l.dispatch("load")}},f=u,g=(n("034f"),n("2877")),p=Object(g["a"])(f,i,o,!1,null,null,null),h=p.exports,v=n("8c4f"),b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("p",[e._v("Change categories")])])}],N={name:"Home"},y=N,_=Object(g["a"])(y,b,w,!1,null,null,null),k=_.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"addContainer"},[n("button",{on:{click:e.toggleAddWindow}},[e._v("Add")]),n("transition",{attrs:{name:"fade"}},[e.showAddWindow?n("add-window",{staticClass:"addWindow",attrs:{addCallback:e.addItem,cancelCallback:e.toggleAddWindow}}):e._e()],1)],1),n("div",{staticClass:"itemContainer"},e._l(e.items,(function(t){return n("item",{key:t.name,attrs:{name:t.name,description:t.description,done:t.done,imageURL:t.image,clickCallback:e.toggleDone,deleteCallback:e.deleteItem}})})),1)])},x=[],O=(n("7db0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",class:e.done?"done":null,on:{click:e.toggleDone}},[n("div",{staticClass:"main"},[n("img",{staticClass:"image",attrs:{src:e.imageURL}}),n("p",{staticClass:"name"},[e._v(e._s(e.name))])]),n("div",{staticClass:"desc"},[n("div",{staticClass:"scrollable"},[n("p",[e._v(" "+e._s(e.description)+" ")])]),n("div",{staticClass:"controls",on:{click:function(e){e.stopPropagation()}}},[n("button",{on:{click:e.deleteItem}},[e._v("Delete")])])])])}),j=[],I={name:"Item",props:{name:String,done:Boolean,description:String,imageURL:String,clickCallback:Function,deleteCallback:Function},methods:{toggleDone:function(){this.clickCallback(this.name)},deleteItem:function(){this.deleteCallback(this.name)}}},E=I,A=(n("4db0"),Object(g["a"])(E,O,j,!1,null,"f898f35e",null)),S=A.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"window"},[n("h1",[e._v("Add a new entry")]),n("form",[n("div",[n("label",{attrs:{for:"name"}},[e._v("Name ")]),n("input",{class:e.nameError?"err":null,attrs:{type:"text",id:"name"},on:{input:function(t){e.nameError=!1}}})]),e._m(0),n("div",[n("textarea",{class:e.descError?"err":null,attrs:{id:"desc"},on:{input:function(t){e.descError=!1}}})]),e._m(1),n("div",[n("input",{class:e.imageError?"err":null,attrs:{type:"file",id:"img",accept:"image/*"},on:{change:function(t){e.imageError=!1}}})])]),n("div",{staticClass:"controls"},[n("button",{attrs:{id:"add"},on:{click:e.add}},[e._v("Add")]),n("button",{attrs:{id:"cancel"},on:{click:e.cancelCallback}},[e._v("Cancel")])])])},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:"desc"}},[e._v("Description ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:"img"}},[e._v("Image ")])])}],R={name:"AddWindow",props:{addCallback:Function,cancelCallback:Function},data:function(){return{nameError:!1,descError:!1,imageError:!1}},methods:{add:function(){var e,t=this,n=document.querySelector("#name").value,a=document.querySelector("#desc").value,i=document.querySelector("#img").files[0];if(""!==n)if(""!==a)if(void 0!==i){var o=new Promise((function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=t,n.readAsDataURL(i)}));o.then((function(i){e=i,t.addCallback({name:n,description:a,image:e})})).catch((function(e){return console.error(e)}))}else this.imageError=!0;else this.descError=!0;else this.nameError=!0}}},W=R,L=(n("1819"),Object(g["a"])(W,D,P,!1,null,"691e37e9",null)),$=L.exports;function U(e){return new Promise((function(t){var n=document.createElement("canvas"),a=n.getContext("2d"),i=new Image;i.src=e,i.onload=function(){i.width>i.height?(n.width=250,n.height=250*i.height/i.width):i.height>i.width?(n.height=250,n.width=250*i.width/i.height):(n.width=250,n.height=250),a.drawImage(i,0,0,n.width,n.height),t(n.toDataURL())}}))}var F={name:"Section",data:function(){return{items:[],showAddWindow:!1}},getters:{needsUpdate:function(){return l.state.needsUpdate}},props:{gameName:String,sectionName:String},computed:Object(r["a"])({compressed:function(){return this.compressedImage}},Object(c["c"])(["loading"])),components:{Item:S,AddWindow:$},methods:{addItem:function(e){var t=this,n=l.state[this.gameName][this.sectionName].find((function(t){return t.name===e.name}));void 0===n?U(e.image).then((function(n){l.commit("addNewItem",{gameName:t.gameName,sectionName:t.sectionName,data:Object(r["a"])(Object(r["a"])({},e),{},{image:n,done:!1})}),t.toggleAddWindow()})):alert("An item with that name already exists in this section!")},toggleDone:function(e){l.commit("toggleDone",{gameName:this.gameName,sectionName:this.sectionName,key:e})},deleteItem:function(e){l.commit("deleteItem",{gameName:this.gameName,sectionName:this.sectionName,key:e})},toggleAddWindow:function(){this.showAddWindow=!this.showAddWindow}},watch:{gameName:function(){this.items=l.state[this.gameName][this.sectionName]},sectionName:function(){this.items=l.state[this.gameName][this.sectionName]},loading:function(){this.items=l.state[this.gameName][this.sectionName]}},created:function(){this.items=l.state[this.gameName][this.sectionName]}},M=F,q=(n("8f0f"),Object(g["a"])(M,C,x,!1,null,"718dceb6",null)),T=q.exports;a["a"].use(v["a"]);var G=[{path:"/",name:"Home",component:k},{path:"/:gameName/:sectionName",component:T,props:function(e){return{sectionName:e.params.sectionName,gameName:e.params.gameName}}}],H=new v["a"]({mode:"history",base:"/dsprogsav/",routes:G}),J=H;document.title="Dark Souls Achievement Progress Saver",a["a"].config.productionTip=!1,new a["a"]({router:J,store:l,render:function(e){return e(h)}}).$mount("#app")},"6e71":function(e,t,n){e.exports=n.p+"img/dslogo.2d5d7821.png"},"7d2e":function(e,t,n){},"85ec":function(e,t,n){},"86d5":function(e,t,n){e.exports=n.p+"img/bg.f77eceb5.jpg"},"8f0f":function(e,t,n){"use strict";n("b9d3")},a173:function(e,t,n){e.exports=n.p+"img/fire.a5c83d9b.gif"},b9d3:function(e,t,n){},bebd:function(e,t,n){e.exports=n.p+"img/Pyromancy.d6030ff3.png"},bf0f:function(e,t,n){e.exports=n.p+"img/Religion.8581eb94.png"},f721:function(e,t,n){e.exports=n.p+"img/Armory.309c925f.png"}});
//# sourceMappingURL=app.c942c87a.js.map