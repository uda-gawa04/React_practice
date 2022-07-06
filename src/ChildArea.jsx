import { memo } from "react";

const style = {
  width: "500px",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  // 分割代入
  const { open, close } = props;

  // 模擬的にレンダリングの不可を高める
  // 2000件のデータが入った配列を作る
  const data = [...Array(2000).keys()];
  // データをめちゃ作る
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>ChildConponent</p>
          <button onClick={close}>close</button>
        </div>
      ) : null}
    </>
  );
});
