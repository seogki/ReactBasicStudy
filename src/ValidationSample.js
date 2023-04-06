import React, { useState } from "react";
import "./ValidationSample.css";
const ValidationSample = () => {
  const [validation, setValidation] = useState({
    password: "",
    clicked: false,
    validated: false,
  });

  const handleChange = (e) => {
    setValidation({
      ...validation,
      password: e.target.value,
    });
  };

  const handleButtonClick = () => {
    setValidation({
      ...validation,
      clicked: true,
      validated: validation.password === "000",
    });
  };

  return (
    <div>
      <input
        type={"password"}
        value={validation.password}
        onChange={handleChange}
        className={
          validation.clicked
            ? validation.validated
              ? "success"
              : "failure"
            : ""
        }
      />
      <button onClick={handleButtonClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
