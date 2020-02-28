(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,t,r){"use strict";r(57),r(53),r(54);var l=r(73),o=r.n(l),n=r(72),c={name:"Upload",data:function(){return{dentistItems:["Surgical planing","Production","Just Design"],dentalTechnicianItems:["Surgical planing","Milling","Production","Just Design"],uploadTitle:"",uploadDescription:"",pName:"",pAge:"",pGender:"",numOfImplants:"",upper:!1,lower:!1,partial_box:"PARTIAL",cbctFile:"",stlFile:"",imageFile:"",numOfUnits:"",material:"",proffName:"",studentCase:"",step:"",notes:"",nextTreatmentDate:"",message:"",error:!1,cbctProgress:0,stlProgress:0,imageProgress:0,disableSubmit:!1,shade:""}},computed:{role:function(){return this.$store.getters.role},tabItems:function(){return"DENTAL_TECHNICIAN"===this.role?this.dentalTechnicianItems:"DENTIST"===this.role||"PROFESSOR"===this.role?this.dentistItems:void 0}},created:function(){},methods:{initialize:function(){var e=this;this.uploadTitle="",this.uploadDescription="",this.pName="",this.pAge="",this.pGender="",this.numOfImplants="",this.upper=!1,this.lower=!1,this.partial_box="PARTIAL",this.numOfUnits="",this.material="",this.proffName="",this.studentCase="",this.step="",this.notes="",this.nextTreatmentDate="",this.shade="",setTimeout((function(){e.message="",e.error=!1}),2e4)},selectFile:function(e,element){var t=element.files[0],r=t.size>1e8,l=t.type.includes(e);"cbct"===e&&(e="rar",(t.name.includes(".rar")||t.name.includes(".cbct"))&&(l=!0)),"stl"===e&&t.name.includes(".stl")&&(l=!0),l&&!r?("rar"===e?this.cbctFile=t:"stl"===e?this.stlFile=t:"image"===e&&(this.imageFile=t),this.error=!1,this.message=""):(this.error=!0,this.message=r&&l?"Too large. Max size is ".concat(100," Mb"):"Only "+e+" is allowed")},sendFile:function(e){var t=this;this.message="";var r=localStorage.getItem("token");if(n.a.defaults.headers.common.Authorization="Bearer "+r,"Surgical planing"===e){if(!this.upper&&!this.lower)return this.error=!0,void(this.message="Please select upper or lower");if(""===this.cbctFile)return this.error=!0,void(this.message="No cbct file were chosen");var l="";l=this.upper&&this.lower?"UPPER_LOWER":this.upper?"UPPER":"LOWER";var data={title:this.uploadTitle,description:this.uploadDescription,type:"SURGICAL_PLANNING",patient_name:this.pName,patient_age:this.pAge,patient_gender:this.pGender,number_of_implants:this.numOfImplants,side:l,partial_box:this.partial_box};this.disableSubmit=!0,n.a.post("items/surg_plan",data).then((function(e){o.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+e.data.id+"/cbct/cbctFile.cbct",t.cbctFile,{headers:{"Content-Type":"binary"},onUploadProgress:function(e){t.cbctProgress=e.loaded/e.total*100}}).then((function(e){""!==t.stlFile&&100!==t.stlProgress||(t.disableSubmit=!1,t.initialize(),t.cbctFile="",t.cbctProgress=0,t.stlProgress=0,t.stlFile="",t.error=!1,t.message="The item has been uploaded successfully")})).catch((function(){t.error=!0,t.message="Failed to upload the item",t.disableSubmit=!1})),""!==t.stlFile&&o.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+e.data.id+"/stl/stlFile.stl",t.stlFile,{headers:{"Content-Type":"binary"},onUploadProgress:function(e){t.stlProgress=e.loaded/e.total*100}}).then((function(e){100===t.cbctProgress&&(t.stlProgress=0,t.stlFile="",t.cbctFile="",t.cbctProgress=0,t.disableSubmit=!1,t.initialize(),t.error=!1,t.message="The item has been uploaded successfully")})).catch((function(){t.error=!0,t.message="Failed to upload the item",t.disableSubmit=!1}))})).catch((function(){t.error=!0,t.message="Failed to register the information",t.disableSubmit=!1}))}if("Just Design"===e||"Production"===e||"Milling"===e){if(""===this.material)return this.error=!0,void(this.message="No material were chosen");if(""===this.stlFile)return this.error=!0,void(this.message="No stl file were chosen");var c={title:this.uploadTitle,description:this.uploadDescription,type:e.toUpperCase(),patient_name:this.pName,patient_age:this.pAge,patient_gender:this.pGender,number_of_units:this.numOfUnits,material:this.material,shade:this.shade};this.disableSubmit=!0,n.a.post("items/des_prod_mil",c).then((function(e){o.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+e.data.id+"/stl/stlFile.stl",t.stlFile,{headers:{"Content-Type":"binary"},onUploadProgress:function(e){t.stlProgress=e.loaded/e.total*100}}).then((function(e){""!==t.imageFile&&100!==t.imageProgress||(t.disableSubmit=!1,t.initialize(),t.stlProgress=0,t.stlFile="",t.imageProgress=0,t.imageFile="",t.error=!1,t.message="The item has been uploaded successfully")})).catch((function(){t.error=!0,t.message="Failed to upload the item",t.disableSubmit=!1})),""!==t.imageFile&&o.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+e.data.id+"/picture/picture.jpg",t.imageFile,{headers:{"Content-Type":"binary"},onUploadProgress:function(e){t.imageProgress=e.loaded/e.total*100}}).then((function(e){100===t.stlProgress&&(t.disableSubmit=!1,t.initialize(),t.stlProgress=0,t.stlFile="",t.imageProgress=0,t.imageFile="",t.error=!1,t.message="The item has been uploaded successfully")})).catch((function(){t.error=!0,t.message="Failed to upload the item",t.disableSubmit=!1}))})).catch((function(){t.error=!0,t.message="Failed to register the information",t.disableSubmit=!1}))}if("student"===e){if(""===this.imageFile)return this.error=!0,void(this.message="No image file were chosen");var m={title:this.uploadTitle,description:this.uploadDescription,type:"STUDENT_ITEM",professor_name:this.proffName,patient_name:this.pName,material:this.studentCase,due_date:this.nextTreatmentDate,step:this.step,notes:this.notes};this.disableSubmit=!0,n.a.post("items/student",m).then((function(e){o.a.put("https://s3.eu-central-1.amazonaws.com/q-communicator/"+localStorage.getItem("userId")+"/items/"+e.data.id+"/picture/picture.jpg",t.imageFile,{headers:{"Content-Type":"binary"},onUploadProgress:function(e){t.imageProgress=e.loaded/e.total*100}}).then((function(e){t.disableSubmit=!1,t.initialize(),t.imageProgress=0,t.imageFile="",t.error=!1,t.message="The item has been uploaded successfully"})).catch((function(){t.error=!0,t.message="Failed to upload the item",t.disableSubmit=!1}))})).catch((function(){t.error=!0,t.message="Failed to register the information",t.disableSubmit=!1}))}}}},m=r(12),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",[r("v-card-title",{staticClass:"text-center justify-center py-6"},[r("h1",{staticClass:"font-weight-bold display-1"},[e._v("Please choose the proccess:")])])],1),e._v(" "),"DENTIST"===e.role||"DENTAL_TECHNICIAN"===e.role?r("v-tabs",{attrs:{grow:"","show-arrows":!0,color:"white","slider-color":"primary"}},[e._l(e.tabItems,(function(t){return r("v-tab",{key:t,attrs:{ripple:""}},[e._v(e._s(t))])})),e._v(" "),e._l(e.tabItems,(function(t){return r("v-tab-item",{key:t},[r("v-container",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[e._v(e._s(t)+" Info")]),e._v(" "),r("div",{staticClass:"card-body"},[r("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(r){return r.preventDefault(),e.sendFile(t)}}},[e.message?r("div",{class:"message "+(e.error?"is-danger":"is-success")},[r("div",{staticClass:"message-body"},[e._v(e._s(e.message))])]):e._e(),e._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-lg-4"},[r("label",[e._v("Title")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.uploadTitle,expression:"uploadTitle"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.uploadTitle},on:{input:function(t){t.target.composing||(e.uploadTitle=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-lg-4"},[r("label",{attrs:{for:"pName"}},[e._v("Patient Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.pName,expression:"pName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.pName},on:{input:function(t){t.target.composing||(e.pName=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-lg-4"},[r("label",{attrs:{for:"pAge"}},[e._v("Patient Age")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.pAge,expression:"pAge"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:e.pAge},on:{input:function(t){t.target.composing||(e.pAge=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-lg-4"},[r("label",{attrs:{for:"pAge"}},[e._v("Patient Gender")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.pGender,expression:"pGender"}],staticClass:"form-control custom-select",attrs:{required:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.pGender=t.target.multiple?r:r[0]}}},[r("option",[e._v("MALE")]),e._v(" "),r("option",[e._v("FEMALE")])])]),e._v(" "),"Surgical planing"===t?r("div",{staticClass:"col-lg-4"},[r("label",{attrs:{for:"numOfImplants"}},[e._v("Number of implants")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.numOfImplants,expression:"numOfImplants"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:e.numOfImplants},on:{input:function(t){t.target.composing||(e.numOfImplants=t.target.value)}}})]):e._e(),e._v(" "),"Just Design"===t||"Production"===t||"Milling"===t?r("div",{staticClass:"col-lg-4"},[r("label",{attrs:{for:"numOfUnits"}},[e._v("Number of units")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.numOfUnits,expression:"numOfUnits"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:e.numOfUnits},on:{input:function(t){t.target.composing||(e.numOfUnits=t.target.value)}}})]):e._e(),e._v(" "),"Surgical planing"===t?r("div",{staticClass:"col-lg-4"},[r("br"),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"form-check form-check-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.upper,expression:"upper"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.upper)?e._i(e.upper,null)>-1:e.upper},on:{change:function(t){var r=e.upper,l=t.target,o=!!l.checked;if(Array.isArray(r)){var n=e._i(r,null);l.checked?n<0&&(e.upper=r.concat([null])):n>-1&&(e.upper=r.slice(0,n).concat(r.slice(n+1)))}else e.upper=o}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"upper"}},[e._v("UPPER")])]),e._v(" "),r("div",{staticClass:"form-check form-check-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.lower,expression:"lower"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.lower)?e._i(e.lower,null)>-1:e.lower},on:{change:function(t){var r=e.lower,l=t.target,o=!!l.checked;if(Array.isArray(r)){var n=e._i(r,null);l.checked?n<0&&(e.lower=r.concat([null])):n>-1&&(e.lower=r.slice(0,n).concat(r.slice(n+1)))}else e.lower=o}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"lower"}},[e._v("LOWER")])])]):e._e(),e._v(" "),"Production"===t?r("div",{staticClass:"col-lg-4"},[r("label",[e._v("Shade")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.shade,expression:"shade"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.shade},on:{input:function(t){t.target.composing||(e.shade=t.target.value)}}})]):e._e(),e._v(" "),"Just Design"===t||"Production"===t||"Milling"===t?r("div",{staticClass:"col-lg-4"},[e._v("\n                  Material\n                  "),r("br"),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"form-check form-check-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.material,expression:"material"}],staticClass:"form-check-input",attrs:{type:"radio",name:"zirconia",value:"ZIRCONIA"},domProps:{checked:e._q(e.material,"ZIRCONIA")},on:{change:function(t){e.material="ZIRCONIA"}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"zirconia"}},[e._v("Zirconia")])]),e._v(" "),r("div",{staticClass:"form-check form-check-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.material,expression:"material"}],staticClass:"form-check-input",attrs:{type:"radio",name:"PMF",value:"PMF"},domProps:{checked:e._q(e.material,"PMF")},on:{change:function(t){e.material="PMF"}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"PMF"}},[e._v("PMF")])]),e._v(" "),r("div",{staticClass:"form-check form-check-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.material,expression:"material"}],staticClass:"form-check-input",attrs:{type:"radio",name:"veneer",value:"VENEER"},domProps:{checked:e._q(e.material,"VENEER")},on:{change:function(t){e.material="VENEER"}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"veneer"}},[e._v("Veneer")])]),e._v(" "),"Production"===t?r("div",{staticClass:"form-check form-check-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.material,expression:"material"}],staticClass:"form-check-input",attrs:{type:"radio",name:"TEMP",value:"TEMP"},domProps:{checked:e._q(e.material,"TEMP")},on:{change:function(t){e.material="TEMP"}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"TEMP"}},[e._v("TEMP")])]):e._e()]):e._e(),e._v(" "),r("div",{staticClass:"form-group col-lg-8"},[r("label",{attrs:{for:"desc"}},[e._v("Description")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.uploadDescription,expression:"uploadDescription"}],staticClass:"form-control",attrs:{rows:"2",required:""},domProps:{value:e.uploadDescription},on:{input:function(t){t.target.composing||(e.uploadDescription=t.target.value)}}})]),e._v(" "),"Surgical planing"===t?r("div",{staticClass:"col-lg-4"},[r("br"),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"form-check form-check-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.partial_box,expression:"partial_box"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",value:"PARTIAL"},domProps:{checked:e._q(e.partial_box,"PARTIAL")},on:{change:function(t){e.partial_box="PARTIAL"}}}),e._v(" "),r("label",{staticClass:"form-check-label"},[e._v("Partial")])]),e._v(" "),r("div",{staticClass:"form-check form-check-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.partial_box,expression:"partial_box"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",value:"FULL"},domProps:{checked:e._q(e.partial_box,"FULL")},on:{change:function(t){e.partial_box="FULL"}}}),e._v(" "),r("label",{staticClass:"form-check-label"},[e._v("Full")])])]):e._e()]),e._v(" "),r("label",[e._v("Attachments")]),e._v(" "),r("div",{staticClass:"row"},["Surgical planing"===t?r("div",{staticClass:"field col-lg-4"},[r("div",{staticClass:"file is-boxed is-primary"},[r("label",{staticClass:"file-label"},[r("input",{ref:"cbctFile",refInFor:!0,staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("cbct",t.target)}}}),e._v(" "),r("span",{staticClass:"file-cta"},[r("span",{staticClass:"file-icon"},[r("i",{staticClass:"fas fa-upload"})]),e._v(" "),r("span",{staticClass:"file-label"},[e._v("Choose a file (cbct file)")])]),e._v(" "),e.cbctFile?r("span",{staticClass:"file-name"},[e._v(e._s(e.cbctFile.name))]):e._e()])])]):e._e(),e._v(" "),r("div",{staticClass:"field col-lg-4"},[r("div",{staticClass:"file is-boxed is-primary"},[r("label",{staticClass:"file-label"},[r("input",{ref:"stlFile",refInFor:!0,staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("stl",t.target)}}}),e._v(" "),r("span",{staticClass:"file-cta"},[r("span",{staticClass:"file-icon"},[r("i",{staticClass:"fas fa-upload"})]),e._v(" "),r("span",{staticClass:"file-label"},[e._v("Choose a file (stl file)")])]),e._v(" "),e.stlFile?r("span",{staticClass:"file-name"},[e._v(e._s(e.stlFile.name))]):e._e()])])]),e._v(" "),"Just Design"===t||"Production"===t||"Milling"===t?r("div",{staticClass:"field col-lg-4"},[r("div",{staticClass:"file is-boxed is-primary"},[r("label",{staticClass:"file-label"},[r("input",{ref:"imageFile",refInFor:!0,staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("image",t.target)}}}),e._v(" "),r("span",{staticClass:"file-cta"},[r("span",{staticClass:"file-icon"},[r("i",{staticClass:"fas fa-upload"})]),e._v(" "),r("span",{staticClass:"file-label"},[e._v("Choose an image file")])]),e._v(" "),e.imageFile?r("span",{staticClass:"file-name"},[e._v(e._s(e.imageFile.name))]):e._e()])])]):e._e()]),e._v(" "),e.cbctProgress?r("v-progress-linear",{staticClass:"text-center",attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.cbctProgress,callback:function(t){e.cbctProgress=t},expression:"cbctProgress"}},[e.cbctProgress<100?r("strong",[e._v("CBCT File progress: "+e._s(Math.ceil(e.cbctProgress))+"%")]):r("strong",[e._v("CBCT File has been uploaded successfully")])]):e._e(),e._v(" "),e.stlProgress?r("v-progress-linear",{staticClass:"text-center",attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.stlProgress,callback:function(t){e.stlProgress=t},expression:"stlProgress"}},[e.stlProgress<100?r("strong",[e._v("STL File progress: "+e._s(Math.ceil(e.stlProgress))+"%")]):r("strong",[e._v("STL File has been uploaded successfully")])]):e._e(),e._v(" "),e.imageProgress?r("v-progress-linear",{staticClass:"text-center",attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.imageProgress,callback:function(t){e.imageProgress=t},expression:"imageProgress"}},[e.imageProgress<100?r("strong",[e._v("Image File progress: "+e._s(Math.ceil(e.imageProgress))+"%")]):r("strong",[e._v("Image File has been uploaded successfully")])]):e._e(),e._v(" "),r("div",{staticClass:"field text-right"},[r("button",{staticClass:"button is-info",attrs:{disabled:e.disableSubmit}},[e._v("Submit")])])],1)])])])],1)}))],2):e._e(),e._v(" "),"STUDENT"===e.role?r("v-container",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[e._v("Case Info")]),e._v(" "),r("div",{staticClass:"card-body"},[r("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.sendFile("student")}}},[e.message?r("div",{class:"message "+(e.error?"is-danger":"is-success")},[r("div",{staticClass:"message-body"},[e._v(e._s(e.message))])]):e._e(),e._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-lg-4"},[r("label",[e._v("Title")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.uploadTitle,expression:"uploadTitle"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.uploadTitle},on:{input:function(t){t.target.composing||(e.uploadTitle=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-lg-4"},[r("label",{attrs:{for:"proffName"}},[e._v("Professor Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.proffName,expression:"proffName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.proffName},on:{input:function(t){t.target.composing||(e.proffName=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-lg-4"},[r("label",{attrs:{for:"pName"}},[e._v("Patient Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.pName,expression:"pName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.pName},on:{input:function(t){t.target.composing||(e.pName=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group col-lg-8"},[r("label",{attrs:{for:"desc"}},[e._v("Description")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.uploadDescription,expression:"uploadDescription"}],staticClass:"form-control",attrs:{rows:"2",required:""},domProps:{value:e.uploadDescription},on:{input:function(t){t.target.composing||(e.uploadDescription=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-lg-4"},[r("label",{attrs:{for:"case"}},[e._v("Case")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.studentCase,expression:"studentCase"}],staticClass:"form-control custom-select",attrs:{required:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.studentCase=t.target.multiple?r:r[0]}}},[r("option",[e._v("DENTURE")]),e._v(" "),r("option",[e._v("PMF")]),e._v(" "),r("option",[e._v("ZIRCONIA")]),e._v(" "),r("option",[e._v("VETALIUM")]),e._v(" "),r("option",[e._v("ORTHO")])])])]),e._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-lg-4"},[r("label",{attrs:{for:"nextTreatmentDate"}},[e._v("Next treatment date")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.nextTreatmentDate,expression:"nextTreatmentDate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ex. 2020/12/31",required:""},domProps:{value:e.nextTreatmentDate},on:{input:function(t){t.target.composing||(e.nextTreatmentDate=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-lg-4"},[r("label",{attrs:{for:"step"}},[e._v("Step")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.step,expression:"step"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.step},on:{input:function(t){t.target.composing||(e.step=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-lg-4"},[r("label",{attrs:{for:"notes"}},[e._v("Notes")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.notes,expression:"notes"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:e.notes},on:{input:function(t){t.target.composing||(e.notes=t.target.value)}}})])]),e._v(" "),r("label",[e._v("Attachments")]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"field col-lg-4"},[r("div",{staticClass:"file is-boxed is-primary"},[r("label",{staticClass:"file-label"},[r("input",{ref:"imageFile",staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("image",t.target)}}}),e._v(" "),r("span",{staticClass:"file-cta"},[r("span",{staticClass:"file-icon"},[r("i",{staticClass:"fas fa-upload"})]),e._v(" "),r("span",{staticClass:"file-label"},[e._v("Choose an image file")])]),e._v(" "),e.imageFile?r("span",{staticClass:"file-name"},[e._v(e._s(e.imageFile.name))]):e._e()])])])]),e._v(" "),e.imageProgress?r("v-progress-linear",{staticClass:"text-center",attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.imageProgress,callback:function(t){e.imageProgress=t},expression:"imageProgress"}},[e.imageProgress<100?r("strong",[e._v("Image File progress: "+e._s(Math.ceil(e.imageProgress))+"%")]):r("strong",[e._v("Image File has been uploaded successfully")])]):e._e(),e._v(" "),r("div",{staticClass:"field text-right"},[r("button",{staticClass:"button is-info",attrs:{disabled:e.disableSubmit}},[e._v("Submit")])])],1)])])]):e._e()],1)}),[],!1,null,"d9664488",null);t.a=component.exports}}]);