import React, { useState } from "react";

const EventPratice = () => {
  const [message, setMessage] = useState({
    message: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };
  const handleClick = () => {
    alert(message.message + message.username);
    setMessage({
      message: "",
      username: "",
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type={"text"}
        name={"username"}
        placeholder="아무거나 입력해보세요"
        value={message.username}
        onChange={handleChange}
      />
      <input
        type={"text"}
        name={"message"}
        placeholder="아무거나 입력해보세요"
        value={message.message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPratice;
