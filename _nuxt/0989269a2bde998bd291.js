(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{180:function(e,t,l){"use strict";l(51),l(72);var r={name:"Upload",data:function(){return{dentistItems:["Surgical planing","Designing","Production"],dentalTechnicianItems:["Surgical planing","Designing","Milling","Production"],pName:"",pAge:"",pGender:"",numOfImplants:"",upper:!1,lower:!1,partial_box:"partial",cbctFile:"",stlFile:"",imageFile:"",numOfUnits:"",material:"",proffName:"",studentCase:"",step:"",notes:"",nextTreatmentDate:"",message:"",error:!1,progress:0}},computed:{role:function(){return this.$store.getters.role},tabItems:function(){return"DENTAL_TECHNICIAN"===this.role?this.dentalTechnicianItems:"DENTIST"===this.role?this.dentistItems:void 0}},created:function(){},methods:{selectFile:function(e){if("cbct"===e)this.$refs.cbctFile.files[0];else if("stl"===e)this.$refs.stlFile.files[0];else if("image"===e)this.$refs.imageFile.files[0];var t=file.size>6e5;console.log(file.type);var l=file.type.includes(e);l&&!t?(this.file=file,this.error=!1,this.message=""):(this.error=!0,this.message=t&&l?"Too large. Max size is ".concat(600," Kb"):"Only "+e+" is allowed")},sendFile:function(e){return"Surgical planing"===e&&""===this.cbctFile?(this.error=!0,void(this.message="No cbct file were chosen")):"Production"!==e&&"Milling"!==e||""!==this.material?"Designing"!==e&&"Production"!==e&&"Milling"!==e||""!==this.stlFile?"student"===e&&""===this.imageFile?(this.error=!0,void(this.message="No image file were chosen")):void 0:(this.error=!0,void(this.message="No stl file were chosen")):(this.error=!0,void(this.message="No material were chosen"))}}},n=l(12),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",["DENTIST"===e.role||"DENTAL_TECHNICIAN"===e.role?l("v-tabs",{attrs:{color:"white","slider-color":"primary"}},[e._l(e.tabItems,(function(t){return l("v-tab",{key:t,attrs:{ripple:""}},[e._v(e._s(t))])})),e._v(" "),e._l(e.tabItems,(function(t){return l("v-tab-item",{key:t},[l("v-container",[l("div",{staticClass:"card"},[l("div",{staticClass:"card-header"},[e._v(e._s(t)+" Info")]),e._v(" "),l("div",{staticClass:"card-body"},[l("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(l){return l.preventDefault(),e.sendFile(t)}}},[e.message?l("div",{class:"message "+(e.error?"is-danger":"is-success")},[l("div",{staticClass:"message-body"},[e._v(e._s(e.message))])]):e._e(),e._v(" "),l("div",{staticClass:"form-group row"},[l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"pName"}},[e._v("Patient Name")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.pName,expression:"pName"}],staticClass:"form-control",attrs:{type:"text",id:"pName",required:""},domProps:{value:e.pName},on:{input:function(t){t.target.composing||(e.pName=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"pAge"}},[e._v("Patient Age")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.pAge,expression:"pAge"}],staticClass:"form-control",attrs:{type:"number",id:"fName",required:""},domProps:{value:e.pAge},on:{input:function(t){t.target.composing||(e.pAge=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"pAge"}},[e._v("Patient Gender")]),e._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:e.pGender,expression:"pGender"}],staticClass:"form-control custom-select",attrs:{id:"pAge",required:""},on:{change:function(t){var l=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.pGender=t.target.multiple?l:l[0]}}},[l("option",[e._v("Male")]),e._v(" "),l("option",[e._v("Female")])])])]),e._v(" "),l("div",{staticClass:"form-group row"},["Surgical planing"===t?l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"numOfImplants"}},[e._v("Number of implants")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.numOfImplants,expression:"numOfImplants"}],staticClass:"form-control",attrs:{type:"number",id:"numOfImplants",required:""},domProps:{value:e.numOfImplants},on:{input:function(t){t.target.composing||(e.numOfImplants=t.target.value)}}})]):e._e(),e._v(" "),"Designing"===t||"Production"===t||"Milling"===t?l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"numOfUnits"}},[e._v("Number of units")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.numOfUnits,expression:"numOfUnits"}],staticClass:"form-control",attrs:{type:"number",id:"numOfUnits",required:""},domProps:{value:e.numOfUnits},on:{input:function(t){t.target.composing||(e.numOfUnits=t.target.value)}}})]):e._e(),e._v(" "),"Surgical planing"===t?l("div",{staticClass:"col-lg-4"},[l("br"),e._v(" "),l("br"),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.upper,expression:"upper"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"upper"},domProps:{checked:Array.isArray(e.upper)?e._i(e.upper,null)>-1:e.upper},on:{change:function(t){var l=e.upper,r=t.target,n=!!r.checked;if(Array.isArray(l)){var o=e._i(l,null);r.checked?o<0&&(e.upper=l.concat([null])):o>-1&&(e.upper=l.slice(0,o).concat(l.slice(o+1)))}else e.upper=n}}}),e._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"upper"}},[e._v("Upper")])]),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.lower,expression:"lower"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"lower"},domProps:{checked:Array.isArray(e.lower)?e._i(e.lower,null)>-1:e.lower},on:{change:function(t){var l=e.lower,r=t.target,n=!!r.checked;if(Array.isArray(l)){var o=e._i(l,null);r.checked?o<0&&(e.lower=l.concat([null])):o>-1&&(e.lower=l.slice(0,o).concat(l.slice(o+1)))}else e.lower=n}}}),e._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"lower"}},[e._v("Lower")])])]):e._e(),e._v(" "),"Designing"===t||"Production"===t||"Milling"===t?l("div",{staticClass:"col-lg-4"},[e._v("\n                  Material\n                  "),l("br"),e._v(" "),l("br"),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.material,expression:"material"}],staticClass:"form-check-input",attrs:{type:"radio",name:"zirconia",id:"zirconia",value:"zirconia"},domProps:{checked:e._q(e.material,"zirconia")},on:{change:function(t){e.material="zirconia"}}}),e._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"zirconia"}},[e._v("Zirconia")])]),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.material,expression:"material"}],staticClass:"form-check-input",attrs:{type:"radio",name:"PMF",id:"PMF",value:"PMF"},domProps:{checked:e._q(e.material,"PMF")},on:{change:function(t){e.material="PMF"}}}),e._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"PMF"}},[e._v("PMF")])]),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.material,expression:"material"}],staticClass:"form-check-input",attrs:{type:"radio",name:"veneer",id:"veneer",value:"veneer"},domProps:{checked:e._q(e.material,"veneer")},on:{change:function(t){e.material="veneer"}}}),e._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"veneer"}},[e._v("Veneer")])])]):e._e(),e._v(" "),"Surgical planing"===t?l("div",{staticClass:"col-lg-4"},[l("br"),e._v(" "),l("br"),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.partial_box,expression:"partial_box"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",id:"partial",value:"partial"},domProps:{checked:e._q(e.partial_box,"partial")},on:{change:function(t){e.partial_box="partial"}}}),e._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"partial"}},[e._v("Partial")])]),e._v(" "),l("div",{staticClass:"form-check form-check-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.partial_box,expression:"partial_box"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",id:"box",value:"box"},domProps:{checked:e._q(e.partial_box,"box")},on:{change:function(t){e.partial_box="box"}}}),e._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"box"}},[e._v("Box")])])]):e._e()]),e._v(" "),l("label",[e._v("Attachments")]),e._v(" "),l("div",{staticClass:"row"},["Surgical planing"===t?l("div",{staticClass:"field col-lg-4"},[l("div",{staticClass:"file is-boxed is-primary"},[l("label",{staticClass:"file-label"},[l("input",{ref:"cbctFile",refInFor:!0,staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("cbct")}}}),e._v(" "),l("span",{staticClass:"file-cta"},[l("span",{staticClass:"file-icon"},[l("i",{staticClass:"fas fa-upload"})]),e._v(" "),l("span",{staticClass:"file-label"},[e._v("Choose a file (cbct file)")])]),e._v(" "),e.cbctFile?l("span",{staticClass:"file-name"},[e._v(e._s(e.cbctFile.name))]):e._e()])])]):e._e(),e._v(" "),l("div",{staticClass:"field col-lg-4"},[l("div",{staticClass:"file is-boxed is-primary"},[l("label",{staticClass:"file-label"},[l("input",{ref:"stlFile",refInFor:!0,staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("stl")}}}),e._v(" "),l("span",{staticClass:"file-cta"},[l("span",{staticClass:"file-icon"},[l("i",{staticClass:"fas fa-upload"})]),e._v(" "),l("span",{staticClass:"file-label"},[e._v("Choose a file (stl file)")])]),e._v(" "),e.stlFile?l("span",{staticClass:"file-name"},[e._v(e._s(e.stlFile.name))]):e._e()])])]),e._v(" "),"Designing"===t||"Production"===t||"Milling"===t?l("div",{staticClass:"field col-lg-4"},[l("div",{staticClass:"file is-boxed is-primary"},[l("label",{staticClass:"file-label"},[l("input",{ref:"imageFile",refInFor:!0,staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("image")}}}),e._v(" "),l("span",{staticClass:"file-cta"},[l("span",{staticClass:"file-icon"},[l("i",{staticClass:"fas fa-upload"})]),e._v(" "),l("span",{staticClass:"file-label"},[e._v("Choose an image file")])]),e._v(" "),e.imageFile?l("span",{staticClass:"file-name"},[e._v(e._s(e.imageFile.name))]):e._e()])])]):e._e()]),e._v(" "),l("div",{staticClass:"field text-right"},[l("button",{staticClass:"button is-info"},[e._v("Submit")])])])])])])],1)}))],2):e._e(),e._v(" "),"STUDENT"===e.role?l("v-container",[l("div",{staticClass:"card"},[l("div",{staticClass:"card-header"},[e._v("Student Info")]),e._v(" "),l("div",{staticClass:"card-body"},[l("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.sendFile("student")}}},[e.message?l("div",{class:"message "+(e.error?"is-danger":"is-success")},[l("div",{staticClass:"message-body"},[e._v(e._s(e.message))])]):e._e(),e._v(" "),l("div",{staticClass:"form-group row"},[l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"proffName"}},[e._v("Professor Name")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.proffName,expression:"proffName"}],staticClass:"form-control",attrs:{type:"text",id:"proffName",required:""},domProps:{value:e.proffName},on:{input:function(t){t.target.composing||(e.proffName=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"pName"}},[e._v("Patient Name")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.pName,expression:"pName"}],staticClass:"form-control",attrs:{type:"text",id:"pName",required:""},domProps:{value:e.pName},on:{input:function(t){t.target.composing||(e.pName=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"case"}},[e._v("Case")]),e._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:e.studentCase,expression:"studentCase"}],staticClass:"form-control custom-select",attrs:{id:"case",required:""},on:{change:function(t){var l=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.studentCase=t.target.multiple?l:l[0]}}},[l("option",[e._v("Denture")]),e._v(" "),l("option",[e._v("BFM")]),e._v(" "),l("option",[e._v("Zirconia")]),e._v(" "),l("option",[e._v("Vetalium")])])])]),e._v(" "),l("div",{staticClass:"form-group row"},[l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"nextTreatmentDate"}},[e._v("Next treatment date")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.nextTreatmentDate,expression:"nextTreatmentDate"}],staticClass:"form-control",attrs:{type:"text",id:"nextTreatmentDate",required:""},domProps:{value:e.nextTreatmentDate},on:{input:function(t){t.target.composing||(e.nextTreatmentDate=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"step"}},[e._v("Step")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.step,expression:"step"}],staticClass:"form-control",attrs:{type:"text",id:"step",required:""},domProps:{value:e.step},on:{input:function(t){t.target.composing||(e.step=t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-lg-4"},[l("label",{attrs:{for:"notes"}},[e._v("Notes")]),e._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.notes,expression:"notes"}],staticClass:"form-control",attrs:{id:"notes",rows:"3"},domProps:{value:e.notes},on:{input:function(t){t.target.composing||(e.notes=t.target.value)}}})])]),e._v(" "),l("label",[e._v("Attachments")]),e._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"field col-lg-4"},[l("div",{staticClass:"file is-boxed is-primary"},[l("label",{staticClass:"file-label"},[l("input",{ref:"imageFile",staticClass:"file-input",attrs:{type:"file"},on:{change:function(t){return e.selectFile("image")}}}),e._v(" "),l("span",{staticClass:"file-cta"},[l("span",{staticClass:"file-icon"},[l("i",{staticClass:"fas fa-upload"})]),e._v(" "),l("span",{staticClass:"file-label"},[e._v("Choose an image file")])]),e._v(" "),e.imageFile?l("span",{staticClass:"file-name"},[e._v(e._s(e.imageFile.name))]):e._e()])])])]),e._v(" "),l("div",{staticClass:"field text-right"},[l("button",{staticClass:"button is-info"},[e._v("Submit")])])])])])]):e._e()],1)}),[],!1,null,"7eb9cb06",null);t.a=component.exports},193:function(e,t,l){"use strict";l.r(t);var r={name:"UplaodItem",created:function(){},data:function(){return{}},components:{SimpleUpload:l(180).a},head:{link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"}]}},n=l(12),component=Object(n.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("simple-upload")],1)}),[],!1,null,"793335c4",null);t.default=component.exports}}]);