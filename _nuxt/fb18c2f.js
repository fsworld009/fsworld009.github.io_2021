(window.webpackJsonp=window.webpackJsonp||[]).push([[26,2,3,4],{315:function(t,e,n){var content=n(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("1d3c57aa",content,!0,{sourceMap:!1})},316:function(t,e,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("dc5542b8",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";n.r(e);var o=n(2).default.extend({props:{icon:{type:String,required:!0}}}),r=n(25),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{class:"fa fa-"+t.icon,attrs:{"aria-hidden":"true"}})}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n(315)},319:function(t,e,n){var o=n(40)(!1);o.push([t.i,".back{font-size:20px}",""]),t.exports=o},320:function(t,e,n){"use strict";n.r(e);var o=n(2).default.extend({props:{to:{default:"/menu"}}}),r=(n(318),n(25)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("NuxtLink",{staticClass:"back",attrs:{to:t.to}},[n("FaIcon",{attrs:{icon:"arrow-left"}}),t._v(" Back")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FaIcon:n(317).default})},321:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(31),r=n(71);function c(){Object(o.d)((function(){var t=Object(o.g)();Object(r.a)().viewPage(t)}))}},322:function(t,e,n){"use strict";n(316)},323:function(t,e,n){var o=n(40)(!1);o.push([t.i,".project{text-align:center}.project__description{margin-top:48px;margin-bottom:48px}.project__screenshot{max-width:100%;-o-object-fit:contain;object-fit:contain;margin-top:12px}.project__achievements{text-align:left}.project__achievement{margin-top:12px}.project__link_container{margin-left:18px;text-align:left}.project__link{color:#b2ffff;display:block}.project__title{text-transform:uppercase;color:#ffc1cc}.project__header{text-transform:uppercase;color:#90ee90}",""]),t.exports=o},324:function(t,e,n){"use strict";n.r(e);var o=n(2).default.extend({props:{project:{type:Object,required:!0},id:{type:String,required:!0}}}),r=(n(322),n(25)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project"},[n("h1",{staticClass:"project__title"},[t._v(t._s(t.project.title))]),t._v(" "),n("p",{staticClass:"project__description"},[t._v(t._s(t.project.description))]),t._v(" "),n("h2",{staticClass:"project__header"},[t._v("ACHIEVEMENTS")]),t._v(" "),n("ul",{staticClass:"project__achievements"},t._l(t.project.achievements,(function(e,o){return n("li",{key:"a"+o,staticClass:"project__achievement"},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),t.project.screenshots.length?n("h2",{staticClass:"project__header"},[t._v("SCREENSHOTS")]):t._e(),t._v(" "),t._l(t.project.screenshots,(function(s,e){return n("p",{key:"s"+e},[n("img",{staticClass:"project__screenshot",attrs:{src:"/screenshots/"+t.id+"/"+String(e+1).padStart(3,"0")+".png",alt:s}}),t._v(" "),n("br"),t._v("\n    "+t._s(s)+"\n  ")])})),t._v(" "),t.project.links.length?n("h2",{staticClass:"project__header"},[t._v("LINKS")]):t._e(),t._v(" "),t._l(t.project.links,(function(e,o){return n("h4",{key:"p"+o,staticClass:"project__link_container"},[n("a",{staticClass:"project__link",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.name))])])})),t._v(" "),n("div",{staticClass:"project__back"},[n("Back",{attrs:{to:"/projects"}})],1)],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Back:n(320).default})},359:function(t){t.exports=JSON.parse('{"title":"OBS Studio with projector patches","description":"Custom OBS Studio build with additional projector features I personally want, while related PR are under PR review.","achievements":["Setup build environment for OBS Studio on Windows and Linux","Implemented new features based on existing open PRs","Implemented brand new dialog window for the new feature with QT6","Sent PRs to OBS Studio project"],"screenshots":["Context menu with adjust size options","Brand new Resize Window dialog, implemented with QT6"],"links":[{"name":"Download binaries","url":"https://github.com/fsworld009/obs-studio/releases/"},{"name":"Project GitHub","url":"https://github.com/fsworld009/obs-studio/"},{"name":"PR: UI: Support drag and move projector when clicking inside the window #8138","url":"https://github.com/obsproject/obs-studio/pull/8138"},{"name":"PR: UI: Resize projector window by resolution or scale #7851","url":"https://github.com/obsproject/obs-studio/pull/7851"}]}')},388:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(31),c=n(321),l=n(359),d=o.default.extend({setup:function(){return Object(c.a)(),{project:Object(r.e)(l)}}}),_=n(25),component=Object(_.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ProjectPage",{attrs:{project:t.project,id:"obsstudio-projector-patches"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectPage:n(324).default})}}]);