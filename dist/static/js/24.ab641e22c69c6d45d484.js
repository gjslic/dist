webpackJsonp([24],{GMr2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{tableData:[{ID:"1",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{ID:"2",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{ID:"3",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{ID:"4",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},methods:{handleEdit:function(e,t){console.log(e,t)},handleDelete:function(e,t){console.log(e,t)}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{staticStyle:{"margin-bottom":"20px"}},[n("el-button",{attrs:{type:"primary"}},[e._v("添加")])],1),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"ID",label:"ID",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{prop:"name",label:"举报者",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{prop:"address",label:"举报内容"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1)},staticRenderFns:[]},r=n("VU/8")(l,a,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=24.ab641e22c69c6d45d484.js.map