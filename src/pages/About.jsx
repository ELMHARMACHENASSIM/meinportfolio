import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/img/img.jpeg";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <>
      {/* About */}
      <div className="Mycontainer pt-[120px] " data-aos="fade-in" data-aos-duration="1000">
        <div>
          <h1 className="font-lett text-[30px] py-[30px]"> 02 | über mich</h1>
        </div>
        <div className="w-full h-full flex justify-center items-center flex-col gap-10">
          <div className="flex justify-between items-center">
            <div className="flex justify-center flex-col gap-10 items-center">
              <div className="flex justify-between items-center xs:flex-col-reverse gap-10">
                <div className="w-[60%] xs:w-full">
                  {" "}
                  <p className="text-[25px]">
                    Ich heiße Nassim Elmharmache. Ich bin 28 Jahre alt. Ich
                    lerne Deutsch und habe einen Erste-Hilfe-Kurs beim Roten
                    Kreuz gemacht. Ich interessiere mich für Informatik und
                    besitze ein Diplom in Webseitenerstellung und Grafikdesign.
                    Ich suche neue Erfahrungen und möchte mich neuen
                    Herausforderungen stellen. Ich engagiere mich gerne in
                    sozialen Aktivitäten wie Wohltätigkeitsarbeit und der
                    Teilnahme an Vereinsaktivitäten.
                  </p>
                </div>

                <div className="w-[500px] xs:w-full">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover border-3 border-sec"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* btn */}
        <div className="w-full flex gap-5 justify-between py-[30px] md:flex-row xs:flex-col ">
          <Link
            className="border-black border py-[10px] px-[25px] text-[20px] font-r flex items-center justify-center gap-[10px] rounded-full "
            to={"/"}
          >
            {" "}
            <span>
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>{" "}
            zurück
          </Link>{" "}
          <Link
            className="border-black border- py-[10px] px-[25px] bg-sec text-body font-r text-[20px] flex items-center justify-center gap-[10px] rounded-full "
            to={"/education"}
          >
            nächsten Seite
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
