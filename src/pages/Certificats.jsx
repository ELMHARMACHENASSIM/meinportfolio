import { Link } from "react-router-dom";

import zertificate from "../data/zer.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDownload } from "@fortawesome/free-solid-svg-icons";
const Certificats = () => {
  return (
    <>
      {/* About */}
      <div className="Mycontainer pt-[120px]" data-aos="fade-in" data-aos-duration="1000">
        <div>
          <h1 className="font-lett text-[30px] py-[30px]">
            {" "}
            04 | die Zertifikate
          </h1>
        </div>
        <div className="w-full h-full">
          <div className="grid grid-cols-5 gap-[20px] xs:grid-cols-1">
            {zertificate.map((zert) => (
              <div className="border-sec border-2 w-full h-full">
                {" "}
                <div key={zert.id}>
                  <img
                    src={zert.image_src}
                    alt={zert.title}
                    className="w-[100%] h-[150px] object-cover object-top overflow-hidden"
                  />
                </div>{" "}
                <div className="bg-sec flex justify-between items-center p-[10px] h-[80px]">
                  <span className="text-body font-r text-[15px]">
                    {zert.title}
                  </span>{" "}
                  <a
                    href={zert.src_file}
                    download={zert.src_file.split("/").pop()} // Suggests a filename for the download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-[20px]"
                  >
                    <FontAwesomeIcon icon={faDownload} />
                  </a>
              
                </div>
              </div>
            ))}
          </div>
        </div>
       {/* btn */}
              <div className="w-full flex gap-5 justify-between py-[30px]">
                <Link
                  className="border-black border py-[10px] px-[25px] text-[20px] font-r flex items-center justify-center gap-[10px] rounded-full"
                  to={"/education"}
                >
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </span>{" "}
                  zurück
                </Link>{" "}
            
              </div>
      </div>
    </>
  );
};

export default Certificats;
