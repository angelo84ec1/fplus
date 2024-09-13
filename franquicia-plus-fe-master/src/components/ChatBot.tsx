import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import Bot from "../assets/img-franquicias/Group -20.png";
import Mas from "../assets/img-franquicias/Group -31.png";
import Menos from "../assets/img/menosplomo.png";
import { FaWhatsapp } from "react-icons/fa";

const Chat = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="fixed lg:bottom-5 bottom-[5vh] right-5 z-40">
      <div className="chatbot relative">
        {show && (
          <div className="relative">
            <div
              id="negocio-id"
              className="absolute aspect-square lg:h-[105px] h-24 bg-white rounded-full flex justify-center items-center p-1 bottom-6 -right-1"
            >
              <Link
                className="no-underline flex flex-col items-center justify-center aspect-square h-full text-center rounded-full bg-[#02c7d7]"
                href="/consultores-de-franquicias"
              >
                <p className="text-white text-xs">
                  Convierte{" "}
                  <span className="font-bold">
                    tu negocio en una Franquicia
                  </span>
                </p>
              </Link>
            </div>
            <div className="absolute aspect-square lg:h-[105px] h-24 bg-white rounded-full flex justify-center items-center p-1 -bottom-1 right-24">
              <a
                href="https://api.whatsapp.com/send/?phone=593999209555&text&app_absent=0"
                className="no-underline flex flex-col items-center justify-center aspect-square h-full text-center rounded-full text-white bg-[#128c7e]"
              >
                <div className="div-wh flex flex-col items-center justify-center">
                  <FaWhatsapp className="lg:text-2xl text-xl" />
                  <p className="lg:text-base text-sm">WhatsApp</p>
                </div>
              </a>
            </div>
            <Link
              href="/contactanos"
              className="absolute aspect-square lg:h-[105px] h-24 bg-white rounded-full flex justify-center items-center p-1 -bottom-28 right-32 no-underline"
            >
              <div className="flex flex-col items-center justify-center aspect-square h-full text-center rounded-full text-white bg-[#02c7d7]">
                <div className="text-white text-xs">
                  Ya tienes una franquicia. <br />
                  <div className="font-bold">¡Anuncia con nosotros!</div>
                </div>
              </div>
            </Link>
          </div>
        )}
        <div className="relative lg:h-[110px] h-20 -right-0">
          <div
            onClick={() => setShow(!show)}
            className={`cursor-pointer absolute lg:h-[46px] h-8 aspect-square top-1 left-1 rounded-full bg-white hover:bg-[#02c7d7] ${
              !show && "p-1"
            }`}
          >
            {!show ? (
              <Image
                unoptimized
                draggable={false}
                src={Mas}
                alt="chatboot"
                className="images"
              />
            ) : (
              <Image
                unoptimized
                draggable={false}
                src={Menos}
                alt="chatboot"
                className="images h-48"
              />
            )}
          </div>
          <div
            id="mas"
            className="h-full left-0 img-mas-chatboot img-mas-chatboot-bgmas rounded-full"
          >
            <Image
              unoptimized
              draggable={false}
              src={Bot}
              className="images"
              alt="plusSign"
              id="plusImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
