(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{93:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"第二章-开发环境搭建-md"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第二章-开发环境搭建-md","aria-hidden":"true"}},[t._v("#")]),t._v(" 第二章 开发环境搭建.md")]),t._v(" "),r("h2",{attrs:{id:"环境依赖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境依赖","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境依赖")]),t._v(" "),r("h3",{attrs:{id:"系统环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 系统环境")]),t._v(" "),r("ul",[r("li",[t._v("Windows or Linux")])]),t._v(" "),r("h3",{attrs:{id:"php"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#php","aria-hidden":"true"}},[t._v("#")]),t._v(" PHP")]),t._v(" "),r("ul",[r("li",[t._v("PHP 7.1 或更高")])]),t._v(" "),r("blockquote",[r("p",[t._v("这个就不多介绍了，不装的话系统无法执行.PHP的文件")])]),t._v(" "),r("h3",{attrs:{id:"mysql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),r("ul",[r("li",[t._v("MySQL 5.7 或更高")])]),t._v(" "),r("blockquote",[r("p",[t._v("专业的解释可以自行搜索引擎，这里通俗的来说就是一个存放各种数据的数据库（还有SQL Server、Oracle）。打比方你现在有个网站，\n网站有登录和注册功能，用户第一次访问的时候注册了一个账号，这个账号相关的信息如何保存呢？就是放到数据库中。用户注册成功后迫不及待的进行了第一次登陆，输入了注册时填写的信息并点击了登录，这时候系统怎么去判断这个账户的合法性和有效性呢？就是去数据库里查询所有已存在的账户数据，对比提交的信息看看是否存在以及密码是否一致然后做出相应的响应，如登陆成功或者账号不存在、密码错误等")])]),t._v(" "),r("h3",{attrs:{id:"web服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#web服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" Web服务器")]),t._v(" "),r("ul",[r("li",[t._v("Apache或者Nginx，具体版本没多大要求")])]),t._v(" "),r("blockquote",[r("p",[t._v("在本教程中无论是Apache还是Nginx都不会涉及一些高级或者复杂的使用，仅用于提供web服务。具体干嘛的通俗点来说就是通过Apache或者Nginx，使我们的本地机器或者服务器能够对外提供特定的服务内容和接收服务请求。线上的项目都需要至少一台Web服务器")])]),t._v(" "),r("h3",{attrs:{id:"依赖包管理器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#依赖包管理器","aria-hidden":"true"}},[t._v("#")]),t._v(" 依赖包管理器")]),t._v(" "),r("ul",[r("li",[t._v("composer 安装最新版本即可")])]),t._v(" "),r("blockquote",[r("p",[t._v("先了解什么是包。包是由一个或者多个功能打包而成的，包可以很小，可能只实现了一个很小的功能；包也可以是很庞大的，比如本课程会用到的TP5框架，框架的核心代码已经被打包成了一个大包。对于使用者来说包的意义是什么？避免重复造轮子！比如说你现在需要实现一个定时功能，你开始运用你的知识花了好几天时间实现了，但其实你可以通过composer工具，去安装已经发布在composer平台上的包，安装完后就可以直接调用而不用关心具体是怎么实现的。依赖包管理器的作用就是可能一个包实现的功能还借助了其他很多包，那么对于使用者来说逐个去安装显然费时费力，这时候composer工具会去读取包的作者预先定义好的配置文件，自动帮你安装处理包与包之间依赖关系的问题；另外依赖包管理器还能对项目所依赖的包进行集中的安装和更新。")])]),t._v(" "),r("h2",{attrs:{id:"环境安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境安装")]),t._v(" "),r("h3",{attrs:{id:"windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[t._v("#")]),t._v(" windows")]),t._v(" "),r("h4",{attrs:{id:"本地集成开发环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地集成开发环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 本地集成开发环境")]),t._v(" "),r("p",[t._v("顾名思义，"),r("code",[t._v("本地集成开发环境")]),t._v("是一系列软件打包而成的应用程序，你只需要安装这个应用程序，就可以运行集成在里面的软件，windows下PHP常用的"),r("code",[t._v("本地集成开发环境")]),t._v("软件有WampServer和xampp等，这里教程选WampServer。")]),t._v(" "),r("blockquote",[r("p",[r("code",[t._v("集成开发环境")]),t._v("的优点在于方便和快捷，无需你针对具体某个软件做安装和配置，但缺点也很明显，所有的配置都是默认的，有时候一些异常恰恰是因为默认配置导致的，最常见的就是明明本地跑得好好的，怎么线上一部署就不行了？这里多半就是因为环境配置差异导致的。还有就是性能和安全问题，所以正式环境中请勿使用此类集成开发环境部署软件，本地开发的话随意。"),r("br"),t._v("\nPS：线上部署可参考第六章的内容")])]),t._v(" "),r("p",[r("strong",[t._v("WampServer")]),t._v("是一款功能强大的PHP集成安装环境，"),r("em",[t._v("Wamp")]),t._v("Server在windows下将Apache+PHP+Mysql集成环境，拥有简单的图形和菜单安装和配置环境。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("下载")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://nchc.dl.sourceforge.net/project/wampserver/WampServer%203/WampServer%203.0.0/wampserver3.1.9_x64.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("WampServer 64位"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("安装")])])]),t._v(" "),r("ol",[r("li",[t._v("无他，就是同意")])]),t._v(" "),r("p",[r("img",{attrs:{src:"images/wamp1.jpg",alt:"wamp"}})]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("Next")])]),t._v(" "),r("p",[r("img",{attrs:{src:"images/wamp2.jpg",alt:"wamp"}})]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("选择安装的路径，注意这里路径不能有中文或者空格")])]),t._v(" "),r("p",[r("img",{attrs:{src:"images/wamp3.jpg",alt:"wamp"}})]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("直接Next")])]),t._v(" "),r("p",[r("img",{attrs:{src:"images/wamp4.jpg",alt:"wamp"}})]),t._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[t._v("也只会是Install")])]),t._v(" "),r("p",[r("img",{attrs:{src:"images/wamp5.jpg",alt:"wamp"}})]),t._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[t._v("安装过程中会跳出这个提示框，要你选择默认调用的浏览器，根据你实际情况选择即可，直接点否后面使用过程中会调用当前系统的默认浏览器")])]),t._v(" "),r("p",[r("img",{attrs:{src:"images/wamp6.jpg",alt:"wamp"}})]),t._v(" "),r("ol",{attrs:{start:"7"}},[r("li",[t._v("这个是要你选择默认调用的编辑器，如果你没装"),r("code",[t._v("vs code")]),t._v("、"),r("code",[t._v("NOTEPAD++")]),t._v("之类的东西那直接点否就可以，后面使用过程中会调用记事本或者写字板，有的话就指定到编辑器的安装路径")])]),t._v(" "),r("p",[r("img",{attrs:{src:"images/wamp7.jpg",alt:"wamp"}})]),t._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[t._v("选择完两个选项之后安装即很快完成，桌面会多出这个图标  "),r("img",{attrs:{src:"images/wamp8.jpg",alt:"wamp"}})])]),t._v(" "),r("ul",[r("li",[t._v("运行")])]),t._v(" "),r("ol",[r("li",[t._v("双击桌面的图标，会看到右下角多出了一个图标，代表软件已经启动。"),r("img",{attrs:{src:"images/wamp9.jpg",alt:"wamp"}}),t._v("，软件图标的状态有三种：绿色（PHP、Apache、MySQL服务全部启动）、黄色（部分服务未启动）、红色（服务启动失败）。第一次启动可能会是黄色，这时候右键一下图标，在弹出菜单中选择"),r("code",[t._v("启动所有服务")]),t._v("。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"images/wamp10.jpg",alt:"wamp"}})]),t._v(" "),r("blockquote",[r("p",[t._v("这里如出现错误提示xxxx.dll异常，请看页面最下方的常见错误小节")])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("在刚刚的右键菜单中，我们依次来验证一下Web服务器（Apache）和MySQL、PHP是否正常。首先点击菜单中最上面的Localhost，这时候会自动打开浏览器，看到如下页面标识Web服务器是正常工作的。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"images/wamp11.jpg",alt:"wamp"}})]),t._v(" "),r("p",[t._v("接着再点击菜单中的phpMyAdmin，会看到如下页面：")]),t._v(" "),r("p",[r("img",{attrs:{src:"images/wamp12.jpg",alt:"wamp"}})]),t._v(" "),r("blockquote",[r("p",[t._v("phpMyAdmin是基于PHP实现的开源数据库可视化管理web应用，通俗点来说就是可以以web应用的形式管理你的数据库而不用在命令行里操作。")])]),t._v(" "),r("p",[t._v("用户名写"),r("code",[t._v("root")]),t._v("，密码为空，点击"),r("code",[t._v("执行")]),t._v("，登录成功后会看到如下页面：")]),t._v(" "),r("p",[r("img",{attrs:{src:"images/wamp13.jpg",alt:"wamp"}}),t._v("\n看到这个页面即说明PHP和MySQL都正常运行了。"),r("br"),t._v("\n到这里我们的"),r("code",[t._v("本地集成开发环境")]),t._v("就已经安装并且正常运行起来了，后面我将基于这个环境展开一些列的学习。")]),t._v(" "),r("blockquote",[r("p",[t._v("由于WampServcer没有集成Composer工具，所以我们还是要手动安装一下，参考"),r("router-link",{attrs:{to:"/lin/lin-cms-php/安装Composer.md/#安装Composer"}},[t._v("安装Composer")]),t._v("章节")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("扩展知识："),r("br"),t._v("\n提到开发环境，我们常常会听到或者在投简历的时候看到招聘要求里写着WAMP、LNMP这种字眼，这里的含义是：WAMP(Windows+Apache+MySQL+PHP)，同理，LAMP，L就是指Linux，其他一致；还有LNMP，这里N就是指Nginx。最后的P可能是PHP、Perl、Pyhton根据实际情况代入即可")])]),t._v(" "),r("h3",{attrs:{id:"常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),r("ul",[r("li",[t._v("xxxxx.dll错误")])]),t._v(" "),r("p",[t._v("这种错误一般因为本地系统的环境引起，比如说不同的PHP版本会依赖不同的VC库，如果你电脑没有装就会导致PHP无法运行然后报错。解决办法就是搜索引擎搜索xxxx.dll，看是属于哪个VC库然后去微软官网下载安装即可。")]),t._v(" "),r("h2",{attrs:{id:"开发工具安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发工具安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发工具安装")]),t._v(" "),r("h3",{attrs:{id:"phpstrom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phpstrom","aria-hidden":"true"}},[t._v("#")]),t._v(" PhpStrom")]),t._v(" "),r("p",[t._v("没有比这个更好了。别问，问就是安装")]),t._v(" "),r("ul",[r("li",[t._v("下载"),r("br"),t._v("\n访问："),r("a",{attrs:{href:"https://www.jetbrains.com/phpstorm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jetbrains.com/phpstorm/"),r("OutboundLink")],1),t._v("，点击正中间的"),r("strong",[t._v("download now")])]),t._v(" "),r("li",[t._v("安装"),r("br"),t._v("\n都是下一步下一步")]),t._v(" "),r("li",[t._v("启动"),r("br"),t._v("\n第一次启动会提示导入配置，直接选"),r("strong",[t._v("Do not import settings")]),t._v("然后OK，接着就是一些配置，一直下一步即可影响不大，直到出现以下窗口，提示要你输入License信息\n"),r("img",{attrs:{src:"images/phpstorm1.jpg",alt:"phpstorm"}})]),t._v(" "),r("li",[t._v("破解\n访问："),r("a",{attrs:{href:"http://idea.lanyus.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://idea.lanyus.com/"),r("OutboundLink")],1),t._v("，点击获取注册码")])]),t._v(" "),r("p",[r("img",{attrs:{src:"images/TIM%E6%88%AA%E5%9B%BE20190619132100.png",alt:"phpstorm"}})]),t._v(" "),r("p",[t._v("复制弹出的注册码，回到上一面那张图的地方，点"),r("strong",[t._v("Activation code")]),t._v("，把注册码粘贴到下面的输入框中并点击"),r("strong",[t._v("OK")]),t._v("，没有任何错误提示就表示激活成功")]),t._v(" "),r("p",[r("img",{attrs:{src:"images/phpstorm2.jpg",alt:"phpstorm"}})]),t._v(" "),r("blockquote",[r("p",[t._v("如经济条件允许，请支持正版。学生可凭学生信息获取优惠折扣")])]),t._v(" "),r("h3",{attrs:{id:"visual-studio-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code","aria-hidden":"true"}},[t._v("#")]),t._v(" Visual Studio Code")]),t._v(" "),r("p",[t._v("开发体验虽不如PhpStorm但是同样推荐安装，功能很强大，通过安装插件可以实现很多功能("),r("s",[t._v("比如每隔一段时间，就会弹出蔡徐坤或者杨超越给你鼓励打气")]),t._v(")，一般阅读代码或者小修小补我都会选择用VS Code，够快。本身也是开源的而且免费，安装过程也非常简单这里就不多做介绍了。")]),t._v(" "),r("p",[r("a",{attrs:{href:"%5Bhttps://code.visualstudio.com/download%5D(https://code.visualstudio.com/download)"}},[t._v("下载安装")])]),t._v(" "),r("template",{slot:"author"},[r("Author",{attrs:{name:"沁塵",job:"网易杭州研究院云计算技术总监",title:"Lin CMS PHP&Vue教程"}})],1),r("template",{slot:"adverse"},[r("Adverse",{attrs:{title:"Lin CMS PHP&Vue教程"}})],1)],2)},[],!1,null,null,null);a.default=s.exports}}]);