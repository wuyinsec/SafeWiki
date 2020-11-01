(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{758:function(e,a,s){"use strict";s.r(a);var t=s(103),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"jwt-cookie伪造"}},[e._v("JWT-Cookie伪造 "),s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-cookie伪造"}},[e._v("#")])]),e._v(" "),s("blockquote",[s("p",[e._v("Cookie是用来存储用户信息的")]),e._v(" "),s("p",[e._v("我们通过伪造cookie，可把自己假扮成其它用户(例如admin)，获得他的权限。")])]),e._v(" "),s("h2",{attrs:{id:"伪造原理"}},[e._v("伪造原理 "),s("a",{staticClass:"header-anchor",attrs:{href:"#伪造原理"}},[e._v("#")])]),e._v(" "),s("p",[s("strong",[e._v("JSON WEB Token")]),e._v("（"),s("strong",[e._v("JWT")]),e._v("），是一种基于JSON的、用于在网络上声明某种主张的令牌（token）。")]),e._v(" "),s("p",[e._v("JWT通常由三部分组成: 头信息（header）, 消息体（payload）和签名（signature）")]),e._v(" "),s("p",[e._v("头信息指定了该JWT使用的签名算法:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('header = \'{"alg":"HS256","typ":"JWT"}\'\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("code",[e._v("HS256")]),e._v(" 表示使用了 HMAC-SHA256 来生成签名。")]),e._v(" "),s("p",[e._v("消息体包含了JWT的意图：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('payload = \'{"login":"admin","iat":1422779638}\'//iat表示令牌生成的时间\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("未签名的令牌由"),s("code",[e._v("base64url")]),e._v("编码的头信息和消息体拼接而成（使用”.”分隔），签名则通过私有的key计算而成：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("key = 'secretkey'  unsignedToken = encodeBase64(header) + '.' + encodeBase64(payload)  signature = HMAC-SHA256(key, unsignedToken)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("最后在未签名的令牌尾部拼接上"),s("code",[e._v("base64url")]),e._v("编码的签名（同样使用”.”分隔）就是JWT了：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("token = encodeBase64(header) + '.' + encodeBase64(payload) + '.' + encodeBase64(signature) # token看起来像这样: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"伪造方法"}},[e._v("伪造方法 "),s("a",{staticClass:"header-anchor",attrs:{href:"#伪造方法"}},[e._v("#")])]),e._v(" "),s("p",[e._v("一、爆破私有密钥")]),e._v(" "),s("p",[e._v("工具："),s("a",{attrs:{href:"https://github.com/brendan-rius/c-jwt-cracker",target:"_blank",rel:"noopener noreferrer"}},[e._v("c-jwt-cracker"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("./jwtcrack eyJhbGci.eyJsb.gzSraSY #后边跟整个token\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("二、伪造admin权限")]),e._v(" "),s("p",[e._v("https://jwt.io/")]),e._v(" "),s("p",[e._v("用上边的网站把权限伪造成"),s("code",[e._v("admin")]),e._v("管理员权限")]),e._v(" "),s("h2",{attrs:{id:"防御措施"}},[e._v("防御措施 "),s("a",{staticClass:"header-anchor",attrs:{href:"#防御措施"}},[e._v("#")])]),e._v(" "),s("p",[e._v("使用复杂的secretkey")]),e._v(" "),s("p",[e._v("更新正在使用的JWT库，确保没有CVE（2018-0114）")])])}),[],!1,null,null,null);a.default=r.exports}}]);