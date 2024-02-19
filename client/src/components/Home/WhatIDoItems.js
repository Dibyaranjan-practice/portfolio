import React from "react";

function WhatIDoItems({ icon, title, description }) {
  return (
    <div className="item-container text-center">
      <div className="icon mb-4">
        <i className={icon + " text-orange-300 text-5xl text-bold"}></i>
      </div>
      <div className="title text-2xl font-semibold mb-3">{title}</div>
      <div className="description text-xl text-[#abb5b7] font-medium">
        {description}
      </div>
    </div>
  );
}

export default WhatIDoItems;
