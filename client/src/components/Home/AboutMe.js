import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="about-container flex flex-col items-center py-24">
      <div className="title bg-yellow-300 px-2 mb-2">
        <h3>About Me</h3>
      </div>
      <div className="subtitle mb-5 text-4xl font-black">
        <h1>Know Me More</h1>
      </div>
      <div className="experience flex justify-between px-16 gap-16 flex-col md:flex-row">
        <div className="experience-details min-w-[250px]">
          <h1 className="text-4xl text-center md:text-left mb-3">
            Hi, I'm{" "}
            <Link className="font-black text-4xl underline underline-offset-8 decoration-yellow-400">
              Dibyaranjan
            </Link>
          </h1>
          <p className="text-xl mb-5">
            I'm a designer & developer with a passion for web design. I enjoy
            developing simple, clean and slick websites that provide real value
            to the end user. Thousands of clients have procured exceptional
            results while working with me. Delivering work within time and
            budget which meets client’s requirements is our moto.
          </p>
        </div>
        <div className="experience-years w-[360px] text-center mb-5">
          <div className="box-content text-9xl bg-yellow-300 rounded-full text-center font-bold mb-5">
            3
          </div>
          <div className="text-2xl font-medium">
            Years of <span className="font-semibold text-2xl">Experience</span>
          </div>
        </div>
      </div>
      <div className="bio grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 px-16 gap-16">
        <div className="name font-semibold">
          <div className="text-slate-300 font-medium">Name:</div> Dibyaranjan
          Majhi
        </div>
        <div className="email font-semibold">
          <div className="text-slate-300 font-medium">Email:</div>{" "}
          <Link className="underline underline-offset-2">
            majhidibyaranjan9658@gmail.com
          </Link>
        </div>
        <div className="dob font-semibold">
          <div className="text-slate-300 font-medium">Date of Birth:</div>{" "}
          26/10/1997
        </div>
        <div className="from font-semibold">
          <div className="text-slate-300 font-medium">From:</div> India
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
