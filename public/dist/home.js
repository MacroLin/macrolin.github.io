webpackJsonp([0],{180:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=a(32),l=n(r),i=a(31),c=n(i);a(82),a(81);var o=document.documentElement,d=o.clientWidth,s=d/15;o.style.fontSize=s+"px";var u=document.body;window.addEventListener("resize",function(e){d=o.clientWidth,s=d/15,o.style.fontSize=s+"px"},!1);var m=l.default.createClass({displayName:"Main",componentDidMount:function(){this.refs.main.style.height=o.clientHeight/s+"rem";var e=this.refs.Hi;this.props.handleAnimation(e)},render:function(){var e=this.props.data,t=e.map(function(e){return l.default.createElement("a",{key:e.name,href:e.url},e.content)});return l.default.createElement("div",{ref:"main",className:"main"},l.default.createElement("h1",{className:"Hi",ref:"Hi"},"Hi."),t)}}),f=l.default.createClass({displayName:"LoginBar",componentDidMount:function(){var e=this.refs.loginBtn;this.props.handleAnimation(e)},render:function(){return l.default.createElement("div",{className:"loginbar"},l.default.createElement("a",{className:"login-btn",ref:"loginBtn",href:""},"Login / Register"))}}),h=l.default.createClass({displayName:"HeadNav",componentDidMount:function(){var e=this.refs.headNav;this.props.handleAnimation(e)},render:function(){var e=this.props.data,t=e.map(function(e){return l.default.createElement("li",{key:e.name},l.default.createElement("a",{href:e.url},e.content))});return l.default.createElement("div",{ref:"headNav",className:"head-nav"},l.default.createElement("ul",{className:"head-list"},t))}}),p=l.default.createClass({displayName:"Header",getInitialState:function(){return{headData:[{name:"Blog",content:"Blog",url:""},{name:"About",content:"About",url:""},{name:"Contact",content:"Contact",url:""}]}},render:function(){return l.default.createElement("div",{className:"top"},l.default.createElement("div",{className:"header"},l.default.createElement(f,{handleAnimation:this.props.handleAnimation}),l.default.createElement(h,{handleAnimation:this.props.handleAnimation,data:this.state.headData})),l.default.createElement(m,{handleAnimation:this.props.handleAnimation,data:this.state.headData}))}}),E=l.default.createClass({displayName:"ContentList",render:function(){var e=this.props.data,t=e.map(function(e){return l.default.createElement("li",{key:e.name},l.default.createElement("a",{href:e.url},e.name))});return l.default.createElement("div",{className:"content-list"},l.default.createElement("ul",null,t))}}),v=l.default.createClass({displayName:"CategoryBar",render:function(){return l.default.createElement("div",{className:"category-bar"},l.default.createElement("h1",{className:"category-title"},"Category"),l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("a",{href:""},"JavaScript")),l.default.createElement("li",null,l.default.createElement("a",{href:""},"Prochip"))))}}),y=l.default.createClass({displayName:"Content",getInitialState:function(){return{contentData:[{category:"JavaScript",name:"React入门教程",url:""},{category:"JavaScript",name:"Redux入门教程",url:""},{category:"JavaScript",name:"NodeJs入门教程",url:""},{category:"JavaScript",name:"ECMAScript 6入门教程",url:""},{category:"Prochip",name:"函数式编程入门教程",url:""}]}},render:function(){return l.default.createElement("div",{className:"content"},l.default.createElement(E,{data:this.state.contentData}),l.default.createElement(v,null))}}),g=l.default.createClass({displayName:"Wrap",componentDidMount:function(){var e=this.refs.wrap;this.handleAnimation(e)},handleAnimation:function(e){var t=this;window.addEventListener("scroll",function(){var a=u.scrollTop;switch(e.className){case"wrap":e.style.background="rgba("+a+","+a+","+a+",1)";break;case"login-btn":e.style.color="rgba("+(255-a)+","+(255-a)+","+(255-a)+",1)";break;case"Hi":e.style.color="rgba("+(255-a)+","+(255-a)+","+(255-a)+",1)";break;case"head-nav":a>.25*t.refs.wrap.scrollHeight?e.style.opacity=1:e.style.opacity=0;break;default:console.log("没有此元素的匹配项")}},!1)},render:function(){return l.default.createElement("div",{ref:"wrap",className:"wrap"},l.default.createElement(p,{handleAnimation:this.handleAnimation}),l.default.createElement(y,null))}});c.default.render(l.default.createElement(g,null),document.querySelector(".container"))},81:function(e,t){},82:function(e,t){}},[180]);