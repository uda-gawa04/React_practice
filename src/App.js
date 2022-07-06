import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  // ステートを定義
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  // インプットした値をステートに保持する
  const onChangeText = (e) => setText(e.target.value);

  // 子供のコンポーネントの表示非表示の切り替え
  // !open:反対の意味にする　ということ
  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>show</button>
      {/* コンポーネントを呼び出す
      上で作った変数openを、openという名前のpropsに入れて渡す*/}
      <ChildArea open={open} />
    </div>
  );
}
