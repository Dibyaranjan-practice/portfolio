import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer bg-black text-white flex justify-between py-20 flex-wrap px-5">
      <div>
        Copyright © 2023
        <Link className="underline underline-offset-2 text-yellow-300">
          {" "}
          Majhi
        </Link>
        . All Rights Reserved.
      </div>
      <div>
        Designed by
        <Link className="underline underline-offset-2 text-yellow-300">
          {" "}
          Dibyaranjan Majhi
        </Link>
      </div>
    </div>
  );
}

export default Footer;
