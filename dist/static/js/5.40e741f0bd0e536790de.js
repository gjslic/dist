webpackJsonp([5],{"8d9V":function(e,t){},PHzc:function(e,t){},xsFv:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"SellingCars",data:function(){return{checked:!0,input:"",input1:"",input2:"",fits:["fill"],url:"//s5.xinstatic.com/static/newcar-www/widget/c2b_sale_new/c2b_car_sale_top/imgs/salecar-banner_bc02644.jpg",fileList:[],value1:"",pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},radio:1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},value:[],options:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则"},{value:"daohang",label:"导航"}]},{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则"},{value:"daohang",label:"导航"}]}]}},methods:{onSubmit:function(){console.log("submit!")},handleChange:function(e){console.log(e)},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)}}},i={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-row",{staticClass:"margin_bottom_20"},[l("el-col",{attrs:{span:24}},[l("div",{staticClass:"grid-content bg-purple-dark"},[l("div",{staticClass:"demo-image"},e._l(e.fits,function(t){return l("div",{key:t,staticClass:"block"},[l("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.url,fit:t}})],1)}),0)])])],1),e._v(" "),l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[l("el-row",{attrs:{gutter:20}},[l("el-col",{staticStyle:{height:"1px"},attrs:{sm:5,xs:1}}),e._v(" "),l("el-col",{attrs:{span:18}},[l("el-row",{attrs:{gutter:24}},[l("el-col",{attrs:{span:24,offset:0}},[l("el-form-item",{attrs:{label:"卖车城市"}},[l("el-select",{staticClass:"margin_bottom_10",attrs:{placeholder:"省"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1),e._v(" "),l("el-select",{staticClass:"margin_bottom_10",attrs:{placeholder:"市"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1),e._v(" "),l("el-select",{staticClass:"margin_bottom_10",attrs:{placeholder:"区"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:24}},[l("el-col",{attrs:{span:24,offset:0}},[l("el-form-item",{attrs:{label:"车辆牌照"}},[l("el-select",{staticClass:"margin_bottom_10",attrs:{placeholder:"闽"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1),e._v(" "),l("el-select",{staticClass:"margin_bottom_10",attrs:{placeholder:"D"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1),e._v(" "),l("el-input",{staticClass:"width_150",attrs:{placeholder:"输入后五位车牌",onKeyUp:"value=value.replace(/[\\W]/g,'')"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"品牌车系"}},[l("div",{staticClass:"block float_left margin_bottom_10 margin_right_4"},[l("el-cascader",{attrs:{options:e.options},on:{change:e.handleChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),l("el-input",{staticClass:"width_160",attrs:{placeholder:"车型",onkeyup:"value=value.replace(/[^\\w\\u4E00-\\u9FA5]/g, '')"},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"上牌时间"}},[l("el-date-picker",{attrs:{type:"date",placeholder:"选择时间"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"行驶里程"}},[l("el-input",{staticClass:"width_150",attrs:{type:"text",placeholder:"已万公里记录",maxlength:"2","show-word-limit":"",onkeyup:"this.value=this.value.replace(/\\D/g,'')"},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"车况标签"}},[l("el-radio-group",{model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[l("el-radio",{staticClass:"margin_bottom_5",attrs:{label:1}},[e._v("车况极佳")]),e._v(" "),l("el-radio",{staticClass:"margin_bottom_5",attrs:{label:2}},[e._v("稍微刮伤")]),e._v(" "),l("el-radio",{staticClass:"margin_bottom_5",attrs:{label:3}},[e._v("严重刮伤")]),e._v(" "),l("el-radio",{staticClass:"margin_bottom_5",attrs:{label:4}},[e._v("泡水车车")])],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"车辆图片"}},[l("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"list-type":"picture"}},[l("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传车辆信息")]),e._v(" "),l("div",{staticClass:"el-upload__tip ",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件只取第一张")])],1)],1),e._v(" "),l("el-form-item",{staticClass:"margin_left_20"},[l("div",{staticClass:"margin_bottom_10 margin_l_10"},[l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[l("el-link",{attrs:{type:"info",underline:!1}},[e._v("我已阅读同意")]),l("el-link",{attrs:{type:"primary",underline:!1}},[e._v("《个人信息使用告知书》")])],1)],1)]),e._v(" "),l("el-form-item",[l("el-button",{staticClass:"margin_l_10",attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交信息")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var o={name:"AddSellingCars",components:{SellingCars:l("VU/8")(a,i,!1,function(e){l("8d9V")},"data-v-196f1884",null).exports,Menu:function(){return l.e(24).then(l.bind(null,"ZdAc"))},Bottom:function(){return l.e(22).then(l.bind(null,"2ndn"))}}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Menu"),this._v(" "),t("SellingCars"),this._v(" "),t("Bottom")],1)},staticRenderFns:[]};var s=l("VU/8")(o,n,!1,function(e){l("PHzc")},null,null);t.default=s.exports}});
//# sourceMappingURL=5.40e741f0bd0e536790de.js.map