webpackJsonp([16],{"/PJ/":function(e,t){},HOii:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("9K/l"),l={name:"Goods",data:function(){return{input3:"",select:"vehicle_name",oldCar:[],currentPage:1,pagesize:4}},created:function(){this.getData()},methods:{open2:function(e){this.$message({message:e,type:"success"})},open4:function(e){this.$message.error(e)},getData:function(){var e=this;Object(a.a)("/goods/index/get").then(function(t){1==t.data.code&&(e.oldCar=t.data.data)}).catch(function(e){console.log(e)})},handleSizeChange:function(e){this.pagesize=e},handleCurrentChange:function(e){this.currentPage=e},handleOut:function(e,t){var n=this,l={id:t.vehicle_id};this.$confirm("此操作将下架商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.b)("/goods/index/out",l).then(function(e){1==e.data.code?(n.oldCar=e.data.data,n.open2(e.data.msg)):n.open4(e.data.msg)}).catch(function(e){console.log(e)})}).catch(function(){n.$message({type:"info",message:"已取消修改"})})},handleDelete:function(e,t){var n=this;console.log(e,t);var l=t.vehicle_id,o={id:l};this.$confirm("此操作将永久删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.b)("/goods/index/del",o).then(function(e){if(1==e.data.code){for(var t in n.oldCar)n.oldCar[t].vehicle_id===l&&n.oldCar.splice(t,1);n.open2(e.data.msg)}else n.open4(e.data.msg)}).catch(function(e){console.log(e)})}).catch(function(){n.$message({type:"info",message:"已取消删除"})})},sortByPurchase:function(e,t){return e.price-t.price},filterTag:function(e,t){return t.vehicle_state===e},clearFilter:function(){this.$refs.filterTable.clearFilter()},getColor:function(e){return"已上架"===e?"primary":"success"},filterChange:function(e){var t=this;if(e.vehicle_state.length>0){var n={state:e.vehicle_state[0]};Object(a.b)("/goods/index/stateClass",n).then(function(e){1==e.data.code?t.oldCar=e.data.data:t.open4(e.data.msg)}).catch(function(e){console.log(e)})}else this.getData()},handleSearch:function(){var e=this;this.currentPage=1;var t={keyword:this.input3,condition:this.select};Object(a.b)("/goods/index/search",t).then(function(t){1==t.data.code?e.oldCar=t.data.data:e.open4(t.data.msg)}).catch(function(e){console.log(e)})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{margin:"15px 0"}},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}},[n("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[n("el-option",{attrs:{label:"车辆名称",value:"vehicle_name"}}),e._v(" "),n("el-option",{attrs:{label:"品牌",value:"brand_name"}})],1),e._v(" "),n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleSearch},slot:"append"})],1)],1),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:e.oldCar.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),"default-sort":{prop:"price",order:"descending"}},on:{"filter-change":e.filterChange}},[n("el-table-column",{attrs:{label:"ID",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.vehicle_id))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"车辆名称",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[e._v("介绍: "+e._s(t.row.introduce))]),e._v(" "),n("p",[e._v("上架时间: "+e._s(t.row.vehicle_time))]),e._v(" "),n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.vehicle_name))])],1)])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"品牌"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.brand_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"系列"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.series_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"价格",sortable:"","sort-method":e.sortByPurchase},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.price)+" 万")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("img",{staticStyle:{width:"60px",height:"50px"},attrs:{src:e.row.img}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"状态",filters:[{text:"已上架",value:"已上架"},{text:"已下架",value:"已下架"}],prop:"vehicle_state",align:"center","column-key":"vehicle_state","filter-method":e.filterTag,"filter-placement":"bottom-end","filter-multiple":!1},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:e.getColor(t.row.vehicle_state),"disable-transitions":""}},[e._v(e._s(t.row.vehicle_state))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"卖家名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[e._v("手机号: "+e._s(t.row.phone))]),e._v(" "),n("p",[e._v("账号: "+e._s(t.row.acc))]),e._v(" "),n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.name))])],1)])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",disabled:"已下架"===t.row.vehicle_state},on:{click:function(n){return e.handleOut(t.$index,t.row)}}},[e._v("下架")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pagesize,"page-sizes":[4,8,16,32],layout:"total, sizes, prev, pager, next, jumper",total:e.oldCar.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var r=n("VU/8")(l,o,!1,function(e){n("/PJ/")},null,null);t.default=r.exports}});
//# sourceMappingURL=16.d654456128c2c699e100.js.map