(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,3,4],{315:function(t,e,n){var content=n(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("1d3c57aa",content,!0,{sourceMap:!1})},316:function(t,e,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("dc5542b8",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";n.r(e);var r=n(2).default.extend({props:{icon:{type:String,required:!0}}}),c=n(25),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{class:"fa fa-"+t.icon,attrs:{"aria-hidden":"true"}})}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n(315)},319:function(t,e,n){var r=n(40)(!1);r.push([t.i,".back{font-size:20px}",""]),t.exports=r},320:function(t,e,n){"use strict";n.r(e);var r=n(2).default.extend({props:{to:{default:"/menu"}}}),c=(n(318),n(25)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("NuxtLink",{staticClass:"back",attrs:{to:t.to}},[n("FaIcon",{attrs:{icon:"arrow-left"}}),t._v(" Back")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FaIcon:n(317).default})},321:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(31),c=n(71);function o(){Object(r.d)((function(){var t=Object(r.g)();Object(c.a)().viewPage(t)}))}},322:function(t,e,n){"use strict";n(316)},323:function(t,e,n){var r=n(40)(!1);r.push([t.i,".project{text-align:center}.project__description{margin-top:48px;margin-bottom:48px}.project__screenshot{max-width:100%;-o-object-fit:contain;object-fit:contain;margin-top:12px}.project__achievements{text-align:left}.project__achievement{margin-top:12px}.project__link_container{margin-left:18px;text-align:left}.project__link{color:#b2ffff;display:block}.project__title{text-transform:uppercase;color:#ffc1cc}.project__header{text-transform:uppercase;color:#90ee90}",""]),t.exports=r},324:function(t,e,n){"use strict";n.r(e);var r=n(2).default.extend({props:{project:{type:Object,required:!0},id:{type:String,required:!0}}}),c=(n(322),n(25)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project"},[n("h1",{staticClass:"project__title"},[t._v(t._s(t.project.title))]),t._v(" "),n("p",{staticClass:"project__description"},[t._v(t._s(t.project.description))]),t._v(" "),n("h2",{staticClass:"project__header"},[t._v("ACHIEVEMENTS")]),t._v(" "),n("ul",{staticClass:"project__achievements"},t._l(t.project.achievements,(function(e,r){return n("li",{key:"a"+r,staticClass:"project__achievement"},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),t.project.screenshots.length?n("h2",{staticClass:"project__header"},[t._v("SCREENSHOTS")]):t._e(),t._v(" "),t._l(t.project.screenshots,(function(s,e){return n("p",{key:"s"+e},[n("img",{staticClass:"project__screenshot",attrs:{src:"/screenshots/"+t.id+"/"+String(e+1).padStart(3,"0")+".png",alt:s}}),t._v(" "),n("br"),t._v("\n    "+t._s(s)+"\n  ")])})),t._v(" "),t.project.links.length?n("h2",{staticClass:"project__header"},[t._v("LINKS")]):t._e(),t._v(" "),t._l(t.project.links,(function(e,r){return n("h4",{key:"p"+r,staticClass:"project__link_container"},[n("a",{staticClass:"project__link",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.name))])])})),t._v(" "),n("div",{staticClass:"project__back"},[n("Back",{attrs:{to:"/projects"}})],1)],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Back:n(320).default})},349:function(t){t.exports=JSON.parse('{"title":"(Team) Spaces and Equipments Rental Management System","description":"A relational database design and implementation for renting spaces and equipments in the university.","achievements":["Designed an entity-relationship (ER) model from real life example","Converted the ER model to a relational model","Wrote SQL queries with Oracle SQLPlus","Implemented simple user interface to interact with Database with php"],"screenshots":["ER Model","Converted relational model","Example SQL usages"],"links":[]}')},378:function(t,e,n){"use strict";n.r(e);var r=n(2),c=n(31),o=n(321),l=n(349),_=r.default.extend({setup:function(){return Object(o.a)(),{project:Object(c.e)(l)}}}),f=n(25),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ProjectPage",{attrs:{project:t.project,id:"db_rentalsystem"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectPage:n(324).default})}}]);