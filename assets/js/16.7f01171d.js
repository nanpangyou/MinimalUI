(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{315:function(t,a,n){},316:function(t,a,n){"use strict";n(315)},317:function(t,a,n){"use strict";n(167);var e={name:"m-button",components:{mIcon:n(312).a},props:{name:{type:String},iconPosition:{tpye:String,default:"left",validator:function(t){return-1!==["left","right"].indexOf(t)}},loading:{}}},s=(n(316),n(43)),i=Object(s.a)(e,(function(){var t,a=this,n=a.$createElement,e=a._self._c||n;return e("button",{staticClass:"m-button",class:(t={},t["icon-"+a.iconPosition]=!0,t),on:{click:function(t){return a.$emit("click")}}},[a.loading?e("m-icon",{attrs:{name:"loading"}}):a._e(),a._v(" "),a.loading?a._e():e("m-icon",{attrs:{name:a.name}}),a._v(" "),e("div",{staticClass:"button-text"},[a._t("default")],2)],1)}),[],!1,null,"67626d51",null);a.a=i.exports},455:function(t,a,n){"use strict";n.r(a);var e=n(317),s=n(312),i=n(380),o=n(381),m=n(382),c=n(383),r=n(384),l={components:{"m-button":e.a,"m-icon":s.a,"m-tabs":i.a,"m-tabs-head":o.a,"m-tabs-item":c.a,"m-tabs-body":m.a,"m-tabs-pane":r.a},data:function(){return{selectedTab:"3"}},mounted:function(){}},u=n(43),b=Object(u.a)(l,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"box",staticStyle:{padding:"3em",width:"800px"}},[n("m-tabs",{attrs:{selected:t.selectedTab}},[n("m-tabs-head",[n("template",{slot:"actions"},[n("m-button",[t._v("action")])],1),t._v(" "),n("m-tabs-item",{attrs:{name:"1"}},[n("m-icon",{attrs:{name:"setting"}}),t._v("1")],1),t._v(" "),n("m-tabs-item",{attrs:{name:"2",disabled:""}},[t._v("2")]),t._v(" "),n("m-tabs-item",{attrs:{name:"3"}},[t._v("3")])],2),t._v(" "),n("m-tabs-body",[n("m-tabs-pane",{attrs:{name:"1"}},[t._v("pane1")]),t._v(" "),n("m-tabs-pane",{attrs:{name:"2"}},[t._v("pane2")]),t._v(" "),n("m-tabs-pane",{attrs:{name:"3"}},[t._v("pane3")])],1)],1)],1)])}),[],!1,null,"239a2a6c",null);a.default=b.exports}}]);