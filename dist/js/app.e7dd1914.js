(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&v.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"13f8":function(t,e,a){t.exports=a.p+"img/team.d04fceda.jpg"},"14b8":function(t,e,a){"use strict";var r=a("955a"),i=a.n(r);i.a},"1a0c":function(t,e,a){t.exports=a.p+"img/Vahe.0ce7d805.jpg"},"204a":function(t,e,a){t.exports=a.p+"img/carpet.6dd297d0.png"},"244f":function(t,e,a){t.exports=a.p+"img/architecture.f9b7ffe6.jpg"},"25ba":function(t,e,a){"use strict";var r=a("290b"),i=a.n(r);i.a},"290b":function(t,e,a){},"2bd5":function(t,e,a){},4230:function(t,e,a){},4935:function(t,e,a){t.exports=a.p+"img/TUMO.82fa371a.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{height:"50",app:"",color:"#3d3d3d",dark:""}},[r("v-btn",{staticClass:"mx-3",attrs:{width:"0",height:"0",to:"/"}},[r("img",{attrs:{src:a("cf05"),height:"100"}})]),r("v-toolbar-title",{staticClass:"display-1"},[t._v("ART")]),r("v-spacer"),r("v-toolbar-items",{staticClass:"hidden-md-and-down"},[r("v-btn",{staticClass:"mx-1",attrs:{text:"",to:"/"}},[r("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[t._v("mdi-home ")]),t._v(" Home")],1),r("v-btn",{staticClass:"mx-1",attrs:{text:"",to:"/about"}},[r("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[t._v("mdi-information ")]),t._v(" About")],1),r("v-btn",{staticClass:"mx-1",attrs:{text:"",to:"/browse"}},[r("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[t._v("mdi-map-marker ")]),t._v(" Browse")],1),r("v-btn",{staticClass:"mx-1",attrs:{text:"",to:"/contact"}},[r("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[t._v("mdi-help ")]),t._v(" Contact")],1),r("v-btn",{staticClass:"mx-1",attrs:{text:"",to:"/display"}},[r("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[t._v("mdi-human ")]),t._v(" Display")],1),r("v-btn",{staticClass:"mx-1",attrs:{text:"",to:"/test"}},[r("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[t._v("mdi-test ")]),t._v(" Test")],1),r("v-toolbar",{attrs:{color:"#3d3d3d",flat:"",height:"auto"}},[r("v-text-field",{attrs:{"hide-details":"","prepend-icon":"mdi-web","single-line":"",label:"Search for Places"}}),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1)],1)],1),r("v-app-bar-nav-icon",{staticClass:"hidden-lg-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),r("v-navigation-drawer",{attrs:{absolute:"",temporary:"",height:"auto",width:"100%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-list-item-group",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[r("v-list-item",{attrs:{to:"/"}},[r("v-list-item-title",[r("v-icon",{staticClass:"mr-2",attrs:{color:"#3d3d3d"}},[t._v("mdi-home ")]),t._v(" Home")],1)],1),r("v-list-item",{attrs:{to:"/about"}},[r("v-list-item-title",[r("v-icon",{staticClass:"mr-2",attrs:{color:"#3d3d3d"}},[t._v("mdi-information ")]),t._v(" About")],1)],1),r("v-list-item",{attrs:{to:"/browse"}},[r("v-list-item-title",[r("v-icon",{staticClass:"mr-2",attrs:{color:"#3d3d3d"}},[t._v("mdi-map-marker ")]),t._v("Browse")],1)],1),r("v-list-item",{attrs:{to:"/contact"}},[r("v-list-item-title",[r("v-icon",{staticClass:"mr-2",attrs:{color:"#3d3d3d"}},[t._v("mdi-help ")]),t._v("Contact")],1)],1),r("v-list-item",{attrs:{to:"/display"}},[r("v-list-item-title",[r("v-icon",{staticClass:"mr-2",attrs:{color:"#3d3d3d"}},[t._v("mdi-human ")]),t._v("Display(Single Page for Cards)")],1)],1),r("v-list-item",{attrs:{to:"/test"}},[r("v-list-item-title",[r("v-icon",{staticClass:"mr-2",attrs:{color:"#3d3d3d"}},[t._v("mdi-test ")]),t._v("TEST")],1)],1),r("v-toolbar",[r("v-text-field",{attrs:{color:"#3d3d3d","hide-details":"","prepend-icon":"mdi-web","single-line":"",label:"Search for Places"}}),r("v-btn",{attrs:{icon:""}},[r("v-icon",{attrs:{color:"#3d3d3d"}},[t._v("mdi-magnify")])],1)],1)],1)],1)],1),r("v-content",[r("transition",{attrs:{name:"router-anim","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[r("router-view")],1)],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{outlined:"",color:"blue"}},t._l(t.cards,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[a("v-card",{staticClass:"mx-auto overlay",attrs:{shaped:"","max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:e.src}},[a("v-card-title",[t._v(t._s(e.title))])],1),a("v-card-subtitle",{staticClass:"pb-0"},[t._v("Number "+t._s(e.id))]),a("v-card-text",{staticClass:"text--primary block-with-text"},[t._v(t._s(e.description))]),a("v-card-actions",[a("v-btn",{attrs:{color:"orange",text:""}},[t._v("Explore")])],1)],1)],1)})),1)],1)},o=[],c=(a("96cf"),a("1da1")),l=a("bc3a"),d=a.n(l),u={name:"Cards",props:{color:String},data:function(){return{cards:null}},methods:{getArt:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://armenian-art.herokuapp.com/getArt");case 2:e=t.sent,console.log(e.data),console.log(e.data["cards"]),this.cards=e.data["cards"];case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getArt()}},v=u,h=(a("14b8"),a("2877")),m=a("6544"),p=a.n(m),f=a("8336"),g=a("b0af"),b=a("99d9"),w=a("62ad"),x=a("a523"),y=a("adda"),_=a("0fd9"),C=Object(h["a"])(v,s,o,!1,null,null,null),k=C.exports;p()(C,{VBtn:f["a"],VCard:g["a"],VCardActions:b["a"],VCardSubtitle:b["b"],VCardText:b["c"],VCardTitle:b["d"],VCol:w["a"],VContainer:x["a"],VImg:y["a"],VRow:_["a"]});var V={data:function(){return{drawer:!1,group:null}},watch:{group:function(){this.drawer=!1}}},A=V,S=(a("25ba"),a("7496")),T=a("40dc"),j=a("5bc1"),I=a("a75b"),O=a("132d"),P=a("8860"),M=a("da13"),$=a("1baa"),D=a("5d23"),R=a("f774"),z=a("2fa4"),E=a("8654"),q=a("71d9"),N=a("2a7f"),U=Object(h["a"])(A,i,n,!1,null,"0cc6eaba",null),Z=U.exports;p()(U,{VApp:S["a"],VAppBar:T["a"],VAppBarNavIcon:j["a"],VBtn:f["a"],VContent:I["a"],VIcon:O["a"],VList:P["a"],VListItem:M["a"],VListItemGroup:$["a"],VListItemTitle:D["a"],VNavigationDrawer:R["a"],VSpacer:z["a"],VTextField:E["a"],VToolbar:q["a"],VToolbarItems:N["a"],VToolbarTitle:N["b"]});var G=a("f309");a("5363");r["a"].use(G["a"]);var Y=new G["a"]({}),B=a("8c4f"),F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-carousel",{attrs:{dark:"","show-arrows-on-hover":"","hide-delimiters":"",continuous:"",cycle:"",interval:"10000",touch:"",transition:"none"}},t._l(t.items,(function(e,a){return r("v-carousel-item",{key:a,attrs:{lazy:"",src:e.src,transition:"scroll-x-transition","reverse-transition":"scroll-x-reverse-transition"}},[r("v-jumbotron",{attrs:{dark:""}},[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",{class:{"ma-12":t.$vuetify.breakpoint.smAndDown,"mx-5":t.$vuetify.breakpoint.mdAndUp}},[r("h2",{staticClass:"white-text",class:{"display-1":t.$vuetify.breakpoint.smAndDown,"display-3":t.$vuetify.breakpoint.mdAndUp}},[t._v(t._s(e.title))]),r("h3",{staticClass:"subheading white-text",class:{"display-0":t.$vuetify.breakpoint.smAndDown,"display-1":t.$vuetify.breakpoint.mdAndUp}},[t._v(t._s(e.description))]),r("v-col",{attrs:{cols:"12",sm:"3"}},[r("v-btn",{attrs:{block:"",rounded:"",dark:"","x-large":"",icon:""},on:{click:function(e){return t.$vuetify.goTo(1e3,t.options)}}},[r("v-icon",[t._v("mdi-arrow-down")])],1)],1)],1)],1)],1)],1)],1)})),1),r("div",{staticClass:"divider"},t._l(t.facts,(function(e){return r("marquee",{key:e.id,staticClass:"text-uppercase my-2",class:{"display-0":t.$vuetify.breakpoint.smAndDown,"display-1":t.$vuetify.breakpoint.smAndUp},attrs:{behavior:"scroll",direction:"left",scrollamount:"18"}},[t._v(t._s(e.text)+" ")])})),1),r("v-parallax",{attrs:{height:"300",src:a("de59")}},[r("h2",{staticClass:"text-center text-uppercase",class:{"display-0":t.$vuetify.breakpoint.smAndDown,"display-1":t.$vuetify.breakpoint.mdAndUp}},[t._v("The Treasures of Armenia")])]),r("v-container",[r("Cards")],1),r("v-footer",{attrs:{dark:"",padless:""}},[r("v-card",{staticClass:"grey darken-2 white--text text-center",attrs:{flat:"",tile:""}},[r("v-card-text",t._l(t.icons,(function(e){return r("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1),r("v-card-text",{staticClass:"white--text pt-0"},[t._v(" This site contains a wealth of information on various branches of Armenian art. It will take you to a unique world of art, where you will tangibly feel a centuries-old breath of Armenian art. You will be with the artists who bridge the past and present, you will know all about their period of life and left inharitance. Here you will find information not only about spiritual treasures, but also monuments representing the flight of armenian architectural thought, such as Zvartnots Cathedral, Republic Square, Opera and so on. So here is armenian art in all its luxury. ")]),r("v-divider"),r("v-card-text",{staticClass:"white--text grey darken-3"},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("TUMO WORKSHOP")])])],1)],1),r("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[r("v-icon",[t._v("mdi-arrow-up")])],1)],1)},H=[],L={name:"Home",data:function(){return{loading:!0,fab:!1,items:[{src:a("244f"),title:"Armenian Architecture",description:"Read More in this website"},{src:a("5f7e"),title:"Armenian Literature",description:"Read More in this website"},{src:a("69e8"),title:"Armenian Music",description:"Read More in this website"},{src:a("204a"),title:"Armenian Carpets",description:"Read More in this website"}],icons:["mdi-facebook","mdi-twitter","mdi-google-plus","mdi-linkedin","mdi-instagram"],facts:[{id:1,text:"Interesting fact: Armenia was the first country to have adopted Christianity as its state religion"}]}},components:{Cards:k},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}},computed:{options:function(){return{duration:1e3,offset:90,easing:"easeInOutQuart"}}}},K=L,W=(a("cccb"),a("5e66")),J=a("3e35"),Q=a("ce7e"),X=a("0e8f"),tt=a("553a"),et=a("a722"),at=a("8b9c"),rt=a("269a"),it=a.n(rt),nt=a("f977"),st=Object(h["a"])(K,F,H,!1,null,null,null),ot=st.exports;p()(st,{VBtn:f["a"],VCard:g["a"],VCardText:b["c"],VCarousel:W["a"],VCarouselItem:J["a"],VCol:w["a"],VContainer:x["a"],VDivider:Q["a"],VFlex:X["a"],VFooter:tt["a"],VIcon:O["a"],VLayout:et["a"],VParallax:at["a"]}),it()(st,{Scroll:nt["b"]});var ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"about"}},[r("v-parallax",{attrs:{height:"300",src:a("7f11")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},[r("h1",{staticClass:"text-center",staticStyle:{"font-family":"algerian","font-size":"60px"}},[t._v("Our Mission")])]),r("div",{staticClass:"divider"},[r("marquee",{staticClass:"text-uppercase my-2",class:{"display-0":t.$vuetify.breakpoint.smAndDown,"display-1":t.$vuetify.breakpoint.smAndUp},attrs:{behavior:"scroll",direction:"left",scrollamount:"18"}},[t._v("Our Mission is pretty important! So please read it ")])],1),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",xl:"7",lg:"6"}},[r("h2",{staticClass:"mx-12"},[t._v("What are we doing?")]),r("p",{staticClass:"mx-12"},[t._v("Yerevan is the capital of the Republic of Armenia and is the 12th capital of the historical Armenia. It has seen a lot before becoming the capital of Armenia. Yerevan is also one of the most ancient cities of the world. There are numerous museums, monuments, churches in Yerevan which evidence the high spiritual, cultural and scientific status of the city. Due to rich historic and cultural heritage, unique architecture, developing urban infrastructure and the hospitality so characteristic of Armenians, Yerevan attracts more and more tourists expanding the geography of tourism market and strengthening its positions on the map of best touristic directions. Yerevan is a mixture of ancient, old and new. "),r("br"),t._v(" This site contains a wealth of information on various branches of Armenian art. It will take you to a unique world of art, where you will tangibly feel a centuries-old breath of Armenian art. You will be with the artists who bridge the past and present, you will know all about their period of life and left inharitance. Here you will find information not only about spiritual treasures, but also monuments representing the flight of armenian architectural thought, such as Zvartnots Cathedral, Republic Square, Opera and so on. So here is armenian art in all its luxury. ")])]),r("v-col",{attrs:{cols:"12",xl:"5",lg:"6"}},[r("v-img",{key:"@/assets/img/about/TUMO.jpg",staticClass:"grey lighten-2",attrs:{src:a("4935")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)],1),r("div",{staticClass:"divider"},[r("marquee",{staticClass:"text-uppercase my-2",class:{"display-0":t.$vuetify.breakpoint.smAndDown,"display-1":t.$vuetify.breakpoint.smAndUp},attrs:{scrolldelay:"100",behavior:"scroll",direction:"left",scrollamount:"12"}},[t._v("It's not necessary, but we would like if you supported us :) ")])],1),r("v-parallax",{attrs:{height:"300",src:a("13f8")}},[r("h1",{staticClass:"text-center",staticStyle:{"font-family":"algerian","font-size":"60px"}},[t._v("Our Team")])]),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",lg:"4",md:"6",sm:"12"}},[r("v-card",{staticClass:"mx-auto overlay",attrs:{shaped:"",color:"#008DD1","max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",height:"260px",src:a("1a0c")}},[r("v-card-title",{staticStyle:{"font-family":"cursive"}},[t._v("Vahe Khachatryan")])],1),r("v-card",{staticClass:"ma-7",attrs:{color:"#05aeff"}},[r("v-card-text",{staticStyle:{color:"white"}},[t._v("I'm Vahe Khachatryan. I'm 16 years old. I've been living in Armenia since i was born. I've been learning in TUMO for 3 and half years. It's still fun to go there, because without it i wouldn't be making this website :)")])],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){t.show=!t.show}}},[r("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[r("v-divider"),r("v-card-text",{staticStyle:{color:"white"}},[r("v-row",{staticClass:"mx-12",attrs:{justify:"space-between",align:"center"}},[r("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v("mdi-facebook")])],1),r("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v("mdi-instagram")])],1),r("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v("mdi-twitter")])],1)],1)],1)],1)])],1)],1),r("v-col",{attrs:{cols:"12",lg:"4",md:"6",sm:"12"}},[r("v-card",{staticClass:"mx-auto overlay",attrs:{shaped:"",color:"#008DD1","max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",height:"260px",src:a("91b2")}},[r("v-card-title",{staticStyle:{"font-family":"cursive"}},[t._v("Gor Margaryan")])],1),r("v-card",{staticClass:"ma-7",attrs:{color:"#05aeff"}},[r("v-card-text",{staticStyle:{color:"white"}},[t._v("I'm Gor Margaryan. I'm 13 years old. I've been living in Armenia since i was born. I've been learning in TUMO for a year. It's still fun to go there, because without it i wouldn't be making this website :)")])],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){t.show=!t.show}}},[r("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[r("v-divider"),r("v-card-text",{staticStyle:{color:"white"}},[r("v-row",{staticClass:"mx-12",attrs:{justify:"space-between",align:"center"}},[r("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v("mdi-facebook")])],1),r("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v("mdi-instagram")])],1),r("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v("mdi-twitter")])],1)],1)],1)],1)])],1)],1),r("v-col",{attrs:{cols:"12",lg:"4",md:"12",sm:"12"}},[r("v-card",{staticClass:"mx-auto overlay",attrs:{shaped:"",color:"#008DD1","max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",height:"260px",src:a("9d5b")}},[r("v-card-title",{staticStyle:{"font-family":"cursive"}},[t._v("Ani Avetisyan")])],1),r("v-card",{staticClass:"ma-7",attrs:{color:"#05aeff"}},[r("v-card-text",{staticStyle:{color:"white"}},[t._v("I'm Ani Avetisyan. I'm 14 years old. I've been living in Armenia since i was born. I've been learning in TUMO for 2 years. It's still fun to go there, because without it i wouldn't be making this website :)")])],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){t.show=!t.show}}},[r("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[r("v-divider"),r("v-card-text",{staticStyle:{color:"white"}},[r("v-row",{staticClass:"mx-12",attrs:{justify:"space-between",align:"center"}},[r("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v("mdi-facebook")])],1),r("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v("mdi-instagram")])],1),r("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v("mdi-twitter")])],1)],1)],1)],1)])],1)],1)],1),r("v-footer",{attrs:{dark:"",padless:""}},[r("v-card",{staticClass:"grey darken-2 white--text text-center",attrs:{flat:"",tile:""}},[r("v-card-text",t._l(t.icons,(function(e){return r("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1),r("v-card-text",{staticClass:"white--text pt-0"},[t._v(" This site contains a wealth of information on various branches of Armenian art. It will take you to a unique world of art, where you will tangibly feel a centuries-old breath of Armenian art. You will be with the artists who bridge the past and present, you will know all about their period of life and left inharitance. Here you will find information not only about spiritual treasures, but also monuments representing the flight of armenian architectural thought, such as Zvartnots Cathedral, Republic Square, Opera and so on. So here is armenian art in all its luxury. ")]),r("v-divider"),r("v-card-text",{staticClass:"white--text grey darken-3"},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("TUMO WORKSHOP")])])],1)],1),r("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[r("v-icon",[t._v("mdi-arrow-up")])],1)],1)},lt=[],dt={name:"About",data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-google-plus","mdi-linkedin","mdi-instagram"],show:!1,fab:!1}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},ut=dt,vt=a("0789"),ht=a("490a"),mt=Object(h["a"])(ut,ct,lt,!1,null,null,null),pt=mt.exports;p()(mt,{VBtn:f["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["c"],VCardTitle:b["d"],VCol:w["a"],VDivider:Q["a"],VExpandTransition:vt["a"],VFooter:tt["a"],VIcon:O["a"],VImg:y["a"],VParallax:at["a"],VProgressCircular:ht["a"],VRow:_["a"],VSpacer:z["a"]}),it()(mt,{Scroll:nt["b"]});var ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("google-map")],1)},gt=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("h2",[t._v("Search and add a pin")]),a("label",[a("gmap-autocomplete",{on:{place_changed:t.setPlace}}),a("button",{on:{click:t.addMarker}},[t._v("Add")])],1),a("br")]),a("br"),a("gmap-map",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.center,zoom:12}},t._l(t.markers,(function(e,r){return a("gmap-marker",{key:r,attrs:{position:e.position},on:{click:function(a){t.center=e.position}}})})),1)],1)},wt=[],xt={name:"GoogleMap",data:function(){return{center:{lat:45.508,lng:-73.587},markers:[],places:[],currentPlace:null}},mounted:function(){this.geolocate()},methods:{setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.places.push(this.currentPlace),this.center=t,this.currentPlace=null}},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}}))}}},yt=xt,_t=Object(h["a"])(yt,bt,wt,!1,null,null,null),Ct=_t.exports,kt={name:"App",components:{GoogleMap:Ct}},Vt=kt,At=Object(h["a"])(Vt,ft,gt,!1,null,null,null),St=At.exports,Tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticStyle:{height:"100%"},attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"ma-12",attrs:{outlined:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{staticClass:"px-4",attrs:{cols:"12"}},[r("h2",[t._v("Contact Us")]),r("v-text-field",{staticClass:"my-6",attrs:{clearable:"",label:"First Name","aria-required":"",rules:[function(t){return!!t||"Name is required"}]},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}}),r("v-text-field",{staticClass:"my-6",attrs:{clearable:"",label:"Last Name","aria-required":"",rules:[function(t){return!!t||"Last Name is required"}]},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}}),r("v-text-field",{staticClass:"my-6",attrs:{"error-count":"3",clearable:"",type:"email",label:"E-mail","aria-required":"",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("v-text-field",{staticClass:"my-6",attrs:{"error-count":"3",clearable:"",type:"subject",label:"Subject","aria-required":"",rules:[function(t){return!!t||"Subject is required"}]},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),r("v-btn",{attrs:{disabled:!t.valid,color:"success"}},[t._v("Send the Message")])],1)],1)],1)],1)],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-img",{attrs:{"aspect-ratio":"1.77",height:"100%",src:a("dc05")}})],1)],1)],1)],1)],1)},jt=[],It={data:function(){return{show1:!1,firstname:null,lastname:null,password:null,email:null,email_confirm:null,valid:!0,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},computed:{emailConfirmationRules:function(){var t=this;return[function(){return t.email_confirm===t.email||"E-mail must match"},function(t){return!!t||"Confirmation E-mail is required"}]}}},Ot=It,Pt=a("4bd4"),Mt=Object(h["a"])(Ot,Tt,jt,!1,null,null,null),$t=Mt.exports;p()(Mt,{VBtn:f["a"],VCard:g["a"],VCol:w["a"],VContainer:x["a"],VForm:Pt["a"],VImg:y["a"],VRow:_["a"],VTextField:E["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",{staticClass:"text-center h1"},[t._v("Zvartnots Cathedral")]),a("v-carousel",{attrs:{dark:"",width:"400","show-arrows-on-hover":"","hide-delimiters":"",continuous:"",cycle:"",interval:"10000",touch:""}},t._l(t.items,(function(e,r){return a("v-carousel-item",{key:r,attrs:{src:e.src,transition:"scroll-x-transition","reverse-transition":"scroll-x-reverse-transition"}},[a("v-jumbotron",{attrs:{dark:""}},[a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-flex",[a("h2",{staticClass:"display-3 white-text text-center"},[t._v(t._s(e.title))])])],1)],1)],1)],1)})),1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("h3",[t._v("History")]),a("p",[t._v(' Zvartnots was built at a time when much of Armenia had just recently been overrun by the Muslim Arabs who were progressively occupying the Sasanian Persia/Iran of which Armenia was a part at the time. Construction of the cathedral began in 643 under the guidance of Catholicos Nerses III (nicknamed Shinogh or the Builder). Dedicated to St. Gregory, it was located at the place where a meeting between King Trdat III and Gregory the Illuminator was supposed to have taken place. According to the medieval Armenian historian Movses Kaghankatvatsi, the cathedral was consecrated in 652.[1] From 653 to 659, Nerses was in Tayk and the construction of the cathedral continued under Anastas Akoratsi. Following the Arab occupation of Dvin and the intensifying wars between the Byzantine and Arab armies on the former\'s eastern borders, Nerses transferred the patriarchal palace of the Catholicos from Dvin to Zvartnots.[2] The exterior church design, featuring basket capitals with Ionic volute mounts, eagle capitals, and vine scroll friezes reveals the influence of Syrian and northern Mesopotamian architecture.[3] Zvartnots remained standing until the end of the tenth century, but historical sources are silent as to the cause of its collapse.[1] A close copy of the cathedral was erected at Ani out by Trdat the Architect under the reign of Gagik I Bagratuni during the final decade of the tenth century. The contemporary Armenian historian Stepanos Taronetsi referred to Zvartnots when describing the church that Gagik I had inaugurated as "a large structure at Vałaršapat [Vagharshapat], dedicated to the same saint that had fallen into ruins."[4] ')])]),a("v-col",[a("h3",[t._v("Excavations")]),a("p",[t._v(" The ruins of Zvartnots remained buried until its remains were uncovered at the start of the twentieth century. The site was excavated between 1901 and 1907 under the direction of vardapet Khachik Dadyan, uncovering the foundations of the cathedral as well as the remains of the Catholicos palace and a winery. The excavations furthermore revealed that Zvartnots stood on the remnants of structures that dated back to reign of the Urartian king Rusa II.[1] ")]),a("h3",[t._v("Influence")]),a("p",[t._v(" The church of St. Gregory (better known as Gagkashen) in Ani (now in Turkey) was built in 1001-1005 and was intended to be a recreation of Zvartnots.The Holy Trinity Church in the Malatia-Sebastia district of Yerevan is modeled by architect Baghdasar Arzoumanian after Zvartnots and was completed in 2003. ")])])],1)],1)},Rt=[],zt={name:"Display",data:function(){return{items:[{src:a("7bca"),title:"Zvartnots"},{src:a("62ca"),title:"Zvartnots"},{src:a("d118"),title:"Zvartnots"}]}},components:{Cards:k},methods:{}},Et=zt,qt=(a("d20e"),Object(h["a"])(Et,Dt,Rt,!1,null,"241a49e4",null)),Nt=qt.exports;p()(qt,{VCarousel:W["a"],VCarouselItem:J["a"],VCol:w["a"],VContainer:x["a"],VFlex:X["a"],VLayout:et["a"],VRow:_["a"]});var Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-img",{staticClass:"grey lighten-2",attrs:{"lazy-src":"https://picsum.photos/id/11/100/60","aspect-ratio":"1","max-width":"500","max-height":"300"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)},Zt=[],Gt={},Yt=Object(h["a"])(Gt,Ut,Zt,!1,null,null,null),Bt=Yt.exports;p()(Yt,{VImg:y["a"],VProgressCircular:ht["a"],VRow:_["a"]}),r["a"].use(B["a"]);var Ft=new B["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:ot},{path:"/about",name:"about",component:pt},{path:"/browse",name:"browse",component:St},{path:"/display",name:"display",component:Nt},{path:"/contact",name:"contact",component:$t},{path:"/test",name:"test",component:Bt}]}),Ht=a("a7fe"),Lt=a.n(Ht),Kt=a("755e");r["a"].config.productionTip=!1,r["a"].use(Kt,{load:{key:"process.env.VUE_APP_GOOGLE_API_KEY",libraries:"places"}}),new r["a"]({vuetify:Y,router:Ft,axios:d.a,VueAxios:Lt.a,el:"#app",components:{App:Z},template:"<App/>",render:function(t){return t(Z)}}).$mount("#app")},"5f7e":function(t,e,a){t.exports=a.p+"img/literature.73cdd4f7.jpg"},"62ca":function(t,e,a){t.exports=a.p+"img/img1.cdd20be5.jpg"},"69e8":function(t,e,a){t.exports=a.p+"img/music.3dfb225d.jpg"},"7bca":function(t,e,a){t.exports=a.p+"img/carpet.8cfab3df.jpg"},"7f11":function(t,e,a){t.exports=a.p+"img/mountain.54332ebb.jpg"},"91b2":function(t,e,a){t.exports=a.p+"img/Gor.8d0d5dfb.jpg"},"955a":function(t,e,a){},"9d5b":function(t,e,a){t.exports=a.p+"img/Ani.ce353435.jpg"},cccb:function(t,e,a){"use strict";var r=a("4230"),i=a.n(r);i.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.59253f87.png"},d118:function(t,e,a){t.exports=a.p+"img/zvartnoz.5e114f53.jpg"},d20e:function(t,e,a){"use strict";var r=a("2bd5"),i=a.n(r);i.a},dc05:function(t,e,a){t.exports=a.p+"img/contact.ed13dffe.jpg"},de59:function(t,e,a){t.exports=a.p+"img/hraparak.960fe6ef.jpg"}});
//# sourceMappingURL=app.e7dd1914.js.map