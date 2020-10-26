(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,t,l){var content=l(208);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(27).default)("388d3dc2",content,!0,{sourceMap:!1})},193:function(e,t,l){"use strict";l(59),l(55),l(57);var r=l(56),o=l.n(r),n=l(28),c={name:"Upload",data:function(){return{teethDialog:!1,GeneralTabs:["New Cases","Surgical planing"],dentistItems:["Full Production","Just Design","Just Milling","Mockup Digital"],dentalTechnicianItems:["Full Production","Just Design","Just Milling"],proffs:[],uploadTitle:"",uploadDescription:"",pName:"",pAge:"",pGender:"",numOfImplants:"",upper:!1,lower:!1,partial_box:"PARTIAL",cbctFile:"",stlFile:"",imageFile:"",numOfUnits:"",material:"",proffId:"",studentCase:"",step:"",notes:"",nextTreatmentDate:"",message:"",error:!1,cbctProgress:0,stlProgress:0,imageProgress:0,disableSubmit:!1,Shape:""}},computed:{role:function(){return this.$store.getters.role},tabItems:function(){return"DENTAL_TECHNICIAN"===this.role?this.dentalTechnicianItems:"DENTIST"===this.role||"PROFESSOR"===this.role||"ADMIN"===this.role||"EMPLOYEE"===this.role?this.dentistItems:void 0}},created:function(){var e=this;if("STUDENT"===this.role){var t=localStorage.getItem("token");n.a.defaults.headers.common.Authorization="Bearer "+t,n.a.get("users/professors").then((function(t){e.proffs=t.data}))}},methods:{initialize:function(){var e=this;this.uploadTitle="",this.uploadDescription="",this.pName="",this.pAge="",this.pGender="",this.numOfImplants="",this.upper=!1,this.lower=!1,this.partial_box="PARTIAL",this.numOfUnits="",this.material="",this.proffId="",this.studentCase="",this.step="",this.notes="",this.nextTreatmentDate="",this.Shape="",setTimeout((function(){e.message="",e.error=!1}),2e4)},selectFile:function(e,element){var t=element.files[0],l=t.size>1e8,r=t.type.includes(e);"cbct"===e&&(e="rar",(t.name.includes(".rar")||t.name.includes(".cbct"))&&(r=!0)),"stl"===e&&t.name.includes(".stl")&&(r=!0),r&&!l?("rar"===e?this.cbctFile=t:"stl"===e?this.stlFile=t:"image"===e&&(this.imageFile=t),this.error=!1,this.message=""):(this.error=!0,this.message=l&&r?"Too large. Max size is ".concat(100," Mb"):"Only "+e+" is allowed")},sendFile:function(e){var t=this;this.message="";var l=localStorage.getItem("token");if(n.a.defaults.headers.common.Authorization="Bearer "+l,"Surgical planing"===e){if(!this.upper&&!this.lower)return this.error=!0,void(this.message="Please select upper or lower");var r="";r=this.upper&&this.lower?"UPPER_LOWER":this.upper?"UPPER":"LOWER";var data={title:this.uploadTitle,description:this.uploadDescription,type:"SURGICAL_PLANNING",patient_name:this.pName,patient_age:this.pAge,patient_gender:this.pGender,number_of_implants:this.numOfImplants,side:r,partial_box:this.partial_box};this.disableSubmit=!0,n.a.post("items/surg_plan",data).then((function(e){""===t.imageFile&&""===t.stlFile&&""===t.cbctFile&&(t.error=!1,t.message="The item has been uploaded successfully",t.disableSubmit=!1,t.initialize()),""!==t.cbctFile&&o.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+e.data.id+"/cbct/cbctFile.cbct",t.cbctFile,{headers:{"Content-Type":"binary"},onUploadProgress:function(e){t.cbctProgress=e.loaded/e.total*100}}).then((function(e){""!==t.stlFile&&100!==t.stlProgress||""!==t.imageFile&&100!==t.imageProgress||(t.disableSubmit=!1,t.initialize(),t.cbctFile="",t.cbctProgress=0,t.stlProgress=0,t.stlFile="",t.imageFile="",t.imageProgress=0,t.error=!1,t.message="The item has been uploaded successfully")})).catch((function(){t.error=!0,t.message="Failed to upload the item",t.disableSubmit=!1})),""!==t.stlFile&&o.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+e.data.id+"/stl/stlFile.stl",t.stlFile,{headers:{"Content-Type":"binary"},onUploadProgress:function(e){t.stlProgress=e.loaded/e.total*100}}).then((function(e){""!==t.cbctFile&&100!==t.cbctProgress||""!==t.imageFile&&100!==t.imageProgress||(t.cbctFile="",t.cbctProgress=0,t.stlProgress=0,t.stlFile="",t.imageFile="",t.imageProgress=0,t.disableSubmit=!1,t.initialize(),t.error=!1,t.message="The item has been uploaded successfully")})).catch((function(){t.error=!0,t.message="Failed to upload the item",t.disableSubmit=!1})),""!==t.imageFile&&o.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+e.data.id+"/picture/picture.jpg",t.imageFile,{headers:{"Content-Type":"binary"},onUploadProgress:function(e){t.imageProgress=e.loaded/e.total*100}}).then((function(e){""!==t.stlFile&&100!==t.stlProgress||""!==t.cbctFile&&100!==t.cbctProgress||(t.disableSubmit=!1,t.initialize(),t.cbctFile="",t.cbctProgress=0,t.stlProgress=0,t.stlFile="",t.imageFile="",t.imageProgress=0,t.error=!1,t.message="The item has been uploaded successfully")})).catch((function(){t.error=!0,t.message="Failed to upload the item",t.disableSubmit=!1}))})).catch((function(){t.error=!0,t.message="Failed to register the information",t.disableSubmit=!1}))}if("Just Design"===e||"Full Production"===e||"Just Milling"===e||"Mockup Digital"===e){if(""===this.material)return this.error=!0,void(this.message="No material were chosen");var c="DESIGNING";"Full Production"===e?c="PRODUCTION":"Just Milling"===e?c="MILLING":"Mockup Digital"===e&&(c="MOCKUP_DIGITAL");var m={title:this.uploadTitle,description:this.uploadDescription,type:c,patient_name:this.pName,patient_age:this.pAge,patient_gender:this.pGender,number_of_units:this.numOfUnits,material:this.material,Shape:this.Shape};this.disableSubmit=!0,n.a.post("items/des_prod_mil",m).then((function(e){""===t.imageFile&&""===t.stlFile&&(t.error=!1,t.message="The item has been uploaded successfully",t.disableSubmit=!1,t.initialize()),""!==t.stlFile&&o.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+e.data.id+"/stl/stlFile.stl",t.stlFile,{headers:{"Content-Type":"binary"},onUploadProgress:function(e){t.stlProgress=e.loaded/e.total*100}}).then((function(e){""!==t.imageFile&&100!==t.imageProgress||(t.disableSubmit=!1,t.initialize(),t.stlProgress=0,t.stlFile="",t.imageProgress=0,t.imageFile="",t.error=!1,t.message="The item has been uploaded successfully")})).catch((function(){t.error=!0,t.message="Failed to upload the item",t.disableSubmit=!1})),""!==t.imageFile&&o.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+e.data.id+"/picture/picture.jpg",t.imageFile,{headers:{"Content-Type":"binary"},onUploadProgress:function(e){t.imageProgress=e.loaded/e.total*100}}).then((function(e){""!==t.stlFile&&100!==t.stlProgress||(t.disableSubmit=!1,t.initialize(),t.stlProgress=0,t.stlFile="",t.imageProgress=0,t.imageFile="",t.error=!1,t.message="The item has been uploaded successfully")})).catch((function(){t.error=!0,t.message="Failed to upload the item",t.disableSubmit=!1}))})).catch((function(){t.error=!0,t.message="Failed to register the information",t.disableSubmit=!1}))}if("student"===e){if(new Date>new Date(this.nextTreatmentDate))return this.error=!0,void(this.message="Treatment Date should be in the future");var d={title:this.uploadTitle,description:this.uploadDescription,type:"STUDENT_ITEM",professor_id:this.proffId,patient_name:this.pName,material:this.studentCase,due_date:this.nextTreatmentDate,step:this.step,notes:this.notes};this.disableSubmit=!0,n.a.post("items/student",d).then((function(e){""===t.imageFile&&""===t.stlFile&&""===t.cbctFile&&(t.error=!1,t.message="The item has been uploaded successfully",t.disableSubmit=!1,t.initialize()),""!==t.imageFile&&o.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+e.data.id+"/picture/picture.jpg",t.imageFile,{headers:{"Content-Type":"binary"},onUploadProgress:function(e){t.imageProgress=e.loaded/e.total*100}}).then((function(e){""!==t.stlFile&&100!==t.stlProgress||""!==t.cbctFile&&100!==t.cbctProgress||(t.disableSubmit=!1,t.initialize(),t.cbctFile="",t.cbctProgress=0,t.stlProgress=0,t.stlFile="",t.imageFile="",t.imageProgress=0,t.error=!1,t.message="The item has been uploaded successfully")})).catch((function(){t.error=!0,t.message="Failed to upload the item",t.disableSubmit=!1})),""!==t.cbctFile&&o.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+e.data.id+"/cbct/cbctFile.cbct",t.cbctFile,{headers:{"Content-Type":"binary"},onUploadProgress:function(e){t.cbctProgress=e.loaded/e.total*100}}).then((function(e){""!==t.stlFile&&100!==t.stlProgress||""!==t.imageFile&&100!==t.imageProgress||(t.disableSubmit=!1,t.initialize(),t.cbctFile="",t.cbctProgress=0,t.stlProgress=0,t.stlFile="",t.imageFile="",t.imageProgress=0,t.error=!1,t.message="The item has been uploaded successfully")})).catch((function(){t.error=!0,t.message="Failed to upload the item",t.disableSubmit=!1})),""!==t.stlFile&&o.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+e.data.id+"/stl/stlFile.stl",t.stlFile,{headers:{"Content-Type":"binary"},onUploadProgress:function(e){t.stlProgress=e.loaded/e.total*100}}).then((function(e){""!==t.imageFile&&100!==t.imageProgress||""!==t.cbctFile&&100!==t.cbctProgress||(t.cbctFile="",t.cbctProgress=0,t.stlProgress=0,t.stlFile="",t.imageFile="",t.imageProgress=0,t.disableSubmit=!1,t.initialize(),t.error=!1,t.message="The item has been uploaded successfully")})).catch((function(){t.error=!0,t.message="Failed to upload the item",t.disableSubmit=!1}))})).catch((function(){t.error=!0,t.message="Failed to register the information",t.disableSubmit=!1}))}}}},m=(l(207),l(9)),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",["STUDENT"!==e.role?l("v-tabs",{attrs:{grow:"","show-arrows":!0,color:"white","slider-color":"primary"}},[e._l(e.GeneralTabs,(function(t){return l("v-tab",{key:t,attrs:{ripple:""}},[e._v(e._s(t))])})),e._v(" "),e._l(e.GeneralTabs,(function(t){return l("v-tab-item",{key:t},["New Cases"===t?l("span",[l("v-tabs",{attrs:{"show-arrows":!0,color:"white","slider-color":"#00C4A7"}},[e._l(e.tabItems,(function(t){return l("v-tab",{key:t,attrs:{ripple:""}},[e._v(e._s(t))])})),e._v(" "),e._l(e.tabItems,(function(t){return l("v-tab-item",{key:t},[l("v-container",[l("div",{staticClass:"card"},[l("div",{staticClass:"card-header"},[e._v(e._s(t)+" Info")]),e._v(" "),l("div",{staticClass:"card-body"},[l("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(l){return l.preventDefault(),e.sendFile(t)}}},[e.message?l("div",{class:"message "+(e.error?"is-danger":"is-success")},[l("div",{staticClass:"message-body"},[e._v(e._s(e.message))])]):e._e(),e._v(" "),l("div",{staticClass:"form-group row"},[l("div",{staticClass:"col-lg-4"},[l("label",[e._v("Title")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.uploadTitle,expression:"uploadTitle"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.uploadTitle},on:{input:function(t){t.target.composing||(e.uploadTitle=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"pName"}},[e._v("Patient Name")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.pName,expression:"pName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.pName},on:{input:function(t){t.target.composing||(e.pName=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"pAge"}},[e._v("Patient Age")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.pAge,expression:"pAge"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:e.pAge},on:{input:function(t){t.target.composing||(e.pAge=t.target.value)}}})])]),e._v(" "),l("div",{staticClass:"form-group row"},[l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"pAge"}},[e._v("Patient Gender")]),e._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:e.pGender,expression:"pGender"}],staticClass:"form-control custom-select",attrs:{required:""},on:{change:function(t){var l=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.pGender=t.target.multiple?l:l[0]}}},[l("option",[e._v("MALE")]),e._v(" "),l("option",[e._v("FEMALE")])])]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"numOfUnits"}},[e._v("Number of units")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.numOfUnits,expression:"numOfUnits"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:e.numOfUnits},on:{input:function(t){t.target.composing||(e.numOfUnits=t.target.value)}}})]),e._v(" "),"Full Production"===t?l("div",{staticClass:"col-lg-4"},[l("label",[e._v("Shade")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.Shape,expression:"Shape"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.Shape},on:{input:function(t){t.target.composing||(e.Shape=t.target.value)}}})]):e._e(),e._v(" "),l("div",{staticClass:"col-lg-4"},[e._v("\n                        Material\n                        "),l("br"),e._v(" "),l("br"),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.material,expression:"material"}],staticClass:"form-check-input",attrs:{type:"radio",name:"zirconia",value:"ZIRCONIA"},domProps:{checked:e._q(e.material,"ZIRCONIA")},on:{change:function(t){e.material="ZIRCONIA"}}}),e._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"zirconia"}},[e._v("Zirconia")])]),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.material,expression:"material"}],staticClass:"form-check-input",attrs:{type:"radio",name:"PMF",value:"PMF"},domProps:{checked:e._q(e.material,"PMF")},on:{change:function(t){e.material="PMF"}}}),e._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"PMF"}},[e._v("PMF")])]),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.material,expression:"material"}],staticClass:"form-check-input",attrs:{type:"radio",name:"veneer",value:"VENEER"},domProps:{checked:e._q(e.material,"VENEER")},on:{change:function(t){e.material="VENEER"}}}),e._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"veneer"}},[e._v("Veneer")])]),e._v(" "),"Production"===t?l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.material,expression:"material"}],staticClass:"form-check-input",attrs:{type:"radio",name:"TEMP",value:"TEMP"},domProps:{checked:e._q(e.material,"TEMP")},on:{change:function(t){e.material="TEMP"}}}),e._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"TEMP"}},[e._v("TEMP")])]):e._e()]),e._v(" "),l("div",{staticClass:"form-group col-lg-8"},[l("label",{attrs:{for:"desc"}},[e._v("Description")]),e._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.uploadDescription,expression:"uploadDescription"}],staticClass:"form-control",attrs:{rows:"2",required:""},domProps:{value:e.uploadDescription},on:{input:function(t){t.target.composing||(e.uploadDescription=t.target.value)}}})])]),e._v(" "),l("label",[e._v("Attachments")]),e._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"field col-lg-4"},[l("div",{staticClass:"file is-boxed is-primary"},[l("label",{staticClass:"file-label"},[l("input",{ref:"stlFile",refInFor:!0,staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("stl",t.target)}}}),e._v(" "),l("span",{staticClass:"file-cta"},[l("span",{staticClass:"file-icon"},[l("i",{staticClass:"fas fa-upload"})]),e._v(" "),l("span",{staticClass:"file-label"},[e._v("Choose a file (stl file)")])]),e._v(" "),e.stlFile?l("span",{staticClass:"file-name"},[e._v(e._s(e.stlFile.name))]):e._e()])])]),e._v(" "),l("div",{staticClass:"field col-lg-4"},[l("div",{staticClass:"file is-boxed is-primary"},[l("label",{staticClass:"file-label"},[l("input",{ref:"imageFile",refInFor:!0,staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("image",t.target)}}}),e._v(" "),l("span",{staticClass:"file-cta"},[l("span",{staticClass:"file-icon"},[l("i",{staticClass:"fas fa-upload"})]),e._v(" "),l("span",{staticClass:"file-label"},[e._v("Choose an image file")])]),e._v(" "),e.imageFile?l("span",{staticClass:"file-name"},[e._v(e._s(e.imageFile.name))]):e._e()])])])]),e._v(" "),e.cbctProgress?l("v-progress-linear",{staticClass:"text-center",attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.cbctProgress,callback:function(t){e.cbctProgress=t},expression:"cbctProgress"}},[e.cbctProgress<100?l("strong",[e._v("CBCT File progress: "+e._s(Math.ceil(e.cbctProgress))+"%")]):l("strong",[e._v("CBCT File has been uploaded successfully")])]):e._e(),e._v(" "),e.stlProgress?l("v-progress-linear",{staticClass:"text-center",attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.stlProgress,callback:function(t){e.stlProgress=t},expression:"stlProgress"}},[e.stlProgress<100?l("strong",[e._v("STL File progress: "+e._s(Math.ceil(e.stlProgress))+"%")]):l("strong",[e._v("STL File has been uploaded successfully")])]):e._e(),e._v(" "),e.imageProgress?l("v-progress-linear",{staticClass:"text-center",attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.imageProgress,callback:function(t){e.imageProgress=t},expression:"imageProgress"}},[e.imageProgress<100?l("strong",[e._v("Image File progress: "+e._s(Math.ceil(e.imageProgress))+"%")]):l("strong",[e._v("Image File has been uploaded successfully")])]):e._e(),e._v(" "),l("div",{staticClass:"field text-right"},[l("button",{staticClass:"button is-info",attrs:{disabled:e.disableSubmit}},[e._v("Submit")])])],1)])])])],1)}))],2)],1):e._e(),e._v(" "),"Surgical planing"===t?l("span",[l("v-container",[l("div",{staticClass:"card"},[l("div",{staticClass:"card-header"},[e._v(e._s(t)+" Info")]),e._v(" "),l("div",{staticClass:"card-body"},[l("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(l){return l.preventDefault(),e.sendFile(t)}}},[e.message?l("div",{class:"message "+(e.error?"is-danger":"is-success")},[l("div",{staticClass:"message-body"},[e._v(e._s(e.message))])]):e._e(),e._v(" "),l("div",{staticClass:"form-group row"},[l("div",{staticClass:"col-lg-4"},[l("label",[e._v("Title")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.uploadTitle,expression:"uploadTitle"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.uploadTitle},on:{input:function(t){t.target.composing||(e.uploadTitle=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"pName"}},[e._v("Patient Name")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.pName,expression:"pName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.pName},on:{input:function(t){t.target.composing||(e.pName=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"pAge"}},[e._v("Patient Age")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.pAge,expression:"pAge"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:e.pAge},on:{input:function(t){t.target.composing||(e.pAge=t.target.value)}}})])]),e._v(" "),l("div",{staticClass:"form-group row"},[l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"pAge"}},[e._v("Patient Gender")]),e._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:e.pGender,expression:"pGender"}],staticClass:"form-control custom-select",attrs:{required:""},on:{change:function(t){var l=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.pGender=t.target.multiple?l:l[0]}}},[l("option",[e._v("MALE")]),e._v(" "),l("option",[e._v("FEMALE")])])]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"numOfImplants"}},[e._v("Number of implants")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.numOfImplants,expression:"numOfImplants"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:e.numOfImplants},on:{input:function(t){t.target.composing||(e.numOfImplants=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("br"),e._v(" "),l("br"),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.upper,expression:"upper"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.upper)?e._i(e.upper,null)>-1:e.upper},on:{change:function(t){var l=e.upper,r=t.target,o=!!r.checked;if(Array.isArray(l)){var n=e._i(l,null);r.checked?n<0&&(e.upper=l.concat([null])):n>-1&&(e.upper=l.slice(0,n).concat(l.slice(n+1)))}else e.upper=o}}}),e._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"upper"}},[e._v("UPPER")])]),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.lower,expression:"lower"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.lower)?e._i(e.lower,null)>-1:e.lower},on:{change:function(t){var l=e.lower,r=t.target,o=!!r.checked;if(Array.isArray(l)){var n=e._i(l,null);r.checked?n<0&&(e.lower=l.concat([null])):n>-1&&(e.lower=l.slice(0,n).concat(l.slice(n+1)))}else e.lower=o}}}),e._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"lower"}},[e._v("LOWER")])])]),e._v(" "),l("div",{staticClass:"form-group col-lg-8"},[l("label",{attrs:{for:"desc"}},[e._v("Description")]),e._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.uploadDescription,expression:"uploadDescription"}],staticClass:"form-control",attrs:{rows:"2",required:""},domProps:{value:e.uploadDescription},on:{input:function(t){t.target.composing||(e.uploadDescription=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("br"),e._v(" "),l("br"),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.partial_box,expression:"partial_box"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",value:"PARTIAL"},domProps:{checked:e._q(e.partial_box,"PARTIAL")},on:{change:function(t){e.partial_box="PARTIAL"}}}),e._v(" "),l("label",{staticClass:"form-check-label"},[e._v("Partial")])]),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.partial_box,expression:"partial_box"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",value:"FULL"},domProps:{checked:e._q(e.partial_box,"FULL")},on:{change:function(t){e.partial_box="FULL"}}}),e._v(" "),l("label",{staticClass:"form-check-label"},[e._v("Full")])])])]),e._v(" "),l("label",[e._v("Attachments")]),e._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"field col-lg-4"},[l("div",{staticClass:"file is-boxed is-primary"},[l("label",{staticClass:"file-label"},[l("input",{ref:"cbctFile",refInFor:!0,staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("cbct",t.target)}}}),e._v(" "),l("span",{staticClass:"file-cta"},[l("span",{staticClass:"file-icon"},[l("i",{staticClass:"fas fa-upload"})]),e._v(" "),l("span",{staticClass:"file-label"},[e._v("Choose a file (cbct file)")])]),e._v(" "),e.cbctFile?l("span",{staticClass:"file-name"},[e._v(e._s(e.cbctFile.name))]):e._e()])])]),e._v(" "),l("div",{staticClass:"field col-lg-4"},[l("div",{staticClass:"file is-boxed is-primary"},[l("label",{staticClass:"file-label"},[l("input",{ref:"stlFile",refInFor:!0,staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("stl",t.target)}}}),e._v(" "),l("span",{staticClass:"file-cta"},[l("span",{staticClass:"file-icon"},[l("i",{staticClass:"fas fa-upload"})]),e._v(" "),l("span",{staticClass:"file-label"},[e._v("Choose a file (stl file)")])]),e._v(" "),e.stlFile?l("span",{staticClass:"file-name"},[e._v(e._s(e.stlFile.name))]):e._e()])])]),e._v(" "),l("div",{staticClass:"field col-lg-4"},[l("div",{staticClass:"file is-boxed is-primary"},[l("label",{staticClass:"file-label"},[l("input",{ref:"imageFile",refInFor:!0,staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("image",t.target)}}}),e._v(" "),l("span",{staticClass:"file-cta"},[l("span",{staticClass:"file-icon"},[l("i",{staticClass:"fas fa-upload"})]),e._v(" "),l("span",{staticClass:"file-label"},[e._v("Choose an image file")])]),e._v(" "),e.imageFile?l("span",{staticClass:"file-name"},[e._v(e._s(e.imageFile.name))]):e._e()])])])]),e._v(" "),e.cbctProgress?l("v-progress-linear",{staticClass:"text-center",attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.cbctProgress,callback:function(t){e.cbctProgress=t},expression:"cbctProgress"}},[e.cbctProgress<100?l("strong",[e._v("CBCT File progress: "+e._s(Math.ceil(e.cbctProgress))+"%")]):l("strong",[e._v("CBCT File has been uploaded successfully")])]):e._e(),e._v(" "),e.stlProgress?l("v-progress-linear",{staticClass:"text-center",attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.stlProgress,callback:function(t){e.stlProgress=t},expression:"stlProgress"}},[e.stlProgress<100?l("strong",[e._v("STL File progress: "+e._s(Math.ceil(e.stlProgress))+"%")]):l("strong",[e._v("STL File has been uploaded successfully")])]):e._e(),e._v(" "),e.imageProgress?l("v-progress-linear",{staticClass:"text-center",attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.imageProgress,callback:function(t){e.imageProgress=t},expression:"imageProgress"}},[e.imageProgress<100?l("strong",[e._v("Image File progress: "+e._s(Math.ceil(e.imageProgress))+"%")]):l("strong",[e._v("Image File has been uploaded successfully")])]):e._e(),e._v(" "),l("div",{staticClass:"field text-right"},[l("button",{staticClass:"button is-info",attrs:{disabled:e.disableSubmit}},[e._v("Submit")])])],1)])])])],1):e._e()])}))],2):e._e(),e._v(" "),"STUDENT"===e.role?l("v-container",[l("div",{staticClass:"text-center"},[l("v-dialog",{attrs:{width:"400"},model:{value:e.teethDialog,callback:function(t){e.teethDialog=t},expression:"teethDialog"}},[l("img",{attrs:{src:"https://s3.eu-central-1.amazonaws.com/q-communicator/static/teeth-numbering.PNG",alt:"Teeth-Numbering",width:"400"}})])],1),e._v(" "),l("div",{staticClass:"card"},[l("div",{staticClass:"card-header"},[e._v("\n        Case Info\n        "),l("v-spacer"),e._v(" "),l("img",{staticStyle:{cursor:"pointer"},attrs:{src:"https://s3.eu-central-1.amazonaws.com/q-communicator/static/teeth-numbering.PNG",alt:"Teeth-Numbering",width:"30",height:"30"},on:{click:function(t){e.teethDialog=!0}}})],1),e._v(" "),l("div",{staticClass:"card-body"},[l("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.sendFile("student")}}},[e.message?l("div",{class:"message "+(e.error?"is-danger":"is-success")},[l("div",{staticClass:"message-body"},[e._v(e._s(e.message))])]):e._e(),e._v(" "),l("div",{staticClass:"form-group row"},[l("div",{staticClass:"col-lg-4"},[l("label",[e._v("Title")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.uploadTitle,expression:"uploadTitle"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.uploadTitle},on:{input:function(t){t.target.composing||(e.uploadTitle=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"proffName"}},[e._v("Professor Name")]),e._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:e.proffId,expression:"proffId"}],staticClass:"form-control custom-select",attrs:{required:""},on:{change:function(t){var l=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.proffId=t.target.multiple?l:l[0]}}},e._l(e.proffs,(function(t){return l("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.username))])})),0)]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"pName"}},[e._v("Patient Name")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.pName,expression:"pName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.pName},on:{input:function(t){t.target.composing||(e.pName=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"form-group col-lg-8"},[l("label",{attrs:{for:"desc"}},[e._v("Description")]),e._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.uploadDescription,expression:"uploadDescription"}],staticClass:"form-control",attrs:{rows:"2",required:""},domProps:{value:e.uploadDescription},on:{input:function(t){t.target.composing||(e.uploadDescription=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"case"}},[e._v("Case")]),e._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:e.studentCase,expression:"studentCase"}],staticClass:"form-control custom-select",attrs:{required:""},on:{change:function(t){var l=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.studentCase=t.target.multiple?l:l[0]}}},[l("option",[e._v("DENTURE")]),e._v(" "),l("option",[e._v("PMF")]),e._v(" "),l("option",[e._v("ZIRCONIA")]),e._v(" "),l("option",[e._v("VETALIUM")]),e._v(" "),l("option",[e._v("ORTHO")])])])]),e._v(" "),l("div",{staticClass:"form-group row"},[l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"nextTreatmentDate"}},[e._v("Next treatment date")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.nextTreatmentDate,expression:"nextTreatmentDate"}],staticClass:"form-control",attrs:{type:"date",name:"dateofbirth",id:"dateofbirth",required:""},domProps:{value:e.nextTreatmentDate},on:{input:function(t){t.target.composing||(e.nextTreatmentDate=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"step"}},[e._v("Step")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.step,expression:"step"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.step},on:{input:function(t){t.target.composing||(e.step=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"notes"}},[e._v("Notes")]),e._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.notes,expression:"notes"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:e.notes},on:{input:function(t){t.target.composing||(e.notes=t.target.value)}}})])]),e._v(" "),l("label",[e._v("Attachments")]),e._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"field col-lg-4"},[l("div",{staticClass:"file is-boxed is-primary"},[l("label",{staticClass:"file-label"},[l("input",{ref:"imageFile",staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("image",t.target)}}}),e._v(" "),l("span",{staticClass:"file-cta"},[l("span",{staticClass:"file-icon"},[l("i",{staticClass:"fas fa-upload"})]),e._v(" "),l("span",{staticClass:"file-label"},[e._v("Choose an image file")])]),e._v(" "),e.imageFile?l("span",{staticClass:"file-name"},[e._v(e._s(e.imageFile.name))]):e._e()])])]),e._v(" "),l("div",{staticClass:"field col-lg-4"},[l("div",{staticClass:"file is-boxed is-primary"},[l("label",{staticClass:"file-label"},[l("input",{ref:"cbctFile",staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("cbct",t.target)}}}),e._v(" "),l("span",{staticClass:"file-cta"},[l("span",{staticClass:"file-icon"},[l("i",{staticClass:"fas fa-upload"})]),e._v(" "),l("span",{staticClass:"file-label"},[e._v("Choose a file (cbct file)")])]),e._v(" "),e.cbctFile?l("span",{staticClass:"file-name"},[e._v(e._s(e.cbctFile.name))]):e._e()])])]),e._v(" "),l("div",{staticClass:"field col-lg-4"},[l("div",{staticClass:"file is-boxed is-primary"},[l("label",{staticClass:"file-label"},[l("input",{ref:"stlFile",staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("stl",t.target)}}}),e._v(" "),l("span",{staticClass:"file-cta"},[l("span",{staticClass:"file-icon"},[l("i",{staticClass:"fas fa-upload"})]),e._v(" "),l("span",{staticClass:"file-label"},[e._v("Choose a file (stl file)")])]),e._v(" "),e.stlFile?l("span",{staticClass:"file-name"},[e._v(e._s(e.stlFile.name))]):e._e()])])])]),e._v(" "),e.imageProgress?l("v-progress-linear",{staticClass:"text-center",attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.imageProgress,callback:function(t){e.imageProgress=t},expression:"imageProgress"}},[e.imageProgress<100?l("strong",[e._v("Image File progress: "+e._s(Math.ceil(e.imageProgress))+"%")]):l("strong",[e._v("Image File has been uploaded successfully")])]):e._e(),e._v(" "),e.cbctProgress?l("v-progress-linear",{staticClass:"text-center",attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.cbctProgress,callback:function(t){e.cbctProgress=t},expression:"cbctProgress"}},[e.cbctProgress<100?l("strong",[e._v("CBCT File progress: "+e._s(Math.ceil(e.cbctProgress))+"%")]):l("strong",[e._v("CBCT File has been uploaded successfully")])]):e._e(),e._v(" "),e.stlProgress?l("v-progress-linear",{staticClass:"text-center",attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.stlProgress,callback:function(t){e.stlProgress=t},expression:"stlProgress"}},[e.stlProgress<100?l("strong",[e._v("STL File progress: "+e._s(Math.ceil(e.stlProgress))+"%")]):l("strong",[e._v("STL File has been uploaded successfully")])]):e._e(),e._v(" "),l("div",{staticClass:"field text-right"},[l("button",{staticClass:"button is-info",attrs:{disabled:e.disableSubmit}},[e._v("Submit")])])],1)])])]):e._e()],1)}),[],!1,null,"e021077e",null);t.a=component.exports},207:function(e,t,l){"use strict";var r=l(188);l.n(r).a},208:function(e,t,l){(e.exports=l(26)(!1)).push([e.i,"[type=date][data-v-e021077e]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat}[type=date][data-v-e021077e]::-webkit-inner-spin-button{display:none}[type=date][data-v-e021077e]::-webkit-calendar-picker-indicator{opacity:0}",""])}}]);