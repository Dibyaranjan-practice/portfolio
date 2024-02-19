import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function List() {
  return (
    <div className="list-items fixed top-0 left-0 h-full w-full z-10 bg-black text-white flex flex-col justify-center items-center">
      <div className="item hover:text-yellow-200">Home</div>
      <div className="item hover:text-yellow-200">About Me</div>
      <div className="item hover:text-yellow-200">What I do</div>
      <div className="item hover:text-yellow-200">Resume</div>
      <div className="item hover:text-yellow-200">Portfolio</div>
      <div className="item hover:text-yellow-200">FAQ</div>
      <div className="item hover:text-yellow-200">Client Speak</div>
      <div className="item hover:text-yellow-200">Contact Me</div>
      <div className="item ">
        <TwitterIcon />
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}

export default List;
