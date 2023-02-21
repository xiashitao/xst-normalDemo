import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassDemoComp from "./page/calssDemo";

function App() {
  // 实现一个新的使用方式 实现一个react-ui
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  // 开始定制一些东西 学习一些vim语法 你
  // React 是有多重模式的 基本平时用的都是legacy模式下的React
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx111</code> and save to reload.
        </p>
        <p>周末弄不完就要改掉了排查问题 开始完成一些不一样的东西</p>
        <p onClick={handleClick}>开始自己的学习之路</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ClassDemoComp count={count} />
      </header>
    </div>
  );
}

export default App;
