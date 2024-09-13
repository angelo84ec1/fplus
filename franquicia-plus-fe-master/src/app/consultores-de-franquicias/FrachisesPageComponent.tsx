"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import bannerPc from "@/assets/fotos-fp/franquiciar-mi-negocio.jpg";
import bannerPhone from "@/assets/fotos-fp/franquiciar-mi-negocio-mobile.jpg";
import ocBg from "@/assets/img-franquicias/Group -60.png";
import sign from "@/assets/fotos-fp/signo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PublicityComponent from "@/components/PublicityComponent";
import ChatBot from "@/components/ChatBot";
import FranchisesCarousel from "@/components/FranchisesCarousel";

const FrachisesPageComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="max-w-screen overflow-x-hidden">
      <section>
        <Navbar />
      </section>

      <section>
        <div className="h-screen w-full relative lg:flex hidden justify-end">
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
          <div className="absolute bottom-0 w-full h-96 flex justify-center gap-x-[10vw]">
            <div className="relative text-[#02C5D5] flex items-center h-auto mt-0">
              <div className="flex items-center mb-12 relative animated-right">
                <div className="h-20">
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
                <div
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="text-[17em] top-0"
                >
                  20
                </div>
                <div
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="text-white text-4xl"
                >
                  Años de
                  <br />
                  experiencia en
                  <br />
                  Franquicias en
                  <br />
                  todo Ecuador
                </div>
              </div>
            </div>
            <div className="relative text-white fade-in mt-10">
              <div
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="bg-[#02C5D5] px-8 py-4 text-2xl"
              >
                DESARROLLAMOS TU
                <br />
                SISTEMA DE FRANQUICIA
              </div>
              <div className="bg-[#0D132F] px-8 py-8 leading-4">
                Somos una solución para marcas exitosas que <br />
                quieren franquiciar y comercializar su negocio.
                <br />
                <br />
                Mediante nuestra metodología de negocios <br />
                conectamos las mejores marcas con <br />
                emprendedores e inversionistas.
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden flex-col bg-[#0d132f] text-white">
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
            <div className="flex justify-end-end relative">
              <div className="h-20 absolute bottom-14">
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
              <p
                style={{ fontSize: "15em", lineHeight: "0.85em" }}
                className="top-0 text-[#02C5D5] p-0 ml-14"
              >
                20
              </p>
            </div>
            <div className="text-4xl ml-3">
              <div style={{ fontFamily: "Mukata Mahee Bold" }}>
                Años de
                <br />
                experiencia en
                <br />
                creación de
                <br />
                Franquicias en
                <br />
                todo Ecuador.
              </div>
            </div>
          </div>
          <div className="relative fade-in">
            <div
              style={{ fontFamily: "Mukata Mahee Bold" }}
              className="bg-[#02C5D5] px-8 py-4 text-4xl"
            >
              DESARROLLAMOS <br />
              TU SISTEMA DE <br />
              FRANQUICIA
            </div>
            <div className="bg-[#0D132F] px-8 py-8">
              Somos una solución para marcas exitosas <br />
              que quieren franquiciar y comercializar su <br />
              negocio.
              <br />
              Mediante nuestra metodología de negocios <br />
              conectamos las mejores marcas con <br />
              emprendedores e inversionistas. <br />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="z-[1] lg:h-[30em] w-full relative h-full ">
          <div className="absolute inset-0 w-full lg:block hidden">
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
          <div className="relative flex justify-center lg:-bottom-52 w-full">
            <div
              style={{ fontFamily: "Mukata Mahee Bold" }}
              className="w-full flex flex-col items-center gap-8 lg:text-white text-black relative lg:pt-0 pt-10"
            >
              <div
                data-aos="fade-down"
                data-aos-delay="50"
                className="text-5xl text-center hidden lg:block"
              >
                ¿Por qué trabajar con nuestro
                <br />
                equipo de Franquicia Plus+ ?
              </div>
              <div
                data-aos="fade-down"
                data-aos-delay="50"
                className="text-3xl text-center block lg:hidden"
              >
                ¿Por qué trabajar con nuestro equipo de <br />
                Franquicia Plus+ ?
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:justify-evenly w-full overflow-hidden ">
                <div
                  style={{ boxShadow: "rgb(0, 0, 0) 0px 12px 28px" }}
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className="h-[286px] w-[326px] flex flex-col mb-16 justify-between p-7 rounded-2xl border-2 border-transparent text-white bg-[#f85e4d]"
                >
                  <div className="text-4xl text-center text-black">
                    TRANFERENCIA DE KNOW-HOW
                  </div>
                  <div
                    style={{ fontFamily: "Mukata Mahee Light" }}
                    className="text-xl"
                  >
                    Nos aseguramos que nuestros <br />
                    clientes aprendan a gestionar <br />
                    nuestras herramientas de <br />
                    mejora contínua.
                  </div>
                </div>
                <div
                  style={{ boxShadow: "rgb(0, 0, 0) 0px 12px 28px" }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="h-[286px] w-[326px] flex flex-col mb-16 justify-between p-7 rounded-2xl border-2 border-transparent text-white bg-[#02c7d7]"
                >
                  <div className="text-4xl text-center">
                    INVERSIÓN 100% GARANTIZADA
                  </div>
                  <div
                    style={{ fontFamily: "Mukata Mahee Light" }}
                    className="text-xl"
                  >
                    Garantizamos su inversión <br />
                    contra los registros mensuales <br />
                    de uso de nuestra metodología. <br />
                    <br />
                  </div>
                </div>
                <div
                  style={{ boxShadow: "rgb(0, 0, 0) 0px 12px 28px" }}
                  data-aos="fade-left"
                  data-aos-delay="100"
                  className="h-[286px] w-[326px] flex flex-col mb-16 justify-between p-7 rounded-2xl border-2 border-[#02c7d7]  bg-white text-black"
                >
                  <div className="text-[#02c7d7] text-4xl text-center">
                    EXPERIENCIA COMPROBADA
                  </div>
                  <div
                    style={{ fontFamily: "Mukata Mahee Light" }}
                    className="text-xl"
                  >
                    Nuestra mejor carta de <br />
                    presentación es nuestro <br />
                    portafolio de clientes en Todo <br />
                    Ecuador.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex text-center flex-col items-center gap-x-6 gap-y-16 lg:px-10 lg:py-20 lg:mt-36 w-full h-full lg:content-center pb-10">
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            className="title text-3xl lg:text-5xl"
            style={{
              fontFamily: "Mukata Mahee Bold",
              textShadow:
                "2px 0 #02c5d5, -2px 0 #02c5d5, 0 2px #02c5d5, 0 -2px #02c5d5, 1px 1px #02c5d5, 1px -1px #02c5d5, 1px -1px #02c5d5, -1px 1px #02c5d5",
            }}
          >
            Algunos de nuestros casos <br />
            de éxito de consultoría
          </div>
          <FranchisesCarousel />
        </div>
      </section>
      <section>
        <PublicityComponent />
      </section>

      <section>
        <Footer />
      </section>
      <ChatBot />
    </main>
  );
};

export default FrachisesPageComponent;
