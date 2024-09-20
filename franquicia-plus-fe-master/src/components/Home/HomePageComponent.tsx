"use client";
import BannerHome from "@/components/Home/BannerHome";
import ChatBot from "@/components/ChatBot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCellsLarge,
  faUtensils,
  faCapsules,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import downArrow from "@/assets/img/flecha-hacia-abajo-para-navegar.png";
import HomeCarouselPhone from "@/components/Home/HomeCarouselPhone";
import HomeCarouselPc from "@/components/Home/HomeCarouselPc";
import RecommendedCategories from "@/components/Home/RecommendedCategories";
import BlogsHome from "@/components/Home/BlogsHome";
import PublicityComponent from "@/components/PublicityComponent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Marcas } from "@/types/Marcas";
import MarcaCard from "../Marca/MarcaCard";

interface props {
  popularBrands: Marcas;
  newBrands: Marcas;
}
const HomePageComponent = ({ popularBrands, newBrands }: props) => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [categories] = useState([
    { id: "Todo", value: "Todo", icon: faTableCellsLarge },
    { id: "Restaurantes", value: "Restaurantes", icon: faUtensils },
    { id: "Farmacias", value: "Farmacias", icon: faCapsules },
    { id: "Servicios", value: "Servicios", icon: faBriefcase },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Todo");

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > 100 &&
        window.scrollY <
        document.documentElement.scrollHeight - window.innerHeight - 100
      ) {
        setIsAtBottom(false);
      } else {
        setIsAtBottom(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const scrollSearchBox = () => {
    const searchBox = document.getElementById("searchBox");
    searchBox?.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  return (
    <>
      <main>
        <section>
          <Navbar />
        </section>
        <BannerHome />
        <section className="lg:pt-5 flex justify-center w-full relative">
          <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] w-full">
            <div className="flex flex-wrap mb-6">
              <div className="col-md-8 offset-md-2 text-center">
                <p
                  className="text-5xl"
                  data-aos="fade-down"
                  data-aos-delay="100"
                  style={{
                    fontFamily: "Mukata Mahee Extra Bold",
                  }}
                >
                  Encuentra tu Franquicia
                </p>
                <div className="w-full flex justify-center">
                  <p
                    className="text-base lg:text-lg lg:w-full"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    style={{
                      color: "#9f9c9d",
                      fontFamily: "Mukata Mahee Regular",
                      lineHeight: "1.875em",
                      width: "70%",
                    }}
                  >
                    Invierte en una empresa de éxito y se parte de un equipo
                    ganador
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-[90%] lg:w-full">
                <div className="border-b">
                  <ul className="flex justify-center gap-2">
                    {categories.map((category) => (
                      <li
                        onChange={() => handleCategoryChange(category.value)}
                        key={category.id}
                        className={`${selectedCategory === category.value
                            ? "text-[#CC4B3D]"
                            : "text-[#0d132f]"
                          } opcion flex  hover:text-[#CC4B3D]`}
                      >
                        <label
                          className="border-0 text-xs lg:text-base lg:px-10 px-0 gap-1 flex justify-center items-center"
                          htmlFor={category.id}
                        >
                          <FontAwesomeIcon icon={category.icon} />
                          {category.value}
                        </label>
                        <input
                          id={category.id}
                          type="radio"
                          name="categories"
                          value={category.value}
                          className="categoriesHome"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap mt-5 mb-5 w-full">
                  {popularBrands.results.map((marca, index) => {
                    if (
                      selectedCategory === "Todo" ||
                      selectedCategory === marca.categoria.nombre
                    ) {
                      return <MarcaCard marca={marca} key={index} />;
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[24.5em] flex items-center bg-[#CC4B3D] w-full">
          <a href=" https://experiencia.escala.com/escala-franquiciaplus" target="_blank" rel="noopener noreferrer">
            <video className="images" loop autoPlay preload="auto" muted playsInline>
              <source type="video/mp4" src="/video.mp4" />
            </video>
          </a>
        </section>
        <section className="-mt-24 z-[1] relative text-white pb-10 flex justify-center gradientHomeBg h-full w-full">
          <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] w-full flex items-center flex-col">
            <div className="flex flex-col mt-20 mb-6 text-center gap-4 lg:gap-0">
              <div
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="text-4xl lg:text-[2.5em]"
              >
                Encuentra más franquicias
              </div>
              <div className="text-3xl lg:text-[1em]">
                Sé el primero en soñar y aprovecha los beneficios de negocios
                rentables.
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="w-[90%]">
                <div className="flex flex-wrap mt-5 mb-5">
                  {newBrands.results.map((marca, index) => (
                    <MarcaCard marca={marca} key={index} />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full h-16 flex justify-center ">
              <div
                onClick={scrollSearchBox}
                className="cursor-pointer px-16 rounded-2xl border border-transparent hover:border-[#fa5e4d] hover:text-[#fa5e4d] text-2xl bg-[#02C5D5] flex justify-center items-center text-black no-underline"
              >
                Buscar mas categorías
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="block lg:hidden">
            <HomeCarouselPhone />
          </div>
          <div className="hidden lg:block">
            <HomeCarouselPc />
          </div>
        </section>
        <section>
          <RecommendedCategories />
        </section>
        <section>
          <BlogsHome />
        </section>
        <section>
          <PublicityComponent />
        </section>
        <section>
          <Footer />
        </section>
      </main>
      <ChatBot />
      <div
        className={`fixed bottom-2 left-0 right-0 ${isAtBottom ? "hidden" : "flex"
          } justify-center z-30`}
      >
        <div className="animate-bounce lg:h-[10vh] h-[5vh]">
          <Image
            unoptimized
            src={downArrow}
            className="images"
            alt=""
            draggable={false}
          />
        </div>
      </div>
    </>
  );
};

export default HomePageComponent;