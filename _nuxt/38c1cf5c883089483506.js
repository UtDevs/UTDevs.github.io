(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{180:function(e,t,o){var content=o(190);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(38).default)("5b901cce",content,!0,{sourceMap:!1})},189:function(e,t,o){"use strict";var r=o(180);o.n(r).a},190:function(e,t,o){(e.exports=o(37)(!1)).push([e.i,".center[data-v-ed6df2f8]{position:absolute;top:50%;left:50%;margin-top:-50px;margin-left:-50px;width:100px;height:100px}",""])},206:function(e,t,o){"use strict";o.r(t);o(75),o(13);var r=o(56),n=o.n(r),c={layout:"landing",beforeCreate:function(){var e=this,t=new URL(window.location.href),code=t.searchParams.get("code"),o=t.searchParams.get("state");code&&o&&n.a.post("https://qcommunicator.herokuapp.com/users/login/social",{auth_code:code,social_media:o}).then((function(t){var o=t.headers.authorization.split(" ")[1];localStorage.setItem("token",o),localStorage.setItem("role",t.headers.role),localStorage.setItem("userId",t.headers.user_id),localStorage.setItem("picture",t.data.picture),e.$store.commit("setData",{token:o,userId:t.headers.user_id,role:t.headers.role}),e.$router.push("/home")})).catch((function(t){console.log(t),alert("Failed to login"),e.$router.push("/")})).finally((function(){}))}},l=(o(189),o(9)),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-center center"},[t("v-progress-circular",{attrs:{size:120,color:"primary",indeterminate:""}},[this._v("Authenticating")])],1)}),[],!1,null,"ed6df2f8",null);t.default=component.exports}}]);