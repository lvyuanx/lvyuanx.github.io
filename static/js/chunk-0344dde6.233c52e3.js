(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0344dde6"],{"00b4":function(t,e,a){"use strict";a("ac1f");var r=a("23e7"),s=a("da84"),i=a("c65b"),o=a("e330"),c=a("1626"),n=a("861d"),l=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),m=s.Error,g=o(/./.test);r({target:"RegExp",proto:!0,forced:!l},{test:function(t){var e=this.exec;if(!c(e))return g(this,t);var a=i(e,this,t);if(null!==a&&!n(a))throw new m("RegExp exec method returned something other than an Object or null");return!!a}})},"463a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("RegisterTable"),a("Footer")],1)},s=[],i=a("6550"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row p-1"},[a("div",{staticClass:"col-2"},[a("h3",[a("i",{staticClass:"bi bi-arrow-left font-weight-bold text-durk mt-1",on:{click:t.toPreviousPage}})])]),t._m(0),a("div",{staticClass:"col-sm-12 mt-2"},[a("form",{staticClass:"row",attrs:{action:"#"}},[a("div",{staticClass:"form-group col-sm-12"},[a("label",{attrs:{for:"loginName"}},[a("strong",{staticClass:"text-danger"},[t._v("*")]),t._v("登录名:"),a("small",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg.loginNameTip))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.loginName,expression:"registerData.loginName"}],staticClass:"form-control",attrs:{type:"text",id:"loginName"},domProps:{value:t.registerData.loginName},on:{change:t.checkloginName,input:function(e){e.target.composing||t.$set(t.registerData,"loginName",e.target.value)}}})]),a("div",{staticClass:"form-group col-sm-12"},[a("label",{attrs:{for:"nickName"}},[a("strong",{staticClass:"text-danger"},[t._v("*")]),t._v("昵称:"),a("small",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg.nickNameTip))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.nickName,expression:"registerData.nickName"}],staticClass:"form-control",attrs:{type:"text",id:"nickName"},domProps:{value:t.registerData.nickName},on:{change:t.checkNickName,input:function(e){e.target.composing||t.$set(t.registerData,"nickName",e.target.value)}}})]),a("div",{staticClass:"form-group col-sm-12"},[a("label",{attrs:{for:"realName"}},[a("strong",{staticClass:"text-danger"},[t._v("*")]),t._v("真实姓名:"),a("small",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg.realNameTip))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.realName,expression:"registerData.realName"}],staticClass:"form-control",attrs:{type:"text",id:"realName"},domProps:{value:t.registerData.realName},on:{change:t.checkRealName,input:function(e){e.target.composing||t.$set(t.registerData,"realName",e.target.value)}}})]),a("div",{staticClass:"form-group col-sm-12"},[a("label",{attrs:{for:"password"}},[a("strong",{staticClass:"text-danger"},[t._v("*")]),t._v("密码:"),a("small",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg.passwordTip))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.password,expression:"registerData.password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t.registerData.password},on:{change:t.checkPassword,input:function(e){e.target.composing||t.$set(t.registerData,"password",e.target.value)}}})]),a("div",{staticClass:"form-group col-sm-12"},[a("label",{attrs:{for:"confirmPassword"}},[a("strong",{staticClass:"text-danger"},[t._v("*")]),t._v("确认密码:"),a("small",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg.confirmPasswordTip))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.confirmPassword,expression:"registerData.confirmPassword"}],staticClass:"form-control",attrs:{type:"password",id:"confirmPassword"},domProps:{value:t.registerData.confirmPassword},on:{change:t.checkConfirmPassword,input:function(e){e.target.composing||t.$set(t.registerData,"confirmPassword",e.target.value)}}})]),a("div",{staticClass:"form-group col-sm-12"},[a("van-radio-group",{attrs:{direction:"horizontal"},model:{value:t.registerData.sex,callback:function(e){t.$set(t.registerData,"sex",e)},expression:"registerData.sex"}},[a("van-radio",{attrs:{name:1}},[t._v("男")]),a("van-radio",{attrs:{name:0}},[t._v("女")])],1)],1),a("div",{staticClass:"form-group col-sm-12"},[a("label",{attrs:{for:"mobil"}},[a("strong",{staticClass:"text-danger"},[t._v("*")]),t._v("手机号码:"),a("small",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg.mobilTip))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.mobil,expression:"registerData.mobil"}],staticClass:"form-control",attrs:{type:"number",id:"mobil"},domProps:{value:t.registerData.mobil},on:{change:t.checkMobil,input:function(e){e.target.composing||t.$set(t.registerData,"mobil",e.target.value)}}})]),a("div",{staticClass:"form-group col-sm-12"},[a("label",{attrs:{for:"tel"}},[t._v("固定电话:"),a("small",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg.telTip))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.tel,expression:"registerData.tel"}],staticClass:"form-control",attrs:{type:"text",id:"tel"},domProps:{value:t.registerData.tel},on:{change:t.checkTel,input:function(e){e.target.composing||t.$set(t.registerData,"tel",e.target.value)}}})]),a("div",{staticClass:"form-group col-sm-12"},[a("label",{attrs:{for:"tel"}},[t._v("电子邮箱:"),a("small",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg.emailTip))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.email,expression:"registerData.email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.registerData.email},on:{change:t.checkEmail,input:function(e){e.target.composing||t.$set(t.registerData,"email",e.target.value)}}})]),a("div",{staticClass:"form-group col-6"},[a("label",{attrs:{for:"captcha"}},[a("strong",{staticClass:"text-danger"},[t._v("*")]),t._v("验证码:"),a("small",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg.capthcaTip))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.captcha,expression:"registerData.captcha"}],staticClass:"form-control",attrs:{type:"text",id:"captcha"},domProps:{value:t.registerData.captcha},on:{change:t.checkCaptcha,input:function(e){e.target.composing||t.$set(t.registerData,"captcha",e.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"captchaTip"}},[t._v("点击图片刷新验证码！")])]),a("div",{staticClass:"from-group col-6"},[a("img",{staticClass:"img-fluid border rounded-lg",attrs:{src:t.captchaImg,alt:"验证码"},on:{click:t.initCaptcha}})]),a("div",{staticClass:"form-group col-sm-12 mt-4"},[a("button",{staticClass:"btn btn-info mt-2 btn-block",attrs:{type:"button"},on:{click:t.register}},[t._v(" 注册 ")])])])]),a("div",{staticClass:"col-12"})])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("h2",{staticClass:"text-center text-primary"},[t._v("用户注册")])])}],n=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("ac1f"),a("00b4"),a("498a"),a("7c15")),l={name:"RegisterTable",data:function(){return{captchaImg:"",registerData:{loginName:"",password:"",confirmPassword:"",sex:1,mobil:"",tel:"",email:"",captcha:"",realName:"",purpose:"register_captcha",captchaId:"",nickName:""},errorMsg:{loginNameTip:"",passwordTip:"",confirmPasswordTip:"",sexTip:1,mobilTip:"",realNameTip:"",telTip:"",emailTip:"",nickNameTip:"",capthcaTip:""}}},mounted:function(){this.initCaptcha()},methods:{initCaptcha:function(){var t=this,e=this.getStore("register_captcha_id");null==this.getStore("register_captcha_id")&&(e=this.$uuid.v1(),this.setStore("register_captcha_id",e)),Object(n["f"])({purpose:"register_captcha",id:e,v:Math.random()},{}).then((function(e){t.captchaImg=window.URL.createObjectURL(e)}))},toPreviousPage:function(){this.$router.go(-1)},checkloginName:function(){var t=/^[a-zA-Z0-9_-]{4,8}$/;this.registerData.loginName.length;t.test(this.registerData.loginName)?this.isRepeat():(this.errorMsg.loginNameTip="用户名格式错误：4到8位（字母，数字，下划线，减号）！",this.registerData.loginName="")},checkPassword:function(){var t=/^.*(?=.{6,8})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;t.test(this.registerData.password)?this.errorMsg.passwordTip="":(this.errorMsg.passwordTip="请输入6~8位包含大小写字母数字特殊字符！",this.registerData.password="")},checkConfirmPassword:function(){this.registerData.password!=this.registerData.confirmPassword?(this.errorMsg.confirmPasswordTip="两次输入的密码不一致！",this.registerData.confirmPassword=""):this.errorMsg.confirmPasswordTip=""},checkTel:function(){var t=/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/;t.test(this.registerData.tel)?this.errorMsg.telTip="":(this.errorMsg.telTip="电话号码格式不正确！",this.registerData.tel="")},checkMobil:function(){var t=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;t.test(this.registerData.mobil)?this.errorMsg.mobilTip="":(this.errorMsg.mobilTip="手机号码格式不正确！",this.registerData.mobil="")},checkEmail:function(){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;t.test(this.registerData.email)?this.errorMsg.emailTip="":(this.errorMsg.emailTip="邮箱格式不正确！",this.registerData.email="")},checkNickName:function(){var t=/^(?:[\u4e00-\u9fa5·A-Za-z0-9]{2,7})$/;t.test(this.registerData.nickName)?this.errorMsg.nickNameTip="":(this.errorMsg.nickNameTip="昵称格式不正确！(昵称格式：最长不得超过7个汉字，或14个字节(数字，字母))",this.registerData.nickName="")},checkRealName:function(){var t=/^(?:[\u4e00-\u9fa5·A-Za-z0-9]{2,7})$/;t.test(this.registerData.realName)?this.errorMsg.realNameTip="":(this.errorMsg.realNameTip="姓名格式不正确！",this.registerData.realName="")},checkCaptcha:function(){var t=/^[A-Za-z0-9]+$/;t.test(this.registerData.captcha)?this.errorMsg.capthcaTip="":(this.errorMsg.capthcaTip="验证码不正确",this.registerData.captcha="")},isRepeat:function(){var t=this,e={loginName:this.registerData.loginName};Object(n["B"])({},e).then((function(e){"重复!"==e.message?(t.errorMsg.loginNameTip="用户名重复!",t.registerData.loginName=""):"未重复!"==e.message&&(t.errorMsg.loginNameTip="")}))},register:function(){var t=this,e=this.judgment();if(e){var a=this;this.registerData.captchaId=this.getStore("register_captcha_id"),Object(n["I"])({},this.registerData).then((function(e){a.initCaptcha(),200===e.code?(a.$toast.success(e.message),t.$router.go(-1)):a.$toast.fail(e.message)}))}},judgment:function(){var t=this.registerData,e=this.errorMsg,a=!0;return""===t.loginName.trim()&&(e.loginNameTip="用户名不能为空！",a=!1),""===t.realName.trim()&&(e.realNameTip="真实姓名不能为空！",a=!1),""===t.password.trim()&&(e.passwordTip="密码不能为空！",a=!1),""===t.nickName.trim()&&(e.nickNameTip="昵称不能为空！",a=!1),""===t.confirmPassword.trim()&&(e.confirmPasswordTip="确认密码不能为空！",a=!1),""===t.mobil.trim()&&(e.mobilTip="手机号码不能为空！",a=!1),""===t.captcha.trim()&&(e.capthcaTip="验证码不能为空！",a=!1),a}}},m=l,g=a("2877"),p=Object(g["a"])(m,o,c,!1,null,null,null),d=p.exports,u={name:"Register",components:{Footer:i["a"],RegisterTable:d}},h=u,v=Object(g["a"])(h,r,s,!1,null,null,null);e["default"]=v.exports},"498a":function(t,e,a){"use strict";var r=a("23e7"),s=a("58a8").trim,i=a("c8d2");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return s(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("e330"),s=a("1d80"),i=a("577e"),o=a("5899"),c=r("".replace),n="["+o+"]",l=RegExp("^"+n+n+"*"),m=RegExp(n+n+"*$"),g=function(t){return function(e){var a=i(s(e));return 1&t&&(a=c(a,l,"")),2&t&&(a=c(a,m,"")),a}};t.exports={start:g(1),end:g(2),trim:g(3)}},6550:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"row pt2 pb-1"},[a("div",{staticClass:"col-12 text-center"},[a("small",[t._v("©2022 lvyx 武汉东湖学院 版权所有")])])])}],i={name:"Footer"},o=i,c=a("2877"),n=Object(c["a"])(o,r,s,!1,null,null,null);e["a"]=n.exports},c8d2:function(t,e,a){var r=a("5e77").PROPER,s=a("d039"),i=a("5899"),o="​᠎";t.exports=function(t){return s((function(){return!!i[t]()||o[t]()!==o||r&&i[t].name!==t}))}}}]);
//# sourceMappingURL=chunk-0344dde6.233c52e3.js.map