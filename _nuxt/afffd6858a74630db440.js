(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{224:function(e,t,r){"use strict";r.r(t);var l=r(28),n={data:function(){return{dialog:!1,search:"",headers:[{text:"ID",align:"left",value:"id"},{text:"Name",align:"left",value:"username"},{text:"Role",align:"left",value:"role"},{text:"Actions",align:"left",value:"name",sortable:!1}],users:[],editedIndex:-1,editedItem:{id:0,username:"",role:""},defaultItem:{id:0,username:"",role:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New User":"Edit User role"},role:function(){return this.$store.getters.role}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){var e=this;this.users=[];var t=localStorage.getItem("token");if(l.a.defaults.headers.common.Authorization="Bearer "+t,"ADMIN"===this.role)l.a.get("users").then((function(t){e.users=t.data})).catch((function(e){}));else if("PROFESSOR"===this.role){this.headers=[{text:"ID",align:"left",value:"id"},{text:"Name",align:"left",value:"username"},{text:"Role",align:"left",value:"role"}];var r=localStorage.getItem("userId");l.a.get("users/professors/"+r+"/students").then((function(t){e.users=t.data})).catch((function(e){}))}},editItem:function(e){this.editedIndex=this.users.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this,r=this.users.indexOf(e);confirm("Are you sure you want to delete this item?")&&l.a.delete("users/"+e.id).then((function(){t.users.splice(r,1)}))},close:function(){this.dialog=!1},save:function(){var e=this;this.editedIndex>-1&&l.a.put("users/"+this.editedItem.id+"/role",{role:this.editedItem.role}).then((function(t){Object.assign(e.users[e.editedIndex],t.data)})),this.close()}}},o=r(9),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return"ADMIN"===e.role||"PROFESSOR"===e.role?r("div",[r("v-toolbar",{attrs:{flat:"",color:"white"}},[r("v-toolbar-title",[e._v("Users Table")]),e._v(" "),r("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),r("v-card-text",[r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-select",{attrs:{items:["ADMIN","EMPLOYEE","STUDENT","DENTIST","PROFESSOR","DENTAL_TECHNICIAN"],label:"Role"},model:{value:e.editedItem.role,callback:function(t){e.$set(e.editedItem,"role",t)},expression:"editedItem.role"}})],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.close}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users,search:e.search},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.id))]),e._v(" "),r("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.username))]),e._v(" "),r("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.role))]),e._v(" "),"ADMIN"===e.role?r("td",{staticClass:"text-xs-left"},[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(r){return e.editItem(t.item)}}},[e._v("edit")]),e._v(" "),r("v-icon",{attrs:{small:""},on:{click:function(r){return e.deleteItem(t.item)}}},[e._v("delete")])],1):e._e()]}},{key:"no-data",fn:function(){return[r("v-alert",{attrs:{value:!0,color:"#FF5252",icon:"warning"}},[e._v("There is no users yet in the system")])]},proxy:!0},{key:"no-results",fn:function(){return[r("v-alert",{attrs:{value:!0,color:"error",icon:"info"}},[e._v('Your search for "'+e._s(e.search)+'" found no results.')])]},proxy:!0}],null,!1,3389332849)})],1):e._e()}),[],!1,null,"307ea0e4",null);t.default=component.exports}}]);