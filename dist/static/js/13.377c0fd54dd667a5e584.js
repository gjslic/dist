webpackJsonp([13],{"83A8":function(e,t){},bf6f:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("0RrJ"),o=n("9K/l"),s={name:"Home",components:{},data:function(){return{staffAcc:"",rid:"",menuData:[]}},created:function(){this.getKoken()},methods:{getMenu:function(){var e=this,t={rid:this.rid};Object(o.b)("/info/Center/getMenu",t).then(function(t){if(1==t.data.code){for(var n=t.data.data[0].menu_id.split(","),a=[],o=0;o<n.length;o++)for(var s=0;s<t.data.menu.length;s++)n[o]==t.data.menu[s].id&&a.push(t.data.menu[s]);e.menuData=a}else e.$message({message:t.data.data.msg})}).catch(function(e){console.log(e)})},loginOut:function(){var e=this;this.$confirm("此操作将退出后台登录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=JSON.parse(localStorage.getItem("token"));Object(a.e)({method:"post",url:"alogin/index/delToken",headers:{"Access-Token":t}}).then(function(t){1==t.data.code?(e.$message.success({message:t.data.msg}),e.$router.replace("/AdminLogin")):e.$message({message:"退出失败"})}).catch(function(e){console.log(e)})}).catch(function(){e.$message({type:"info",message:"已取消"})})},getKoken:function(){var e=this,t=JSON.parse(localStorage.getItem("token"));Object(a.e)({method:"post",url:"alogin/index/validateToken",headers:{"Access-Token":t}}).then(function(t){if(1==t.data.code){var n=JSON.parse(t.data.data);e.staffAcc=n[0].name,e.rid=n[0].role_id,e.getMenu()}else e.$message({message:"请先登录"}),e.$router.push("/AdminLogin")}).catch(function(e){console.log(e)})}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticStyle:{height:"100vh"}},[n("el-header",{staticStyle:{color:"#fff"}},[n("span",{staticStyle:{float:"left","font-size":"24px"}},[e._v("Peanut后台管理系统")]),e._v(" "),n("div",{staticStyle:{float:"right"}},[n("i",{staticClass:"el-icon-switch-button layOut",on:{click:e.loginOut}}),e._v(" "),n("el-dropdown",[n("span",{staticStyle:{"margin-right":"15px",color:"#fff","font-size":"16px"}},[e._v(e._s(e.staffAcc))]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/AdminInfo"}},[n("el-dropdown-item",[e._v("个人中心")])],1)],1)],1)],1)]),e._v(" "),n("el-container",{staticStyle:{height:"500px",border:"1px solid #eee"}},[n("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},e._l(e.menuData,function(t,a){return n("el-menu",{key:a,attrs:{router:"","default-active":e.$route.path}},[0==t.fid&&0==t.child?n("el-menu-item",{attrs:{index:t.menu_url}},[n("i",{class:t.menu_class}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.menu_name))])]):0==t.fid&&1==t.child?n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{class:t.menu_class}),e._v(" "),n("span",[e._v(e._s(t.menu_name))])]),e._v(" "),e._l(e.menuData,function(a,o){return n("div",{key:o},[a.fid==t.id?n("el-menu-item-group",[n("el-menu-item",{attrs:{index:a.menu_url}},[e._v(e._s(a.menu_name))])],1):e._e()],1)})],2):e._e()],1)}),1),e._v(" "),n("el-container",[n("el-main",[n("router-view")],1)],1)],1),e._v(" "),n("el-footer",{staticClass:"foot-style"},[e._v("© Peanut - 所有权归花生")])],1)},staticRenderFns:[]};var l=n("VU/8")(s,i,!1,function(e){n("83A8")},null,null);t.default=l.exports}});
//# sourceMappingURL=13.377c0fd54dd667a5e584.js.map