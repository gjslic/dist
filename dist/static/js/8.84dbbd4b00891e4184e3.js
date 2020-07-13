webpackJsonp([8],{"2Wzc":function(e,t){},jFIV:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("9K/l"),o=/^1[3456789]\d{9}$/,a=/^\d{11}$/,l=/^[0-9a-zA-Z]{10,18}$/,i={name:"Register",components:{AddCode:function(){return r.e(31).then(r.bind(null,"dIA/"))}},data:function(){var e=this;return{fits:["fill"],url:"https://www.mercedes-benz.com.cn/content/dam/mb-cn/vehicles/sedan/e-class-l/feature1.jpg",identifyCodes:"0123456789qwertyuiopasdfghjklzxcvbnm",identifyCode:"",ruleForm:{name:"",phone:"",account:"",password:"",newPassword:"",code:""},rules:{name:[{validator:function(e,t,r){""===t&&r(new Error("请输入注册名称"))},trigger:"blur"}],phone:[{validator:function(e,t,r){""===t?r(new Error("请输入手机号")):null==t.match(o)&&r(new Error("请输入正确的手机号"))},trigger:"blur"}],account:[{validator:function(e,t,r){""===t?r(new Error("请输入注册账号")):null==t.match(a)&&r(new Error("请输入正确的注册账号"))},trigger:"blur"}],password:[{validator:function(t,r,s){""===r?s(new Error("请输入注册密码")):null==r.match(l)?s(new Error("请输入10~18位,字母与数字组合")):(""!==e.ruleForm.newPassword&&e.$refs.ruleForm.validateField("newPassword"),s())},trigger:"blur"}],newPassword:[{validator:function(t,r,s){""===r?s(new Error("请再次输入密码")):r!==e.ruleForm.password?s(new Error("两次输入密码不一致!")):s()},trigger:"blur"}],code:[{validator:function(e,t,r){""===t&&r(new Error("请输入注册验证码"))},trigger:"blur"}]}}},mounted:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},methods:{register:function(){var e=this;if(""==this.ruleForm.name)this.$message.error({message:"未输入名称",center:!0});else if(""==this.ruleForm.phone)this.$message.error({message:"未输入手机号",center:!0});else if(null==this.ruleForm.phone.match(o))this.$message({message:"手机号格式输入错误",type:"warning",center:!0});else if(""==this.ruleForm.account)this.$message.error({message:"未输入注册账号",center:!0});else if(null==this.ruleForm.account.match(a))this.$message({message:"注册账号格式输入错误",type:"warning",center:!0});else if(""==this.ruleForm.password)this.$message.error({message:"未输入注册密码",center:!0});else if(null==this.ruleForm.password.match(l))this.$message({message:"注册密码格式输入错误",type:"warning",center:!0});else if(this.ruleForm.password!=this.ruleForm.newPassword)this.$message({message:"俩次密码不相同",type:"warning",center:!0});else if(""==this.ruleForm.code)this.$message.error({message:"未输入验证码",center:!0});else if(this.identifyCode!=this.ruleForm.code)this.$message({message:"验证码不正确",type:"warning",center:!0});else{var t={acc:this.ruleForm.account,name:this.ruleForm.name,phone:this.ruleForm.phone,password:this.ruleForm.password};Object(s.b)("/register/Register/register",t).then(function(t){1==t.data.code?(e.$router.push("/Login"),e.$message({message:t.data.msg,type:"success",center:!0})):e.$message({message:t.data.msg,type:"warning",center:!0})}).catch(function(e){console.log(e)})}},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()},randomNum:function(e,t){return Math.floor(Math.random()*(t-e)+e)},refreshCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},makeCode:function(e,t){for(var r=0;r<t;r++)this.identifyCode+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)]}}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"Register"}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules}},[r("el-row",{staticClass:"margin_bottom_20"},[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"grid-content bg-purple-dark"},[r("div",{staticClass:"demo-image"},e._l(e.fits,function(t){return r("div",{key:t,staticClass:"block"},[r("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.url,fit:t}})],1)}),0)])])],1),e._v(" "),r("el-row",{staticClass:"margin_bottom_20",attrs:{gutter:20}},[r("el-col",{staticStyle:{"text-align":"center"},attrs:{span:18,offset:3}},[r("el-link",{attrs:{type:"primary",underline:!1}},[r("i",{staticClass:"el-icon-s-management font_size_30"}),r("span",{staticClass:"font_size_30"},[e._v("花生二手车用户注册")])])],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:18,offset:3}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-form-item",{attrs:{prop:"name"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入名称5位中英数字都可以",maxlength:"5","show-word-limit":"",onkeyup:"value=value.replace(/[^\\w\\u4E00-\\u9FA5]/g, '')"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}},[r("i",{staticClass:"el-input__icon el-icon-user",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1)])],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:18,offset:3}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-form-item",{attrs:{prop:"phone"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入手机号",maxlength:"11","show-word-limit":"",onkeyup:"this.value=this.value.replace(/\\D/g,'')"},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}},[r("i",{staticClass:"el-input__icon el-icon-phone-outline",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1)])],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:18,offset:3}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-form-item",{attrs:{prop:"account"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入账号11位数字",maxlength:"11","show-word-limit":"",onkeyup:"this.value=this.value.replace(/\\D/g,'')"},model:{value:e.ruleForm.account,callback:function(t){e.$set(e.ruleForm,"account",t)},expression:"ruleForm.account"}},[r("i",{staticClass:"el-input__icon el-icon-key",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1)])],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:18,offset:3}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码10~18位字母数字",autocomplete:"off","show-password":"",onKeyUp:"value=value.replace(/[\\W]/g,'')"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}},[r("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1)])],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:18,offset:3}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-form-item",{attrs:{prop:"newPassword"}},[r("el-input",{attrs:{type:"password",placeholder:"确认密码",autocomplete:"off","show-password":"",onKeyUp:"value=value.replace(/[\\W]/g,'')"},model:{value:e.ruleForm.newPassword,callback:function(t){e.$set(e.ruleForm,"newPassword",t)},expression:"ruleForm.newPassword"}},[r("i",{staticClass:"el-input__icon el-icon-unlock",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1)])],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:10,offset:3}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-form-item",{attrs:{prop:"code"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入验证码",maxlength:"4","show-word-limit":"",onKeyUp:"value=value.replace(/[\\W]/g,'')"},model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",t)},expression:"ruleForm.code"}},[r("i",{staticClass:"el-input__icon el-icon-edit",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1)]),e._v(" "),r("el-col",{attrs:{span:6,offset:0}},[[r("div",{on:{click:e.refreshCode}},[r("AddCode",{attrs:{identifyCode:e.identifyCode}})],1)]],2)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:18,offset:3}},[r("el-button",{staticClass:"button",attrs:{type:"primary",plain:!0},on:{click:e.register}},[e._v("确认注册")])],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:18,offset:3}},[r("el-form-item",[r("router-link",{staticClass:"Jump_Login",attrs:{to:"/Login"}},[r("el-link",{attrs:{type:"primary",underline:!1}},[e._v("已有账号？点我登录")])],1),e._v(" "),r("router-link",{staticClass:"Jump_Login margin_r_5",attrs:{to:"/"}},[r("el-link",{attrs:{type:"warning",underline:!1}},[e._v("返回首页")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=r("VU/8")(i,n,!1,function(e){r("2Wzc"),r("m0As")},"data-v-779f017c",null);t.default=c.exports},m0As:function(e,t){}});
//# sourceMappingURL=8.84dbbd4b00891e4184e3.js.map