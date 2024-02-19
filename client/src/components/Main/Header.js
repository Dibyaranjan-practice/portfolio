import React, { useState, lazy, Suspense } from "react";
const List = lazy(() => import("./../List"));

function Header() {
  const [isActive, setIsActive] = useState(false);
  const toggleHamburger = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <React.Fragment>
      <div className="header fixed top-0 left-0 w-full z-30 bg-black text-white py-4 px-11 flex justify-between items-center">
        <div className="logo">PORTFOLIO</div>
        <div className="flex items-center">
          <div className="contact">+91 8249356492</div>
          <div
            className={`icon ml-2 relative top-0 left-0 ${
              isActive ? "active" : ""
            }`}
            onClick={toggleHamburger}
          >
            <div className="bar bg-white h-[2px] w-[25px] mb-1"></div>
            <div className="bar bg-white h-[2px] w-[25px] mb-1"></div>
            <div className="bar bg-white h-[2px] w-[25px]"></div>
          </div>
        </div>
      </div>
      {isActive && (
        <Suspense fallback="<h1>...Loading...</h1>">
          <List toggle={toggleHamburger} />
        </Suspense>
      )}
    </React.Fragment>
  );
}

export default Header;
