"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import bannerPc from "@/assets/fotos-fp/certificados.jpg";
import bannerPhone from "@/assets/fotos-fp/certificados-mobile.jpg";
import certificate from "@/assets/fotos-fp/caja-certificados.png";
import certificateCheck from "@/assets/fotos-fp/certificate/caja-certificados-visto.png";
import ocBg from "@/assets/img-franquicias/Group -60.png";
import sign from "@/assets/fotos-fp/signo.png";
import Carousel from "react-bootstrap/Carousel";
import phone from "@/assets/img-franquicias/Group -70.png";
import pc from "@/assets/img-franquicias/Group 279.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Partners from "@/components/Partners";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ChatBot from "@/components/ChatBot";

const CertificatePageComponent = () => {
  const partners = [
    {
      id: 1,
      imagensincolor: require("@/assets/fotos-fp/ie business school.png"),
      altimagensincolor: "alt-ie-business-sincolor",
      titleimagensincolor: "title-ie-business-sincolor",
      imagenconcolor: require("@/assets/fotos-fp/ie business school.png"),
      altimagenconcolor: "alt-ie-business-concolor",
      titleimagenconcolor: "title-ie-business-concolor",
      url: "https://www.ie.edu/es/business-school/",
    },
    {
      id: 2,
      imagensincolor: require("@/assets/img/Nuevos/Kaizen.png"),
      altimagensincolor: "altKaizensincolor",
      titleimagensincolor: "titleKaizensincolor",
      imagenconcolor: require("@/assets/img/Nuevos/Kaizen.png"),
      altimagenconcolor: "altKaizenconcolor",
      titleimagenconcolor: "titleKaizenconcolor",
      url: "https://kaizengroupec.com/",
    },
    {
      id: 3,
      imagensincolor: require("@/assets/fotos-fp/SGS.png"),
      altimagensincolor: "alt-SGS-sincolor",
      titleimagensincolor: "title-SGS-sincolor",
      imagenconcolor: require("@/assets/fotos-fp/SGS.png"),
      altimagenconcolor: "alt-SGS-concolor",
      titleimagenconcolor: "title-SGS-concolor",
      url: "https://www.sgs.com/",
    },
    {
      id: 4,
      imagensincolor: require("@/assets/img-franquicias/Hello.png"),
      altimagensincolor: "altHellosincolor",
      titleimagensincolor: "titleHellosincolor",
      imagenconcolor: require("@/assets/img-franquicias/hello-color.png"),
      altimagenconcolor: "altHelloconcolor",
      titleimagenconcolor: "titleHelloconcolor",
      url: "https://hellomediaec.com/",
    },
    {
      id: 5,
      imagensincolor: require("@/assets/fotos-fp/SPINGARN.png"),
      altimagensincolor: "altSpingarnsincolor",
      titleimagensincolor: "titleSpingarnsincolor",
      imagenconcolor: require("@/assets/fotos-fp/SPINGARN.png"),
      altimagenconcolor: "altSpingarnconcolor",
      titleimagenconcolor: "titleSpingarnconcolor",
      url: "https://www.spingarn.ec/",
    },
    {
      id: 6,

      imagensincolor: require("@/assets/img/Nuevos/CCQ-bn.jpg"),
      altimagensincolor: "altccqsincolor",
      titleimagensincolor: "titleccqsincolor",
      imagenconcolor: require("@/assets/img/Nuevos/CCQ.png"),
      altimagenconcolor: "altccqconcolor",
      titleimagenconcolor: "titleccqconcolor",
      url: "https://ccq.ec/",
    },
    {
      id: 7,
      imagensincolor: require("@/assets/img-franquicias/IQLatam.png"),
      altimagensincolor: "altIqLatamsincolor",
      titleimagensincolor: "titleIqLatamsincolor",
      imagenconcolor: require("@/assets/img-franquicias/IQLatam-Color.png"),
      altimagenconcolor: "altIqLatamconcolor",
      titleimagenconcolor: "titleIqLatamconcolor",
      url: "https://iqlatam.com/",
    },
    {
      id: 8,
      imagensincolor: require("@/assets/fotos-fp/CIP.png"),
      altimagensincolor: "alt-CIP-sincolor",
      titleimagensincolor: "title-CIP-sincolor",
      imagenconcolor: require("@/assets/fotos-fp/CIP.png"),
      altimagenconcolor: "alt-CIP-concolor",
      titleimagenconcolor: "title-CIP-concolor",
      url: "https://www.cip.org.ec/",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="max-w-screen overflow-x-hidden">
      <section>
        <Navbar />
      </section>

      <section>
        <div className="h-screen w-full relative hidden lg:flex justify-end">
          <div className="w-full h-full">
            <Image
              unoptimized
              width={10000}
              height={10000}
              draggable={false}
              alt=""
              src={bannerPc}
              className="images"
            />
          </div>
          <div className="absolute bottom-0 w-full h-96 flex justify-around">
            <div className="relative text-[#02C5D5] flex items-center h-auto mt-0">
              <div className="flex flex-col mb-12 relative animated-right">
                <div
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="text-white text-4xl mb-0"
                >
                  Gana credibilidad <br />
                  con nuestra <br />
                  certificación
                </div>
                <div className="flex items-start -mt-12 relative">
                  <div
                    style={{ fontFamily: "Mukata Mahee Bold" }}
                    className="text-[10em] py-0 top-0 flex"
                  >
                    CSF
                  </div>
                  <div className="h-[50px] mt-16">
                    <Image
                      unoptimized
                      width={1000}
                      height={1000}
                      draggable={false}
                      alt=""
                      src={sign}
                      className="w-full h-full object-cover flex"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-white fade-in mt-10">
              <div
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="bg-[#02C5D5] px-8 py-4 text-2xl"
              >
                Certificación Sistema de
                <br />
                Franquicia PLUS
              </div>
              <div className="bg-[#0D132F] px-8 py-8 leading-4">
                Somos la única empresa en el mundo que
                <b style={{ fontFamily: "Mukata Mahee Bold" }}>
                  <br />
                  audita y certifica tu sistema de franquicia <br />
                  mediante un NFT
                </b>{" "}
                único, en donde podrás <br />
                mostrar que cumples los requisitos necesarios <br />
                para brindar un servicio de calidad <br />
                internacional para tu red de franquicias.
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden flex-col bg-[#0d132f] lg:bg-transparent text-white">
          <div className="h-20  w-full" />
          <div className="w-full">
            <Image
              unoptimized
              width={1000}
              height={1000}
              draggable={false}
              src={bannerPhone}
              alt={""}
              className="images"
            />
          </div>
          <div className="flex flex-col relative ml-10 mb-4">
            <div className="flex relative">
              <p
                style={{ fontSize: "9em", lineHeight: "1.2em" }}
                className="top-0 text-[#02C5D5] p-0"
              >
                CSF
              </p>
              <div className="h-10 relative top-10">
                <Image
                  unoptimized
                  width={1000}
                  height={1000}
                  draggable={false}
                  alt=""
                  src={sign}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-4xl ml-3">
              <div style={{ fontFamily: "Mukata Mahee Bold" }}>
                Gana credibilidad
                <br />
                con nuestra
                <br />
                certificación
              </div>
            </div>
          </div>
          <div className="relative fade-in">
            <div
              style={{ fontFamily: "Mukata Mahee Bold" }}
              className=" px-8 py-4 text-4xl bg-[#02C5D5]"
            >
              Certificación <br />
              Sistema de <br />
              Franquicia PLUS
            </div>
            <div className="bg-[#0D132F] px-8 py-8">
              Somos la única empresa en el <br />
              mundo que audita y certifica tu <br />
              sistema de franquicia mediante un <br />
              NFT único, en donde podrás mostrar <br />
              que cumples los requisitos <br />
              necesarios para brindar un servicio <br />
              de calidad internacional para tu red <br />
              de franquicias.
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="z-[1] lg:h-[1000px] h-full w-full relative">
          <div className="absolute inset-0 w-full hidden lg:block">
            <Image
              unoptimized
              width={1000}
              height={1000}
              draggable={false}
              alt=""
              src={ocBg}
              className="images"
            />
          </div>
          <div
            className="relative flex lg:flex-row flex-col justify-between w-full bg-[#0D132F]"
            style={{ height: "60%" }}
          >
            <div className="relative inset-0 flex flex-col items-start justify-center">
              <div
                data-aos="fade-up"
                className="text-9xl text-[#02c7d7] font-bold z-0 lg:block hidden ps-28"
              >
                +50
              </div>
              <div
                data-aos="fade-up"
                className="text-9xl text-white font-bold z-0 block lg:hidden"
              >
                +100
              </div>
              <div className="flex flex-col items-start justify-center text-start bg-white lg:py-12 py-6 ps-10 lg:pe-2 lg:ps-28 lg:rounded-r-3xl rounded-r-[60px] z-10 lg:mr-0 mr-10">
                <div data-aos="fade-up" className="text-4xl font-semibold">
                  Franquicias certificadas <br /> en todo <br />
                </div>
                <div
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  data-aos="fade-up"
                  className="text-7xl text-red-500"
                >
                  LATAM
                </div>
              </div>
            </div>
            <div className="ml-4 relative lg:right-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-3 w-auto justify-center max-w-[50%] h-auto gap-y-4 gap-x-5 overflow-hidden">
              {Array.from(Array(9).keys()).map((index) => (
                <div key={index} className="relative h-full w-full px-0 py-2">
                  <div className="h-full w-full">
                    <Image
                      unoptimized
                      width={1000}
                      height={1000}
                      draggable={false}
                      src={certificate}
                      className="w-full h-full object-contain lg:block hidden"
                      alt=""
                    />
                    <Image
                      unoptimized
                      width={1000}
                      height={1000}
                      draggable={false}
                      src={certificateCheck}
                      className="w-full h-full object-contain lg:hidden block"
                      alt=""
                    />
                  </div>
                  <div
                    data-aos="fade-left"
                    className="absolute inset-0 top-0 bottom-0 flex items-center justify-center text-white"
                  >
                    {index === 0 && (
                      <>
                        ISO 9001:2015 <br />
                        LEAN / 5 S’s
                      </>
                    )}
                    {index === 1 && (
                      <>
                        Planeación <br />
                        Estratégica
                      </>
                    )}
                    {index === 2 && (
                      <>
                        Valoración <br />
                        Financiera
                      </>
                    )}
                    {index === 3 && (
                      <>
                        Plan de <br />
                        Expansión
                      </>
                    )}
                    {index === 4 && (
                      <>
                        Procesos <br />
                        Visuales SIPOC
                      </>
                    )}
                    {index === 5 && (
                      <>
                        Contrato de <br />
                        Franquicia
                      </>
                    )}
                    {index === 6 && (
                      <>
                        Auditoría y <br />
                        Soporte
                      </>
                    )}
                    {index === 7 && (
                      <>
                        Estrategia de <br />
                        Marketing
                      </>
                    )}
                    {index === 8 && (
                      <>
                        Estrategia <br />
                        Comercial
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center -bottom-20 w-full">
            <div
              style={{ fontFamily: "Mukata Mahee Bold" }}
              className="w-full flex flex-col items-center gap-8 lg:text-white text-black relative"
            >
              <div
                data-aos="fade-down"
                data-aos-delay="50"
                className="lg:text-5xl text-3xl text-center"
              >
                ¿Por qué tener nuestra <br />
                certificación CSF+?
              </div>
              <div className="flex lg:flex-row flex-col lg:justify-evenly items-center w-full overflow-hidden lg:gap-0 gap-6">
                <div
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className="h-[286px] w-[326px] flex flex-col justify-between p-8 rounded-2xl border-2 border-transparent text-white bg-[#f85e4d]"
                >
                  <div className="text-4xl text-black">
                    POSICIÓNATE COMO LÍDER
                  </div>
                  <div
                    style={{ fontFamily: "Mukata Mahee Light" }}
                    className="text-xl"
                  >
                    Expone tu marca frente al <br />
                    mercado como una empresa <br />
                    referente en tu categoria
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="h-[286px] w-[326px] flex flex-col justify-between p-8 rounded-2xl border-2 border-transparent text-white bg-[#02c7d7]"
                >
                  <div className="text-4xl">VENDE MÁS FRANQUICIAS</div>
                  <div
                    style={{ fontFamily: "Mukata Mahee Light" }}
                    className="text-xl"
                  >
                    Genera más confianza entre <br />
                    los interesados en adquirir <br />
                    un negocio de éxito y <br />
                    comprobado.
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-delay="100"
                  className="h-[286px] w-[326px] flex flex-col justify-between p-8 rounded-2xl border-2 border-[#02c7d7]  bg-white text-black"
                >
                  <div className="text-[#02c7d7] text-4xl">GANA REPUTACIÓN</div>
                  <div
                    style={{ fontFamily: "Mukata Mahee Light" }}
                    className="text-xl"
                  >
                    Muestra tu casos de éxito <br />
                    como una marca que brinda <br />
                    soporte permanente a su red <br />
                    de franquicias.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-screen w-full bg-white flex lg:flex-row flex-col items-center py-[60px] gap-6 lg:mt-52 mt-10">
          <div className="grid grid-cols-2 h-full lg:w-9/12">
            <Partners partners={partners} />
          </div>
          <div className="h-full w-full relative">
            <video
              className="images"
              loop
              autoPlay
              preload=""
              muted
              playsInline
            >
              <source type="video/mp4" src="/cert.mp4" />
            </video>
            <div className="absolute hidden lg:block text-white left-20 bottom-32 text-2xl">
              Nuestros aliados estratégicos te permitirán
              <br />
              llegar a nuevos mercados certificando y
              <br />
              validando tus sistema de negocio.
            </div>
            <div className="absolute lg:hidden block text-white left-5 bottom-4">
              Nuestros aliados estratégicos te <br />
              permitirán llegar mas lejos
              <br />
              certificando y validando tus atributos
              <br />
              de empresa y marca franquicia.
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:h-full h-[80vh] bg-[#0D132F] w-full lg:py-28">
          <div className="h-full w-full flex justify-center flex-col items-center text-center font-mukata-regular">
            <div className="flex flex-col items-center gap-y-24 w-full lg:w-auto">
              <div
                data-aos="fade-down"
                data-aos-delay="200"
                className="text-white text-4xl lg:block hidden"
              >
                ¿Quieres saber que franquicias cumplen <br />
                con el certificado CSF+ NFT ?
              </div>
              <div
                data-aos="fade-down"
                data-aos-delay="200"
                className="text-white block text-xl lg:hidden"
              >
                ¿Quieres saber si tu franquicia <br />
                cumple con estándares <br />
                de calidad, procesos y está <br />
                certificada como una <br />
                Franquicia de éxito?
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative w-[90%] lg:w-full"
              >
                <input
                  placeholder="Encuentra el nombre de la franquicia que buscas..."
                  type="text"
                  className="w-full lg:py-3 py-4 ps-4 pe-24 lg:ps-10 lg:pe-10 rounded-xl lg:text-base text-sm overflow-hidden text-ellipsis"
                />
                <div className="absolute right-2 top-0 bottom-0 flex p-1">
                  <a
                    href="/certificado/"
                    className="px-2 py-2 flex items-center gap-2 bg-[#02c7d7] text-black rounded-2xl no-underline"
                  >
                    <FaMagnifyingGlass />
                    Buscar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[52.5em] lg:h-[20em] w-full">
          <Carousel
            controls={false}
            indicators={false}
            className="w-full h-full"
          >
            <Carousel.Item
              interval={300000}
              className="relative h-[52.5em] lg:h-[20em]"
            >
              <div className="w-full h-full lg:block hidden absolute">
                <Image
                  unoptimized
                  width={1000}
                  height={1000}
                  draggable={false}
                  alt=""
                  src={pc}
                  className="images"
                />
              </div>
              <div className="w-full h-full block lg:hidden absolute">
                <Image
                  unoptimized
                  width={1000}
                  height={1000}
                  draggable={false}
                  alt=""
                  src={phone}
                  className="images"
                />
              </div>

              <div className="absolute w-full lg:top-0 top-96 lg:bottom-0 bottom-10 flex items-center lg:ml-64 lg:px-0 px-10">
                <div className="w-full h-full lg:h-auto flex flex-col lg:justify-center justify-between items-center lg:items-start">
                  <div
                    className="lg:text-3xl text-2xl lg:w-[80%] mb-5 text-white"
                    data-aos="fade-right"
                  >
                    Contacta un asesor ahora, y se
                    <br />
                    parte de nuestras franquicias
                    <br />
                    certificadas con CSF+
                  </div>

                  <a
                    className="no-underline text-2xl"
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=593999209555&text=Hola, estoy interesado en anunciar mi franquicia en su portal.&app_absent=0"
                  >
                    <button
                      className="lg:text-xl text-2xl lg:px-4 px-6 py-2 bg-[#02C5D5] text-black hover:bg-[#F85E4D] hover:text-white rounded-2xl"
                      data-aos="fade-right"
                      data-aos-delay="100"
                    >
                      Contactar
                    </button>
                  </a>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      <section>
        <Footer />
      </section>
      <ChatBot />
    </main>
  );
};

export default CertificatePageComponent;
