import React from "react";

function SkillItem({ title, percentage }) {
  return (
    <div className="skill-item w-full">
      <div className="title-percentage flex justify-between">
        <div className="skill-title">{title}</div>
        <div className="skill-percentage">{percentage}%</div>
      </div>
      <div className="skill-percentage h-[10px] rounded-md bg-[#e9ecef]">
        <div
          className={`percentage  bg-orange-400 h-[10px] rounded-l-md`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillItem;
