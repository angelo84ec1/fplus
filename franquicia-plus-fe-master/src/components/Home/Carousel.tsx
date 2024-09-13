"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import pc1 from "../../assets/img-franquicias/BannerHome/1.2.png";
import pc2 from "../../assets/img-franquicias/BannerHome/1.1.png";
import pc3 from "../../assets/img-franquicias/BannerHome/1.3.png";
import ph1 from "../../assets/img-franquicias/BannerHome/Group -41.png";
import ph2 from "../../assets/img-franquicias/BannerHome/Group -43.png";
import ph3 from "../../assets/img-franquicias/BannerHome/Group -42.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/css/bootstrap.css";

const CarouselHome = () => {
  return (
    <>
      {/* Hero two area start */}
      <div className="relative h-[720px] hidden lg:block text-white">
        <Carousel
          nextIcon={
            <div className="absolute top-0 bottom-0 flex items-center right-52">
              <div className="text-3xl border-4 rounded-full aspect-square h-14 flex items-center justify-center p-2 hover:text-[#fa5e4d] hover:border-[#fa5e4d]">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          }
          prevIcon={<div className="hidden pointer-events-none"></div>}
          indicators={false}
          controls
          className="static h-[720px]"
        >
          <Carousel.Item interval={3000} className="h-[720px]">
            <Image
              unoptimized
              draggable={false}
              className="images"
              src={pc1}
              alt="First slide"
            />
            <div className="absolute h-full top-0 bottom-0 flex items-center ml-40 text-7xl w-[35rem]">
              <div className="mb-72 fade-in">FRANQUICIAS DESDE $4.000</div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000} className="h-[720px]">
            <Image
              unoptimized
              draggable={false}
              className="images"
              src={pc2}
              alt="First slide"
            />
            <div className="absolute h-full top-0 bottom-0 flex items-center ml-40 text-7xl w-[32rem]">
              <div className="mb-72 fade-in">¿CUÁL FRANQUICIA ES PARA TÍ?</div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000} className="h-[720px]">
            <Image
              unoptimized
              draggable={false}
              className="images"
              src={pc3}
              alt="First slide"
            />
            <div className="absolute h-full top-0 bottom-0 flex items-center ml-40 text-7xl w-[35rem]">
              <div className="mb-72 fade-in">CONSTRUIMOS FRANQUICIAS</div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Banner for Phone */}
      <Carousel
        nextIcon={
          <div className="absolute top-0 bottom-0 flex items-center right-52 -mb-[130px]">
            <div className="text-3xl border-4 rounded-full aspect-square h-14 flex items-center justify-center p-2 hover:text-[#fa5e4d] hover:border-[#fa5e4d]">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        }
        prevIcon={<div className="hidden pointer-events-none"></div>}
        indicators={false}
        className="block lg:hidden"
      >
        <Carousel.Item interval={3000}>
          <Image
            unoptimized
            draggable={false}
            className="images"
            src={ph1}
            alt=""
          />

          <div className="absolute h-full top-0 flex items-start ml-10 text-4xl w-[3rem]">
            <div className="mt-40 fade-in">FRANQUICIAS DESDE $4.000</div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Image
            unoptimized
            draggable={false}
            className="images"
            src={ph2}
            alt=""
          />

          <div className="absolute h-full top-0 flex items-start ml-10 text-4xl w-[3rem]">
            <div className="mt-40 fade-in">¿CUÁL FRANQUICIA ES PARA TÍ?</div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Image
            unoptimized
            draggable={false}
            className="images"
            src={ph3}
            alt=""
          />

          <div className="absolute h-full top-0 flex items-start ml-10 text-4xl w-[3rem]">
            <div className="mt-40 fade-in">CONSTRUIMOS FRANQUICIAS</div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselHome;
