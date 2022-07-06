import { useState, useCallback, useMemo } from "react";
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

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const tenp = useMemo(() => 1 + 3, []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>show</button>
      {/* コンポーネントを呼び出す
      上で作った変数openを、openという名前のpropsに入れて渡す
      青文字になっているのがpropsの名前、白いのがそれに入れる中身
      propsは複数個渡すことができる*/}
      <ChildArea open={open} close={onClickClose} />
    </div>
  );
}
