(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{185:function(e,t,o){var content=o(195);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(27).default)("196fadbd",content,!0,{sourceMap:!1})},194:function(e,t,o){"use strict";var r=o(185);o.n(r).a},195:function(e,t,o){(e.exports=o(26)(!1)).push([e.i,".center[data-v-60addb6b]{position:absolute;top:50%;left:50%;margin-top:-50px;margin-left:-50px;width:100px;height:100px}",""])},211:function(e,t,o){"use strict";o.r(t);o(75),o(13);var r=o(56),n=o.n(r),l={layout:"landing",beforeCreate:function(){var e=this,t=new URL(window.location.href),code=t.searchParams.get("code"),o=t.searchParams.get("state");code&&o&&n.a.post("https://qcommunicator.herokuapp.com/users/login/social",{auth_code:code,social_media:o}).then((function(t){var o=t.headers.authorization.split(" ")[1];localStorage.setItem("token",o),localStorage.setItem("role",t.headers.role),localStorage.setItem("userId",t.headers.user_id),localStorage.setItem("picture",t.data.picture),e.$store.commit("setData",{token:o,userId:t.headers.user_id,role:t.headers.role}),t.firstTime?e.dialog=!0:e.$router.push("/home")})).catch((function(t){console.log(t),alert("Failed to login"),e.$router.push("/")})).finally((function(){}))},data:function(){return{showRoleInput:!1,role:"Student",items:[{name:"Student",value:"STUDENT"},{name:"Dentist",value:"DENTIST"},{name:"Dental Technician",value:"DENTAL_TECHNICIAN"}]}},methods:{selectUserRole:function(){var e=this,t=localStorage.getItem("token");n.a.defaults.headers.common.Authorization="Bearer "+t,n.a.put("users/"+localStorage.getItem("userId"),{role:this.role}).then((function(t){e.$router.push("/home")})).catch((function(){alert("Error, please try again later")}))}}},c=(o(194),o(9)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-center center"},[e.showRoleInput?e._e():o("v-progress-circular",{attrs:{size:120,color:"primary",indeterminate:""}},[e._v("Authenticating")]),e._v(" "),e.showRoleInput?o("div",{staticStyle:{width:"300px"}},[o("v-select",{attrs:{items:e.items,"item-text":"name","item-value":"value",label:"Are u?",outline:""}}),e._v(" "),o("v-btn",{attrs:{color:"#44a0c7",dark:""},on:{click:e.selectUserRole}},[e._v("Save")])],1):e._e()],1)}),[],!1,null,"60addb6b",null);t.default=component.exports}}]);