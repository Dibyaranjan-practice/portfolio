import React from "react";
import WhatIDoItems from "./WhatIDoItems";

function WhatIDo() {
  return (
    <div className="what-i-do flex flex-col items-center py-16 bg-[#f8f9fa]">
      <div className="title bg-yellow-300 px-2 mb-2">
        <h3>What I Do?</h3>
      </div>
      <div className="subtitle mb-5 text-4xl font-black">
        <h1>How I Can help your next project</h1>
      </div>
      <div className="what-i-do-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-16 gap-16 mt-10">
        <WhatIDoItems
          title="Graphic Design"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        />
        <WhatIDoItems
          title="Web Design"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        />
        <WhatIDoItems
          title="UI/UX Design"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        />
        <WhatIDoItems
          title="App Design & Develop"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        />
        <WhatIDoItems
          title="Business Analysis"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        />
        <WhatIDoItems
          title="SEO Marketing"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        />
      </div>
    </div>
  );
}

export default WhatIDo;
