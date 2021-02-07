(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{230:function(e,t,r){"use strict";r.r(t);r(41),r(39),r(40);var o=r(28),n={data:function(){return{dialog:!1,search:"",headers:[{text:"ID",align:"left",value:"id"},{text:"Name",align:"left",value:"role"},{text:"Permissions",align:"left",value:"permissions"},{text:"Actions",align:"left",value:"name",sortable:!1}],usersRoles:[],permissions:[],editedIndex:-1,editedItem:{id:0,permissions:[],role:""},defaultItem:{id:0,permissions:[],role:""},permissionGroup:{}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Role":"Edit role"},role:function(){return this.$store.getters.role}},watch:{dialog:function(e){e||this.close()}},created:function(){var e=localStorage.getItem("permissions");""!=e&&(this.permissionGroup=JSON.parse(e)),this.isPermissionAllowed("GET_ROLES")||this.$router.push("/home"),this.initialize(),this.getPermissions()},methods:{isPermissionAllowed:function(e){if(this.permissionGroup!={})for(var t=this.permissionGroup.permissions,r=0;r<t.length;r++){if(t[r].name.includes(e))return!0}return!1},getPermissionsText:function(e){var t="";return e.forEach((function(element){""!=t&&(t+=", "),t+=element.name})),t.length>50?t.slice(0,50)+"...":t},initialize:function(){var e=this;this.usersRoles=[];var t=localStorage.getItem("token");o.a.defaults.headers.common.Authorization="Bearer "+t,o.a.get("roles").then((function(t){e.usersRoles=t.data.data})).catch((function(e){}))},getPermissions:function(){var e=this;o.a.get("permissions").then((function(t){e.permissions=t.data})).catch((function(e){}))},editItem:function(e){this.editedIndex=this.usersRoles.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this,r=this.usersRoles.indexOf(e);confirm("Are you sure you want to delete this item?")&&o.a.delete("roles/"+e.id).then((function(){t.usersRoles.splice(r,1)}))},close:function(){this.dialog=!1},save:function(){var e=this;this.editedIndex>-1?o.a.put("roles/"+this.editedItem.id,{id:this.editedItem.id,role:this.editedItem.role,permissions:this.permissions.filter((function(t){return e.editedItem.permissions.includes(t.id)}))}).then((function(t){Object.assign(e.usersRoles[e.editedIndex],t.data)})):o.a.post("roles",{id:0,role:this.editedItem.role,permissions:this.permissions.filter((function(t){return e.editedItem.permissions.includes(t.id)}))}).then((function(t){e.initialize()})),this.close()}}},l=r(9),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-toolbar",{attrs:{flat:"",color:"white"}},[r("v-toolbar-title",[e._v("Users Roles Table")]),e._v(" "),r("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-toolbar",{attrs:{flat:"",color:"white"}},[r("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([e.isPermissionAllowed("CREATE_ROLE")?{key:"activator",fn:function(t){var o=t.on;return[r("v-spacer"),e._v(" "),r("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},o),[e._v("Add Role")])]}}:null],null,!0),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),r("v-card-text",[r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"Role name"},model:{value:e.editedItem.role,callback:function(t){e.$set(e.editedItem,"role",t)},expression:"editedItem.role"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-select",{attrs:{multiple:"",chips:"","item-text":"name","item-value":"id",items:e.permissions,label:"Permissions"},model:{value:e.editedItem.permissions,callback:function(t){e.$set(e.editedItem,"permissions",t)},expression:"editedItem.permissions"}})],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",flat:""},on:{click:e.close}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{color:"primary",flat:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.usersRoles,search:e.search},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.id))]),e._v(" "),r("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.role))]),e._v(" "),r("td",{staticClass:"text-xs-left"},[e._v("\n        "+e._s(e.getPermissionsText(t.item.permissions))+"\n      ")]),e._v(" "),e.isPermissionAllowed("UPDATE_ROLE")||e.isPermissionAllowed("DELETE_ROLE")?r("td",{staticClass:"text-xs-left"},[e.isPermissionAllowed("UPDATE_ROLE")?r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(r){return e.editItem(t.item)}}},[e._v("edit")]):e._e(),e._v(" "),e.isPermissionAllowed("DELETE_ROLE")?r("v-icon",{attrs:{small:""},on:{click:function(r){return e.deleteItem(t.item)}}},[e._v("delete")]):e._e()],1):e._e()]}},{key:"no-data",fn:function(){return[r("v-alert",{attrs:{value:!0,color:"#FF5252",icon:"warning"}},[e._v("There is no users roles yet in the system")])]},proxy:!0},{key:"no-results",fn:function(){return[r("v-alert",{attrs:{value:!0,color:"error",icon:"info"}},[e._v('Your search for "'+e._s(e.search)+'" found no results.')])]},proxy:!0}])})],1)}),[],!1,null,"0ffd6d79",null);t.default=component.exports}}]);