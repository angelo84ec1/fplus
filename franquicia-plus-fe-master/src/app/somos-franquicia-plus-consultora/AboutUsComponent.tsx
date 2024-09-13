"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import bannerPc from "@/assets/fotos-fp/sobre-nosotros.jpg";
import bannerPhone from "@/assets/fotos-fp/sobre-nosotros-mobile.jpg";
import ocBg from "@/assets/img-franquicias/Group -60.png";
import sign from "@/assets/fotos-fp/signo.png";
import FA from "@/assets/img-franquicias/Path -1.png";
import PC from "@/assets/img-franquicias/people.png";
import FV from "@/assets/img-franquicias/Group -35.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Partners from "@/components/Partners";
import ChatBot from "@/components/ChatBot";

const AboutUsComponent = () => {
  const partners = [
    {
      id: 1,
      imagensincolor: require("@/assets/img/Nuevos/Kaizen.png"),
      altimagensincolor: "altKaizensincolor",
      titleimagensincolor: "titleKaizensincolor",
      imagenconcolor: require("@/assets/img/Nuevos/Kaizen.png"),
      altimagenconcolor: "altKaizenconcolor",
      titleimagenconcolor: "titleKaizenconcolor",
      url: "https://kaizengroupec.com/",
      animation: "fade-down-right",
    },
    {
      id: 2,
      imagensincolor: require("@/assets/img-franquicias/IQLatam.png"),
      altimagensincolor: "altIqLatamsincolor",
      titleimagensincolor: "titleIqLatamsincolor",
      imagenconcolor: require("@/assets/img-franquicias/IQLatam-Color.png"),
      altimagenconcolor: "altIqLatamconcolor",
      titleimagenconcolor: "titleIqLatamconcolor",
      url: "https://iqlatam.com/",
      animation: "fade-down",
    },
    {
      id: 3,
      imagensincolor: require("@/assets/img/Nuevos/CCQ-bn.jpg"),
      altimagensincolor: "altccqsincolor",
      titleimagensincolor: "titleccqsincolor",
      imagenconcolor: require("@/assets/img/Nuevos/CCQ.png"),
      altimagenconcolor: "altccqconcolor",
      titleimagenconcolor: "titleccqconcolor",
      url: "https://ccq.ec/",
      animation: "fade-down-left",
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
      animation: "fade-up-right",
    },
    {
      id: 5,
      imagensincolor: require("@/assets/img-franquicias/Dentons.png"),
      altimagensincolor: "altDentonssincolor",
      titleimagensincolor: "titleDentonssincolor",
      imagenconcolor: require("@/assets/img-franquicias/Dentons-Color.png"),
      altimagenconcolor: "altDentonsconcolor",
      titleimagenconcolor: "titleDentonsconcolor",
      url: "https://www.dentons.com/es/",
      animation: "fade-up",
    },
    {
      id: 6,
      imagensincolor: require("@/assets/img/Nuevos/MCP-bn.jpg"),
      altimagensincolor:
        "alt-ministerio-coordinador-de-produccion-empleo-y-competetitividad-sincolor",
      titleimagensincolor:
        "title-ministerio-coordinador-de-produccion-empleo-y-competetitividad-sincolor",
      imagenconcolor: require("@/assets/img/Nuevos/MCP.jpg"),
      altimagenconcolor:
        "alt-ministerio-coordinador-de-produccion-empleo-y-competetitividad-concolor",
      titleimagenconcolor:
        "title-ministerio-coordinador-de-produccion-empleo-y-competetitividad-concolor",
      url: "https://www.vicepresidencia.gob.ec/ministerio-de-coordinacion-de-la-produccion-empleo-y-competitividad-2/",
      animation: "fade-up-left",
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
        <div className="h-[800px] w-full relative lg:flex hidden justify-end">
          <div className="w-full h-full">
            <Image
              unoptimized
              draggable={false}
              alt=""
              src={bannerPc}
              className="images"
            />
          </div>
          <div className="absolute bottom-0 w-full h-96 flex justify-center gap-x-[5vw]">
            <div className="relative text-[#02C5D5] flex items-center h-auto mt-0">
              <div className="flex items-center mb-12 relative animated-right">
                <div className="h-20">
                  <Image
                    unoptimized
                    draggable={false}
                    alt=""
                    src={sign}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="text-[17em] top-0"
                >
                  20
                </div>
                <div
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="text-white text-2xl"
                >
                  Años de
                  <br />
                  experiencia en
                  <br />
                  Consultoría Empresarial,
                  <br />
                  Desarrollo de Franquicias,
                  <br />
                  Marketing y Tecnología.
                </div>
              </div>
            </div>
            <div className="relative text-white bg-[#0D132F] fade-in">
              <div
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="bg-[#02C5D5] px-8 py-4 text-2xl"
              >
                “Franquicia Plus,
                <br />
                Negocios que funcionan”
              </div>
              <div className="bg-[#0D132F] px-8 py-8">
                Somos una solución para marcas que quieren
                <br />
                franquiciar su negocio o que ya son Franquiciantes.
                <br />
                <br />
                Mediante nuestra metodología de negocios
                <br />
                conectamos a marcas con emprendedores e<br />
                inversionistas que quieren tener un negocio
                <br />
                comprobado y rentable.
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden flex-col bg-[#0d132f] text-white">
          <div className="h-20  w-full" />
          <div className="w-full">
            <Image
              unoptimized
              draggable={false}
              src={bannerPhone}
              alt={""}
              className="images"
            />
          </div>
          <div className="flex flex-col relative ml-10 mb-4">
            <div className="flex justify-end-end relative">
              <div className="h-20 absolute bottom-14">
                <Image
                  unoptimized
                  draggable={false}
                  alt=""
                  src={sign}
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                style={{
                  fontFamily: "Mukata Mahee Bold",
                  fontSize: "16em",
                  lineHeight: "0.85em",
                }}
                className="top-0 text-[#02C5D5] p-0 ml-14"
              >
                20
              </p>
            </div>
            <div
              style={{ fontFamily: "Mukata Mahee bold" }}
              className="text-4xl ml-3"
            >
              <div>
                Años de
                <br />
                experiencia en
                <br />
                Consultoría
                <br /> Empresarial,
                <br />
                Desarrollo de
                <br /> Franquicias,
                <br />
                Marketing y<br /> Tecnología.
              </div>
            </div>
          </div>
          <div className="relative fade-in">
            <div
              style={{ fontFamily: "Mukata Mahee bold" }}
              className="bg-[#02C5D5] px-8 py-4 text-4xl"
            >
              “Franquicia Plus,
              <br />
              Negocios que
              <br /> funcionan”
            </div>
            <div className="bg-[#0D132F] px-8 py-8">
              Somos una solución para marcas que quieren
              <br />
              franquiciar su negocio o que ya son Franquiciantes.
              <br />
              <br />
              Mediante nuestra metodología de negocios
              <br />
              conectamos a marcas con emprendedores e<br />
              inversionistas que quieren tener un negocio
              <br />
              comprobado y rentable.
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="z-[1] lg:h-full lg:py-32 w-full relative">
          <div className="absolute inset-0">
            <Image
              unoptimized
              draggable={false}
              alt=""
              src={ocBg}
              className="images"
            />
          </div>
          <div className="relative flex justify-center items-center w-full h-full overflow-hidden">
            <div
              style={{ fontFamily: "Mukata Mahee Bold" }}
              className="w-[80%] flex flex-col items-center gap-32 text-white"
            >
              <div
                data-aos="fade-down"
                data-aos-delay="50"
                className="text-5xl text-center"
              >
                Nuestra comunidad
              </div>
              <div className="flex justify-evenly lg:flex-row flex-col lg:gap-16 gap-8 mb-8">
                <div
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className="h-[230px] w-[280px] flex flex-col"
                >
                  <div className="flex h-[69px] w-full">
                    <div className="aspect-square h-full flex justify-center items-center bg-[#f85e4d] p-3">
                      <Image
                        unoptimized
                        draggable={false}
                        alt=""
                        src={FA}
                        className="images"
                      />
                    </div>
                    <div className="bg-[#02c7d7] text-5xl w-full flex items-center pl-4">
                      +50
                    </div>
                  </div>
                  <div
                    style={{ fontFamily: "Mukata Mahee Medium" }}
                    className="w-full h-[161px] text-black text-5xl bg-white flex justify-center text-center items-center"
                  >
                    Franquicias asociadas
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="h-[230px] w-[280px] flex flex-col"
                >
                  <div className="flex h-[69px] w-full">
                    <div className="aspect-square h-full flex justify-center items-center bg-[#f85e4d] p-3">
                      <Image
                        unoptimized
                        draggable={false}
                        alt=""
                        src={PC}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="bg-[#02c7d7] text-5xl w-full flex items-center pl-4">
                      +5.000
                    </div>
                  </div>
                  <div
                    style={{ fontFamily: "Mukata Mahee Medium" }}
                    className="w-full h-[161px] text-black text-5xl bg-white flex justify-center text-center items-center"
                  >
                    Prospectos Calificados
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  className="h-[230px] w-[280px] flex flex-col"
                >
                  <div className="flex h-[69px] w-full">
                    <div className="aspect-square h-full flex justify-center items-center bg-[#f85e4d] p-3">
                      <Image
                        unoptimized
                        draggable={false}
                        alt=""
                        src={FV}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="bg-[#02c7d7] text-5xl w-full flex items-center pl-4">
                      +100
                    </div>
                  </div>
                  <div
                    style={{ fontFamily: "Mukata Mahee Medium" }}
                    className="w-full h-[161px] text-black text-5xl bg-white flex justify-center text-center items-center"
                  >
                    Franquicias vendidas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:h-[760px] w-full bg-white flex flex-col items-center py-[60px] gap-6 lg:px-20 overflow-hidden">
          <div
            style={{ fontFamily: "Mukata Mahee Bold" }}
            className="text-4xl"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {" "}
            Nuestros Partners
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 h-full w-full overflow-hidden">
            <Partners partners={partners} />
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
      <ChatBot />
    </main>
  );
};

export default AboutUsComponent;
