(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],d=0,u=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var s=r[o];0!==n[s]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},o={app:0},n={app:0},i=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"53c9f1bc"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"7db9f352"}[e]+".css",n=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===n))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],d=c.getAttribute("data-href");if(d===a||d===n)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],p.parentNode.removeChild(p),r(i)},p.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[e]=0})));var a=n[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(e);var u=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,r[1](u)}n[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/projects/preflight/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=d;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0430":function(e,t,r){},"10ab":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:""}},[r("h1",[e._v("PreFlight")])]),r("v-main",[r("v-container",{attrs:{fluid:""}},[r("router-view")],1)],1),r("NavigationBar")],1)},n=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-bottom-navigation",{attrs:{value:e.activeBtn,grow:"",fixed:"",color:"primary"}},[r("v-btn",{attrs:{to:"/plan"}},[r("span",[e._v("Plan")]),r("v-icon",[e._v("mdi-airplane-takeoff")])],1),r("v-btn",{attrs:{to:"calculate"}},[r("span",[e._v("Calculate")]),r("v-icon",[e._v("mdi-calculator-variant")])],1),r("v-btn",{attrs:{to:"aircraft"}},[r("span",[e._v("My Aircraft")]),r("v-icon",[e._v("mdi-airplane")])],1),r("v-btn",{attrs:{to:"settings"}},[r("span",[e._v("Settings")]),r("v-icon",[e._v("mdi-cog")])],1)],1)},s=[],l={data:function(){return{activeBtn:0}}},c=l,d=(r("96a8"),r("2877")),u=r("6544"),p=r.n(u),m=r("b81c"),h=r("8336"),v=r("132d"),f=Object(d["a"])(c,i,s,!1,null,"21bb5c66",null),b=f.exports;p()(f,{VBottomNavigation:m["a"],VBtn:h["a"],VIcon:v["a"]});var g={name:"Navigation",components:{NavigationBar:b},data:function(){return{}}},w=g,y=(r("8e5c"),r("7496")),A=r("40dc"),T=r("a523"),C=r("f6c4"),x=Object(d["a"])(w,o,n,!1,null,"a37902da",null),E=x.exports;p()(x,{VApp:y["a"],VAppBar:A["a"],VContainer:T["a"],VMain:C["a"]});var k=r("9483");Object(k["a"])("".concat("/projects/preflight/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7");var S=r("8c4f"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{dense:"",align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{items:e.aircraft,label:"Select an Aircraft","prepend-icon":"mdi-airplane"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-autocomplete",{attrs:{items:e.airports,label:"Where from?","prepend-icon":"mdi-map-marker"},on:{change:function(t){return e.checkIfAutocompleteAvailableHome()}},model:{value:e.homeAirportCode,callback:function(t){e.homeAirportCode=t},expression:"homeAirportCode"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-autocomplete",{attrs:{items:e.airports,label:"Where to?","prepend-icon":"mdi-map-marker"},on:{change:function(t){return e.checkIfAutocompleteAvailableDest()}},model:{value:e.destAirportCode,callback:function(t){e.destAirportCode=t},expression:"destAirportCode"}})],1),r("v-col",{attrs:{cols:"3"}},[r("v-btn",{attrs:{small:"",block:"",disabled:this.disableAutoUpdateHome,color:"primary"},on:{click:e.autoUpdateFieldsHome}},[e._v("Autofill")])],1),r("v-col",{attrs:{cols:"3"}},[r("v-btn",{attrs:{small:"",block:"",disabled:!this.homeAirportCode&&!this.homeTemperature&&!this.homeElevation&&!this.homeWindSpeed,color:"primary"},on:{click:e.clearAllFieldsHome}},[e._v("Clear")])],1),r("v-col",{attrs:{cols:"3"}},[r("v-btn",{attrs:{small:"",block:"",disabled:this.disableAutoUpdateDest,color:"primary"},on:{click:e.autoUpdateFieldsDest}},[e._v("Autofill")])],1),r("v-col",{attrs:{cols:"3"}},[r("v-btn",{attrs:{small:"",block:"",disabled:!this.destAirportCode&&!this.destTemperature&&!this.destElevation&&!this.destWindSpeed,color:"primary"},on:{click:e.clearAllFieldsDest}},[e._v("Clear")])],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Temperature (Celsius)","prepend-icon":"mdi-thermometer","hide-details":"",type:"number"},model:{value:e.homeTemperature,callback:function(t){e.homeTemperature=t},expression:"homeTemperature"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Temperature (Celsius)","prepend-icon":"mdi-thermometer","hide-details":"",type:"number"},model:{value:e.destTemperature,callback:function(t){e.destTemperature=t},expression:"destTemperature"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Elevation (meters)","prepend-icon":"mdi-elevation-rise","hide-details":"",type:"number"},model:{value:e.homeElevation,callback:function(t){e.homeElevation=t},expression:"homeElevation"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Elevation (meters)","prepend-icon":"mdi-elevation-rise","hide-details":"",type:"number"},model:{value:e.destElevation,callback:function(t){e.destElevation=t},expression:"destElevation"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Wind Speed (kt)","prepend-icon":"mdi-weather-windy","hide-details":"",type:"number"},model:{value:e.homeWindSpeed,callback:function(t){e.homeWindSpeed=t},expression:"homeWindSpeed"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Wind Speed (kt)","prepend-icon":"mdi-weather-windy","hide-details":"",type:"number"},model:{value:e.destWindSpeed,callback:function(t){e.destWindSpeed=t},expression:"destWindSpeed"}})],1)],1)},M=[],N=(r("a9e3"),r("b64b"),r("bc3a")),D=r.n(N);D.a.defaults.withCredentials=!1;var B={name:"Plan",data:function(){return{homeMetarData:{},homeAirportCode:void 0,homeTemperature:void 0,homeWindSpeed:void 0,homeElevation:void 0,destMetarData:{},destAirportCode:void 0,destTemperature:void 0,destWindSpeed:void 0,destElevation:void 0,disableAutoUpdateHome:!0,disableAutoUpdateDest:!0,aircraft:[],airports:[]}},created:function(){this.loadAirportCodes()},methods:{parseMetarXml:function(e){var t={},r=e.getElementsByTagName("METAR")[0];return r?(t.latitude=Number(r.getElementsByTagName("latitude")[0].innerHTML),t.longitude=Number(r.getElementsByTagName("longitude")[0].innerHTML),t.tempC=Number(r.getElementsByTagName("temp_c")[0].innerHTML),t.windSpeedKt=Number(r.getElementsByTagName("wind_speed_kt")[0].innerHTML),t.elevationM=Number(r.getElementsByTagName("elevation_m")[0].innerHTML),t.observationTime=new Date(r.getElementsByTagName("observation_time")[0].innerHTML),t):t},parseAirportCodes:function(e){for(var t=[],r=e.getElementsByTagName("Station"),a=0;a<r.length;a++){var o=r[a],n=o.getElementsByTagName("station_id")[0].innerHTML,i=o.getElementsByTagName("site")[0].innerHTML,s=o.getElementsByTagName("state")[0].innerHTML;t.push({value:n,text:i+", "+s+" ("+n+")"})}return t},autoUpdateFieldsHome:function(){this.homeTemperature=this.homeMetarData.tempC,this.homeElevation=this.homeMetarData.elevationM,this.homeWindSpeed=this.homeMetarData.windSpeedKt},clearAllFieldsHome:function(){this.homeAirportCode=void 0,this.homeTemperature=void 0,this.homeElevation=void 0,this.homeWindSpeed=void 0},autoUpdateFieldsDest:function(){this.destTemperature=this.destMetarData.tempC,this.destElevation=this.destMetarData.destElevation,this.destWindSpeed=this.destMetarData.windSpeedKt},clearAllFieldsDest:function(){this.destAirportCode=void 0,this.destTemperature=void 0,this.destElevation=void 0,this.destWindSpeed=void 0},loadAirportCodes:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=stations&requestType=retrieve&format=xml&stationString=~us",{method:"GET",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"text/xml"}}).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(t){var r=e.parseAirportCodes(t);e.airports=r}))},showAutofillInformation:function(){console.log("info")},checkIfAutocompleteAvailableHome:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString="+this.homeAirportCode+"&hoursBeforeNow=12&mostRecent=true",{method:"GET",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"text/xml"}}).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(t){if(void 0!==t){var r=e.parseMetarXml(t);Object.keys(r).length>0?(e.homeMetarData=r,e.disableAutoUpdateHome=!1):e.disableAutoUpdateHome=!0}}))},checkIfAutocompleteAvailableDest:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString="+this.destAirportCode+"&hoursBeforeNow=12&mostRecent=true",{method:"GET",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"text/xml"}}).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(t){if(void 0!==t){var r=e.parseMetarXml(t);Object.keys(r).length>0?(e.destMetarData=r,e.disableAutoUpdateDest=!1):e.disableAutoUpdateDest=!0}}))}}},O=B,F=r("c6a6"),j=r("62ad"),H=r("0fd9"),W=r("b974"),P=r("8654"),L=Object(d["a"])(O,_,M,!1,null,null,null),U=L.exports;p()(L,{VAutocomplete:F["a"],VBtn:h["a"],VCol:j["a"],VRow:H["a"],VSelect:W["a"],VTextField:P["a"]});var V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Calculate!")])},I=[],q={},$=Object(d["a"])(q,V,I,!1,null,null,null),K=$.exports;a["a"].use(S["a"]);var R=[{path:"/plan",name:"Plan",component:U},{path:"/calculate",name:"Calculate",component:K},{path:"/aircraft",name:"Aircraft",component:function(){return r.e("about").then(r.bind(null,"cd01"))}},{path:"/settings",name:"Settings",component:function(){return r.e("about").then(r.bind(null,"26d3"))}}],G=new S["a"]({mode:"hash",base:"/projects/preflight/",routes:R}),X=G,J=r("2f62");a["a"].use(J["a"]);var z=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Q=r("f309");a["a"].use(Q["a"]);var Y=new Q["a"]({theme:{themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}},dark:!1}});a["a"].config.productionTip=!1,new a["a"]({router:X,store:z,vuetify:Y,render:function(e){return e(E)}}).$mount("#app")},"8e5c":function(e,t,r){"use strict";var a=r("0430"),o=r.n(a);o.a},"96a8":function(e,t,r){"use strict";var a=r("10ab"),o=r.n(a);o.a}});
//# sourceMappingURL=app.4240b140.js.map