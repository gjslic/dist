webpackJsonp([23],{"5RlS":function(e,t){},GMr2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("0RrJ");var n=a("9K/l"),l={data:function(){return{tableData:[],currentPage:1,pagesize:4}},mounted:function(){this.getInfo()},methods:{filterTag:function(e,t){return t.comment_state===e},getInfo:function(){var e=this;Object(n.b)("acomplain/index/index","").then(function(t){1==t.data.code?e.tableData=t.data.data:e.tableData=[]}).catch(function(e){})},handleSizeChange:function(e){this.pagesize=e},handleCurrentChange:function(e){this.currentPage=e},handleEdit:function(e,t){var a=this;"已审"!=t.comment_state?100!=t.dCredit?t.comment_num<3?this.$message.error("用户评分小于3分，不可以进行加分"):this.$confirm("此操作将为商家信用值加1分, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.addscore(t)}).catch(function(){a.$message({type:"info",message:"已取消加分"})}):this.$message.error("该商家信用已经是满分，暂时无需处理"):this.$message.error("该评价已处理完毕，请勿重复提交")},handleDelete:function(e,t){var a=this;"已审"!=t.comment_state?t.comment_num>=3?this.$message.error("用户评分大于3分，不可以进行扣分"):this.$confirm("此操作将扣除商家信用值2分, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.deleteScore(t)}).catch(function(){a.$message({type:"info",message:"已取消扣除"})}):this.$message.error("该评价已处理完毕，请勿重复提交")},addscore:function(e){var t=this,a={id:e.id,sellId:e.sell_id,credit:e.dCredit+=1};Object(n.b)("acomplain/index/update",a).then(function(e){1==e.data.code?(t.$message.success(e.data.msg),t.getInfo()):t.$message.error(e.data.msg)}).catch(function(e){})},deleteScore:function(e){var t=this,a={id:e.id,sellId:e.sell_id,credit:e.dCredit-=2};Object(n.b)("acomplain/index/update",a).then(function(e){1==e.data.code?(t.$message.success(e.data.msg),t.getInfo()):t.$message.error(e.data.msg)}).catch(function(e){})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card"},[e._v("\n    信用分：\n    1、商家信用分满100分暂时不可加分，后续被扣可审核回补。\n    2、买家评分高于3分不可减分，低于3分不可加分。\n    3、一单一审，低于80账户锁定。\n  ")]),e._v(" "),void 0!=e.tableData&&null!=e.tableData&&e.tableData.length>0?a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize)}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"uName",label:"买家",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"comment_num",label:"评分",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"content",label:"内容",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"comment_time",label:"时间",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"dName",label:"商家",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"dCredit",label:"信用分",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",filters:[{text:"未审核",value:"未审核"},{text:"已审",value:"已审"}],prop:"comment_state",align:"center","column-key":"comment_state","filter-method":e.filterTag,"filter-placement":"bottom-end","filter-multiple":!1}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("信用+1")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("信用-2")])]}}],null,!1,378576008)})],1):e._e(),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pagesize,"page-sizes":[4,8,16,32],layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var r=a("VU/8")(l,i,!1,function(e){a("5RlS")},null,null);t.default=r.exports}});
//# sourceMappingURL=23.750fabc84e5454a3bace.js.map