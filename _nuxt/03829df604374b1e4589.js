(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{187:function(t,e,n){var content=n(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("781ff0f2",content,!0,{sourceMap:!1})},200:function(t,e,n){"use strict";var r=n(187);n.n(r).a},201:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,".news-main[data-v-934f0304]{height:326px}.news-main[data-v-934f0304],.news-sub[data-v-934f0304]{background:#414143;border-radius:25px}.news-sub[data-v-934f0304]{height:155px}.news-right-main[data-v-934f0304]{height:326px;background:#05b0a7;background:-webkit-gradient(linear,left bottom,left top,from(#00aea8),to(#45d099));background:linear-gradient(0deg,#00aea8,#45d099);border-radius:25px;margin-top:10px}.news-right-sub[data-v-934f0304]{height:155px;background:#05b0a7;background:-webkit-gradient(linear,left bottom,left top,from(#3bca9c),to(#68e192));background:linear-gradient(0deg,#3bca9c,#68e192);border-radius:25px;margin-bottom:10px}.cardHeight[data-v-934f0304]{height:100%;border-radius:25px;background:transparent;color:#fff}.titleFont[data-v-934f0304]{font-size:20px}@media screen and (max-width:600px){.hideWriting[data-v-934f0304]{display:none}}",""])},216:function(t,e,n){"use strict";n.r(e);n(55),n(56),n(28);var r={layout:"landing",data:function(){return{news:[{title:"Hands on Zirconia with Soprano10",src:"https://scontent.fjrs7-1.fna.fbcdn.net/v/t1.0-9/s960x960/86185326_649612895842936_1336655665749295104_o.jpg?_nc_cat=108&_nc_ohc=1fZ9ubAujmIAX9RSOT3&_nc_ht=scontent.fjrs7-1.fna&_nc_tp=7&oh=acedd21b4d06e178af6217a12c0dd793&oe=5EC8D861",extraSmallflex:12,smallflex:6,largeflex:3,description:"",url:"https://www.facebook.com/events/s/hands-on-zirconia-with-soprano/331381147756526/",show:!1},{title:"مختبرات الاسنان نحو الجودة والتنوع",src:"https://scontent.fjrs7-1.fna.fbcdn.net/v/t1.0-9/85065700_2562586067184732_7286302229709979648_n.jpg?_nc_cat=102&_nc_ohc=-rsu_cR4JikAX9i-Hnf&_nc_ht=scontent.fjrs7-1.fna&oh=edf971a63783db6d1519e092ad8c3f67&oe=5EC4E25B",extraSmallflex:12,smallflex:6,largeflex:3,description:"",url:"https://www.facebook.com/events/s/%D9%85%D8%AE%D8%AA%D8%A8%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D8%B3%D9%86%D8%A7%D9%86-%D9%86%D8%AD%D9%88-%D8%A7%D9%84%D8%AC%D9%88%D8%AF%D8%A9-%D9%88%D8%A7%D9%84/781722795652821/",show:!1},{title:"Advance hands on veneers course",src:"https://scontent.fjrs7-1.fna.fbcdn.net/v/t1.0-9/78145206_590244715113088_4253537775174811648_o.jpg?_nc_cat=107&_nc_ohc=h1U9k4F0xl4AX8YKZxE&_nc_ht=scontent.fjrs7-1.fna&oh=d08f508a30e59dc662d582fd8558a896&oe=5EC63563",extraSmallflex:12,smallflex:6,largeflex:3,description:"",url:"https://www.facebook.com/events/2542380789182185/",show:!1},{title:"Advance layering course",src:"https://scontent.fjrs7-1.fna.fbcdn.net/v/t1.0-9/p960x960/80499362_597949711009255_4825350187452989440_o.jpg?_nc_cat=108&_nc_ohc=6_aOEk3rNkkAX_Oxc-S&_nc_ht=scontent.fjrs7-1.fna&_nc_tp=6&oh=0a7179120dde384f82979474b8133800&oe=5EC4A028",extraSmallflex:12,smallflex:6,largeflex:3,description:"",url:"https://www.facebook.com/events/446186732683316/",show:!1}],searchInput:!1,searchValue:"",selectedNews:0}},computed:{searchedNews:function(){var t=this;if(""===this.searchValue)return this.news;var e=[];return this.news.forEach((function(element){(element.title.toLowerCase().includes(t.searchValue.toLowerCase())||element.description.toLowerCase().includes(t.searchValue.toLowerCase()))&&e.push(element)})),e}},created:function(){},methods:{explore:function(t){window.open(t)}}},c=(n(200),n(9)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"news"},[n("v-container",{attrs:{"grid-list-lg":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[t.$vuetify.breakpoint.mdAndUp?n("v-flex",{attrs:{md1:"",lg2:""}}):t._e(),t._v(" "),n("v-flex",{attrs:{xs12:"",sm7:"",md6:"",lg5:""}},[n("div",{staticClass:"news-main"},[n("v-card",{staticClass:"cardHeight"},[n("v-img",{attrs:{src:t.news[t.selectedNews].src,height:"70%",position:"top"}}),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"titleFont"},[t._v(t._s(t.news[t.selectedNews].title))]),t._v(" "),t.news[t.selectedNews].description?n("span",{staticClass:"grey--text"},[t._v(t._s(t.news[t.selectedNews].description.substring(0,50))+"...")]):t._e()])]),t._v(" "),n("v-card-actions",{staticStyle:{position:"absolute",bottom:"1px",right:"1px"}},[n("v-btn",{attrs:{flat:"",color:"white"},on:{click:function(e){return t.explore(t.news[t.selectedNews].url)}}},[t._v("Explore")])],1)],1)],1),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},t._l(2,(function(i){return n("v-flex",{key:i,attrs:{xs6:""}},[n("div",{staticClass:"news-sub"},[n("v-card",{staticClass:"cardHeight",staticStyle:{cursor:"pointer"},on:{click:function(e){t.selectedNews=i}}},[n("v-img",{attrs:{src:t.news[i].src,height:"100%",position:"top"}})],1)],1)])})),1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",sm5:"",md4:"",lg3:""}},[n("div",{staticClass:"news-right-sub"},[n("v-card",{staticClass:"cardHeight",staticStyle:{cursor:"pointer"},on:{click:function(e){t.selectedNews=0}}},[n("v-img",{attrs:{src:t.news[0].src,height:"100%",position:"top"}})],1)],1),t._v(" "),n("div",{staticClass:"news-right-main"},[n("v-card",{staticClass:"cardHeight",staticStyle:{cursor:"pointer"},on:{click:function(e){t.selectedNews=3}}},[n("v-img",{attrs:{src:t.news[3].src,height:"100%",position:"top"}})],1)],1)]),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("v-flex",{attrs:{md1:"",lg2:""}}):t._e()],1)],1)],1)])}),[],!1,null,"934f0304",null);e.default=component.exports}}]);