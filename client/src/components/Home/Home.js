import React, { useEffect, useRef } from "react";
import Button from "../Shared/Button";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const text = "MY NAME IS DIBYA";

function Home() {
  const contentRef = useRef();

  useEffect(() => {
    let index = 0;
    let flag = true;
    setInterval(() => {
      contentRef.current.innerHTML = text.substring(0, index + 1);
      flag ? index++ : index--;
      if (flag && index === text.length) {
        flag = !flag;
      }
      if (!flag && index === -1) {
        flag = !flag;
      }
    }, 300);
  }, []);
  return (
    <div
      className="home_container h-[100vh] w-[100vw] mt-3 py-8 relative top-0 left-0 flex flex-col justify-evenly items-center text-white text-xl"
      style={{
        backgroundImage: `url("/images/background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="home_title text-3xl">HI, I'M A FREELANCER</div>
      <div className="type">
        <span className="text-6xl" ref={contentRef}></span>
        <span className="blink text-6xl">|</span>
      </div>

      <div className="subtitle text-3xl">BASED ON INDIA</div>
      <div className="button text-3xl">
        <Button bgColor="yellow" textColor="black" content="View my Works" />
      </div>
      <div className="down_arrow">
        <ArrowCircleDownIcon style={{ fontSize: "4rem" }} />
      </div>
    </div>
  );
}

export default Home;
