import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
  faThreads,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-sec h-30 w-full fixed z-50 ">
        <div className="Mycontainer h-full flex md:items-center md:justify-between md:flex-row  text-body  xs:flex-col xs:justify-center xs:items-center xs:gap-[5px]">
          <div>
            <h1 className="font-lett md:text-[30px]  xs:text-[20px]">
              Nassim Elmharmache
            </h1>
          </div>
          <div className="">
            <ul className="flex gap-3 items-center md:text-[20px]  xs:text-[15px]">
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
                <Link to={"https://wa.link/p8hcg2"} target="_blank">
                  {" "}
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Link>
              </li>
              <li>
                <Link to={"https://discord.gg/e9hxHP9a"} target="_blank">
                  {" "}
                  <FontAwesomeIcon icon={faDiscord} />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <CopyToClipboard
              text="n.elmharmache@gmail.com"
              onCopy={() => alert("Copied!")}
            >
              <button className="font-r md:text-[15px] border border-body px-5 py-[10px] rounded-full  xs:py-[10px] xs:text-[10px]   ">
                Email : n.elmharmache@gmail.com
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
