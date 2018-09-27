import React, { Component } from "react";
import ReactDOM from "react-dom";
/**
 * 初始界面
 */
class AppEntry extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <a href="http://www.baidu.com">测试文件123</a>
      </div>
    );
  }
}

//界面渲染
ReactDOM.render(<AppEntry />, document.getElementById("content"));
