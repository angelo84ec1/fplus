"use client";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Cases from "@/assets/fotos-fp/Casos/Cases";

const FrachisesPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-[8vw]">
        <Carousel
          data-aos="fade-up"
          data-aos-delay="200"
          controls={false}
          indicators={false}
          className="border-2 border-[#02C5D5] lg:w-52 w-32"
        >
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Adelca}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Adobe}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.AGSO}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Asiservy}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <Carousel
          data-aos="fade-up"
          data-aos-delay="200"
          controls={false}
          indicators={false}
          className="border-2 border-[#02C5D5] lg:w-52 w-32"
        >
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.PinchosExpress}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Banco}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Cafe}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Cedenos}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <Carousel
          data-aos="fade-up"
          data-aos-delay="200"
          controls={false}
          indicators={false}
          className="border-2 border-[#02C5D5] lg:w-52 w-32"
        >
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Chipote}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Consejo}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Delta}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Durallanta}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <Carousel
          data-aos="fade-up"
          data-aos-delay="200"
          controls={false}
          indicators={false}
          className="border-2 border-[#02C5D5] lg:w-52 w-32"
        >
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Hornero}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Exponencial}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Farmared}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Food}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-[8vw]">
        <Carousel
          data-aos="fade-up"
          data-aos-delay="200"
          controls={false}
          indicators={false}
          className="border-2 border-[#02C5D5] lg:w-52 w-32"
        >
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Indurama}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Inka}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Jaboneria}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Jurgen}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <Carousel
          data-aos="fade-up"
          data-aos-delay="200"
          controls={false}
          indicators={false}
          className="border-2 border-[#02C5D5] lg:w-52 w-32"
        >
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.KSchool}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Tartaro}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Laarcourier}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.LaBakery}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <Carousel
          data-aos="fade-up"
          data-aos-delay="200"
          controls={false}
          indicators={false}
          className="border-2 border-[#02C5D5] lg:w-52 w-32"
        >
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.LittleItaly}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.TacosDelGordo}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.MagicHands}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Minerva}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <Carousel
          data-aos="fade-up"
          data-aos-delay="200"
          controls={false}
          indicators={false}
          className="border-2 border-[#02C5D5] lg:w-52 w-32"
        >
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.MIPRO}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Monobolon}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Multitrabajos}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Mutualista}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-[8vw]">
        <Carousel
          data-aos="fade-up"
          data-aos-delay="200"
          controls={false}
          indicators={false}
          className="border-2 border-[#02C5D5] lg:w-52 w-32"
        >
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Noe}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Novacero}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Pintulac}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Plusvalia}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <Carousel
          data-aos="fade-up"
          data-aos-delay="200"
          controls={false}
          indicators={false}
          className="border-2 border-[#02C5D5] lg:w-52 w-32"
        >
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.PrintoPac}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Proceconsa}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Puerto}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Quito}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <Carousel
          data-aos="fade-up"
          data-aos-delay="200"
          controls={false}
          indicators={false}
          className="border-2 border-[#02C5D5] lg:w-52 w-32"
        >
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Sherwin}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Siegfried}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.SportsPlanet}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Suvlaki}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <Carousel
          data-aos="fade-up"
          data-aos-delay="200"
          controls={false}
          indicators={false}
          className="border-2 border-[#02C5D5] lg:w-52 w-32"
        >
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.TacRoll}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.TheU}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Partenope}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Xerox}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div>
              <Image
                unoptimized
                width={5000}
                height={5000}
                draggable={false}
                src={Cases.Choris}
                alt={""}
                className="images"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default FrachisesPage;
