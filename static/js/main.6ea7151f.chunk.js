(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=(n(15),n(1)),s=n(2),l=n(4),u=n(3),m=n(5),h=(n(17),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"file-input-container"},r.a.createElement("h1",null,"BFV"),r.a.createElement("input",{id:"file-input",type:"file",accept:".csv",onChange:this.props.onChange}),r.a.createElement("label",{htmlFor:"file-input"},"Choose a file"))}}]),t}(a.Component)),f=n(8),d=n(9),p=(n(19),/^\d+?\.media\.tumblr\.com$/),b=function(e){var t=e.src,n=e.title,a=Object(d.a)(e,["src","title"]);return r.a.createElement("iframe",Object.assign({title:n,src:t,frameBorder:"0",scrolling:"no"},a))},v=function(e){var t,n,a=e.url;switch(!0){case"i.imgur.com"===a.host:if("/a/"===a.pathname.slice(0,3)){t="imgur",n=a.protocol+"//imgur.com/"+a.pathname.slice(1).replace(".jpg","")+"/embed?pub=true";break}case p.test(a.host):return r.a.createElement("div",{className:"img",style:{backgroundImage:"url(".concat(a.href,")")}});case"gfycat.com"===a.host:t="gfycat",n=a.origin+"/ifr"+a.pathname;break;case"www.xvideos.com"===a.host:t="xvideos",n=a.origin+"/embedframe/"+a.pathname.match(/\/video(\d+)\//)[1];break;case"www.pornhub.com"===a.host:t="pornhub",n=a.origin+"/embed/"+a.searchParams.get("viewkey");break;case"xhamster.com"===a.host:t="xhamster",n=a.origin+"/embed/"+a.pathname.split("/")[2];break;case"www.hentai-foundry.com"===a.host:var c=a.pathname.match(/^\/pictures\/user\/(.*)\/(.*)\//).slice(1),i=Object(f.a)(c,2),o=i[0],s=i[1],l=["https://pictures.hentai-foundry.com",o[0].toLowerCase(),o,s].join("/");return r.a.createElement("div",{className:"img",style:{backgroundImage:"url(".concat(l,".jpg), url(").concat(l,".png)")}});default:t="default",n=a.href}return r.a.createElement(b,{src:n,title:t})};function g(e){var t=e.link,n=new URL(t);return r.a.createElement(v,{url:n})}n(21);function w(e){for(var t=e.slice(),n=t.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),r=[t[a],t[n]];t[n]=r[0],t[a]=r[1]}return t}var k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleKeys=function(e){switch(e.code){case"ArrowLeft":case"KeyA":return n.prev();case"ArrowRight":case"KeyD":return n.next();case"ArrowDown":case"KeyS":return n.shuffle();default:return}},n.next=function(){var e=n.state,t=e.pos,a=e.q;n.setState({pos:Math.min(t+1,a.length-1)})},n.prev=function(){var e=n.state.pos;n.setState({pos:Math.max(e-1,0)})},n.shuffle=function(){n.setState({pos:0,q:w(n.state.q)})},n.state={q:w(e.links),pos:0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeys)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeys)}},{key:"render",value:function(){var e=this.state,t=e.q,n=e.pos;return r.a.createElement("div",{className:"viewer-container"},r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{disabled:0===n,onClick:this.prev},"Previous"),r.a.createElement("button",{onClick:this.shuffle},"Shuffle"),r.a.createElement("button",{disabled:n===t.length-1,onClick:this.next},"Next")),r.a.createElement("div",{className:"item-container"},r.a.createElement(g,{key:t[n],link:t[n]})))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){return n.fr.readAsText(e.target.files[0])},n.fr=new FileReader,n.fr.addEventListener("loadend",function(){var e=n.fr.result.split("\n").map(function(e){return e.split(",")[1]}).slice(1);n.setState({file:e})}),n.state={file:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return null===this.state.file?r.a.createElement("div",{style:{backgroundColor:"black",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(h,{onChange:this.handleChange})):r.a.createElement(k,{links:this.state.file})}}]),t}(a.Component);i.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.6ea7151f.chunk.js.map