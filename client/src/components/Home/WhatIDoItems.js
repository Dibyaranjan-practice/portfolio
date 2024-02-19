import React from "react";

function WhatIDoItems({ title, description }) {
  return (
    <div className="item-container text-center">
      <div className="title text-2xl font-semibold mb-3">{title}</div>
      <div className="description text-xl text-[#abb5b7] font-medium">
        {description}
      </div>
    </div>
  );
}

export default WhatIDoItems;
