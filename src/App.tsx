import React, { useState, Profiler, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassDemoComp from "./page/carousel";

class Person {
  constructor(props: any) {}
}

function App() {
  // 实现一个新的使用方式 实现一个react-ui
  const [count, setCount] = useState(0);
  const [list, setList] = useState<any[]>([]);
  const divRef = React.useRef<ClassDemoComp>(null);
  const handleAdd = () => {
    const newList = [...list, list.length + 1];
    setList(newList);
  };
  const handleDelete = () => {
    const newList = [...list];
    newList.pop();
    setList(newList);
  };
  const [name, setName] = useState(
    "周末弄不完就要改掉了排查问题 开始完成一些不一样的东西"
  );
  const changeName = () => {
    setName("开始自己的学习之路");
  };

  const handleBarClick = (left: "left" | "right") => {
    if (divRef.current) {
      divRef.current!.scrollTo(left);
    }
  };

  // 根据Github 用户名获取用户信息

  // 1. 通过fetch获取数据
  // 2. 通过axios获取数据
  // 3. 通过jquery获取数据
  // 4. 通过原生js获取数据
  // 写一个防抖函数

  // 写一个节流函数
  // 写一个深拷贝函数
  // 写一个instanceof
  const myInstanceof = (left: any, right: any) => {
    let proto = left.__proto__;
    let prototype = right.prototype;
    while (true) {
      if (proto === null) {
        return false;
      }
      if (proto === prototype) {
        return true;
      }
      proto = proto.__proto__;
    }
  };
  // 写一个new
  const myNew = (fn: any, ...args: any) => {
    let obj = Object.create(fn.prototype);
    let result = fn.apply(obj, args);
    return result instanceof Object ? result : obj;
  };

  const onRender = (...args: any) => {
    console.log(args);
  };

  // 写一个node的事件循环
  // 1. 宏任务和微任务
  // 2. 宏任务的执行顺序
  // 3. 微任务的执行顺序

  // 防抖和节流函数的区别
  // 防抖是指触发事件后在n秒内函数只能执行一次，如果在n秒内又触发了事件，则会重新计算函数执行时间。
  // 节流是指连续触发事件但是在n秒中只执行一次函数。节流会稀释函数的执行频率。
  // 1. 防抖是将多次执行变为最后一次执行，节流是将多次执行变为每隔一段时间执行。

  // 开始定制一些东西 学习一些vim语法 你
  // React 是有多重模式的 基本平时用的都是legacy模式下的React

  // 写一个promise

  return (
    <div className="App">
      <header className="App-header">
        <button
          style={{ width: 100, height: 100, marginBottom: 20 }}
          onClick={handleAdd}
        >
          加
        </button>
        <button onClick={handleDelete} style={{ width: 100, height: 100 }}>
          减
        </button>
        <Suspense fallback={"loading..."}>
          {/* <Profiler id="App" onRender={onRender}> */}
          <div>
            <ClassDemoComp
              ref={divRef}
              handleClick={handleBarClick}
              count={count}
              list={list}
            />
          </div>
          {/* </Profiler> */}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
