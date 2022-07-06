import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setConst] = useState(0);
  const onClickCountup = () => {
    setConst(count + 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* 変数を表示 */}
      <p>{count}</p>
      {/* ボタンを押すと、count変数が変わる機能を持った変数を呼び出す */}
      <button onClick={onClickCountup}>countup</button>
    </div>
  );
}
