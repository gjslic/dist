webpackJsonp([5],{"1KW/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),i=a.n(s),n=a("bOdI"),o=a.n(n),l=a("9K/l"),c=a("0RrJ"),r={name:"Detail",components:{CarNavTitle:function(){return a.e(38).then(a.bind(null,"sI1i"))},BuyCarServer:function(){return a.e(40).then(a.bind(null,"8wh8"))},CarInfoImg:function(){return a.e(35).then(a.bind(null,"006k"))},Menu:function(){return a.e(30).then(a.bind(null,"ZdAc"))},Bottom:function(){return a.e(29).then(a.bind(null,"2ndn"))}},data:function(){var t;return t={vid:this.$route.query,allInfo:{},orderArr:[],uid:"",tid:"",remarkData:[],likeData:[],currentPage:1,pagesize:2,drawer:!1,direction:"ttb",active:0,isClick:!1,isCollect:!0,userId:"",inputMsg:"",taleList:[],tool:{show:["file","history","img"],callback:this.toolEvent,showEmoji:!0},userInfo:{},receiveId:""},o()(t,"userId",""),o()(t,"chatShow",!1),o()(t,"config",{img:"",name:"",dept:"良心卖家、值得信赖",callback:this.headerEvent}),t},mounted:function(){this.getCarInfo(),this.isLogin()},methods:{isChatFn:function(){var t=this,e=localStorage.getItem("tokenVue");Object(c.e)({method:"post",url:"login/Login/validateToken",headers:{"Access-Token":e}}).then(function(e){1==e.data.code?t.chatShow=!0:(t.$message({message:"请先登录"}),t.$router.push("/Login"))}).catch(function(t){console.log(t)})},bindEnter:function(){var t=this.inputMsg;if(t){var e={date:(new Date).toLocaleDateString()+(new Date).toLocaleTimeString(),text:{text:t},mine:!0,name:this.userInfo.name,img:this.userInfo.head_img};console.log(this.allInfo),console.log(11111),console.log(this.taleList),this.taleList.push(e);var a={type:"infor",sender:this.userId,receiver:this.allInfo.sell_id,container:t,name:this.userInfo.name,img:this.userInfo.head_img,mine:!1},s=i()(a);console.log(s),this.socket.send(s)}},toolEvent:function(t){console.log("tools",t)},init:function(){"undefined"==typeof WebSocket?alert("您的浏览器不支持socket"):(this.socket=new WebSocket("ws://127.0.0.1:3000"),this.socket.onopen=this.open,this.socket.onerror=this.error,this.socket.onmessage=this.getMessage)},open:function(){console.log("socket连接成功"),this.send()},error:function(){console.log("连接错误")},getMessage:function(t){var e=JSON.parse(t.data);this.taleList.push(e.container),this.config.img=e.container.img,this.config.name=e.container.name,this.uid=e.id,console.log(e.id)},send:function(){var t={type:"show",account:this.userId},e=i()(t);console.log(e),this.socket.send(e)},close:function(){console.log("socket已经关闭")},destroyed:function(){this.socket.onclose=this.close},isLogin:function(){var t=this,e=localStorage.getItem("tokenVue");Object(c.e)({method:"post",url:"login/Login/validateToken",headers:{"Access-Token":e}}).then(function(e){if(1==e.data.code){var a=JSON.parse(e.data.data).id;t.userId=a,t.getUser(),t.init(),a==t.uid&&(t.isClick=!0),t.isloginAnd()}}).catch(function(t){console.log(t)})},getUser:function(){var t=this,e={id:this.userId};Object(l.b)("/detail/index/getUser",e).then(function(e){1==e.data.code&&(t.userInfo=e.data.data)}).catch(function(t){console.log(t)})},isloginAnd:function(){var t=this,e={id:this.userId,vid:this.vid.vehicleID};Object(l.b)("/detail/index/isloginAnd",e).then(function(e){1==e.data.code&&(t.isCollect=!1)}).catch(function(t){console.log(t)})},getCarInfo:function(){var t=this,e={id:this.vid.vehicleID};Object(l.b)("/detail/index/get",e).then(function(e){1==e.data.code&&(t.allInfo=e.data.data[0],t.config.img=t.allInfo.head_img,t.config.name=t.allInfo.name,t.orderArr=e.data.data,t.uid=e.data.data[0].sell_id,t.tid=e.data.data[0].tab_id,t.getRemark(),t.getLike(),t.isLogin())}).catch(function(t){console.log(t)})},getRemark:function(){var t=this,e={uid:this.uid};Object(l.b)("/detail/index/remark",e).then(function(e){1==e.data.code&&(t.remarkData=e.data.data)}).catch(function(t){console.log(t)})},getLike:function(){var t=this,e={tid:this.tid};Object(l.b)("/detail/index/like",e).then(function(e){1==e.data.code&&(t.likeData=e.data.data)}).catch(function(t){console.log(t)})},handleCurrentChange:function(t){this.currentPage=t},detail:function(t){console.log(t),this.$router.push({name:"Detail",query:{vehicleID:t}}),window.location.reload(),window.scrollTo(0,0)},handelbBuy:function(){"已下架"==this.allInfo.vehicle_state?(this.$message.error("该商品已下架"),this.$router.push("/")):null==window.localStorage.getItem("tokenVue")?(this.$message("请先登录"),this.$router.push("/Login")):this.getToken()},getToken:function(){var t=this,e=localStorage.getItem("tokenVue");Object(c.e)({method:"post",url:"login/Login/validateToken",headers:{"Access-Token":e}}).then(function(e){if(1==e.data.code){var a=JSON.parse(e.data.data).id;t.userId=a,t.drawer=!0}else t.$message({message:"请先登录"}),t.$router.push("/Login")}).catch(function(t){console.log(t)})},handleOrder:function(){var t=this;this.active=this.active+1;var e={userId:this.userId,uid:this.uid,vid:this.vid.vehicleID,price:this.allInfo.price};Object(l.b)("/detail/Index/order",e).then(function(e){if(1==e.data.code){var a=t.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(function(){a.close(),t.active=t.active+1,t.$message.success(e.data.msg)},2e3),t.isClick=!0,t.active=t.active+1}else t.$message(e.data.msg)}).catch(function(t){console.log(t)})},handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},handelCollect:function(){var t=this,e=localStorage.getItem("tokenVue");Object(c.e)({method:"post",url:"login/Login/validateToken",headers:{"Access-Token":e}}).then(function(e){if(1==e.data.code){var a=JSON.parse(e.data.data).id;t.userId=a;var s={uid:t.uid,userId:t.userId,vid:t.vid.vehicleID,isCollect:t.isCollect};Object(l.b)("/detail/Index/collect",s).then(function(e){1==e.data.code?(t.$message.success(e.data.msg),t.isCollect=!1):2==e.data.code?(t.$message.success(e.data.msg),t.isCollect=!0):t.$message(e.data.msg)}).catch(function(t){console.log(t)})}else t.$message({message:"请先登录"}),t.$router.push("/Login")}).catch(function(t){console.log(t)})}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Menu"),t._v(" "),s("el-row",[s("el-col",{attrs:{md:12,sm:24}},[s("div",{staticClass:"img_detail"},[s("img",{attrs:{src:t.allInfo.img,alt:""}})])]),t._v(" "),s("el-col",{attrs:{md:12,sm:24}},[s("div",{staticClass:"text_detail"},[s("h1",{staticClass:"car_title"},[t._v(t._s(t.allInfo.vehicle_name))]),t._v(" "),s("p",{staticClass:"car_price"},[s("span",{staticClass:"now_price"},[s("b",[t._v("￥"+t._s(t.allInfo.price)+"万")])]),t._v(" "),s("span",{staticClass:"new_car_price"},[t._v("\n            新车含税价："+t._s((1.5*t.allInfo.price).toFixed(2))+"万\n            "),s("i",{staticClass:"el-icon-info"})])]),t._v(" "),s("p",{staticClass:"car_address"},[s("span",{staticClass:"postage"},[t._v("包物流")]),t._v(" "),s("span",{staticClass:"car_from"},[t._v("由"+t._s(t.allInfo.city_name)+"运往本市")])]),t._v(" "),s("div",{staticClass:"down_payment"},[s("span",[t._v("首付低至"+t._s((.1*t.allInfo.price).toFixed(2))+"万")]),t._v(" "),s("span",[t._v("月供可跟卖家商量")])]),t._v(" "),s("div",{staticClass:"detail_txt hidden-xs-only"},[t._v(t._s(t.allInfo.introduce)+" 上架时间 "+t._s(t.allInfo.vehicle_time))]),t._v(" "),s("div",{staticClass:"btn_box"},[s("el-button",{attrs:{type:"warning"},on:{click:function(e){return t.isChatFn()}}},[s("i",{staticClass:"el-icon-chat-dot-round"}),t._v(" 在线客服\n          ")]),t._v(" "),s("el-button",{attrs:{type:"danger",disabled:t.isClick},on:{click:t.handelbBuy}},[s("i",{staticClass:"el-icon-shopping-bag-1"}),t._v(" 立即购买\n          ")])],1),t._v(" "),s("div",{staticClass:"collect"},[t.isCollect?s("div",{on:{click:t.handelCollect}},[s("i",{staticClass:"el-icon-star-off"}),t._v(" "),s("span",[t._v("点击收藏")])]):s("div",{on:{click:t.handelCollect}},[s("i",{staticClass:"el-icon-star-on"}),t._v(" "),s("span",[t._v("取消收藏")])])])])])],1),t._v(" "),s("div",{staticClass:"buy_server"},[s("CarNavTitle"),t._v(" "),s("BuyCarServer"),t._v(" "),s("CarNavTitle",[t._v("车辆信息")]),t._v(" "),s("CarInfoImg"),t._v(" "),s("CarNavTitle",[t._v("卖家信息")]),t._v(" "),s("div",{staticClass:"sell_info_box"},[s("el-row",[s("el-col",{attrs:{md:24}},[s("p",{staticClass:"sell_title hidden-xs-only"},[t._v("卖家个人信息")])])],1),t._v(" "),s("el-row",[s("div",{staticClass:"top_us"},[s("el-col",{attrs:{md:10}},[s("el-row",[s("el-col",{attrs:{md:10,xs:10,sm:14}},[s("div",{staticClass:"sell_user_img"},[s("img",{attrs:{src:t.allInfo.head_img,alt:""}})])]),t._v(" "),s("el-col",{attrs:{md:14,xs:14,sm:14}},[s("p",{staticClass:"sell_user_name"},[s("span",[t._v(t._s(t.allInfo.name))]),t._v(" "),s("span",[t._v("车辆检测员")])]),t._v(" "),s("p",[s("el-button",{attrs:{type:"warning"},on:{click:function(e){return t.isChatFn()}}},[t._v("在线咨询")])],1)])],1)],1),t._v(" "),s("el-col",{staticClass:"hidden-xs-only hidden-sm-only",attrs:{md:14}},[s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{md:8}},[s("div",{staticClass:"right_item"},[s("span",{staticClass:"credit"},[t._v("信用值："+t._s(t.allInfo.credit)+" 分")])])]),t._v(" "),s("el-col",{attrs:{md:8}},[s("div",{staticClass:"right_item"},[s("span",[t._v("联系方式：")]),t._v(" "),s("span",[t._v(t._s(t.allInfo.phone))])])]),t._v(" "),s("el-col",{attrs:{md:8}},[s("div",{staticClass:"right_item"},[s("span",[t._v("举报")]),t._v(" "),s("p",{staticClass:"star_five"},[s("i",{staticClass:"el-icon-s-flag"})])])])],1)],1)],1)]),t._v(" "),s("el-row",[s("el-col",{attrs:{md:24}},[s("div",{staticClass:"remark_top"},[s("span",{staticClass:"remark"},[t._v("用户评价")])]),t._v(" "),s("ul",t._l(t.remarkData.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),function(e,a){return s("li",{key:a,staticClass:"remark_item"},[s("p",{staticClass:"remark_item_hd"},[s("span",{staticClass:"remark_user_box"},[s("span",[s("img",{attrs:{src:e.head_img,alt:""}})]),t._v(" "),s("span",{staticClass:"u_name"},[t._v(t._s(e.name))]),t._v(" "),s("span",t._l(e.comment_num,function(t,e){return s("i",{key:e,staticClass:"el-icon-star-on"})}),0)]),t._v(" "),s("span",{staticClass:"remark_date"},[t._v(t._s(e.comment_time))])]),t._v(" "),s("p",{staticClass:"remark_content"},[t._v(t._s(e.content))])])}),0),t._v(" "),0==t.remarkData.length?s("div",[s("i",{staticClass:"el-icon-document noData nodataImg"}),t._v(" "),s("p",{staticClass:"noData"},[t._v("暂无数据")])]):t._e(),t._v(" "),s("div",{staticClass:"block"},[s("span",{staticClass:"demonstration"}),t._v(" "),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pagesize,total:t.remarkData.length,"hide-on-single-page":""},on:{"current-change":t.handleCurrentChange}})],1)])],1)],1),t._v(" "),s("CarNavTitle",[t._v("车图描述")]),t._v(" "),s("div",{staticClass:"car_img_box"},t._l(2,function(e,a){return s("el-row",{key:a,attrs:{gutter:20}},t._l(2,function(e,a){return s("el-col",{key:a,attrs:{xs:24,sm:24,md:12}},[s("div",{staticClass:"car_de_img"},[s("img",{attrs:{src:t.allInfo.img,alt:""}})])])}),1)}),1),t._v(" "),s("CarNavTitle",[t._v("服务保障")]),t._v(" "),s("el-row",[s("el-col",{attrs:{md:24}},[s("div",{staticClass:"server_bg"},[s("img",{attrs:{src:a("6jF1"),alt:""}})])])],1),t._v(" "),s("CarNavTitle",[t._v("猜你喜欢")]),t._v(" "),s("div",{staticClass:"like_box"},[s("el-row",{attrs:{gutter:25}},t._l(t.likeData,function(e,a){return s("el-col",{key:a,staticClass:"like_item",attrs:{xs:12,md:6}},[s("div",{on:{click:function(a){return t.detail(e.vehicle_id)}}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:e.img}}),t._v(" "),s("div",{staticStyle:{padding:"14px"}},[s("span",{staticClass:"carName"},[t._v(t._s(e.vehicle_name))]),t._v(" "),s("p",{staticClass:"time"},[t._v(t._s(e.vehicle_time))]),t._v(" "),s("div",{staticClass:"bottom clearfix"},[s("span",{staticClass:"priceFirst"},[t._v("首付"+t._s((.1*e.price).toFixed(2))+"万")]),t._v(" "),s("el-button",{staticClass:"button",attrs:{type:"warning",plain:"",size:"mini"}},[t._v("立即购买")])],1)])])],1)])}),1)],1)],1),t._v(" "),s("Bottom"),t._v(" "),s("el-drawer",{attrs:{title:"下单信息",visible:t.drawer,direction:t.direction,"before-close":t.handleClose},on:{"update:visible":function(e){t.drawer=e}}},[s("div",{staticStyle:{width:"80%",margin:"20px auto"}},[s("el-steps",{attrs:{active:t.active,"finish-status":"success"}},[s("el-step",{attrs:{title:"下单"}}),t._v(" "),s("el-step",{attrs:{title:"支付"}}),t._v(" "),s("el-step",{attrs:{title:"完成"}})],1),t._v(" "),[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.orderArr,border:""}},[s("el-table-column",{attrs:{prop:"img",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[s("img",{staticStyle:{width:"80%",margin:"0 auto"},attrs:{src:t.row.img}})]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"vehicle_name",label:"车辆名称"}}),t._v(" "),s("el-table-column",{attrs:{prop:"city_name",label:"地址"}}),t._v(" "),s("el-table-column",{attrs:{prop:"price",label:"价格(万)"}})],1)],t._v(" "),s("p",{staticClass:"order_btn"},[s("el-button",{attrs:{disabled:t.isClick},on:{click:t.handleOrder}},[t._v("立即支付")]),t._v(" "),s("el-button",{attrs:{type:"warning"},on:{click:function(e){t.drawer=!1}}},[t._v("关闭")])],1)],2)]),t._v(" "),s("div",{staticClass:"dc_box"},[s("el-dialog",{attrs:{visible:t.chatShow},on:{"update:visible":function(e){t.chatShow=e}}},[s("JwChat-index",{attrs:{config:t.config,taleList:t.taleList,toolConfig:t.tool},on:{enter:t.bindEnter},model:{value:t.inputMsg,callback:function(e){t.inputMsg=e},expression:"inputMsg"}})],1)],1)],1)},staticRenderFns:[]};var u=a("VU/8")(r,d,!1,function(t){a("wwlo"),a("aNB8")},"data-v-6f7e2aba",null);e.default=u.exports},"6jF1":function(t,e,a){t.exports=a.p+"static/img/fwbz_1f13928.1f13928.png"},aNB8:function(t,e){},wwlo:function(t,e){}});
//# sourceMappingURL=5.6559017db647fe4ba9e7.js.map