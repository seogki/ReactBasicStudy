import React from "react";
import { ColorCosumer } from "../context/color";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColor = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorCosumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubColor(color);
                }}
              ></div>
            ))}
          </div>
        )}
      </ColorCosumer>
    </div>
  );
};

export default SelectColor;
