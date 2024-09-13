import Image from "next/image";
import logo from "@/assets/img-franquicias/Logo-Blanco.png";
import { BsInfo } from "react-icons/bs";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import modalContentJson from "@/static/Content/FooterInfo/footerInfo.json";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);
  const router = useRouter();
  const path = usePathname();

  const redirect = (link: string) => {
    if (path === link) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(link);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const page = window.location.pathname.substring(1);
    switch (page) {
      case "somos-franquicia-plus-consultora":
        setModalContent(modalContentJson.about.content);
        break;
      case "consultores-de-franquicias":
        setModalContent(modalContentJson.franchise.content);
        break;
      case "certificado-de-franquicias":
        setModalContent(modalContentJson.certificate.content);
        break;
      default:
        setModalContent(modalContentJson.default.content);
        break;
    }
  }, []);

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 w-full bg-[#02c5d5] flex flex-col text-white py-14 lg:px-20 px-12 gap-4">
            <a className="w-64" href="/">
              <Image
                unoptimized
                draggable={false}
                src={logo}
                className="images"
                alt=""
              />
            </a>
            {!isAtTop ? (
              <div className="text-xl text-white">¡Negocios que Funcionan!</div>
            ) : (
              <div className="text-xl text-black">¡Negocios que Funcionan!</div>
            )}
            <div className="flex text-4xl gap-2">
              <a
                className="text-white"
                href="https://www.instagram.com/franquicia_plus/"
              >
                <FaInstagram />
              </a>
              <a
                className="text-white"
                href="https://www.facebook.com/franquiciaplus/"
              >
                <FaFacebook />
              </a>
              <a
                className="text-white"
                href="https://www.linkedin.com/company/franquicia-plus/"
              >
                <FaLinkedin />
              </a>
              <a
                className="text-white"
                href="https://www.youtube.com/@franquiciaplus-franquicias3846"
              >
                <FaYoutube />
              </a>
              <a
                className="text-white"
                href="https://www.youtube.com/@franquiciaplus-franquicias3846"
              >
                <FaTiktok />
              </a>
              <a
                onClick={() => {
                  setShowInfo(true);
                }}
                className="hidden lg:block cursor-pointer border border-transparent rounded overflow-hidden hover:border-[#fa5e4d]"
              >
                <BsInfo className="text-[#02c5d5] hover:text-[#fa5e4d] bg-white" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 w-full bg-[#0d132f] flex flex-col text-white p-12 gap-4 text-xs">
            <div className="text-3xl">Contacto</div>
            <div>
              <div className="text-lg">Quito - Ecuador</div>
              <div>
                De los Establos y Av. de los Conquistadores, edificio Cemacol
              </div>
              <div>+593 999 209 555</div>
            </div>
            <div>
              <div className="text-lg">Wellington - USA</div>
              <div>1959 Oak Berry Cir. Wellington, FL 33414</div>
              <div>+561 232 1399 / +561 899 3067</div>
            </div>
            <div>
              <div>Lunes-Viernes: 8:30 - 17:30</div>
              <div>Cerrado los fines de semana</div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full bg-[#0d132f] flex flex-col text-white p-12 gap-4 text-sm">
            <div className="text-3xl">Acerca de</div>
            <div className="flex flex-col">
              <div
                className="text-white cursor-pointer text-base hover:text-[#fa5e4d]"
                onClick={() => redirect("/somos-franquicia-plus-consultora/")}
              >
                Sobre Franquicia Plus
              </div>
              <div
                className="text-white cursor-pointer text-base hover:text-[#fa5e4d]"
                onClick={() => redirect("/consultores-de-franquicias")}
              >
                Franquicia tu negocio
              </div>
              <div
                className="text-white cursor-pointer text-base hover:text-[#fa5e4d]"
                onClick={() => redirect("/certificado-de-franquicias/")}
              >
                Certificate en F+
              </div>
              <div
                className="text-white cursor-pointer text-base hover:text-[#fa5e4d]"
                onClick={() => redirect("/franquicias-en-ecuador/")}
              >
                Buscar Franquicias
              </div>
              <div
                className="text-white cursor-pointer text-base hover:text-[#fa5e4d]"
                onClick={() => redirect("/blog")}
              >
                Blogs y Noticias
              </div>
              <div
                className="text-white cursor-pointer text-base hover:text-[#fa5e4d]"
                onClick={() => redirect("/contactanos")}
              >
                Escríbenos
              </div>
              <div
                className="text-white cursor-pointer text-base hover:text-[#fa5e4d]"
                onClick={() => redirect("/politica-de-privacidad")}
              >
                Politica de privacidad
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-black w-full bg-[#fa5e4d] text-xs py-1">
          Copyright © 2024
        </div>
      </div>

      <div
        className={`inset-0 z-40 bg-black bg-opacity-50 fixed flex justify-center items-center ${
          showInfo ? "" : "hidden"
        }`}
      >
        <div className="bg-white absolute top-10 h-full max-h-[90%] w-[500px] rounded-2xl flex flex-col">
          <div className="w-full border-b p-4 h-auto ">
            <div className="text-[#02c5d5] font-semibold text-4xl ">
              Franquicia Plus
            </div>
          </div>
          <div className="overflow-hidden border-b">
            <div className="overflow-y-auto max-h-[100%]">
              <div
                className="p-4 border-b text-xl"
                dangerouslySetInnerHTML={{ __html: modalContent }}
              />
            </div>
          </div>
          <div className="w-full p-4 flex justify-end h-auto">
            <div
              onClick={() => setShowInfo(false)}
              className="cursor-pointer px-2 py-2 bg-[#fa5e4d] border hover:bg-white rounded-xl overflow-hidden hover:border-[#fa5e4d] text-white hover:text-[#fa5e4d]"
            >
              Cerrar
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
