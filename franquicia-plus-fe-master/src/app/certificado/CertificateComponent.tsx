"use client";
import { LuDownload, LuX } from "react-icons/lu";
import Image from "next/image";
import bg from "@/assets/img-franquicias/Group -60.png";
import logo from "@/assets/fotos-fp/certificate/suvlki.png";
import nft from "@/assets/fotos-fp/certificate/nft.png";
import firma from "@/assets/fotos-fp/certificate/firma.png";
import qr from "@/assets/fotos-fp/certificate/qr.png";
import IndividualCertificates from "@/components/IndividualCertificates";
import "./certificate.css";

const CertificateComponent = () => {
  const certificateItems = [
    "ISO 9001<br>",
    "Sistema de <br>Franquicia",
    "Sistema de <br>procesos",
    "Sistema de <br>administrativo",
    "Planeación <br>estratégica",
    "Francgise <br>Legal",
    "Estrategia de <br>Branding",
    "Estrategia de <br>Marketing",
    "Estrategia <br>Comercial",
  ];

  const printCertificate = () => {
    window.print();
  };

  return (
    <main className="bg-[#707070]">
      <div className="lg:h-screen h-full w-screen flex flex-col">
        <div className="flex justify-center text-2xl py-2 gap-4 h-16">
          <button
            onClick={() => printCertificate()}
            className="buttons bg-white text-[#707070] rounded-full aspect-square h-12 flex justify-center items-center"
          >
            <LuDownload />
          </button>
          <a
            href="/certificado-de-franquicias/"
            className="buttons bg-white text-[#707070] rounded-full aspect-square h-12 flex justify-center items-center no-underline"
          >
            <LuX />
          </a>
        </div>
        <div className="w-full h-full px-0 lg:px-10 pb-10">
          <div className="relative h-full w-full">
            <div className="absolute overflow-hidden w-full h-full rounded-[2em]">
              <Image
                unoptimized
                src={bg}
                alt={"background"}
                className="images rotate-180"
                draggable={false}
              />
            </div>
            <div className="relative w-full h-full p-3">
              <div className="rounded-[2em] border p-3 w-full h-full border-[#ff4500]">
                <div className="rounded-[2em] border p-3 w-full h-full lg:flex hidden flex-col lg:flex-row justify-evenly border-white">
                  <div className="lg:w-1/2 h-full flex flex-col items-center">
                    <div className="h-full mt-[5vh] relative">
                      <div className="h-[12em] mb-5">
                        <Image
                          unoptimized
                          draggable={false}
                          src={logo}
                          className="images"
                          alt="logo"
                        />
                      </div>
                      <div className="absolute -left-12 -top-8 w-24">
                        <Image
                          unoptimized
                          draggable={false}
                          src={nft}
                          className="images"
                          alt="nft"
                        />
                      </div>
                    </div>
                    <div className="hidden lg:flex flex-wrap justify-center gap-3 w-[47vw] max-w-[630px]">
                      {certificateItems.map((item, index) => (
                        <IndividualCertificates key={index} title={item} />
                      ))}
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-end">
                    <div className="w-11/12 h-full flex flex-col pt-6">
                      <div
                        style={{ fontFamily: "Mukata Mahee Semi Bold" }}
                        className="text-3xl text-white"
                      >
                        CERTIFICADO{" "}
                        <div className="text-[#02c5d5] inline">NFT</div> DE{" "}
                        <br />
                        AUTENTICIDAD DE
                        <div className="text-[#02c5d5] inline">FRANQUICIA</div>
                        <br />Y NEGOCIO DE ÉXITO
                      </div>
                      <div className="flex mt-5 w-[33vw] justify-between text-white">
                        <div className="flex flex-col w-[48%] gap-2 justify-between">
                          <div className="flex flex-col w-full">
                            <div className="text-sm ml-3">
                              Certificado de franquicia:
                            </div>
                            <div className="bg-white text-black rounded-lg pl-3 py-1">
                              Franquicia Plus
                            </div>
                          </div>
                          <div className="flex w-full items-center justify-between">
                            <div className="text-sm ml-3">
                              Franquicias Nacionales:
                            </div>
                            <div className="flex justify-center items-center w-8 h-8 bg-white text-black rounded-lg">
                              2
                            </div>
                          </div>
                          <div className="flex flex-col w-full">
                            <div className="text-sm ml-3">
                              Calificación de franquicia:
                            </div>
                            <div className="bg-white text-[#02c5d5] rounded-lg pl-3 py-1 font-semibold">
                              AA+
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col w-[48%] gap-2 justify-between">
                          <div className="flex flex-col w-full">
                            <div className="text-sm ml-3">
                              Fecha de certificación
                            </div>
                            <div className="bg-white text-black rounded-lg pl-3 py-1">
                              22-11-2023
                            </div>
                          </div>
                          <div className="flex w-full items-center justify-between">
                            <div className="text-sm ml-3">
                              Franquicias Internacionales:
                            </div>
                            <div className="flex justify-center items-center w-8 h-8 bg-white text-black rounded-lg">
                              0
                            </div>
                          </div>
                          <div className="flex flex-col w-full">
                            <div className="text-sm ml-3">
                              Fecha de Expiración
                            </div>
                            <div className="bg-white text-black rounded-lg pl-3 py-1 font-semibold">
                              31-12-2024
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[33vw] mt-5">
                        <div className="text-white">Número NFT de validez:</div>
                        <div className="bg-white text-black rounded-lg pl-3 py-1 font-semibold">
                          63737YhsTTyy938QQ30jsu7A8T36520sSSjs7YW44TW
                        </div>
                      </div>
                      <div className="flex gap-5 justify-center mt-8 items-end h-[35%]">
                        <div className="relative flex flex-col text-right justify-end">
                          <div className="text-[#02c5d5] text-lg">
                            Marco Polo Regil
                          </div>
                          <div className="text-sm text-white">
                            GERENTE GENERAL
                          </div>
                          <div className="absolute flex bottom-10">
                            <div className="w-32">
                              <Image
                                unoptimized
                                draggable={false}
                                src={firma}
                                className="images"
                                alt="signature"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="aspect-square w-32">
                          <Image
                            unoptimized
                            draggable={false}
                            src={qr}
                            className="images"
                            alt="qr"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[2em] border p-3 w-full h-full flex lg:hidden flex-col lg:flex-row justify-evenly border-white">
                  <div
                    style={{ fontFamily: "Mukata Mahee Semi Bold" }}
                    className="text-3xl text-white"
                  >
                    CERTIFICADO <div className="text-[#02c5d5] inline">NFT</div>{" "}
                    DE <br />
                    AUTENTICIDAD DE{" "}
                    <div className="text-[#02c5d5] inline">FRANQUICIA Y</div>
                    <br /> NEGOCIO DE ÉXITO
                  </div>
                  <div className="h-full mt-[7vh] flex justify-center relative">
                    <div className="w-[14em] mb-5">
                      <Image
                        unoptimized
                        draggable={false}
                        src={logo}
                        className="images"
                        alt="logo"
                      />
                    </div>
                    <div className="absolute left-7 -top-8 w-16">
                      <Image
                        unoptimized
                        draggable={false}
                        src={nft}
                        className="images"
                        alt="nft"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-4 p-5 text-white">
                    <div className="flex flex-col w-full ">
                      <div className="text-sm ml-3">
                        Certificado de franquicia:
                      </div>
                      <div className="bg-white text-black rounded-lg pl-3 py-1">
                        Franquicia Plus
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="text-sm ml-3">Fecha de certificación</div>
                      <div className="bg-white text-black rounded-lg pl-3 py-1">
                        22-11-2023
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="text-sm ml-3">
                        Franquicias Nacionales:
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white text-black rounded-lg">
                        2
                      </div>
                    </div>

                    <div className="flex w-full items-center justify-between">
                      <div className="text-sm ml-3">
                        Franquicias Internacionales:
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white text-black rounded-lg">
                        0
                      </div>
                    </div>

                    <div className="flex flex-col w-full">
                      <div className="text-sm ml-3">
                        Calificación de franquicia:
                      </div>
                      <div className="bg-white text-[#02c5d5] rounded-lg pl-3 py-1 font-semibold">
                        AA+
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="text-sm ml-3">Fecha de Expiración</div>
                      <div className="bg-white text-black rounded-lg pl-3 py-1 font-semibold">
                        31-12-2024
                      </div>
                    </div>
                    <div className="flex flex-col w-full mt-5">
                      <div className="text-white">Número NFT de validez:</div>
                      <div className="bg-white text-black rounded-lg px-3 py-1 font-semibold text-ellipsis overflow-hidden">
                        63737YhsTTyy938QQ30jsu7A8T36520sSSjs7YW44TW
                      </div>
                    </div>
                  </div>
                  <div className="lg:hidden flex flex-wrap justify-center gap-3 w-full">
                    {certificateItems.map((item, index) => (
                      <IndividualCertificates key={index} title={item} />
                    ))}
                  </div>
                  <div className="relative flex flex-col text-center justify-center items-center mt-5">
                    <div className="flex relative -bottom-3">
                      <div className="w-40">
                        <Image
                          unoptimized
                          draggable={false}
                          src={firma}
                          className="images"
                          alt="signature"
                        />
                      </div>
                    </div>
                    <div className="text-[#02c5d5] text-2xl">
                      Marco Polo Regil
                    </div>
                    <div className="text-lg text-white">GERENTE GENERAL</div>
                    <div className="aspect-square w-44 py-4">
                      <Image
                        unoptimized
                        draggable={false}
                        src={qr}
                        className="images"
                        alt="qr"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CertificateComponent;
