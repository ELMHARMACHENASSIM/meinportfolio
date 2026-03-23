import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-sec h-25 w-full">
        <div className="Mycontainer h-full flex items-center justify-center flex-col text-body ">
          <p className="font-n text-[20px]">Nassim Elmharmache &copy; 2026 </p>
          <p className="font-n text-[20px]">Email : n.elmharmache@gmail.com </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
