(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/Cloud-Fog.3694ef67.svg"},24:function(e,t,n){e.exports=n.p+"static/media/Cloud-Snow.20379c89.svg"},25:function(e,t,n){e.exports=n.p+"static/media/Cloud-Lightning.1afe7efd.svg"},26:function(e,t,n){e.exports=n.p+"static/media/Cloud-Moon.675a7cdd.svg"},27:function(e,t,n){e.exports=n.p+"static/media/Cloud-Rain.316ec331.svg"},28:function(e,t,n){e.exports=n.p+"static/media/Cloud-Sun.534afba6.svg"},29:function(e,t,n){e.exports=n.p+"static/media/Cloud.79b3c647.svg"},30:function(e,t,n){e.exports=n.p+"static/media/Moon.b87ca8b6.svg"},31:function(e,t,n){e.exports=n.p+"static/media/Snowflake.eace860f.svg"},32:function(e,t,n){e.exports=n.p+"static/media/Sun.53f709c5.svg"},33:function(e,t,n){e.exports=n.p+"static/media/Tornado.b6e81ba5.svg"},34:function(e,t,n){e.exports=n.p+"static/media/Wind.6b4d1006.svg"},35:function(e,t,n){e.exports=n.p+"static/media/Cloud-Hail.f4e14d44.svg"},40:function(e,t,n){e.exports=n(75)},46:function(e,t,n){},65:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(46),n(7)),l=n(8),s=n(10),u=n(9),d=n(11),h=n(5),m=n.n(h),f=n(38),p=n(1),g=n(2),w=(n(65),n(4));function v(e){var t=e.width,n=e.height,a=e.color,o=(e.backgroundColor,Object(w.a)(e,["width","height","color","backgroundColor"]));return r.a.createElement("div",Object.assign({},o,{style:{height:"".concat(n,"px"),width:"".concat(t,"px")}}),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",fill:a}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))}function b(e){var t=e.width,n=e.height,a=e.color,o=(e.backgroundColor,Object(w.a)(e,["width","height","color","backgroundColor"]));return r.a.createElement("div",Object.assign({},o,{style:{height:"".concat(n,"px"),width:"".concat(t,"px")}}),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:a}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))}function x(){var e=Object(p.a)(["\n\tfont-size: 12px;\n\tfont-weight: ",";\n\tcolor: ",";\n\tmin-height: 15px;\n\ttext-align: left;\n\tpadding: 0px 42px 2px 11px;\n\tmargin: 0px 5px 0px 5px;\n"]);return x=function(){return e},e}function y(){var e=Object(p.a)(["\n\tdisplay: flex;\n\tborder: "," solid;\n\tborder-radius: 10px;\n\tmargin: 0px 5px 0px 5px;\n\toverflow: hidden;\n\tpadding-left: 10px;\n\tbox-shadow: ",";\n\n\t&:hover {\n\t\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\n\t}\n"]);return y=function(){return e},e}v.defaultProps={color:"black",width:"24",height:"24"},b.defaultProps={color:"black",width:"24",height:"24"};var E=g.a.form(y(),function(e){return e.focused?"1px black":"1px #757578"},function(e){return e.focused?"0 2px 4px rgba(0, 0, 0, 0.25) !important;":"none"}),k=g.a.span(x(),function(e){return e.focused?"500":"400"},function(e){return e.focused?"black":"#757578"});function C(e){var t=Object(a.useState)(!1),n=Object(f.a)(t,2),o=n[0],c=n[1],i=Object(a.useRef)(null),l=e.value.length>0;return r.a.createElement("div",{className:"search-form-wrapper"},r.a.createElement(k,{className:l&&"fadein-animate",focused:o},l>0&&e.placeholder),r.a.createElement(E,{focused:o,onFocus:function(){return c(!0)},onBlur:function(){return c(!1)},onSubmit:e.onSubmit},r.a.createElement("input",{ref:i,className:"search-input",type:"text",value:e.value,onChange:e.onChange,placeholder:e.placeholder,"aria-required":!0,"aria-label":e.placeholder}),r.a.createElement("label",{className:"search-form-clear search-form-icon"},r.a.createElement("div",{onClick:function(t){e.onClear(t),i.current.focus()},"aria-label":"Clear Search Entry"},l&&r.a.createElement(b,{className:"fadein-animate clear-icon",color:"#707070"}))),r.a.createElement("label",{className:"search-form-icon search-form-submit",onClick:e.onSubmit,"aria-label":"Execute Location Search"},r.a.createElement(v,{color:"white"}))))}function j(e){var t=e.width,n=e.height,a=e.color,o=(e.backgroundColor,Object(w.a)(e,["width","height","color","backgroundColor"]));return r.a.createElement("div",Object.assign({},o,{style:{height:"".concat(n,"px"),width:"".concat(t,"px")}}),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z",fill:a}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))}C.defaultProps={placeholder:""},j.defaultProps={color:"black",width:"24",height:"24"};n(70);var O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).setGeoData=function(e,t,a){n.setState({address:e,busy:!1},function(){n.props.setCoordinates(t)}),a&&a()},n.handleGeoCodeCall=function(){return new Promise(function(e,t){m.a.get("".concat("https://68.183.115.153/api","/locate?address=").concat(n.state.address)).then(function(a){if("OK"===a.data.status){var r=a.data.results[0];n.setGeoData(r.formatted_address,r.geometry.location,e)}else n.props.onError("geocode",a.data),t()}).catch(function(e){n.props.onError("geocode",e),t()})})},n.handleIPStackCall=function(){return new Promise(function(e,t){m.a.get("http://api.ipstack.com/check?access_key=".concat("75261f3113f0439c27a6c4df5b9e42bf")).then(function(t){var a=t.data,r="".concat(a.city,", ").concat(a.region_code,", ").concat(a.country_code);n.setGeoData(r,{lat:a.latitude,lng:a.longitude},e)}).catch(function(e){n.props.onError("ipstack",e),t()})})},n.handleDetectLocation=function(){n.state.busy||n.handleIPStackCall()},n.onChange=function(e){n.state.busy||n.setState({address:e.target.value})},n.onClear=function(e){e.preventDefault(),n.state.busy||n.setState({address:""})},n.onSubmit=function(e){e.preventDefault(),n.state.busy||n.setState({busy:!0},function(){n.handleGeoCodeCall()})},n.state={address:e.address,busy:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.address,n=e.busy;return r.a.createElement("div",{className:"location-form-wrapper"},r.a.createElement("button",{className:"location-detect-location",onClick:this.handleDetectLocation},r.a.createElement(j,{"aria-label":"Detect My Location"})),r.a.createElement("div",{className:"location-bar-wrapper","aria-busy":n},r.a.createElement(C,{value:n?"Loading...":t,placeholder:"",onChange:this.onChange,onClear:this.onClear,onSubmit:this.onSubmit})))}}]),t}(a.Component),M=(n(71),n(23)),N=n.n(M),S=n(24),D=n.n(S),H=n(25),z=n.n(H),L=n(26),F=n.n(L),P=n(27),B=n.n(P),T=n(28),I=n.n(T),W=n(29),G=n.n(W),_=n(30),V=n.n(_),U=n(31),A=n.n(U),J=n(32),R=n.n(J),Y=n(33),q=n.n(Y),K=n(34),$=n.n(K),Q=n(35),X=n.n(Q);function Z(e){switch(e){case"clear-day":return{weather:R.a,weatherMsg:"clear day",color:"#ffc107",fontColor:"black"};case"clear-night":return{weather:V.a,weatherMsg:"clear night",color:"#ffc107",fontColor:"black"};case"rain":return{weather:B.a,weatherMsg:"rain",color:"#66656B",fontColor:"white"};case"snow":return{weather:A.a,weatherMsg:"snow",color:"#00e5ff",fontColor:"black"};case"sleet":return{weather:D.a,weatherMsg:"sleet",color:"#00a0b2",fontColor:"white"};case"wind":return{weather:$.a,weatherMsg:"wind",color:"#89888C",fontColor:"white"};case"fog":return{weather:N.a,weatherMsg:"fog",color:"#5f5f62",fontColor:"white"};case"cloudy":return{weather:G.a,weatherMsg:"cloudy",color:"#89888C",fontColor:"white"};case"partly-cloudy-day":return{weather:I.a,weatherMsg:"partly cloudly daytime",color:"#a09fa3",fontColor:"white"};case"partly-cloudy-night":return{weather:F.a,weatherMsg:"partly cloudly nighttime",color:"#a09fa3",fontColor:"white"};case"hail":return{weather:X.a,weatherMsg:"hail",color:"#00a0b2",fontColor:"white"};case"thunderstorm":return{weather:z.a,weatherMsg:"thunderstorm",color:"#66656B",fontColor:"white"};case"tornado":return{weather:q.a,weatherMsg:"tornado",color:"#b2102f",fontColor:"white"};default:throw new Error("".concat(e," is not a supported Weather Type"))}}function ee(){var e=Object(p.a)(["\n\theight: 80%;\n"]);return ee=function(){return e},e}var te=g.a.img(ee());function ne(e){var t=Z(e.icon),n=t.weather,a=t.weatherMsg;return r.a.createElement(te,{src:n,alt:a})}function ae(){var e=Object(p.a)(["\n\tflex-direction: ",";\n\tjustify-content: center;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n\tmargin-top: auto;\n\tmargin-bottom: auto;\n\n\t@media (min-width: 501px) {\n\t\tdisplay: ",";\n\t}\n\t@media (max-width: 500px) {\n\t\tdisplay: ",";\n\t}\n"]);return ae=function(){return e},e}ne.defaultProps={icon:"clear-day"};var re=g.a.div(ae(),function(e){return e.flexDirection},function(e){return e.small?"none":"flex"},function(e){return e.small?"flex":"none"});function oe(e){var t=e.current,n=t.temperature,a=t.apparentTemperature,o=t.summary,c=t.icon,i=t.humidity,l=t.windSpeed,s=t.uvIndex,u="c"===e.unit?(5/9*(parseFloat(n)-32)).toFixed(0):n.toFixed(0);return r.a.createElement("div",{className:"current-card-set"},r.a.createElement("div",{className:"current-card-wrapper"},r.a.createElement("span",{className:"current-card-summary"},o),r.a.createElement(ne,{icon:c}),r.a.createElement("div",{className:"current-card-info"},r.a.createElement("span",{className:"current-card-temp"},u,"\xb0"),r.a.createElement(ce,{title:"Feels Like",body:"".concat(a.toFixed(0),"\xb0")})),r.a.createElement(re,{flexDirection:"column"},r.a.createElement(ce,{title:"Humidity",body:"".concat((100*i).toFixed(0),"%")}),r.a.createElement(ce,{title:"Wind Speed",body:"".concat(l.toFixed(0),"mph")}),r.a.createElement(ce,{title:"UV Index",body:"".concat(s)}))),r.a.createElement(re,{flexDirection:"row",small:!0},r.a.createElement(ce,{title:"Humidity",body:"".concat((100*i).toFixed(0),"%")}),r.a.createElement(ce,{title:"Wind Speed",body:"".concat(l.toFixed(0),"mph")}),r.a.createElement(ce,{title:"UV Index",body:"".concat(s)})))}function ce(e){return r.a.createElement("div",{className:"current-card-banner-component"},r.a.createElement("span",{className:"current-card-banner-body current-card-banner-subtitle"},"".concat(e.title,": ")),r.a.createElement("span",{className:"current-card-banner-body"},e.body))}function ie(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",fill:e.color}))}oe.defaultProps={unit:"f"},ie.defaultProps={color:"black"};n(72);function le(){var e=Object(p.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 0px 10px;\n\theight: 34px;\n\tline-height: 34px;\n\tborder: transparent 1px solid;\n\n\t:hover {\n\t\tborder: #ff1744 1px solid;\n\t\tborder-radius: 10px;\n\t}\n"]);return le=function(){return e},e}function se(){var e=Object(p.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-top: 10px;\n\tmax-width: 90%;\n"]);return se=function(){return e},e}var ue=g.a.div(se()),de=g.a.span(le());function he(e){var t=e.alerts;if(!t)return null;for(var n=[],a=0;a<t.length;a++)n.push(r.a.createElement(me,{key:"weather-alert-".concat(a),title:t[a].title,url:t[a].uri}));return r.a.createElement(ue,null,n)}function me(e){return r.a.createElement(de,null,r.a.createElement(ie,{color:"#ff1744"}),r.a.createElement("a",{className:"alert-warning",href:e.url,target:"_blank",rel:"noopener noreferrer"},e.title))}n(73);function fe(){var e=Object(p.a)(["\n\theight: 100%;\n\tmargin: auto;\n\n\t@media (min-width: 769px) {\n\t\tdisplay: ",";\n\t}\n\n\t@media (max-width: 768px) {\n\t\tdisplay: ",";\n\t}\n"]);return fe=function(){return e},e}function pe(){var e=Object(p.a)(["\n\twidth: ","%;\n\talign-self: flex-start;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\toverflow: hidden;\n"]);return pe=function(){return e},e}function ge(){var e=Object(p.a)(["\n\twidth: ","%;\n\theight: ",";\n\talign-self: flex-start;\n\tmargin-left: ","%;\n\tborder-left: #7f7f81 1px solid;\n"]);return ge=function(){return e},e}function we(){var e=Object(p.a)(["\n\twidth: ","%;\n\theight: 50px;\n\tbackground-color: ",";\n\toverflow: hidden;\n"]);return we=function(){return e},e}var ve=g.a.span(we(),function(e){return e.hours/e.maxHours*100},function(e){return e.color}),be=g.a.span(ge(),function(e){return 1/e.maxHours*100},function(e){return e.extended?"100%":"50%"},function(e){return 1/(2*e.maxHours)*100}),xe=g.a.span(pe(),function(e){return 2/e.maxTicks*100}),ye=g.a.img(fe(),function(e){return e.counter<2?"none":""},function(e){return e.counter<3?"none":""});function Ee(e,t){if(e.length<t)throw new Error("Cannot generate a ".concat(t," hour forecast bar, data is of length ").concat(e.length));if(t<1)throw new Error("Cannot generate a forecast bar that is less than 1 hour")}function ke(e){var t="AM",n=new Date(1e3*e).getHours();return n>11&&(t="PM"),0===n||12===n?n=12:n%=12,{hour:n,merdiem:t}}function Ce(e){return r.a.createElement(xe,{maxTicks:e.maxTicks},r.a.createElement("span",{className:"hourly-timestamp-time"},e.time),r.a.createElement("span",{className:"hourly-timestamp-temp"},e.temp))}function je(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;Ee(e,t);for(var n=[],a=e[0].icon,o=e[0].summary,c=1,i=1;i<t;i++){var l=e[i].icon,s=Z(a),u=s.color,d=s.weather,h=s.weatherMsg;l!==a?(n.push(r.a.createElement(ve,{key:"hourly-part-".concat(i),hours:c,maxHours:t,color:u,"aria-label":o},r.a.createElement(ye,{src:d,alt:h,counter:c}))),a=l,o=e[i].summary,c=1):c+=1}var m=Z(a),f=m.color,p=m.weather,g=m.weatherMsg;return n.push(r.a.createElement(ve,{key:"hourly-img-".concat(t),hours:c,maxHours:t,color:f,"aria-label":o},r.a.createElement(ye,{src:p,alt:g,counter:c}))),n}(e.hourly.data,24),n=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t=[],n=0;n<e;n++)t.push(r.a.createElement(be,{key:"tick-".concat(n),maxHours:e,extended:n%2===0}));return t}(24),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;if(Ee(e,t),n>t)throw new Error("Number of tick marks cannot be greater than number of availiable hours");var a=[],o=ke(e[0].time),c=o.hour,i=o.merdiem;a.push(r.a.createElement(Ce,{key:"timestamp-".concat(0),maxTicks:n,time:"".concat(c).concat(i),temp:"".concat(e[0].temperature.toFixed(0),"\xb0")}));for(var l=2;l<n;l+=2){var s=ke(e[l].time),u=s.hour,d=s.merdiem;a.push(r.a.createElement(Ce,{key:"timestamp-".concat(l),maxTicks:n,time:"".concat(u).concat(d),temp:"".concat(e[0].temperature.toFixed(0),"\xb0")}))}return a}(e.hourly.data,24,24);return r.a.createElement("div",{className:"hourly-forecast-wrapper"},r.a.createElement("span",{className:"hourly-forecast-summary"},e.hourly.summary),r.a.createElement("div",{className:"hourly-forecast-bar"},t),r.a.createElement("div",{className:"hourly-forecast-tickmarks"},n),r.a.createElement("div",{className:"hourly-forcast-timestamps"},a))}function Oe(){var e=Object(p.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\twidth: 100%;\n\tmargin: 20px 0px 20px 0px;\n\toverflow: hidden;\n"]);return Oe=function(){return e},e}var Me=g.a.div(Oe());function Ne(e){var t=e.data;return Object.keys(t).length>0?r.a.createElement(Me,null,r.a.createElement(he,{alerts:t.alerts}),r.a.createElement(oe,{current:t.currently}),r.a.createElement(je,{hourly:t.hourly})):r.a.createElement(Me,null," No Data ")}n(74);var Se=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).setLatLng=function(e){var t=n.state,a=t.lat,r=t.lng;e.lat!==a&&e.lng!==r&&n.handleDarkSkyCall(e).catch(function(e){n.handleError("darksky",e)})},n.handleError=function(e,t){console.log(t)},n.state={coordinates:{lat:40.7127753,lng:-74.0059728},data:{}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.handleDarkSkyCall(this.state.coordinates)}},{key:"handleDarkSkyCall",value:function(e){var t=this,n=e.lat,a=e.lng;return new Promise(function(r,o){m()("".concat("https://68.183.115.153/api","/weather?lat=").concat(n,"&lng=").concat(a)).then(function(n){var a=n.data;t.setState({data:a,coordinates:e},function(){r()})}).catch(function(e){t.handleError("darksky",e),o()})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(O,{address:"New York, NY, USA",setCoordinates:this.setLatLng,onError:this.handleError}),r.a.createElement(Ne,{data:this.state.data}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.ffc7a050.chunk.js.map