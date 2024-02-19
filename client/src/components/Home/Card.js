import React from "react";

function Card({ name, message, location, image }) {
  return (
    <div className="card flex flex-col justify-center items-center  font-medium">
      <div className="message ">
        <p className="text-center text-2xl mt-9 p-9">{message}</p>
      </div>
      <div
        className="image rounded-full"
        style={{
          backgroundImage: `url("/clients/${image}")`,
          height: "60px",
          width: "60px",
        }}
      ></div>
      <div className="name">
        <h1 className="text-2xl">{name}</h1>
      </div>

      <div className="location font-extralight text-2xl mb-5">
        From {location}
      </div>
    </div>
  );
}

export default Card;
