import React, { useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function ContactMe() {
  const nameRef = useRef();
  const contactMeHandler = (event) => {
    event.preventDefault();
    nameRef.current.focus();
  };

  return (
    <div className="contactme-container bg-yellow-500 grid grid-cols-1 md:grid-cols-[1fr,1fr] py-24">
      <div className="mydetails px-12 text-center md:text-left">
        <h1 className="text-3xl font-semibold mb-5">Let's get in touch</h1>
        <p className="mb-12 text-xl">
          I enjoy discussing new projects and design challenges. Please share as
          much info, as possible so we can get the most out of our first
          catch-up.
        </p>
        <div className="">
          <h3 className="text-2xl font-semibold mb-2">Living In:</h3>
          <p className="mb-4">Sisua, Banki, Cuttack, Odisha, India</p>
          <h3 className="text-2xl font-semibold mb-2">Call:</h3>
          <p className="mb-4">(+91) 8249356492</p>
        </div>
      </div>
      <form onSubmit={contactMeHandler} className="userdetails px-12">
        <div className="mb-12">
          <label htmlFor="name" className="mb-2">
            What is your name?
          </label>
          <br />
          <input type="text" name="name" ref={nameRef} className="py-1" />
        </div>
        <div className="mb-12">
          <label htmlFor="email" className="mb-2">
            What is your email?
          </label>
          <br />
          <input type="text" name="email" className="py-1" />
        </div>
        <div className="mb-12">
          <label htmlFor="help" className="mb-2">
            How can I help you?
          </label>
          <br />
          <textarea rows="4" name="help" className="py-1 w-full" />
        </div>
        <button className="send bg-black text-white text-center py-4 px-8 h-13 w-40 hover:bg-[#4d555a] transition duration-500 delay-100 ease-linear">
          Send
          <ArrowForwardIcon style={{ marginLeft: "8px" }} />
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
