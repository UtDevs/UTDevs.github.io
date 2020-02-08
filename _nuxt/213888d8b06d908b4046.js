(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{191:function(t,e,r){"use strict";r.r(e);r(15),r(109);var c=r(71),n={name:"ItemsList",data:function(){return{cards:[],searchedCards:[],searchDisabled:!1,searchValue:"",searchBy:"title",numOfItems:0,currentPage:0,pageSize:5,dialog:!1}},head:{link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"}]},components:{SimpleUpload:r(182).a},computed:{searchedItems:function(){return this.searchedCards.length>0?this.searchedCards:this.cards},role:function(){return this.$store.getters.role}},created:function(){var t=this;this.cards=[],this.searchedCards=[];var e=localStorage.getItem("token");c.a.defaults.headers.common.Authorization="Bearer "+e,c.a.get("items?page=0&size="+this.pageSize).then((function(e){t.numOfItems=e.data.count,t.cards=e.data.data.map((function(t){return{title:t.title,subtitle:t.description,src:"https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+t.id+"/picture/picture.jpg",created:t.created.split("T")[0]+" "+t.created.split("T")[1],topics:[t.type,t.side,t.material],id:t.id}}))})).catch((function(t){}))},methods:{getPage:function(option){var t=this;this.cards=[],this.searchedCards=[],"prev"===option?this.currentPage--:this.currentPage++;var e="";this.searchValue?("title"===this.searchBy&&(e="&title="+this.searchValue),c.a.get("items?page="+this.currentPage+"&size="+this.pageSize+e).then((function(e){t.numOfItems=e.data.count,t.searchedCards=e.data.data.map((function(t){return{title:t.title,subtitle:t.description,src:"https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+t.id+"/picture/picture.jpg",created:t.created.split("T")[0]+" "+t.created.split("T")[1],topics:[t.type,t.side,t.material],id:t.id}}))})).catch((function(t){}))):c.a.get("items?page="+this.currentPage+"&size="+this.pageSize).then((function(e){t.numOfItems=e.data.count,t.cards=e.data.data.map((function(t){return{title:t.title,subtitle:t.description,src:"https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+t.id+"/picture/picture.jpg",created:t.created.split("T")[0]+" "+t.created.split("T")[1],topics:[t.type,t.side,t.material],id:t.id}}))})).catch((function(t){}))},searchItems:function(){var t=this;this.cards=[],this.searchedCards=[],this.currentPage=0,this.searchDisabled=!0;var e="items";"title"===this.searchBy&&(e+="?title="),c.a.get(e+this.searchValue+"&page="+this.currentPage+"&size="+this.pageSize).then((function(e){t.numOfItems=e.data.count,t.searchedCards=e.data.data.map((function(t){return{title:t.title,subtitle:t.description,src:"https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+t.id+"/picture/picture.jpg",created:t.created.split("T")[0]+" "+t.created.split("T")[1],topics:[t.type,t.side,t.material],id:t.id}}))})).catch((function(t){})).finally((function(){t.searchDisabled=!1}))}}},l=r(12),o={name:"Topics",created:function(){},data:function(){return{}},components:{ItemsList:Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[r("h4",{staticClass:"display-1 font-weight-medium",staticStyle:{"text-align":"center"}},[t._v("Uploaded Items")]),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:"",md5:"",lg4:""}},[r("v-text-field",{attrs:{color:"primary",label:"Search...","append-icon":"search"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-btn",{staticStyle:{"margin-top":"10px"},attrs:{color:"primary",dark:"",disabled:t.searchDisabled||!t.searchValue},on:{click:t.searchItems}},[t._v("Search")])],1),t._v(" "),r("v-spacer"),t._v(" "),"ADMIN"!==t.role&&"TECHNICIAN"!==t.role?r("v-btn",{staticStyle:{"margin-top":"20px"},attrs:{color:"primary",dark:""},on:{click:function(e){return t.$router.push("uploadItem")}}},[t._v("Upload New Item")]):t._e()],1),t._v(" "),t._l(t.searchedItems,(function(e){return[r("v-layout",{key:e.id,attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{attrs:{"elevation-3":""}},[r("v-container",{attrs:{fluid:"","grid-list-lg":""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{staticStyle:{cursor:"pointer"},attrs:{xs2:""},on:{click:function(r){return t.$router.push("/uploadedItems/"+e.id)}}},[r("v-img",{attrs:{src:e.src,contain:""},on:{error:function(t){e.src="https://s3.eu-central-1.amazonaws.com/q-communicator/default_images/item.png"}}})],1),t._v(" "),r("v-flex",{attrs:{xs10:""}},[r("div",[r("div",{staticClass:"title",staticStyle:{cursor:"pointer"},on:{click:function(r){return t.$router.push("/uploadedItems/"+e.id)}}},[t._v("\n                    "+t._s(e.title)+"\n                    "),t._v(" "),r("span",{staticClass:"caption grey--text",staticStyle:{float:"right","margin-top":"5px"}},[t._v(t._s(e.created))])]),t._v(" "),r("div",{staticClass:"body-1"},[e.subtitle.length>140?r("span",{staticClass:"grey--text"},[t._v("\n                      "+t._s(e.subtitle.substring(0,140))+"...   \n                      "),r("a",{attrs:{href:"#"}},[t._v("read more")])]):r("span",{staticClass:"grey--text"},[t._v(t._s(e.subtitle)+"   ")])]),t._v(" "),r("div",[e.topics&&e.topics.length>0?r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticStyle:{"margin-left":"-15px"},attrs:{xs12:""}},[t._l(e.topics,(function(e,c){return[r("span",{key:c},[r("a",{attrs:{href:"#"}},[t._v(t._s(e))]),t._v("  \n                            ")])]}))],2)],1)],1):t._e()],1)])])],1)],1)],1)],1)],1)]})),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",dark:"",disabled:this.currentPage<1||0===this.numOfItems},on:{click:function(e){return t.getPage("prev")}}},[t._v("Previous")]),t._v(" "),r("v-btn",{attrs:{color:"primary",dark:"",disabled:this.currentPage>=Math.ceil(this.numOfItems/this.pageSize)-1||0===this.numOfItems},on:{click:function(e){return t.getPage("next")}}},[t._v("Next")])],1)],2)}),[],!1,null,null,null).exports}},d=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{column:""}},[e("v-flex",{attrs:{xs12:"",sm6:""}},[e("v-card",[e("Items-List")],1)],1)],1)}),[],!1,null,"4681114d",null);e.default=d.exports}}]);