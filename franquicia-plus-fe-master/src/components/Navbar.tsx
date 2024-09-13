import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/img-franquicias/Logo-1.png";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import logoSimple from "@/assets/img-franquicias/Group -71.png";
import plusSymbols from "@/assets/img-franquicias/Group -34.png";
import timesSymbols from "@/assets/img-franquicias/Group -36.png";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [enter, setEnter] = useState(true);
  const router = useRouter();

  const redirect = (link: string) => {
    if (path === link) {
      setMenuOpen(false);
    } else {
      router.push(link);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.scrollY;

      if (currentPosition > scrollTop) {
        // Scrolling down, hide the Navbar
        setScrolling(true);
      } else {
        // Scrolling up, show the Navbar
        setScrolling(false);
      }

      setScrollTop(currentPosition);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollTop]);

  return (
    <div className="flex flex-col w-full z-50 fixed top-0">
      <div
        className={`flex  w-full flex-col-reverse lg:flex-row text-[#707070] justify-between top-0 right-0 left-0 transition-all duration-300 py-2 lg:px-32 ${
          scrollTop > 0 ? "bg-[#0d132f]" : "bg-transparent"
        } ${scrolling && !menuOpen ? "-translate-y-full" : "translate-y-0"}
         `}
      >
        <div className="flex w-auto justify-between lg:justify-start items-center py-2 px-10">
          <div className="flex gap-8 text-sm">
            <a href={`/`} className="cursor-pointer lg:border-r lg:pr-6">
              <div className="h-12">
                <Image
                  unoptimized
                  draggable={false}
                  src={logo}
                  className="w-full h-full object-cover"
                  alt={""}
                />
              </div>
            </a>

            <div className="lg:flex hidden gap-8 items-center">
              <TbWorld className="text-xl text-[#02c5d5]" />
              <div className="relative w-10">
                <select
                  defaultValue={1}
                  className="border-none bg-transparent cursor-pointer select-noArrow w-full text-[#9F9C9D]"
                >
                  <option value="1">ES</option>
                  <option value="2">EN</option>
                </select>
                <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none text-sm">
                  <IoIosArrowDown className="text-[#02c5d5]" />
                </div>
              </div>
              <div className="relative w-10">
                <select
                  defaultValue={1}
                  className="border-none bg-transparent cursor-pointer w-full select-noArrow text-[#9F9C9D]"
                >
                  <option value="1">EC</option>
                  <option value="2">PE</option>
                  <option value="3">PR</option>
                  <option value="4">MX</option>
                  <option value="5">USA</option>
                </select>
                <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none text-sm">
                  <IoIosArrowDown className="text-[#02c5d5]" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                setMenuOpen(true);
                setEnter(true);
              }}
              className="rounded-full lg:hidden text-lg block cursor-pointer p-2"
            >
              {/* <GiHamburgerMenu /> */}
              <div className="grid w-8 h-8 lg:w-6 lg:h-6 gap-y-1 items-center">
                <div className="w-full h-[6px] bg-white border border-white"></div>
                <div className="w-full h-[6px] bg-white border border-white"></div>
                <div className="w-full h-[6px] bg-white border border-white"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-0 lg:gap-4 lg:flex hidden bg-transparent items-center py-2 px-10">
          <div
            onClick={() => {
              setMenuOpen(true);
              setEnter(true);
            }}
            className="rounded-full text-lg lg:block cursor-pointer p-2"
          >
            {/* <GiHamburgerMenu /> */}
            <div className="grid w-5 h-5 lg:w-[40px] lg:h-[30px] gap-y-1 items-center">
              <div className="w-full h-[6px] border bg-white border-white"></div>
              <div className="w-full h-[6px] border bg-white border-white"></div>
              <div className="w-full h-[6px] border bg-white border-white"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`z-50 fixed inset-0 h-full min-h-screen transition-all duration-700 ${
          menuOpen ? "translate-y-100" : "-translate-y-full"
        }`}
      >
        <div className={`flex lg:flex-row flex-col w-full h-full relative`}>
          <div className="absolute top-2 lg:right-20 right-2">
            <IoCloseOutline
              onClick={() => {
                setMenuOpen(false);
              }}
              className="text-7xl cursor-pointer"
            />
          </div>
          <div className="hidden lg:block absolute left-32 top-16">
            <a href="/" className="block h-[24vh]">
              <Image
                unoptimized
                draggable={false}
                alt=""
                className="images"
                src={logoSimple}
              />
            </a>
          </div>
          <div className="absolute pointer-events-none top-0 bottom-0 lg:flex hidden justify-center items-center w-auto left-[29vw]">
            <div className="h-[46vh]">
              <Image
                unoptimized
                src={plusSymbols}
                alt={""}
                className="images"
              />
            </div>
          </div>
          <div className="absolute pointer-events-none right-0 left-0 flex lg:hidden justify-center items-center w-auto top-[15%]">
            <div className="rotate-90 h-[30vh]">
              <Image
                unoptimized
                src={plusSymbols}
                alt={""}
                className="images"
              />
            </div>
          </div>
          <div className="absolute pointer-events-none top-0 bottom-0 flex justify-center items-center w-auto right-[30vw]">
            <div className="h-[35vh] lg:block hidden">
              <Image
                unoptimized
                src={timesSymbols}
                alt={""}
                className="images"
              />
            </div>
          </div>
          <div className="absolute pointer-events-none right-0 left-0 flex lg:hidden justify-center items-center w-auto top-[50%]">
            <div className="rotate-90 h-[20vh]">
              <Image
                unoptimized
                src={timesSymbols}
                alt={""}
                className="images"
              />
            </div>
          </div>
          <div className="lg:w-1/3 h-[30%] lg:h-full bg-[#02C5D5] top-0 bottom-0 flex flex-col justify-center">
            <div className="w-auto ml-[7vw] flex flex-col gap-y-6">
              <div
                className="cursor-pointer text-white text-xl lg:text-4xl"
                onClick={() => redirect("/somos-franquicia-plus-consultora")}
              >
                Acerca de F+
              </div>
              <div
                className="cursor-pointer text-white text-xl lg:text-4xl"
                onClick={() => redirect("/contactanos")}
              >
                Escríbenos
              </div>
              <div
                className="cursor-pointer text-white text-xl lg:text-4xl"
                onClick={() => redirect("/blog")}
              >
                Blogs y Noticias
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 h-[30%] lg:h-full bg-[#0D132F] top-0 bottom-0 flex flex-col justify-center">
            <div className="w-[80%] ml-[4.5vw] flex flex-col gap-y-8">
              <div
                className="cursor-pointer text-white text-xl lg:text-4xl"
                onClick={() => redirect("/consultores-de-franquicias")}
              >
                Franquicia tu negocio
              </div>
              <div
                className="cursor-pointer text-white text-xl lg:text-4xl"
                onClick={() => redirect("/certificado-de-franquicias/")}
              >
                Certifícate en F+
              </div>
              <div
                className="cursor-pointer text-white text-xl lg:text-4xl"
                onClick={() => redirect("/franquicias-en-ecuador/")}
              >
                Buscar Franquicias
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 h-[40%] lg:h-full bg-white top-0 bottom-0 flex flex-col justify-center">
            <div className="w-96 ml-[5vw] flex flex-col lg:gap-y-4 text-[#0D132F]">
              <div>
                <div className="text-xl font-semibold">Quito - Ecuador</div>
                <div className="leading-5 lg:text-lg">
                  De los Establos y Av. de los Conquistadores, edificio Cemacol,
                  Cumbaya <br />
                  +593 999 209 555
                </div>
              </div>
              <div>
                <div className="text-xl font-semibold">Wellington - USA</div>
                <div className="leading-5 lg:text-lg">
                  1959 Oak Berry Cir. Wellington, FL 33414 <br />
                  +561 232 1399 / +561 899 3067
                </div>
              </div>
              <div>
                <div className="leading-5 lg:text-lg">
                  Lunes-Viernes: 8:30 - 17:30 <br />
                  Cerrado los fines de semana
                </div>
              </div>
              <div className="flex text-2xl gap-2">
                <a
                  className="text-white p-2 rounded-full bg-[#0D132F]"
                  href="https://www.instagram.com/franquicia_plus/"
                >
                  <FaInstagram />
                </a>
                <a
                  className="text-white p-2 rounded-full bg-[#0D132F]"
                  href="https://www.facebook.com/franquiciaplus/"
                >
                  <FaFacebookF />
                </a>

                <a
                  className="text-white p-2 rounded-full bg-[#0D132F]"
                  href="https://www.linkedin.com/company/franquicia-plus/"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="text-white p-2 rounded-full bg-[#0D132F]"
                  href="https://www.youtube.com/@franquiciaplus-franquicias3846"
                >
                  <FaYoutube />
                </a>
                <a
                  className="text-white p-2 rounded-full bg-[#0D132F]"
                  href="https://www.youtube.com/@franquiciaplus-franquicias3846"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
