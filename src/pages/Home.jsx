import React from "react";
import { Link } from "react-router-dom";

import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
  faThreads,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <>
      {/* home */}
      <div className="Mycontainer pt-[120px] ">
        <div className="w-full h-screen flex justify-center items-center flex-col gap-10">
          <div className="flex justify-between items-center xs:flex-col xs:gap-[10px]">
            <div className="font-lett text-[50px] xs:text-[3²0px]">
              <h1>01</h1>
            </div>
            <div className="flex justify-center flex-col gap-10 items-center">
              <h1 className="text-[150px] w-[80%] font-lett text-sec text-center leading-35 xs:leading-15 xs:w-[100%] xs:text-[50px]">
                Willkommen auf meinem Portfolio
              </h1>
              <div className="flex gap-5 xs:flex-col">
                <Link className="border-black border py-[10px] px-[25px] text-[20px] font-r flex items-center gap-[10px] rounded-full">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faDownload} />
                  </span>{" "}
                  Lebenslauf herunterladen
                </Link>
                <Link className="border-black border py-[10px] px-[25px] text-[20px] font-r flex items-center gap-[10px] rounded-full">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faDownload} />
                  </span>{" "}
                  Motivationsschreiben herunterladen
                </Link>
                <Link
                  className="border-black border- py-[10px] px-[25px] bg-sec text-body font-r text-[20px] flex items-center gap-[10px] rounded-full"
                  to={"/about"}
                >
                  Start{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="">
              <ul className="flex flex-col gap-3 items-center text-[20px] xs:flex-row">
                <li>
                  <Link
                    to={"https://web.facebook.com/elmharmachenassim/"}
                    target="_blank"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li>
                 
                  <Link
                    to={"https://www.instagram.com/elmharmachenassim/"}
                    target="_blank"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                
                  <Link
                    to={"https://www.linkedin.com/in/nassim-elmharmache/"}
                    target="_blank"
                  >
                    {" "}
                     <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
                <li>
                  
                  <Link
                    to={"https://web.facebook.com/elmharmachenassim/"}
                    target="_blank"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faSquareXTwitter} />
                  </Link>
                </li>
                <li>
              
                  <Link
                    to={"https://www.threads.com/@elmharmachenassim"}
                    target="_blank"
                  >
                    {" "}
                        <FontAwesomeIcon icon={faThreads} />
                  </Link>
                </li>
                <li>
                 
                  <Link
                    to={"https://wa.link/p8hcg2"}
                    target="_blank"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Link>
                </li>
                <li>
                 
                  <Link
                    to={"https://discord.gg/e9hxHP9a"}
                    target="_blank"
                  >
                    {" "}
                     <FontAwesomeIcon icon={faDiscord} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
