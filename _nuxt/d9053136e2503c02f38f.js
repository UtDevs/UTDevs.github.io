(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{186:function(e,t,r){var content=r(199);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("7ebe56a4",content,!0,{sourceMap:!1})},193:function(e,t,r){"use strict";function o(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(t,"a",(function(){return o}))},197:function(e,t){e.exports=function(data,e,t,r){var o=new Blob(void 0!==r?[r,data]:[data],{type:t||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,e);else{var n=window.URL.createObjectURL(o),l=document.createElement("a");l.style.display="none",l.href=n,l.setAttribute("download",e),void 0===l.download&&l.setAttribute("target","_blank"),document.body.appendChild(l),l.click(),setTimeout((function(){document.body.removeChild(l),window.URL.revokeObjectURL(n)}),0)}}},198:function(e,t,r){"use strict";var o=r(186);r.n(o).a},199:function(e,t,r){(e.exports=r(26)(!1)).push([e.i,".emp-profile[data-v-1093331f]{padding:3%;margin-top:3%;margin-bottom:3%;border-radius:.5rem;background:#fff}.profile-img[data-v-1093331f]{text-align:center}.profile-img img[data-v-1093331f]{width:70%;height:100%}.profile-img .file[data-v-1093331f]{position:relative;overflow:hidden;margin-top:-20%;width:70%;border:none;border-radius:0;font-size:15px;background:rgba(33,37,41,.72157)}.profile-img .file input[data-v-1093331f]{position:absolute;opacity:0;right:0;top:0}.profile-head h5[data-v-1093331f]{color:#333}.profile-head h6[data-v-1093331f]{color:#0062cc}.profile-edit-btn[data-v-1093331f]{border:none;border-radius:1.5rem;width:70%;padding:2%;font-weight:600;color:#fff;background-color:#1976d2;cursor:pointer}.proile-rating[data-v-1093331f]{font-size:12px;color:#818182;margin-top:5%}.proile-rating span[data-v-1093331f]{color:#495057;font-size:15px;font-weight:600}.profile-head .nav-tabs[data-v-1093331f]{margin-bottom:5%}.profile-head .nav-tabs .nav-link[data-v-1093331f]{font-weight:600;border:none}.profile-head .nav-tabs .nav-link.active[data-v-1093331f]{border:none;border-bottom:2px solid #0062cc}.profile-work-padding[data-v-1093331f]{padding-left:14%}.profile-work[data-v-1093331f]{margin-top:-4%}.profile-work p[data-v-1093331f]{font-size:12px;color:#818182;font-weight:600;margin-top:10%}.profile-work a[data-v-1093331f]{text-decoration:none;color:#495057;font-weight:600;font-size:14px}.profile-work ul[data-v-1093331f]{list-style:none}.profile-tab label[data-v-1093331f],.profile-tab p[data-v-1093331f]{font-weight:600}.profile-tab p[data-v-1093331f]{color:#0062cc}input[data-v-1093331f]{outline-width:0}",""])},215:function(e,t,r){"use strict";r.r(t);var o=r(193),n=(r(29),r(13),r(55),r(57)),l=r.n(n),d=r(28),c=(r(197),{name:"home",head:{},data:function(){return{savePressed:!1,showUpdateAlert:!1,updateStatus:"error",updateMsg:"Failed to update the information, please try again later",userInfo:[],edit:!1,smallScreen:!1,profileImg:"https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/avatar/picture.jpg",skills:["Detail Oriented","Compassion"],newSkill:"",uploadedImage:"",message:"",error:!1,tabs:[{title:"About",fields:["Firstname","Lastname","Gender","Email","Phone","Profession","Address"],values:[]}]}},computed:{},methods:{errorOnProfileImage:function(){var e=localStorage.getItem("picture");this.profileImg=e||"https://s3.eu-central-1.amazonaws.com/q-communicator/default_images/avatar.svg"},handleResize:function(){window.innerWidth<992?this.smallScreen=!0:this.smallScreen=!1},addSkill:function(){""!=this.newSkill&&(this.skills.push(this.newSkill),this.newSkill="")},selectFile:function(){var e=this.$refs.uploadedImage.files[0],t=e.size>5e6;console.log(e.type);var r=["image/png","image/jpg","image/jpeg"].includes(e.type);if(r&&!t){var o=new FileReader;o.onload=function(e){$("#profileImage").attr("src",e.target.result)},o.readAsDataURL(e),this.uploadedImage=e,this.error=!1,this.message=""}else this.error=!0,this.message=t&&r?"Too large. Max size is ".concat(5e3," Kb"):"Only images is allowed"},uploadProfileImage:function(){var e=this;this.uploadedImage="",l.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/avatar/picture.jpg",this.uploadedImage,{headers:{"Content-Type":"binary"}}).then((function(t){e.updateStatus="success",e.updateMsg="The profile image has been updated successfully",e.showUpdateAlert=!0,setTimeout((function(){e.showUpdateAlert=!1}),3e3)})).catch((function(t){e.updateStatus="error",e.updateMsg="Failed to update the profile image, please try again later",e.showUpdateAlert=!0,setTimeout((function(){e.showUpdateAlert=!1}),3e3)}))},editProfile:function(){var e=this,t=localStorage.getItem("userId"),r=localStorage.getItem("token");d.a.defaults.headers.common.Authorization="Bearer "+r,this.savePressed=!0,d.a.put("users/"+t,{first_name:this.tabs[0].values[0],last_name:this.tabs[0].values[1],gender:this.tabs[0].values[2],email:this.tabs[0].values[3],phone:this.tabs[0].values[4],profession:this.tabs[0].values[5],address:this.tabs[0].values[6]}).then((function(t){e.userInfo=[t.data.first_name,t.data.last_name,t.data.gender,t.data.email,t.data.phone,t.data.profession,t.data.address],e.tabs[0].values=Object(o.a)(e.userInfo),e.edit=!1,e.updateStatus="success",e.updateMsg="The information has been updated successfully",e.showUpdateAlert=!0,setTimeout((function(){e.showUpdateAlert=!1}),3e3)})).catch((function(){e.tabs[0].values=Object(o.a)(e.userInfo),e.edit=!1,e.updateStatus="error",e.updateMsg="Failed to update the information, please try again later",e.showUpdateAlert=!0,setTimeout((function(){e.showUpdateAlert=!1}),3e3)})).finally((function(){e.savePressed=!1}))}},created:function(){var e=this,t=localStorage.getItem("token");d.a.defaults.headers.common.Authorization="Bearer "+t,d.a.get("users/my-info").then((function(t){e.userInfo=[t.data.first_name,t.data.last_name,t.data.gender,t.data.email,t.data.phone,t.data.profession,t.data.address],e.tabs[0].values=Object(o.a)(e.userInfo),localStorage.setItem("userId",t.data.id)})),window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)}}),f=(r(198),r(9)),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container emp-profile"},[r("v-alert",{attrs:{value:e.showUpdateAlert,type:e.updateStatus,transition:"scale-transition"}},[e._v(e._s(e.updateMsg))]),e._v(" "),r("br"),e._v(" "),r("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.uploadProfileImage(t)}}},[r("v-alert",{attrs:{value:e.error,type:"error"}},[e._v(e._s(e.message))]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 col-md-6 col-lg-4"},[r("div",{staticClass:"profile-img"},[r("img",{attrs:{src:e.profileImg,alt:"",id:"profileImage"},on:{error:e.errorOnProfileImage}}),e._v(" "),r("div",{staticClass:"file btn btn-lg btn-primary"},[e._v("\n              Change Photo\n              "),r("input",{ref:"uploadedImage",staticStyle:{cursor:"pointer"},attrs:{type:"file",name:"file"},on:{change:e.selectFile}})]),e._v(" "),""!==e.uploadedImage?r("input",{staticClass:"profile-edit-btn",attrs:{type:"submit",name:"saveImage",value:"Save profile image"}}):e._e(),e._v(" "),r("div",{class:{"profile-work":!0,"profile-work-padding":!e.smallScreen,"text-left":!e.smallScreen}})]),e._v(" "),r("div",{staticStyle:{"margin-top":"20px"}},[e.smallScreen?r("h5",{staticStyle:{"text-align":"center"}},[e._v(e._s(e.tabs[0].values[0])+" "+e._s(e.tabs[0].values[1]))]):e._e(),e._v(" "),e.smallScreen?r("h6",{staticStyle:{"text-align":"center"}},[e._v(e._s(e.tabs[0].values[5]))]):e._e()])]),e._v(" "),r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"profile-head"},[e.smallScreen?e._e():r("span",[r("h5",[e._v(e._s(e.tabs[0].values[0])+" "+e._s(e.tabs[0].values[1]))]),e._v(" "),r("h6",[e._v(e._s(e.tabs[0].values[5]))]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("br")]),e._v(" "),e.tabs[0].values.length>0?r("v-tabs",{attrs:{color:"white","slider-color":"primary"}},[e._l(e.tabs,(function(t){return r("v-tab",{key:t.title,attrs:{ripple:""}},[e._v(e._s(t.title))])})),e._v(" "),e._l(e.tabs,(function(t){return r("v-tab-item",{key:t.title},[r("br"),e._v(" "),r("v-card",{attrs:{flat:""}},e._l(t.fields,(function(o,i){return r("div",{key:i,staticClass:"row tab-content profile-tab"},[r("div",{staticClass:"col"},[r("label",[e._v(e._s(t.fields[i]))])]),e._v(" "),r("div",{staticClass:"col"},[e.edit?e._e():r("p",[e._v(e._s(t.values[i]))]),e._v(" "),e.edit&&"Your Bio"!==t.fields[i]?r("v-text-field",{staticStyle:{"margin-top":"-20px"},model:{value:t.values[i],callback:function(r){e.$set(t.values,i,r)},expression:"item.values[i]"}}):e._e(),e._v(" "),e.edit&&"Your Bio"===t.fields[i]?r("v-textarea",{staticStyle:{"margin-top":"-20px"},model:{value:t.values[i],callback:function(r){e.$set(t.values,i,r)},expression:"item.values[i]"}}):e._e()],1)])})),0)],1)}))],2):r("v-text-field",{attrs:{color:"primary",loading:"",disabled:""}})],1)]),e._v(" "),r("div",{staticClass:"col-lg-2 text-center"},[e.smallScreen?r("br"):e._e(),e._v(" "),e.edit?r("br"):e._e(),e._v(" "),e.edit?e._e():r("input",{staticClass:"profile-edit-btn",attrs:{type:"button",name:"edit",value:"Edit Profile"},on:{click:function(t){e.edit=!0}}}),e._v(" "),e.edit&&!e.savePressed?r("input",{staticClass:"profile-edit-btn",attrs:{type:"button",name:"save",value:"Save"},on:{click:e.editProfile}}):e._e(),e._v(" "),e.savePressed?r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):e._e()],1)])],1)],1)])}),[],!1,null,"1093331f",null);t.default=component.exports}}]);