(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-366a6bac"],{"0b42":function(e,t,n){var a=n("da84"),r=n("e8b5"),o=n("68ee"),l=n("861d"),s=n("b622"),i=s("species"),u=a.Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,o(t)&&(t===u||r(t.prototype))?t=void 0:l(t)&&(t=t[i],null===t&&(t=void 0))),void 0===t?u:t}},"1dde":function(e,t,n){var a=n("d039"),r=n("b622"),o=n("2d00"),l=r("species");e.exports=function(e){return o>=51||!a((function(){var t=[],n=t.constructor={};return n[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"498a":function(e,t,n){"use strict";var a=n("23e7"),r=n("58a8").trim,o=n("c8d2");a({target:"String",proto:!0,forced:o("trim")},{trim:function(){return r(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var a=n("e330"),r=n("1d80"),o=n("577e"),l=n("5899"),s=a("".replace),i="["+l+"]",u=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),f=function(e){return function(t){var n=o(r(t));return 1&e&&(n=s(n,u,"")),2&e&&(n=s(n,c,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},"65f0":function(e,t,n){var a=n("0b42");e.exports=function(e,t){return new(a(e))(0===t?0:t)}},a434:function(e,t,n){"use strict";var a=n("23e7"),r=n("da84"),o=n("23cb"),l=n("5926"),s=n("07fa"),i=n("7b0b"),u=n("65f0"),c=n("8418"),f=n("1dde"),d=f("splice"),p=r.TypeError,m=Math.max,v=Math.min,b=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,a,r,f,d,x,g=i(this),I=s(g),k=o(e,I),$=arguments.length;if(0===$?n=a=0:1===$?(n=0,a=I-k):(n=$-2,a=v(m(l(t),0),I-k)),I+n-a>b)throw p(h);for(r=u(g,a),f=0;f<a;f++)d=k+f,d in g&&c(r,f,g[d]);if(r.length=a,n<a){for(f=k;f<I-a;f++)d=f+a,x=f+n,d in g?g[x]=g[d]:delete g[x];for(f=I;f>I-a+n;f--)delete g[f-1]}else if(n>a)for(f=I-a;f>k;f--)d=f+a-1,x=f+n-1,d in g?g[x]=g[d]:delete g[x];for(f=0;f<n;f++)g[f+k]=arguments[f+2];return g.length=I-a+n,r}})},a5d7:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-sticky",{attrs:{"offset-top":0}},[n("van-nav-bar",{attrs:{title:e.title,"left-text":e.leftText,"left-arrow":e.leftArrow,fixed:"",placeholder:""},on:{"click-left":e.onClickLeft,"click-right":e.onClickRight},scopedSlots:e._u([e.rightArrow?{key:"right",fn:function(){return[n("van-icon",{attrs:{name:"wap-home-o",size:"18"}})]},proxy:!0}:null],null,!0)})],1)},r=[],o=(n("ac1f"),n("5319"),{name:"NavTopBar",props:["title","leftArrow","rightArrow"],data:function(){return{leftTextStr:"返回"}},methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){this.$router.replace({name:"home"})}},computed:{leftText:function(){return this.leftArrow?this.leftTextStr:""}}}),l=o,s=n("2877"),i=Object(s["a"])(l,a,r,!1,null,"72fa6fb3",null);t["a"]=i.exports},c157:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%"}},[n("NavTopBar",{attrs:{title:"信息修改",leftArrow:!0,rightArrow:!0}}),n("van-form",{on:{submit:e.onSubmit}},[n("van-field",{attrs:{name:"uploader",label:"文件上传"},scopedSlots:e._u([{key:"input",fn:function(){return[n("van-uploader",{attrs:{multiple:"","max-count":1,"max-size":512e3,"after-read":e.afterRead},on:{oversize:e.onOversize},model:{value:e.uploader,callback:function(t){e.uploader=t},expression:"uploader"}})]},proxy:!0}])}),n("van-field",{attrs:{name:"登录名",label:"登录名",placeholder:"请输入登录名",readonly:"",rules:[{pattern:e.uPattern,message:"登录名格式错误：4到8位（字母，数字，下划线，减号）！"}]},model:{value:e.userInfo.loginName,callback:function(t){e.$set(e.userInfo,"loginName",t)},expression:"userInfo.loginName"}}),n("van-field",{attrs:{name:"昵称",label:"昵称",placeholder:"请输入昵称",rules:[{pattern:e.nPattern,message:"昵称格式不正确！(昵称格式：最长不得超过7个汉字，或14个字节(数字，字母))"}]},model:{value:e.userInfo.nickName,callback:function(t){e.$set(e.userInfo,"nickName",t)},expression:"userInfo.nickName"}}),n("van-field",{attrs:{name:"真实姓名",label:"真实姓名",placeholder:"请输入真实姓名",rules:[{pattern:e.nPattern,message:"姓名格式不正确！"}]},model:{value:e.userInfo.realName,callback:function(t){e.$set(e.userInfo,"realName",t)},expression:"userInfo.realName"}}),n("van-field",{attrs:{name:"radio",label:"性别"},scopedSlots:e._u([{key:"input",fn:function(){return[n("van-radio-group",{attrs:{direction:"horizontal"},model:{value:e.userInfo.sex,callback:function(t){e.$set(e.userInfo,"sex",t)},expression:"userInfo.sex"}},[n("van-radio",{attrs:{name:1}},[e._v("男")]),n("van-radio",{attrs:{name:0}},[e._v("女")])],1)]},proxy:!0}])}),n("van-field",{attrs:{type:"email",name:"电子邮箱",label:"电子邮箱",placeholder:"请输入电子邮箱",rules:[{pattern:e.ePattern,message:"电子邮箱格式不正确"}]},model:{value:e.userInfo.email,callback:function(t){e.$set(e.userInfo,"email",t)},expression:"userInfo.email"}}),n("van-field",{attrs:{type:"number",name:"手机号码",label:"手机号码",placeholder:"请输入手机号码",rules:[{pattern:e.mPattern,message:"手机号码格式不正确"}]},model:{value:e.userInfo.mobil,callback:function(t){e.$set(e.userInfo,"mobil",t)},expression:"userInfo.mobil"}}),n("van-field",{attrs:{name:"电话号码",label:"电话号码",placeholder:"请输入电话号码",rules:[{pattern:e.tPattern,message:"电话号码格式不正确"}]},model:{value:e.userInfo.tel,callback:function(t){e.$set(e.userInfo,"tel",t)},expression:"userInfo.tel"}}),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1)],1)},r=[],o=(n("498a"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("ac1f"),n("5319"),n("a434"),n("a5d7")),l=n("7c15"),s={name:"UpdateUserInfo",components:{NavTopBar:o["a"]},data:function(){return{uploader:[],userInfo:{},uPattern:/^[a-zA-Z0-9_-]{4,8}$/,pPattern:/^.*(?=.{6,8})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,tPattern:/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/,mPattern:/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,ePattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,nPattern:/^(?:[\u4e00-\u9fa5·A-Za-z0-9]{2,7})$/}},created:function(){var e=this;Object(l["C"])().then((function(t){var n;e.userInfo=t.data,null!=e.userInfo.avatar&&""!=e.userInfo.avatar.trim()&&(n=t.data.avatar,Object(l["y"])({path:n}).then((function(t){e.uploader.push({url:window.URL.createObjectURL(t),isImage:!0})})))}))},methods:{onSubmit:function(){var e=this;Object(l["P"])({},this.userInfo).then((function(t){200===t.code?e.$dialog.alert({message:"身份信息已经发生变更，请重新登录"}).then((function(){Object(l["E"])().then((function(t){200==t.code?(e.$toast.success(t.message),e.$router.replace({path:"/"})):e.$toast.fail(t.message)}))})):e.$toast.fail(t.message)}))},onOversize:function(){this.$toast.fail("文件太大了，请重新选择"),this.uploader.splice(0,1)},afterRead:function(e){var t=this,n=new FormData;n.append("file",e.file),n.append("purpose","avatar"),console.log(n),Object(l["Q"])(n).then((function(e){t.userInfo.avatar=e.data}))}}},i=s,u=n("2877"),c=Object(u["a"])(i,a,r,!1,null,null,null);t["default"]=c.exports},c8d2:function(e,t,n){var a=n("5e77").PROPER,r=n("d039"),o=n("5899"),l="​᠎";e.exports=function(e){return r((function(){return!!o[e]()||l[e]()!==l||a&&o[e].name!==e}))}},e8b5:function(e,t,n){var a=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}}}]);
//# sourceMappingURL=chunk-366a6bac.04cd1a7f.js.map