(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{238:function(t,e,n){"use strict";var i=n(6),r=n.n(i),o=n(9),a=n.n(o),s=n(22),c=n.n(s),l=(n(358),n(0)),u=n(237),d=n(366),h=n(367),b=n(12),p=n(54),g=n(33),j=n(13),m=n(82),f=n(64),x=n(18),y=j.a.create({menu:{flexDirection:"row"},button:{borderTopWidth:1,borderBottomWidth:1,marginRight:5,marginLeft:5},buttontext:{fontFamily:"Ubuntu-Regular"}}),O=function(){var t=Object(f.k)();return Object(x.jsxs)(b.a,{style:y.menu,children:[Object(x.jsx)(m.a,{onPress:function(){return t.navigate("Tickets")},style:y.button,children:Object(x.jsx)(g.a,{style:y.buttontext,children:"Events"})}),Object(x.jsx)(m.a,{onPress:function(){return t.navigate("Contact")},style:y.button,children:Object(x.jsx)(g.a,{style:y.buttontext,children:"Contact Us"})})]})},v="Are you ready for the best events? Whether you are into sports, music, or the most amazing seminars \nwe have got you covered. Get ready to purchase great tickets at the best prices. Events are in-person and virtual.",w=j.a.create({container:{flexDirection:"column",alignItems:"center",paddingTop:20,paddingBottom:20,flex:1},textcontainer:{padding:20},globologo:{height:100,width:150},title:{fontFamily:"Ubuntu-Regular"},subtitle:{paddingTop:5,fontFamily:"Ubuntu-Regular"},content:{fontFamily:"Ubuntu-Light",fontWeight:"300"},heroimage:{height:170,width:"100%"},menu:{position:"absolute",bottom:10}}),T=function(t){return Object(x.jsxs)(b.a,{style:w.container,children:[Object(x.jsx)(p.a,{style:w.globologo,source:n(340)}),Object(x.jsx)(g.a,{style:w.title,children:"Welcome To GloboTicket"}),Object(x.jsx)(g.a,{style:w.subtitle,children:t.username}),Object(x.jsx)(p.a,{style:w.heroimage,source:n(341)}),Object(x.jsx)(b.a,{style:w.textcontainer,children:Object(x.jsx)(g.a,{style:w.content,children:v})}),Object(x.jsx)(b.a,{style:w.menu,children:Object(x.jsx)(O,{})})]})},k=n(86),F=[{event:"DJ Conference",image:n(342),eventId:"DJ-1",description:"DJ conference for those looking to get in the industry. Virtual due to the global situation. Sign up to be a part of all the excitement as vendors will be on hand to demo the latest gear",shortDescription:"A virtual DJ conference like no other",price:20},{event:"Smart Guy",image:n(343),eventId:"SG-1",description:"Smart guy has a talk where he explains how he made his fortune. He will discuss the methods he used on his rise to greatness. He sill also explain how to setup your business the right way",shortDescription:"Smart Guy tells you how it is",price:100},{event:"Guitar Gary meet and greet",image:n(344),eventId:"GT-1",description:"Meet and interact with the award winning musician Guitar Gary. Ask the questions you always wanted to know. How did he write his biggest hits. how did he get started. Get your tickets",shortDescription:"Meet the one and only Guitar Gary",price:45},{event:"Big Tech Summit",image:n(345),eventId:"BT-1",description:"Join the leaders of Big Tech as they explain their future plans for world domination. Well maybe not domination but they will talk about their new products and apps of the future",shortDescription:"Big Tech can only get bigger",price:0},{event:"Acoustic Kittens Live",image:n(346),eventId:"AK-1",description:"A virtual concert for the Acoustic Kittens. Fresh off the release of their new album they will perfosm all their hits, old and new. This is sure to be a great time for all",shortDescription:"Acoustic Kittens in concert",price:60}],U=j.a.create({container:{paddingTop:15,paddingBottom:15},tickets:{flexDirection:"column"},img:{height:180,width:"100%"},tickettitle:{fontFamily:"Ubuntu-Regular",fontWeight:"bold",textAlign:"center"},ticketshortdescription:{fontFamily:"Ubuntu-Light",fontWeight:"600",textAlign:"center",paddingTop:5},ticketdescription:{fontFamily:"Ubuntu-Light",fontWeight:"600",padding:15},ticketbutton:{fontFamily:"Ubuntu-Regular",fontWeight:"bold",textAlign:"center",paddingBottom:15,paddingTop:5}}),S=function(t){var e=t.navigation;return Object(x.jsx)(b.a,{style:U.container,children:Object(x.jsx)(k.a,{data:F,renderItem:function(t){var n=t.item;return Object(x.jsxs)(b.a,{style:U.tickets,children:[Object(x.jsx)(b.a,{children:Object(x.jsx)(p.a,{style:U.img,source:n.image})}),Object(x.jsxs)(b.a,{children:[Object(x.jsx)(g.a,{style:U.tickettitle,children:n.event}),Object(x.jsx)(g.a,{style:U.ticketshortdescription,children:n.shortDescription}),Object(x.jsx)(g.a,{style:U.ticketdescription,numberOfLines:2,ellipsizeMode:"tail",children:n.description}),Object(x.jsxs)(g.a,{style:U.ticketshortdescription,children:["Price: ",n.price]}),Object(x.jsx)(m.a,{onPress:function(){e.navigate("Purchase",{tickId:n.eventId})},style:U.button,children:Object(x.jsx)(g.a,{style:U.ticketbutton,children:"GET TICKETS"})})]})]})},keyExtractor:function(t){return t.eventId}})})},P=n(228),R=n(73),D=n(153),W="web"===n(14).a.OS?function(t){window.alert(t)}:D.a.alert,I=j.a.create({form:{alignItems:"center",flexDirection:"column",padding:18},txtInput:{borderWidth:1,fontFamily:"Ubuntu-Regular",width:"80%",paddingBottom:15},multitxtinput:{borderWidth:1,fontFamily:"Ubuntu-Regular",width:"90%",height:120,marginBottom:50},labels:{fontFamily:"Ubuntu-Regular"}}),A=function(t){var e=t.navigation,n=Object(l.useState)("Enter Name"),i=a()(n,2),r=i[0],o=i[1],s=Object(l.useState)("Enter Email"),c=a()(s,2),u=c[0],d=c[1],h=Object(l.useState)("Enter Phone Number"),p=a()(h,2),j=p[0],m=p[1],f=Object(l.useState)("Let us know whats on your mind"),y=a()(f,2),O=y[0],v=y[1];return Object(x.jsxs)(b.a,{style:I.form,children:[Object(x.jsx)(g.a,{style:I.labels,children:"Name: *required"}),Object(x.jsx)(R.a,{style:I.txtInput,onChangeText:function(t){return o(t)},value:r,autoCapitalize:"words",selectTextOnFocus:!0}),Object(x.jsx)(g.a,{style:I.labels,children:"Email: *required"}),Object(x.jsx)(R.a,{style:I.txtInput,onChangeText:function(t){return d(t)},value:u,selectTextOnFocus:!0}),Object(x.jsx)(g.a,{style:I.labels,children:"Phone:"}),Object(x.jsx)(R.a,{style:I.txtInput,onChangeText:function(t){return m(t)},value:j,selectTextOnFocus:!0}),Object(x.jsx)(g.a,{style:I.labels,children:"Message: *required"}),Object(x.jsx)(R.a,{style:I.multitxtinput,onChangeText:function(t){return v(t)},value:O,multiline:!0,numberOfLines:3,selectTextOnFocus:!0}),Object(x.jsx)(P.a,{title:"Contact Us",color:"#708090",onPress:function(){r&&u&&O?(W("Thank you "+r),e.navigate("Home")):W("Please enter info in all required fields")}})]})},B=n(368),E=j.a.create({container:{flexDirection:"column",alignItems:"center",paddingTop:10},purchaseRow:{flexDirection:"row"},button:{borderTopWidth:1,borderBottomWidth:1,width:"60%"},title:{fontFamily:"Ubuntu-Regular",fontWeight:"bold",paddingBottom:10},ticketimage:{width:"100%",height:180},shortdescription:{fontFamily:"Ubuntu-Regular",fontWeight:"bold",paddingTop:5,textAlignVertical:"center"},description:{textAlign:"left",fontFamily:"Ubuntu-Light",fontWeight:"600",padding:10},price:{fontFamily:"Ubuntu-Regular",fontWeight:"bold",paddingTop:5,paddingBottom:10},buttontext:{fontFamily:"Ubuntu-Regular",fontWeight:"bold",textAlign:"center",padding:5},quantityinput:{borderWidth:1,fontFamily:"Ubuntu-Regular",fontWeight:"bold",height:38,width:40,marginLeft:25}}),G=function(t){var e=t.route,n=t.navigation,i=Object(l.useState)("1"),r=a()(i,2),o=r[0],s=r[1],c=e.params.tickId,u=F.find((function(t){return t.eventId===c}));return Object(x.jsxs)(b.a,{style:E.container,children:[Object(x.jsx)(g.a,{style:E.title,children:u.event}),Object(x.jsx)(p.a,{style:E.ticketimage,source:u.image}),Object(x.jsx)(g.a,{style:E.shortdescription,children:u.shortDescription}),Object(x.jsx)(g.a,{style:E.description,children:u.description}),Object(x.jsxs)(b.a,{style:E.purchaseRow,children:[Object(x.jsx)(g.a,{style:E.shortdescription,children:"Quantity :"}),Object(x.jsx)(R.a,{style:E.quantityinput,onChangeText:function(t){return s(t)},value:o,selectTextOnFocus:!0,keyboardType:"numeric"})]}),Object(x.jsxs)(g.a,{style:E.price,children:["Total Price: $",u.price*o]}),Object(x.jsx)(m.a,{onPress:function(){var t=u.price*o;D.a.alert("Your cost is "+t),n.navigate("Home")},style:E.button,children:Object(x.jsx)(g.a,{style:E.buttontext,children:"Buy Now"})})]})};function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var q=Object(h.a)(),H={"Ubuntu-Light":n(355),"Ubuntu-Regular":n(356)};e.a=function(){var t=Object(l.useState)(!1),e=a()(t,2),n=e[0],i=e[1];return Object(l.useEffect)((function(){c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.awrap(B.a(H));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.warn(t.t0);case 8:return t.prev=8,i(!0),t.finish(8);case 11:case"end":return t.stop()}}),null,null,[[0,5,8,11]],Promise)}),[]),n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.a,{}),Object(x.jsx)(d.a,{children:Object(x.jsxs)(q.Navigator,{initialRouteName:"Home",screenOptions:{headerMode:"screen"},children:[Object(x.jsx)(q.Screen,{name:"Home",options:{headerShown:!1},children:function(t){return Object(x.jsx)(T,L(L({},t),{},{username:"Sports Fan"}))}}),Object(x.jsx)(q.Screen,{name:"Tickets",component:S,options:{headerTitleAlign:"center",headerTitleStyle:{fontFamily:"Ubuntu-Regular"}}}),Object(x.jsx)(q.Screen,{name:"Contact",component:A,options:{headerTitleAlign:"center",headerTitleStyle:{fontFamily:"Ubuntu-Regular"},headerTitle:"Contact Us"}}),Object(x.jsx)(q.Screen,{name:"Purchase",component:G,options:{headerTitleAlign:"center",headerTitleStyle:{fontFamily:"Ubuntu-Regular"},headerTitle:"Purchase Tickets"}})]})})]}):null}},242:function(t,e,n){t.exports=n(359)},340:function(t,e,n){t.exports=n.p+"static/media/_Export_globoticket-bug-black.61529923.png"},341:function(t,e,n){t.exports=n.p+"static/media/boxing.d94bc95f.jpg"},342:function(t,e,n){t.exports=n.p+"static/media/dj1.92ea88be.jpg"},343:function(t,e,n){t.exports=n.p+"static/media/speaker1.a346861f.jpg"},344:function(t,e,n){t.exports=n.p+"static/media/guitarist1.5c959bb2.jpg"},345:function(t,e,n){t.exports=n.p+"static/media/speaker2.b7984a6b.jpg"},346:function(t,e,n){t.exports=n.p+"static/media/guitarist2.a5320bd3.jpg"},355:function(t,e,n){t.exports=n.p+"./fonts/Ubuntu-Light.ttf"},356:function(t,e,n){t.exports=n.p+"./fonts/Ubuntu-Regular.ttf"}},[[242,1,2]]]);
//# sourceMappingURL=app.a46b3abd.chunk.js.map