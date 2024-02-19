import React, { useState, useEffect } from "react";
import WhatIDoItems from "./WhatIDoItems";

function WhatIDo() {
  const [projectItems, setProjectItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/project/")
      .then((res) => res.json())
      .then((res) => setProjectItems(res));
  }, []);
  return (
    <div className="what-i-do flex flex-col items-center py-16 bg-[#f8f9fa]">
      <div className="title bg-yellow-300 px-2 mb-2">
        <h3>What I Do?</h3>
      </div>
      <div className="subtitle mb-5 text-4xl font-black">
        <h1>How I Can help your next project</h1>
      </div>
      <div className="what-i-do-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-16 gap-16 mt-10">
        {projectItems.length &&
          projectItems.map((projectItem) => {
            return (
              <WhatIDoItems
                key={projectItem._id}
                icon={projectItem.icon}
                title={projectItem.title}
                description={projectItem.description}
              />
            );
          })}
      </div>
    </div>
  );
}

export default WhatIDo;
