import React, { createRef, useRef } from "react";

const ScrollBox = () => {
  let box = useRef();

  const scrollToBottom = () => {
    const { scrollHeight, clientHeight } = box;

    box.scrollTop = scrollHeight - clientHeight;
  };

  const style = {
    border: "1px solid black",
    height: "300px",
    width: "300px",
    overflow: "auto",
    position: "relative",
  };

  const innerStyle = {
    width: "100%",
    height: "650px",
    background: "linear-gradient(white,black)",
  };

  return (
    <div style={style} ref={box}>
      <div style={innerStyle} />
    </div>
  );
};

export default ScrollBox;
