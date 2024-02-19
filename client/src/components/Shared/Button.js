import React from "react";

function Button({ bgColor, textColor, content }) {
  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
        fontWeight: "600",
      }}
      className="px-10 py-2"
    >
      {content}
    </div>
  );
}

export default Button;
