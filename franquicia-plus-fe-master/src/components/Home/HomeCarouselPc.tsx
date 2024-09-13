"use client";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import image1 from "@/assets/img-franquicias/3.1.png";
import simbol1 from "@/assets/img-franquicias/Group -2.png";
import image2 from "@/assets/img-franquicias/Group -4.jpg";
import simbol2 from "@/assets/img-franquicias/Group -2.png";
import image3 from "@/assets/img-franquicias/Group -3.jpg";
import simbol3 from "@/assets/img-franquicias/Group -5.png";
import left from "@/assets/img/flecha-hacia-izquierda-para-navegar.png";
import right from "@/assets/img/flecha-hacia-derecha-para-navegar.png";
import { useEffect, useState } from "react";

export default function HomeCarouselPc() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const containerElement = document.getElementById("homeCarouselPcComponent");
    if (containerElement) {
      setContainer(containerElement);
    }
  }, []);

  const slide = (e: WheelEvent) => {
    if (container) {
      if (activeIndex === 0 && e.deltaY > 0) {
        container.scrollIntoView({ inline: "end", behavior: "smooth" });
        e.preventDefault();
        setActiveIndex(1);
      } else if (activeIndex === 2 && e.deltaY < 0) {
        container.scrollIntoView({ inline: "end", behavior: "smooth" });
        e.preventDefault();
        setActiveIndex(1);
      } else if (activeIndex === 1) {
        e.preventDefault();
        if (e.deltaY > 0) {
          container.scrollIntoView({ inline: "end", behavior: "smooth" });
          setActiveIndex(2);
        } else if (e.deltaY < 0) {
          container.scrollIntoView({ inline: "end", behavior: "smooth" });
          setActiveIndex(0);
        }
      }
    }
  };

  const callback = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting === true && container) {
      container.scrollIntoView({ block: "end", behavior: "smooth" });
      container.onwheel = slide;
    }
  };
  const options = {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (container) {
      observer.observe(container);
    }

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container, options]);

  return (
    <div className="relative h-full" id="homeCarouselPcComponent">
      {/* Hero two area start */}
      <Carousel
        nextIcon={
          <div className="h-14 w-auto hidden">
            <Image
              unoptimized
              draggable={false}
              width={500}
              height={500}
              src={right}
              className="images"
              alt=""
            />
          </div>
        }
        prevIcon={
          <div className="h-14 w-auto hidden">
            <Image
              unoptimized
              draggable={false}
              width={500}
              height={500}
              src={left}
              className="images"
              alt=""
            />
          </div>
        }
        activeIndex={activeIndex}
        indicators={false}
        controls
        className="relative h-full"
      >
        <Carousel.Item interval={300000} className="h-full">
          <div className="flex flex-col lg:flex-row justify-evenly h-full items-center lg:py-32 py-20 px-4">
            <div className="flex flex-col gap-6 lg:h-full h-96 justify-center lg:w-[500px] lg:p-0 p-8 relative">
              <div
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="text-4xl"
              >
                Valida tu franquicia con nuestra <br />
                certificación F+
              </div>
              <div className="text-lg">
                Evidencia tu sistema de franquicia y <br />
                estándares de tu negocio mediante nuestra certificación <br />
                única, para generar mayor confianza en el mercado.
              </div>
              <div className="lg:block hidden">
                <a
                  href="/consultores-de-franquicias/"
                  className="bg-[#0d132f] hover:bg-[#02c5d5] no-underline text-white py-2 px-3 rounded-xl text-lg"
                >
                  Saber más
                </a>
              </div>
            </div>
            <div className="h-full relative overflow-visible w-3/4 lg:w-auto flex flex-end">
              <div className="lg:h-64 h-40 lg:w-80 w-60 relative">
                <Image
                  unoptimized
                  draggable={false}
                  width={800}
                  height={800}
                  src={image1}
                  className="images"
                  alt=""
                />
              </div>
              <div className="lg:h-36 h-24 aspect-square absolute lg:-top-7 -top-0 lg:-left-7 left-1 overflow-visible">
                <Image
                  unoptimized
                  draggable={false}
                  src={simbol1}
                  className="images"
                  alt=""
                />
              </div>
            </div>
            <div className="lg:hidden w-full mt-5 flex justify-center">
              <div className="w-[90%] bg-[#0d132f] hover:bg-[#02c5d5] py-2 text-center rounded-xl text-2xl">
                <a
                  href="/consultores-de-franquicias/"
                  className="no-underline text-white"
                >
                  Saber más
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={300000} className="h-full">
          <div className="flex flex-col lg:flex-row justify-evenly h-full items-center lg:py-32 py-20 px-4">
            <div className="flex flex-col gap-6 lg:h-full h-96 justify-center lg:w-[500px] lg:p-0 p-8 relative">
              <div
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="text-4xl"
              >
                Necesitas crecer a pasos acelerados
              </div>
              <div className="text-lg">
                Te ayudamos a generar procesos de franquicias,
                <br />
                comerciales y marketing a través de
                <br />
                nuestras metodologías especializadas.
              </div>
              <div className="lg:block hidden">
                <a
                  href="/consultores-de-franquicias/"
                  className="bg-[#0d132f] hover:bg-[#02c5d5] no-underline text-white py-2 px-3 rounded-xl text-lg"
                >
                  Saber más
                </a>
              </div>
            </div>
            <div className="h-full relative overflow-visible w-3/4 lg:w-auto flex flex-end">
              <div className="lg:h-64 h-40 lg:w-80 w-60 relative">
                <Image
                  unoptimized
                  draggable={false}
                  width={1000}
                  height={1000}
                  src={image2}
                  className="images"
                  alt=""
                />
              </div>
              <div className="lg:h-36 h-24 aspect-square absolute lg:-top-7 -top-0 lg:-left-7 left-1 overflow-visible">
                <Image
                  unoptimized
                  draggable={false}
                  src={simbol2}
                  className="images"
                  alt=""
                />
              </div>
            </div>
            <div className="lg:hidden w-full mt-5 flex justify-center">
              <div className="w-[90%] bg-[#0d132f] hover:bg-[#02c5d5] py-2 text-center rounded-xl text-2xl">
                <a
                  href="/consultores-de-franquicias/"
                  className="no-underline text-white"
                >
                  Saber más
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={300000} className="h-full">
          <div className="flex flex-col lg:flex-row justify-evenly h-full items-center lg:py-32 py-20 px-4">
            <div className="flex flex-col gap-6 lg:h-full h-96 justify-center lg:w-[500px] lg:p-0 p-8 relative">
              <div
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="text-4xl"
              >
                Valida tu franquicia con nuestra certificación F+
              </div>
              <div className="text-lg">
                Evidencia tu sistema de franquicia y
                <br />
                estándares de tu negocio mediante nuestra certificación
                <br />
                única, para generar mayor confianza en el mercado.
              </div>
              <div className="lg:block hidden">
                <a
                  href="/certificado-de-franquicias/"
                  className="bg-[#0d132f] hover:bg-[#02c5d5] no-underline text-white py-2 px-3 rounded-xl text-lg"
                >
                  Saber más
                </a>
              </div>
            </div>
            <div className="h-full relative overflow-visible w-3/4 lg:w-auto flex flex-end">
              <div className="lg:h-64 h-40 lg:w-80 w-60 relative">
                <Image
                  unoptimized
                  draggable={false}
                  width={1000}
                  height={1000}
                  src={image3}
                  className="images"
                  alt=""
                />
              </div>
              <div className="lg:h-36 h-24 aspect-square absolute lg:-top-7 -top-0 lg:-left-7 left-1 overflow-visible">
                <Image
                  unoptimized
                  draggable={false}
                  src={simbol3}
                  className="images"
                  alt=""
                />
              </div>
            </div>
            <div className="lg:hidden w-full mt-5 flex justify-center">
              <div className="w-[90%] bg-[#0d132f] hover:bg-[#02c5d5] py-2 text-center rounded-xl text-2xl">
                <a
                  href="/consultores-de-franquicias/"
                  className="no-underline text-white"
                >
                  Saber más
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
