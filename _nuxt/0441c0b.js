(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{315:function(t,e,r){var content=r(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("1d3c57aa",content,!0,{sourceMap:!1})},316:function(t,e,r){var content=r(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("dc5542b8",content,!0,{sourceMap:!1})},317:function(t,e,r){"use strict";r.r(e);var c=r(2).default.extend({props:{icon:{type:String,required:!0}}}),n=r(25),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{class:"fa fa-"+t.icon,attrs:{"aria-hidden":"true"}})}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,r){"use strict";r(315)},319:function(t,e,r){var c=r(40)(!1);c.push([t.i,".back{font-size:20px}",""]),t.exports=c},320:function(t,e,r){"use strict";r.r(e);var c=r(2).default.extend({props:{to:{default:"/menu"}}}),n=(r(318),r(25)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{staticClass:"back",attrs:{to:t.to}},[r("FaIcon",{attrs:{icon:"arrow-left"}}),t._v(" Back")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FaIcon:r(317).default})},322:function(t,e,r){"use strict";r(316)},323:function(t,e,r){var c=r(40)(!1);c.push([t.i,".project{text-align:center}.project__description{margin-top:48px;margin-bottom:48px}.project__screenshot{max-width:100%;-o-object-fit:contain;object-fit:contain;margin-top:12px}.project__achievements{text-align:left}.project__achievement{margin-top:12px}.project__link_container{margin-left:18px;text-align:left}.project__link{color:#b2ffff;display:block}.project__title{text-transform:uppercase;color:#ffc1cc}.project__header{text-transform:uppercase;color:#90ee90}",""]),t.exports=c},324:function(t,e,r){"use strict";r.r(e);var c=r(2).default.extend({props:{project:{type:Object,required:!0},id:{type:String,required:!0}}}),n=(r(322),r(25)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project"},[r("h1",{staticClass:"project__title"},[t._v(t._s(t.project.title))]),t._v(" "),r("p",{staticClass:"project__description"},[t._v(t._s(t.project.description))]),t._v(" "),r("h2",{staticClass:"project__header"},[t._v("ACHIEVEMENTS")]),t._v(" "),r("ul",{staticClass:"project__achievements"},t._l(t.project.achievements,(function(e,c){return r("li",{key:"a"+c,staticClass:"project__achievement"},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),t.project.screenshots.length?r("h2",{staticClass:"project__header"},[t._v("SCREENSHOTS")]):t._e(),t._v(" "),t._l(t.project.screenshots,(function(s,e){return r("p",{key:"s"+e},[r("img",{staticClass:"project__screenshot",attrs:{src:"/screenshots/"+t.id+"/"+String(e+1).padStart(3,"0")+".png",alt:s}}),t._v(" "),r("br"),t._v("\n    "+t._s(s)+"\n  ")])})),t._v(" "),t.project.links.length?r("h2",{staticClass:"project__header"},[t._v("LINKS")]):t._e(),t._v(" "),t._l(t.project.links,(function(e,c){return r("h4",{key:"p"+c,staticClass:"project__link_container"},[r("a",{staticClass:"project__link",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.name))])])})),t._v(" "),r("div",{staticClass:"project__back"},[r("Back",{attrs:{to:"/projects"}})],1)],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Back:r(320).default})}}]);