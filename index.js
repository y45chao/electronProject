const { app, BrowserWindow } = require("electron");

//加载自动更新
require("electron-reload")(__dirname);

let mainWindow;

function createWindow() {
  // 创建浏览窗口
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // 加载index.html页面
  mainWindow.loadFile("index.html");

  // 打开 开发工具条 DevTools.
  mainWindow.webContents.openDevTools();

  // 监听窗口关闭事件
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

// 当整个程序加载完成
app.on("ready", createWindow);

// 当窗口关闭时 关闭所有
app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});
