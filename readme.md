# Electron + React + Node.js + ES6 开发桌面软件(2018)

首先我们要安装 Node.js。然后通过下面的命令新建一个项目：
`npm init`

修改 package.json "scripts" start 参数

`{ "name": "your-app", "version": "0.1.0", "main": "main.js", "scripts": { "start": "electron ." } }`

## 安装 Electron

现在，您需要安装 electron。 我们推荐的安装方法是把它作为您 app 中的开发依赖项，这使您可以在不同的 app 中使用不同的 Electron 版本。 在您的 app 所在文件夹中运行下面的命令：

`yarn add babel babel-core babel-plugin-transform-es2015-spread babel-plugin-transform-object-rest-spread babel-preset-env babel-preset-es2015 babel-preset-react --dev`

`yarn add babelify@8 --dev`

`yarn add browserify --dev`

`yarn add electron electron-packager electron-reload --dev`

`yarn add watchify --dev`

`yarn add @material-ui/core @material-ui/icons --dev`

`yarn add react react-color react-dom react-tap-event-plugin --dev`

安装好 babel 后，还需要进行配置。我们通过 babel 官网了解到，需要在项目目录下放置一个 .babelrc 文件，让 babel 知道转换哪些代码。我们的 .babelrc 文件内容如下：

`{ "presets": [ "es2015", "react" ], "plugins": [ "transform-object-rest-spread" ] }`

## Electron 开发模式

这里就不得不提到 Electron 的开发模式了，Electron 只是为 HTML 页面提供了一个 Native 的壳，业务逻辑还需要通过 HTML + js 代码去实现，Electron 提供两个进程来完成这个任务：一个主进程，负责创建 Native 窗口，与操作系统进行 Native 的交互；一个渲染进程，负责渲染 HTML 页面，执行 js 代码。两个进程之间的交互通过 Electron 提供的 IPC API 来完成。

由于我们在 package.json 文件中，指定了 main 为 index.js，Electron 启动后会首先在主进程加载执行这个 js 文件——我们需要在这个进程里面创建窗口，调用方法以加载页面（index.html）。
在 app ready 事件中，创建了主窗口，并通过 BrowserWindow 的 loadURL 方法加载了本地目录下的 index.html 页面。在 app 的 window-all-closed 事件中，调用 app.quit 方法退出整个 App。

另外我们看到通过引入 electron-reload 模块，让本地文件更新后，自动重新加载页面：

`require("electron-reload")(__dirname);`

## 运行

`npm run watch`
`npm start`

## 添加 react 调试工具栏

`yarn add electron-react-devtools --dev`

然后从正在运行的 Electron 应用程序的开发人员工具的控制台选项卡中执行以下操作

`require('electron-react-devtools').install()` --测试失败（报错无法显示节点，后面再测试 20180927）

最后刷新页面
