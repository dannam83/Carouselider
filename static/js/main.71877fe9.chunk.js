(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,a,t){},153:function(e,a,t){},157:function(e,a,t){},158:function(e,a,t){},159:function(e,a,t){},160:function(e,a,t){},161:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(8),o=t.n(r),s=t(7),l=(t(72),t(13)),c=t(14),d=t(16),m=t(15),u=t(17),h=t(36),p=function(){return{type:"FETCH_MEDIA",payload:h.data}},g=(t(73),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={search:""},t.onChangeText=function(e){var a=e.target.value;t.setState({search:a}),t.props.searchMedia(a)},t.submitSearch=function(e){t.props.searchMedia(t.state.search)},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"Search-bar-container"},i.a.createElement("div",{className:"Search-bar-div"},i.a.createElement("input",{className:"Search-bar-input",value:this.state.search,type:"text",name:"name",placeholder:'Search "Walmart"',onChange:this.onChangeText}),i.a.createElement("img",{src:"/images/iconSearch.svg",className:"Search-bar-icon",alt:"logo"})))}}]),a}(n.Component)),b=Object(s.b)(null,{fetchMedia:p,searchMedia:function(e){if(""===e)return{type:"FETCH_MEDIA",payload:h.data};var a=e.toLowerCase();return{type:"FETCH_MEDIA",payload:h.data.filter(function(e){return e.name.toLowerCase().includes(a)})}}})(g),f=t(43),v=t.n(f),y=t(35),w=t.n(y),E=(t(75),function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"onClick",value:function(e){this.props.displaySelect(e)}},{key:"render",value:function(){var e=this,a=this.props,t=a.display,n=a.windowWidth>500?"large":"small",r="Slider"===t?S:N,o="List"===t?S:N;return i.a.createElement("div",{className:"Toggle-display-container"},i.a.createElement("div",{className:"Toggle-display-div"},i.a.createElement("label",{className:"Toggle-display-label"},"Toggle Display"),i.a.createElement(v.a,{style:r,variant:"contained",size:n,onClick:function(){return e.onClick("Slider")}},"Slider"),i.a.createElement(v.a,{style:o,variant:"contained",size:n,onClick:function(){return e.onClick("List")}},"List")))}}]),a}(n.Component)),S={fontSize:"10px",backgroundColor:"rgba(0,0,131)",color:"white",marginLeft:"9px",width:"80px"},N={fontSize:"10px",backgroundColor:"white",color:"rgba(0,0,131)",marginLeft:"9px",width:"80px"},k=Object(s.b)(function(e){return{display:e.display}},{displaySelect:function(e){return{type:"TOGGLE_SELECT",payload:e}}})(w()(E)),C=t(62),T=(t(152),function(e){var a=e.media,t=a.name,n=a.show,r=a.backgroundImage,o="/images/".concat(r);return i.a.createElement("div",{className:"Slider-media-div"},i.a.createElement("img",{src:o,className:"Slider-media-image",alt:"media"}),i.a.createElement("div",{className:"Slider-labels-div"},i.a.createElement("label",{className:"Slider-label-show"},n),i.a.createElement("label",{className:"Slider-label-name"},t)))}),L=(t(153),function(e){var a=e.media,t=e.windowWidth>500?4:1;return i.a.createElement("div",{className:"Slider-div"},i.a.createElement("div",{className:"Slider-headline-div"},i.a.createElement("label",{className:"Slider-headline"},"Headline")),i.a.createElement(C.a,{wrapAround:!0,slidesToShow:t,framePadding:"20px",cellSpacing:30,renderBottomCenterControls:function(){return!1},width:"85%"},a.map(function(e){return i.a.createElement(T,{media:e,key:e.id})})))}),j=(t(157),function(e){var a=e.media,t=a.name,n=a.show,r=a.backgroundImage,o="/images/".concat(r);return i.a.createElement("div",{className:"List-media-div"},i.a.createElement("img",{src:o,className:"List-media-image",alt:"media"}),i.a.createElement("div",{className:"List-labels-div"},i.a.createElement("label",{className:"List-label-show"},n),i.a.createElement("label",{className:"List-label-name"},t)))}),O=(t(158),function(e){var a=e.media;return i.a.createElement("div",{className:"List-div"},i.a.createElement("label",{className:"List-headline"},"Headline"),a.map(function(e){return i.a.createElement(j,{media:e,key:e.id})}))}),I=(t(159),function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchMedia()}},{key:"render",value:function(){var e=this.props,a=e.media,t=e.windowWidth;return i.a.createElement("div",null,"Slider"===this.props.display?i.a.createElement("div",{className:"Slider-container"},i.a.createElement(L,{media:a,windowWidth:t})):i.a.createElement("div",{className:"List-container"},i.a.createElement(O,{media:this.props.media})))}}]),a}(n.Component)),x=Object(s.b)(function(e){return{display:e.display,media:e.media}},{fetchMedia:p})(w()(I));t(160);var A=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:"/images/section4Logo.svg",className:"App-logo",alt:"logo"}),i.a.createElement(b,null)),i.a.createElement("div",{className:"App-body"},i.a.createElement(k,null),i.a.createElement(x,null)))},M=t(12),D=[],F=Object(M.b)({display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Slider",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_SELECT":return a.payload;default:return e}},media:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_MEDIA":return a.payload;default:return e}}}),R=Object(M.c)(F,{});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(s.a,{store:R},i.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e){e.exports={data:[{id:"XslY1vp8NPhX",name:"Lowe\u2019s Abandons Smaller Store Format in Retreat From Manhattan",show:"The Righteous",backgroundImage:"imageOne.jpg",description:"The home-improvement retailer announced the closing of 51 under-performing stores on Monday, including two New York locations that the company hailed just three years ago as way to win over city dwellers.",timestamp:1546876079},{id:"UJDBIRPN8LtQ",name:"Inside Walmart\u2019s Secret \u2018Kepler\u2019 Store for Testing Tech",show:"The River",backgroundImage:"imageTwo.jpg",description:"At first glance, the small Walmart store in the New York suburb of Levittown seems unexceptional, but hovering above the aisles of water bottles, pet food and cookies are clues to an important technology experiment the giant retailer is conducting.",timestamp:1544572800},{id:"u3d9Ct7JunNe",name:"Alibaba\u2019s Sale Event Sets Record, but Economic Woes Linger",show:"The River",backgroundImage:"imageThree.jpg",description:"Alibaba said its annual Nov. 11 Singles Day sale, the world\u2019s biggest online shopping event, generated $30.8 billion in transaction volume, surpassing last year\u2019s record of $25.3 billion. ",timestamp:1544140800},{id:"r9HO9UDVNFxd",name:"Competition to AmazonGo Is Coming From an Unlikely Source",show:"The Rant",backgroundImage:"imageFour.jpg",description:"Amazon.com Inc. set off a global race to automate grocery shopping. The latest entrant comes from a nation not known for state-of-the-art retail experiences: Israel. Shufersal Ltd., Israel\u2019s largest supermarket chain, is partnering with local startup Trigo Vision Ltd. to eliminate the need for cashiers in its 272 stores, the companies said in a statement Tuesday.",timestamp:1542412800},{id:"odM7rmChw94X",name:"Pinduoduo\u2019s Rapid Growth Slows Sharply",show:"The Round Table",backgroundImage:"imageFive.jpg",description:"Chinese discount shopping app Pinduoduo has grown explosively to challenge the country\u2019s biggest ecommerce giants, Alibaba and JD.com, paving the way for the company to go public in the U.S. in July.",timestamp:1541203200},{id:"NzzAw03kseen",name:"Google CEO Defends China Push in Letter to Senators",show:"The River",backgroundImage:"imageSix.jpg",description:"Lawmakers have pressed Google for more information on the internet giant\u2019s interest in returning to China. They aren\u2019t likely to be satisfied by the response, if a a newly published letter from CEO Sundar Pichai to senators is any indication.",timestamp:1541030400}]}},63:function(e,a,t){e.exports=t(161)},72:function(e,a,t){},73:function(e,a,t){},75:function(e,a,t){}},[[63,1,2]]]);
//# sourceMappingURL=main.71877fe9.chunk.js.map