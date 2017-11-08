This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTutorial tutorial
```

Then, to run it, cd into `myTutorial` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

ionic3 native接口目录：
1.Overview -- 概述
2.Browser Usage -- 浏览器的使用
3.3D touch -- ios 3D touch
4.Action Sheet -- 动作列表
5.AdMob Free -- 广告之类的
6.AdMob Pro --谷歌广告插件
7.Alipay -- 支付宝(需结合SDK)
8.Android Fingerprint Auth -- 指纹身份验证 
9.Android Full Screen -- 使应用全屏显示
10.Android Permissions -- 安卓权限检查机制
11.App Availability -- 检查应用是否安装在了设备上
12.App Minimize -- 最小化应用
13.App Preferences -- 读写程序的偏好设置
14.App Rate -- 让用户评估你的APP
15.App Update -- App自动升级(only android)
16.App Version -- 读取App版本信息
17.Appodeal -- 通过Appodeal为广告服务
18.Autostart -- 启动或升级之后是否自启动app(only android)
19.Background Fetch -- 在应用没有运行的情况下也可获取内容(only ios)
20.Background Geolocation -- 获取前景或背景地理位置
21.Background Mode -- 防止应用不在前台的时候睡眠
22.Badge -- 当应用不在前台的消息提醒(图标右上角消息提示)
23.Barcode Scanner -- 打开相机条形码扫描
24.Base64 to Gallery -- 将64位编码保存为图像
25.Battery Status -- 电池状态
26.BLE -- 蓝牙
27.Bluetooth Serial -- 蓝牙串行通信(for android to ios)
28.Brightness -- 控制设备屏幕亮度
29.Broadcaster -- 本地代码与应用的交换事件
30.Browser Tab -- 应用浏览器标签
31.Calendar -- 为设备日历添加事件
32.Call Number -- 直接在应用里拨打电话
33.Camera -- 唤起相机
34.Card IO -- 信用卡的扫描
35.Clipboard -- 剪贴板管理
36.CodePush -- CodePush服务，动态更新应用
37.Contacts -- 访问或管理联系人
38.Couchbase Lite -- 安装 Couchbase Lite应用
39.Crops -- 编缉图像
40.Date Picker -- 唤起本地时间或日期对话框
41.DB Meter -- 获取麦克风分贝值
42.Deeplinks -- 这个插件处理deeplinks iOS和Android为自定义URL方案和通用应用程序链接的链接
43.Device -- 访问底层设备和信息平台
44.Device Accounts -- 获取谷歌账户(only android)
44.Device Feedback -- 听觉和触觉反馈(only android)
45.Device Motion -- 访问设备加速度计
46.Device Orientation -- 访问设备指南针
47.Diagnostic -- 检查设备硬件是否可用，如GPS,Wifi,相机
48.Dialogs -- 访问或定制设备本地对话框
49.Document Viewer -- 查看PDF文件是否在/www文件下或存在其他文件下
50.Email Composer -- 编辑和发送邮件信息
51.Estimote Beacons -- 用于电话与Estimote外围设备之间的通信
52.Extended Device Information -- 获取额外的设备信息(only android)
53.Facebook -- 访问本地fackbook应用
54.FCM -- 谷歌FCM，推送式通知
55.File -- 读写设备上的文件
56.File Chooser -- 打开文件选择器在Android用户选择一个文件,返回一个文件的URI(only android)
57.File Encryption -- 文件加密
58.File Opener -- 用默认应用打开本地文件系统
59.File Path -- 解决代码库的文件路径(only android)
60.File Transfer -- 上传下载文件
61.Fingerprint AIO -- 使用指纹验证信息
62.Flashlight -- 打开或关闭手电筒
63.Flurry Analytics -- 连接到Flurry Analytics SDK
64.FTP -- 在web/js里使用FTP客户端
65.Geofence -- 地理围栏(手机进入到某个特定地理区域，或在该区域内活动时，手机可以自动接收通知或警告，如手机和房屋照明和空调连接到一起，当用户到家时，就可以自动激活这些设备)
66.Geolocation -- 提供设备的位置信息,例如纬度和经度。常见的位置信息的来源包括全球定位系统(GPS)和位置推断从网络IP地址等信号,射频识别,WiFi和蓝牙MAC地址,GSM / CDMA手机id
67.Globalization -- 获得信息和执行操作特定于用户的语言环境,语言,时区
68.Google Analytics -- 连接到谷歌本地通用分析SDK
69.Google Maps -- 使用谷歌地图SDK
70.Google Plus -- 这个插件允许您进行身份验证和识别用户与谷歌iOS和Android上登录。开箱即用的,你会得到邮件,显示名称、名字,姓氏,图片文件链接,用户id。你也可以将其配置为得到一个idToken serverAuthCode。这个插件只包装访问Google登录API。进一步的API访问每个用例应该实现,每个开发人员。
71.Gyroscope -- 读取陀螺仪传感器数据
72.Header Color -- 改变安卓多任务视图头部颜色
73.Health -- 摘要健身和健康库像苹果HealthKit或谷歌健康
74.Health Kit -- 允许您从iOS8+写入数据读取数据 HealthKit框架,任何数据保存在iOS健康应用,可供其他iOS应用程序
75.HTTP -- 与HTTP服务器交互
76.Httpod -- 嵌入式httpd应用，轻量级的HTTP服务器
77.IBeacon -- 提供了处理iBeacons功能(基于低功耗蓝牙的通信协议，向周围发送自己特有ID，接收到ID的应用会根据该ID采取一些行动。如在鞋子上贴一颗iBeacon，当用户靠近鞋子的时候手机上就可以收到iBeacon推送的鞋子信息以及优惠等）
78.Image Picker -- 本地照片选择
79.Image Resizer -- 照片大小重置
80.In App Browser -- 浏览器应用程序启动
81.In App Purchase -- 支持在App商店的消耗品/非消耗品的产品和支付/免费订阅
82.In App Purchase -- 在App商店购买应用程序
83.Index App Content -- 添加、更新和删除条目聚光灯搜索索引(only ios)
84.Insomnia -- 防止设备屏幕休眠
85.Instagram -- 在Instagram应用上分享照片
86.Inter Security -- 应用程序安全API允许使用安全属性和功能的平台,为应用程序开发人员定义的API(例如:使用API来存储本地数据(比如缓存),使用非易失性存储设备。数据保护/加密将会为你做的API实现与远程服务器建立一个连接(例如XHR)使用受保护的通道。SSL / TLS建立和使用将会为你做的API实现)
87.Intercom -- 使用安卓或ios上的对讲机
88.Is Debug -- 检测应用程序是否在调试模式下运行
89.Jins Meme -- Jins Meme(智能眼镜)的连接使用
90.Keyboard -- 唤起键盘
91.Keychain -- 获取和设置iOS钥匙链中的数据
92.Keychain Touch Id -- 允许您存储的密码安全设备钥匙链。
93.Launch Navigator -- 导航启动本地应用程序
94.Launch Review -- 启动应用程序在App商店的评论页，让用户直接进行评论
95.Linkedln -- Linkedln 的SDK
96.Local Notifications -- 访问本地通知
97.Localtion Accuracy -- 请求启用/改变触发本机对话框的位置服务中的应用,避免用户离开你的应用需要手动更改位置设置
98.Market -- 在市场上打开应用程序的页面
99.Media -- 记录或播放音频文件
100.Media Capture -- 提供设备的音频、图像和视频捕捉功能
101.Mixpanel -- Mixpanel应用SDK(数据统计分析应用)
102.Mobile Accessibility -- 检查屏幕阅读器正在运行,是否启用反色,首选缩放文本。它还允许应用程序发送一个字符串使用屏幕阅读器,或命令停止说话的屏幕阅读器
103.MS ADAL -- 通过 Azure Active Directory Authentication Library (ADAL)，应用程序开发者可以让用户通过云或本地 Active Directory (AD) 的身份验证，并获取令牌来保护 API 调用
104.Music Controls -- 媒体控制，处理耳机事件
105.Native Audio -- 本地音频回放
106.Native Geocoder -- 本地前向后向地理编码(本地位置服务）
107.Native Keyboard -- 跨平台的WhatsApp /通讯/松弛风格的键盘(可能需要支付许可)
108.Native Page Transitions -- 本机页面转换插件使用本机硬件加速动画视图之间的转换。你有完全控制的过渡类型,时间,和方向
109.Native Storage -- 本地存储变量
110.Network -- 提供关于设备的移动和无线连接的信息,以及设备是否有一个互联网连接
111.NFC -- 读写NFC或向其他NFC设备收发信息
112.OneSigal -- 用OneSigal实现推送服务
113.Open Native Settings -- 打开本地设置
114.PayPal -- 国际贸易支付工具
115.Pedometer -- 获取步计数和其他行驶距离的信息。
116.Phonegap Local Notificatin -- 当地通知插件使开发人员能够发布通知的应用程序显示在设备的通知区域
117.Photo Library -- 允许访问url从设备的图片。所以你可以使用普通img标记来显示照片和缩略图,以及不同的第三方库。还支持照片和视频保存到图书馆
118.Photo Viewer -- 以显示你的图像在全屏,对图像进行放大、和共享。
119.Pin Check -- 检查是否手机上有设置安全锁或密码
120.Pin Dialog -- 唤起解锁对话框
121.Power Management -- 设备电源管理
122.Printer -- 打印文档或HTML
123.Pro -- 实时更新和错误监控服务
124.Push -- 支持接收和处理本地推送通知用一个统一的API
125.QQSDK -- 访问QQssoLogin，QQ分享，QQ空间分享等等
126.QR Scanner -- 一种快速、节能、高度可配置的二维码扫描仪
127.Safari View Controller -- Safari浏览器控制
128.Screen Orientation -- 设置或锁定屏幕方向 
129.Screenshot -- 捕获屏幕快照
130.Secure Storage -- 从安全存储中设置或删除数据
131.Serial -- 串行连接功能(only android ubuntu)
132.Shake -- 处理摇的动作(only ios)
133.Sim -- 从Sim卡得到信息像承运人名称,mcc,跨国公司和国家代码和其他系统相关的信息
134.SMS -- 发送SMS
135.Social Sharing -- 通过社交网络、手机短信和电子邮件共享文本、文件、图片和链接。
136.Speech Recognition -- 使用云服务的语音识别
137.Spinner Dialog -- 旋转对话框 
138.Splash Screen -- 用程序启动期间显示和隐藏了一个闪屏
139.SQLite -- 访问设备上的SQLite
140.SQLite Porter -- 输出或引用SQLite
141.Status Bar -- 管理本地状态栏的外观
142.Stepcounter -- 对持有设备的人进行步数计算(only android)
143.Streaming Media -- 允许你的流媒体全屏显示
144.Stripe -- Stripe海外支付平台SDK
145.Taptic Engine -- iphone上的震动模块
146.Text To Speech -- 文字转语音
147.Themeable Browser -- 允许浏览器应用样式修改
148.Toast -- 访问本地弹框
149.Touch ID -- Touch ID,使用指纹传感器扫描用户指纹
150.Twitter Connect -- Twitter登录SDK
151.Uid -- 获取UUID,IMEI IMSI,ICCID and MAC
152.Unique Device ID -- 跨平台共享ID，程序卸载后不变
153.User Agent -- 设置HTTP用户代理头
154.Vibration -- 振动设备
155.Video Editor -- 使用本机设备API编辑视频
156.Video Player -- 让其在全屏下播放视频
157.Youtube Video Player -- 在Youtube App中播放Youtube视频
158.ZBar -- 扫描二维条形码
159.Zeroconf -- 中文名则为零配置网络服务规范，是一种用于自动生成可用IP地址的网络技术，不需要额外的手动配置和专属的配置服务器,有点类似于mdns,零配置网络服务，是让非专业用户也能便捷的连接各种网络设备，例如计算机，打印机等
160.Zip -- 解压压缩文件

API仍处于测试阶段
161.Backlight -- 设置设备背光
162.Base64 -- 编码base64图片
163.Camera Preview -- 在HTML里显示相机预览
164.Hotspot -- wifi热点
165.Native Ringtones -- 插件可以帮助获得Android和IOS设备上的本地铃声列表。你也可以使用这个插件来播放或停止本机铃声和自定义铃声(www文件夹中添加)
166.Navigation Bar -- 隐藏或自动隐藏导航栏
167.Pinterest -- 应该是国外的一个关于设计的网站 
168.Regula Document Reader -- 用于文件识别的读取验证
169.Rollbar -- 添加Rollbar应用监测到您的应用程序
170.WheelSelector Plugin -- 滚轮选择器








