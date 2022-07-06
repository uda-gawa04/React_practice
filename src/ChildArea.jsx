const style = {
  width: "500px",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = (props) => {
  // 分割代入
  const { open } = props;
  return (
    <>
      {/* 受け取ったpropsがtrueなら左、falseなら右をレンダリング */}
      {open ? (
        <div style={style}>
          <p>ChildConponent</p>
        </div>
      ) : null}
    </>
  );
};
