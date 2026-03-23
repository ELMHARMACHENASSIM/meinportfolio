import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ausbild from '../data/ausbild.json'
const Education = () => {
  return (
    <>
      {/* Education */}
      <div className="Mycontainer  py-[120px] " data-aos="fade-in" data-aos-duration="1000">
        <div>
          <h1 className="font-lett text-[30px] py-[30px]">
            {" "}
            03 | Meine Ausbildung
          </h1>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="grid grid-cols-2 gap-5 xs:grid-cols-1">
            {ausbild.map((ausb) => ( 
            <div className=" w-full h-full flex" key={ausb.id}>
              <div className="w-[30%] bg-sec text-body font-r text-[20px] border-sec border-2 flex justify-center items-center flex-col">
                <h1> {ausb.period}</h1>
                <h2 className="font-n">{ausb.duration}</h2>
              </div>
              <div className="bg-body w-[70%] flex justify-between  border-sec border-2 p-5 flex-col gap-2">
               <h1 className="font-b text-[20px]">{ausb.title}</h1>
               <p>{ausb.desc}</p>
              </div>
            </div>
           ))}  
          </div>
        </div>
        {/* btn */}
        <div className="w-full flex gap-5 justify-between py-[30px] md:flex-row xs:flex-col ">
          <Link
            className="border-black border py-[10px] px-[25px] text-[20px] font-r flex items-center justify-center  gap-[10px] rounded-full"
            to={"/about"}
          >
            {" "}
            <span>
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>{" "}
            zurück
          </Link>{" "}
          <Link
            className="border-black border- py-[10px] px-[25px] bg-sec text-body font-r text-[20px] flex items-center justify-center gap-[10px] rounded-full"
            to={"/certificats"}
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

export default Education;
