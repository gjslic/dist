webpackJsonp([16],{"6b6T":function(e,t){},"8Z36":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"Goods",data:function(){return{input3:"",select:"",tableData:[{date:"1",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"3",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"4",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},methods:{handleEdit:function(e,t){console.log(e,t)},handleDelete:function(e,t){console.log(e,t)}}},n={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticStyle:{margin:"15px 0"}},[l("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}},[l("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[l("el-option",{attrs:{label:"餐厅名",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"订单号",value:"2"}}),e._v(" "),l("el-option",{attrs:{label:"用户电话",value:"3"}})],1),e._v(" "),l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),e._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:e.tableData}},[l("el-table-column",{attrs:{label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.date))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"车辆名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-popover",{attrs:{trigger:"hover",placement:"top"}},[l("p",[e._v("姓名: "+e._s(t.row.name))]),e._v(" "),l("p",[e._v("住址: "+e._s(t.row.address))]),e._v(" "),l("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[l("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.name))])],1)])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"品牌"}}),e._v(" "),l("el-table-column",{attrs:{label:"系列"}}),e._v(" "),l("el-table-column",{attrs:{label:"价格"}}),e._v(" "),l("el-table-column",{attrs:{label:"图片"}}),e._v(" "),l("el-table-column",{attrs:{label:"介绍"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"360"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini"},on:{click:function(l){return e.handleEdit(t.$index,t.row)}}},[e._v("未审核")]),e._v(" "),l("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(l){return e.handleDelete(t.$index,t.row)}}},[e._v("下架")])]}}])})],1),e._v(" "),l("div",{staticClass:"block"},[l("el-pagination",{attrs:{layout:"prev, pager, next",total:50}})],1)],1)},staticRenderFns:[]};var s=l("VU/8")(a,n,!1,function(e){l("6b6T")},null,null);t.default=s.exports}});
//# sourceMappingURL=16.ea0c5ce7a20bb59d8f70.js.map