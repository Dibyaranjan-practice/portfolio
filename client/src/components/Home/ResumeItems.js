import React from "react";

function ResumeItems({ title, subtitle, description }) {
  return (
    <div className="items">
      <h3 className="title mb-2 text-xl font-medium">{title}</h3>
      <p className="subtitle mb-2">{subtitle}</p>
      <p className="description mb-4 text-[#8e9a9d]">{description}</p>
      <hr className="my-4" />
    </div>
  );
}

export default ResumeItems;
