(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{177:function(e,t,r){"use strict";r.r(t);r(70);var l={name:"Upload",data:function(){return{file:"",message:"",error:!1,progress:0,fName:"",description:""}},methods:{selectFile:function(){var e=this.$refs.file.files[0],t=e.size>6e5;console.log(e.type);var r=["application/pdf"].includes(e.type);r&&!t?(this.file=e,this.error=!1,this.message=""):(this.error=!0,this.message=t&&r?"Too large. Max size is ".concat(600," Kb"):"Only pdf is allowed")},sendFile:function(){if(""===this.file)return this.error=!0,void(this.message="No file were chosen")}}},o=r(15),n={name:"home",data:function(){return{}},components:{SimpleUpload:Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[e._v("\n      File Upload\n    ")]),e._v(" "),r("div",{staticClass:"card-body"},[r("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.sendFile(t)}}},[e.message?r("div",{class:"message "+(e.error?"is-danger":"is-success")},[r("div",{staticClass:"message-body"},[e._v(e._s(e.message))])]):e._e(),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"fName"}},[e._v("File Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.fName,expression:"fName"}],staticClass:"form-control",attrs:{type:"text",id:"fName",required:""},domProps:{value:e.fName},on:{input:function(t){t.target.composing||(e.fName=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"desc"}},[e._v("File Description")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{id:"desc",rows:"3",required:""},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"file is-boxed is-primary"},[r("label",{staticClass:"file-label"},[r("input",{ref:"file",staticClass:"file-input",attrs:{type:"file"},on:{change:e.selectFile}}),e._v(" "),r("span",{staticClass:"file-cta"},[r("span",{staticClass:"file-icon"},[r("i",{staticClass:"fas fa-upload"})]),e._v(" "),r("span",{staticClass:"file-label"},[e._v("Choose a file")])]),e._v(" "),e.file?r("span",{staticClass:"file-name"},[e._v(e._s(e.file.name))]):e._e()])])]),e._v(" "),r("div",{staticClass:"field"},[r("button",{staticClass:"button is-info"},[e._v("Upload")])]),e._v(" "),r("v-progress-linear",{attrs:{height:"25",reactive:"",color:"#00D1B2",stream:""},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}},[r("strong",{staticStyle:{"margin-left":"50%"}},[e._v(e._s(Math.ceil(e.progress))+"%")])])],1)])])])}),[],!1,null,"13625c13",null).exports},computed:{}},c=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("simple-upload")],1)}),[],!1,null,"6fa18202",null);t.default=c.exports}}]);