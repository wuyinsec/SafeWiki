(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[17],{159:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"default",(function(){return j}));var b,n=a(95),o=(a(139),a(0),a(96));function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var b in a)Object.prototype.hasOwnProperty.call(a,b)&&(e[b]=a[b])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},o=Object.keys(e);for(b=0;b<o.length;b++)a=o[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(b=0;b<o.length;b++)a=o[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&b(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,p,u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},O={},i="wrapper";function j(e){var t=e.components,a=c(e,["components"]);return Object(o.b)(i,r({},O,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"作为一名优秀的防守方首先要知道己方都有什么资产；"),Object(o.b)("p",{parentName:"blockquote"},"就像一个保镖知道自己要去保护的对象，否则目标搞错了做多少工作都是白费；"),Object(o.b)("p",{parentName:"blockquote"},"有些企业会有资产治理类的设备，这种情况直接导出就行了，如果没有的话还需要我们手工梳理资产。")),Object(o.b)("h1",{className:"__internal",id:"外网资产梳理"},"外网资产梳理",Object(o.b)("a",r({parentName:"h1"},{href:"#%E5%A4%96%E7%BD%91%E8%B5%84%E4%BA%A7%E6%A2%B3%E7%90%86","aria-hidden":!0,className:"anchor"}),"#")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"1、确认防守单位的一级域名（问客户要、或 天眼查）"),Object(o.b)("p",{parentName:"blockquote"},"2、枚举子域名（OneForAll收集子域名）"),Object(o.b)("p",{parentName:"blockquote"},"3、网站所在C段端口扫描（可用Goby或自己开发）【系统服务识别、HTTP服务title识别，HTTP服务页面截图】")),Object(o.b)("h1",{className:"__internal",id:"内网资产梳理"},"内网资产梳理",Object(o.b)("a",r({parentName:"h1"},{href:"#%E5%86%85%E7%BD%91%E8%B5%84%E4%BA%A7%E6%A2%B3%E7%90%86","aria-hidden":!0,className:"anchor"}),"#")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"从客户那里问到内网IP段，并且获得内网准入权限后就是空间探测那一套了;"),Object(o.b)("p",{parentName:"blockquote"},"空间探测核心功能说白了就是端口扫描，探测哪些IP是存活的开放了哪些服务，如开了HTTP访问一下获取个title；"),Object(o.b)("p",{parentName:"blockquote"},"再多点做下Web指纹识别，扫下目录，http服务页面自动截图等，还有加漏扫的。")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"最终形成一个类似如下信息的表格：")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",r({parentName:"tr"},{align:null}),"业务系统名称"),Object(o.b)("th",r({parentName:"tr"},{align:null}),"URL"),Object(o.b)("th",r({parentName:"tr"},{align:null}),"系统所在取域"),Object(o.b)("th",r({parentName:"tr"},{align:null}),"中间件"),Object(o.b)("th",r({parentName:"tr"},{align:null}),"公网IP"),Object(o.b)("th",r({parentName:"tr"},{align:null}),"内网IP"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",r({parentName:"tr"},{align:null}),"百度搜索"),Object(o.b)("td",r({parentName:"tr"},{align:null}),Object(o.b)("a",r({parentName:"td"},{href:"https://www.baidu.com",target:"_blank"}),"https://www.baidu.com")),Object(o.b)("td",r({parentName:"tr"},{align:null}),"外网"),Object(o.b)("td",r({parentName:"tr"},{align:null}),"BWS/1.0"),Object(o.b)("td",r({parentName:"tr"},{align:null}),"233.233.233.233"),Object(o.b)("td",r({parentName:"tr"},{align:null}),"10.10.10.123")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",r({parentName:"tr"},{align:null}),"莆田系医院官网"),Object(o.b)("td",r({parentName:"tr"},{align:null}),Object(o.b)("a",r({parentName:"td"},{href:"http://192.168.1.110:8886",target:"_blank"}),"http://192.168.1.110:8886")),Object(o.b)("td",r({parentName:"tr"},{align:null}),"内网"),Object(o.b)("td",r({parentName:"tr"},{align:null}),"Tomcat"),Object(o.b)("td",r({parentName:"tr"},{align:null})),Object(o.b)("td",r({parentName:"tr"},{align:null}),"192.168.1.110")))),Object(o.b)("h1",{className:"__internal",id:"渗透测试"},"渗透测试",Object(o.b)("a",r({parentName:"h1"},{href:"#%E6%B8%97%E9%80%8F%E6%B5%8B%E8%AF%95","aria-hidden":!0,className:"anchor"}),"#")),Object(o.b)("p",null,"很多地方并不能直接登录客户的服务器，所以下一篇的",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"基线加固")),"我们做不了；"),Object(o.b)("p",null,"我们只能从黑盒的角度做下渗透测试，尽可能多的发现高危漏洞进行整改；"),Object(o.b)("p",null,"这个步骤相信各位师傅都很清楚了，我简单写下我自己的思路"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1、弱口令排查")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"系统服务弱口令（SSH、MySQL、FTP、SMB、RDP）"),Object(o.b)("p",{parentName:"blockquote"},"Web后台弱口令"),Object(o.b)("p",{parentName:"blockquote"},"​\tadmin 爆破弱口令（123456、111111、admin、admin123、admin888）"),Object(o.b)("p",{parentName:"blockquote"},"​\tOA弱口令爆破用户名（用户名top500）"),Object(o.b)("p",{parentName:"blockquote"},"​\t有验证码简单尝试、无验证码超大字典批量爆破")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2、未授权访问")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"redis 未授权"),Object(o.b)("p",{parentName:"blockquote"},"MongoDB 未授权"),Object(o.b)("p",{parentName:"blockquote"},"Memcached 未授权"),Object(o.b)("p",{parentName:"blockquote"},"ZooKeeper 未授权"),Object(o.b)("p",{parentName:"blockquote"},"Hadoop 未授权"),Object(o.b)("p",{parentName:"blockquote"},"Jenkins 未授权"),Object(o.b)("p",{parentName:"blockquote"},"Rsync 未授权")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3、",Object(o.b)("inlineCode",{parentName:"strong"},"中间件"),"&",Object(o.b)("inlineCode",{parentName:"strong"},"CMS框架"),"&",Object(o.b)("inlineCode",{parentName:"strong"},"OA"),"&",Object(o.b)("inlineCode",{parentName:"strong"},"安全设备"),"命令执行漏洞")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"WebLogic"),Object(o.b)("p",{parentName:"blockquote"},"Structs 2"),Object(o.b)("p",{parentName:"blockquote"},"Shiro"),Object(o.b)("p",{parentName:"blockquote"},"ThinkPHP"),Object(o.b)("p",{parentName:"blockquote"},"通达OA"),Object(o.b)("p",{parentName:"blockquote"},"深信服edr"),Object(o.b)("p",{parentName:"blockquote"},"等等这类漏洞，把自己漏洞库中有的都上一遍")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"4、Web漏洞扫描")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"弱口令进了后台找文件上传漏洞"),Object(o.b)("p",{parentName:"blockquote"},"用AWVS+xray等Web漏扫，扫描sqli、xss、信息泄露等Web安全漏洞")))}j.isMDXComponent=!0,j=Object(n.hot)(e)(j),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(u,"makeShortcode","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\defense-assets.md"),l.register(O,"layoutProps","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\defense-assets.md"),l.register(i,"MDXLayout","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\defense-assets.md"),l.register(j,"MDXContent","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\defense-assets.md")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}.call(this,a(23)(e))}}]);