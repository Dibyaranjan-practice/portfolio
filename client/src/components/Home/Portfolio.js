import React, { useState } from "react";

const data = [
  ["project-1.jpg", "Scaler", "Scaler Project 1"],
  ["project-2.jpg", "Scaler", "Scaler Project 1"],
  ["project-3.jpg", "Youtube", "Youtube Project 1"],
  ["project-4.jpg", "Youtube", "Youtube Project 1"],
  ["project-5.jpg", "Personal", "Personal Project 1"],
  ["project-6.jpg", "Company", "Company Project 1"],
];

function Portfolio() {
  const [category, setCategory] = useState("All");
  const updateCategory = (event) => {
    setCategory(event.target.innerHTML);
  };
  return (
    <div className="what-i-do flex flex-col items-center py-16 bg-[#f8f9fa]">
      <div className="title bg-yellow-300 px-2 mb-2">
        <h3>Portfolio</h3>
      </div>
      <div className="subtitle mb-5 text-4xl font-black">
        <h1>Some of my most recent projects</h1>
      </div>
      <div className="categories">
        <ul className="flex justify-between mb-4" onClick={updateCategory}>
          <li className={`${category === "All" ? "active" : ""}`}>All</li>
          <li className={`${category === "Scaler" ? "active" : ""}`}>Scaler</li>
          <li className={`${category === "Youtube" ? "active" : ""}`}>
            Youtube
          </li>
          <li className={`${category === "Company" ? "active" : ""}`}>
            Company
          </li>
          <li className={`${category === "Personal" ? "active" : ""}`}>
            Personal
          </li>
        </ul>
      </div>
      <div className="project-images grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item, index) => {
          if (item[1] === category || category === "All") {
            return (
              <div className="image-item relative top-0 left-0">
                <div
                  key={index}
                  className="item"
                  style={{
                    backgroundImage: `url("/images/${item[0]}")`,
                    height: "400px",
                    width: "400px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="item-cover z-10 absolute top-0 left-0 h-full w-full flex justify-center items-center bg-black opacity-5">
                  {item[2]}
                </div>
              </div>
            );
          }
          return "";
        })}
      </div>
    </div>
  );
}

export default Portfolio;
