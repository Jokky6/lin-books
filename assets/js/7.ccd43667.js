(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(t,a,s){t.exports=s.p+"assets/img/WX20190325-050935@2x.fb35489a.png"},143:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"第十章-完善文章页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第十章-完善文章页面","aria-hidden":"true"}},[t._v("#")]),t._v(" 第十章 完善文章页面")]),t._v(" "),n("blockquote",[n("p",[t._v("本章是Orange Can项目“文章”部分的收尾和完善，其中包括小程序很重要的分享功能以及animation动画的  使用。")])]),t._v(" "),n("h2",{attrs:{id:"_10-1-分享功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-分享功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 10.1  分享功能")]),t._v(" "),n("p",[t._v("我们首先要提醒读者的是不同于微信公众号的分享，微信小程序只能分享给好友和微信群聊，目前不能分享到朋友圈。")]),t._v(" "),n("p",[t._v("新版小程序中，每个小程序页面的右上角都有一个如下图所示的胶囊按钮。\n")]),n("div",{attrs:{align:"center"}},[n("img",{attrs:{src:s(97),alt:"WX20190325-013137@2x"}})]),n("p"),t._v(" "),n("p",[t._v("胶囊按钮分为2部分，左侧的省略号是一个快捷菜单按钮，点击后将在小程序的底部弹出一个如下图所示的菜单:\n")]),n("div",{attrs:{align:"center"}},[n("img",{attrs:{src:s(98),alt:"WX20190325-013154@2x"}})]),n("p"),t._v(" "),n("p",[t._v("由于我们当前页面并未设置分享，所以菜单提示的是”当前页面未设置分享“。那么如何设置这个页面的分享功能呢？我们以post页面为例，来详细描述小程序的分享功能。")]),t._v(" "),n("p",[t._v("MINA框架提供了一个用于设置页面分享的方法：onShareAppMessage。在post.js中添加以下方法：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onShareAppMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("注意这个方法\b是属于Page页面的方法，且它是一个”空“方法。但即使只是个空方法也可以实现分享的功能。读者朋友现在可以再次点击右上角的胶囊按钮，底部将弹出一个”转发“的菜单来,点击”转发“将弹出下面的窗口：")]),t._v(" "),n("div",{attrs:{align:"center"}},[t._v("![WX20190325-014406@2x](./assets/WX20190325-014406@2x.png)")]),t._v(" "),n("p",[t._v("所以，如果你只是想实现简单的转发，那么加上这个空的方法就可以让页面实现转发的功能。")]),t._v(" "),n("p",[t._v("以上是小程序在开发工具中的转发界面，如果是在真机上，将弹出下图所示的转发菜单来：\n")]),n("div",{attrs:{align:"center"}},[n("img",{attrs:{src:s(99),alt:"WX20190325-015644@2x"}})]),n("p"),t._v(" "),n("p",[t._v("上图是Lin UI小程序的真机转发菜单。我们可以看到菜单的内容和描述同开发工具中都有一些不同。我们关注到除了【转发】功能外，还有一个【添加到我的小程序】，当用户点击这个按钮后就可以将小程序添加到微信的小程序收藏栏中。")]),t._v(" "),n("p",[t._v("注意，分享是以页面为单位的，并不是以整个应用程序为单位的。也就是说，每个页面都可以定义自己的分享。用户打开分享的链接后是可以直接抵达我们指定的页面的。理解这一点，对于产品设计非常重要。")]),t._v(" "),n("h2",{attrs:{id:"_10-2-详解onshareappmessage与wx-showsharemenu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-详解onshareappmessage与wx-showsharemenu","aria-hidden":"true"}},[t._v("#")]),t._v(" 10.2 详解onShareAppMessage与wx.showShareMenu")]),t._v(" "),n("p",[t._v("当我们设置了onShareAppMessaeg后，页面就会出现分享的功能。这很容易让开发者认为，这是一个功能性的“API”。但其实，它并不是API，这个方法是页面Page中的一个方法，它和我们前面调用的wx类方法（如wx.showToast等）是不同的。wx类的方法才是小程序的API。")]),t._v(" "),n("p",[t._v('实际上这个方法真正的作用是监听用户转发这个事件，它以"on"开头，实际上是一个事件监听函数。无论用户通过任何模式分享了当前页面（下个小节我们将讲解分享模式），小程序都会调用onShareAppMessage，并传递一个res参数。res参数包含以下几个属性：')]),t._v(" "),n("ul",[n("li",[t._v("from\n转发事件来源。它有两个值：button和menu。menu就是当用户点击右上角菜单时的取值，button是用户自定义分享按钮时的取值。button和menu就是我们后面要讲解的2种分享模式。")]),t._v(" "),n("li",[t._v("target\n如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined")]),t._v(" "),n("li",[t._v("webViewUrl\n页面中包含"),n("code",[t._v("<web-view>")]),t._v("组件时，返回当前"),n("code",[t._v("<web-view>")]),t._v("的url")])]),t._v(" "),n("p",[t._v("注意，当小程序执行onShareAppMessage的时候，页面还没有被分享。此时，仅仅只是用户触发了分享的行为（比如用户点击了转发菜单）。至于分享哪个页面、分享标题和图片是什么，我们是可以再onShareAppMessage中定义的。")]),t._v(" "),n("p",[t._v("onShareAppMessage可以return一个Object对象，这个对象中的属性将决定分享的内容。Object对象可以包含以下属性：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("title\n转发标题，默认值是当前小程序名称")])]),t._v(" "),n("li",[n("p",[t._v("path\n转发路径，默认值是当前页面。我们也可以通过设置这个参数，实现在当前页面分享其他页面的效果。")])]),t._v(" "),n("li",[n("p",[t._v("imageUrl\n自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。如果不设置，小程序将自动截取页面内容作为转发图片。")])])]),t._v(" "),n("p",[t._v("onShareAppMessage实际上是给了开发者一次自定义转发内容的机会，如果我们有特殊的转发需求，可以在这里定制。如果没有，那么直接保持一个空的onShareAppMessage即可。")]),t._v(" "),n("p",[t._v("其实，小程序是有一个API可以打开页面的转发设置的，这个API就是：wx.showShareMenu。如果一个页面没有定义onShareAppMessage，但是调用了wx.showShareMenu，那么这个页面也会出现“转发”菜单。")]),t._v(" "),n("p",[t._v("要特别注意，调用wx.showShareMenu，并不会主动弹出转发菜单，用户还是需要自己点击右上角的胶囊按钮才能出现转发菜单。那么onShareAppMessage和wx.shoShareMenu功能重复吗？并不重复，因为我们说过onShareAppMessage主要是用来监听转发事件的。")]),t._v(" "),n("h2",{attrs:{id:"_10-3-两种分享模"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-两种分享模","aria-hidden":"true"}},[t._v("#")]),t._v(" 10.3 两种分享模")]),t._v(" "),n("p",[t._v("在小程序中有两种转发小程序的模式，一种是系统页面的，就是我们刚刚看到的点击右上角菜单的转发。另一种是自定义转发。什么是自定义转发？")]),t._v(" "),n("p",[t._v("右上角的转发菜单其实是非常隐蔽的，大多数情况下，对小程序不熟悉的用户很难发现这个转发按钮。而转发其实是非常重要的一个功能，它对于产品的推广和裂变有非常重要的意义。如何在页面非常显眼的位置自定义一个页面元素来引导用户转发呢？比如我想在页面中间实现一个非常显眼的“分享”按钮该怎么做呢？")]),t._v(" "),n("p",[t._v("\b很多读者可能会期望微信有这样的一个API，这个API通用是以wx开头比如使用下面的代码就可以进行分享操作：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onTapShare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("share")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("注意，以上代码是伪代码，只是我们期望的分享形式。")]),t._v(" "),n("p",[t._v("当用户点击页面上的某个标签（比如一个view）后，就触发onTapShare这个函数，进而调用微信的wx.share进行分享，这种API式的分享方案非常的合理。但微信的自定义分享功能并不是这样设计的。下个小节，我们来学习微信开放能力。")]),t._v(" "),n("h2",{attrs:{id:"_10-4-微信开放能力解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-微信开放能力解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 10.4 微信开放能力解析")]),t._v(" "),n("p",[t._v("微信开放能力是很重要的一种能力，以下种种“能力”都属于开放能力：")]),t._v(" "),n("ul",[n("li",[t._v("客服功能 contact")]),t._v(" "),n("li",[t._v("分享功能 share")]),t._v(" "),n("li",[t._v("获取用户信息 getUserInfo")]),t._v(" "),n("li",[t._v("获取用户手机号 getPhoneNumber")]),t._v(" "),n("li",[t._v("打开APP launchApp")]),t._v(" "),n("li",[t._v("意见反馈 feedback")])]),t._v(" "),n("p",[t._v("\b以上列表中后面的英文名称，代表开放能力的open-type取值。")]),t._v(" "),n("p",[t._v("开放功能从表面上看非常适合使用API来调用。但在小程序中，开放能力的接口并不是通过API来给出的，而是通过"),n("code",[t._v("<button>")]),t._v(" 这个组件来实现的。为什么不给出API的实现？原因在于API的调用过于随意，可以不经过用户的同意直接弹窗(比如，API可以在页面的onLoad中调用)，这将给用户不好的体验。")]),t._v(" "),n("p",[t._v("所以，小程序在某个版本中回收了这些开放能力的API版本，统一要求必须使用button组件来使用开放能力。按钮是可见的，只有用户主动点击按钮才可以触发开放能力，这比使用API要更为舒适。")]),t._v(" "),n("p",[t._v("总体来说，API式的的调用过于随意和开放，存在着被“滥用”的情况。所以微信统一使用button来做微信开放能力。")]),t._v(" "),n("p",[t._v("现在，我们来实现一个自定义的分享按钮。在post-detail.wxml这个页面底部的工具栏中新增一个button按钮：")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("share"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("分享"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("新增代码button后的效果如下图所示：\n")]),n("div",{attrs:{align:"center"}},[n("img",{attrs:{src:s(100),alt:"WX20190325-050935@2x"}})]),n("p"),t._v(" "),n("p",[t._v("点击这个按钮确实可以直接弹出分享菜单来，但这个按钮实在是太丑了。如果你还有一些审美能力，你一定不会允许这样的按钮存在与你的小程序中。")]),t._v(" "),n("p",[t._v("如果我们想用一个图片来代替这个分享按钮呢？看看最终我们想实现的效果图：")]),t._v(" "),n("div",{attrs:{align:"center"}},[t._v("![WX20190325-054609@2x](./assets/WX20190325-054609@2x.png)")]),t._v(" "),n("p",[t._v("这不就是在评论和收藏后面增加了一个图片吗？并不只是一个图片，最后一个分享图标其实是一个按钮。为什么不能在这里使用image图片呢？下面划重点：")]),t._v(" "),n("p",[t._v("因为图片是无法触发微信开放能力的。如果只是一个image组件，那么必然无法实现分享功能，只有button才能实现分享。那么现在的问题就是，如何把button这个组件改成一个图片的样子？")]),t._v(" "),n("p",[t._v("这当然有很多的方法，考验的是大家的CSS的功底。但要想把一个原生的button组件变成上图的样子还是相当麻烦的。读者朋友可以自己尝试下把button改成一个分享图片的样子（CSS不是本书的重点，我们在这里就不在编写了）。")]),t._v(" "),n("p",[t._v("这里最快速和方便的方法还是使用Lin UI的button组件。使用l-button前请确保lin-ui目录下已经存在button组件了（源码中就有所有本书所使用的lin-ui组件）。首先，还是需要首先在post-detail.json中引用以下两个组件：")]),t._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-button"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/lin-ui/button/index"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-icon"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/lin-ui/icon/index"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("引用后，就可以再wxml中使用自定义组件了。在post-detail.wxml的"),n("code",[t._v('<view class="tool">')]),t._v("中加入以下代码：")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("special")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("share"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-icon")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("25"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("share"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#4A6141"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("对于l-button，我们设置了special和open-type这两个属性。special说明这个按钮不是我们经常使用的四四方方的按钮，而是一个特殊按钮。同时开启这个按钮的特殊能力，并指定能力为share分享。设置share参数后，用户点击这个按钮就会触发转发功能。\nl-icon是lin 内置的一组字体图标，它还有很多的可选项，我们选择使用share这个图标，并且定义它的颜色是#4A6141，大小是25。\n在l-button中插入的l-icon的用法叫做slot插槽。我们会在后续自定义组件章节为大家详细讲解插槽。\n只需要这3行代码就可以实现一个图片按钮。读者朋友可自行对比使用原生button和lin button的代码编写量差异。")]),t._v(" "),n("p",[t._v("除了share是我们经常使用的开放能力外，获取用户信息和获取用户手机号也是经常被使用的开放能力。读者朋友可自行尝试一下。")]),t._v(" "),n("h2",{attrs:{id:"_10-5-事件对象中target和currenttarget的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-5-事件对象中target和currenttarget的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 10.5 事件对象中target和currentTarget的区别")]),t._v(" "),n("p",[t._v("截至目前，post-detail详情页面就已经完成了全部功能，但是在post文章列表页面还有点小小的功能需要补充，既然可以点击文章列表的文章跳转到文章详情页面，那么文章列表顶部的swiper组件也应该能够点击跳转。\n首先对post.wxml页面的swiper组件做一些小小的修改，在每个swiper组件的image元素上设置需要跳转的文章id号(设置data-post-id属性)。")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("swiper")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("catch:")]),t._v("tap")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onSwiperTap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("vertical")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{false}}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("indicator-dots")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autoplay")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("interval")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("5000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("swiper-item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/images/post/post-1@text.jpg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-post-id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("swiper-item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("swiper-item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/images/post/post-2@text.jpg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-post-id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("swiper-item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("swiper-item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/images/post/post-3@text.jpg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-post-id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("swiper-item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("swiper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("注意，该id号必须是已存在的文章id号，否则跳转后无法获取文章详细信息。\n按照一般的思路，跳转到文章详情页面需要在每个swiper-item组件上都注册一个tap事件，从而保证点击每一张图片都可以响应该事件。这样做当然是可以的，但我们设想一下，如果swiper组件下有十几个元素呢？这样一个个地去绑定事件是不是太麻烦了？\n这里使用之前我们讲到的冒泡事件，不在每个swiper-item的image上注册事件，而只是在swiper上注册一个onSwiperTap事件。无论点击哪个swiper-item的image，点击事件都将通过冒泡机制传递到swiper-item的父节点swiper上。所以，我们只需要在Swiper组件上捕获这个点击事件，无须在每个子元素上监听点击事件。")]),t._v(" "),n("p",[t._v("在post.js中编写事件响应函数onSwiperTap。")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onSwiperTap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" postId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("postId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigateTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post-detail/post-detail?id="')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" postId\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("代码非常简单，思路就是获取文章id号后再通过wx.navigateTo导航跳转到post-detail文章详情页面。\n需要注意的是，在获取文章id号时，我们并不是使用的event.currentTarget，而是使用的event.target。在冒泡事件中，target指的是事件最开始被触发的元素，而currentTarget指的是捕获事件的元素。放在我们的代码中，target指的是image元素，而currentTarget指的是swiper元素。点击swiper时实际上点击的是image组件，事件由image一级一级地传递到swiper组件中，最后被我们注册在swiper组件上的onSwiperTap捕获。\n只有在image元素上才设置有postId，从currentTarget（swipier）元素中是无法获取到postId的，所以我们必须使用event.target来获取postId。\n保存并运行代码，发现点击swiper组件的不同图片可以跳转到对应的文章详情页面。")]),t._v(" "),n("template",{slot:"author"},[n("Author",{attrs:{name:"7七月",job:"自由开发者，慕课网讲师"}})],1),n("template",{slot:"adverse"},[n("Adverse",{attrs:{title:"微信小程序入门与实践（第二版）",pv:"1-4"}})],1)],2)},[],!1,null,null,null);a.default=e.exports},97:function(t,a,s){t.exports=s.p+"assets/img/WX20190325-013137@2x.b20a4247.png"},98:function(t,a,s){t.exports=s.p+"assets/img/WX20190325-013154@2x.68d247ea.png"},99:function(t,a,s){t.exports=s.p+"assets/img/WX20190325-015644@2x.0f61747c.png"}}]);