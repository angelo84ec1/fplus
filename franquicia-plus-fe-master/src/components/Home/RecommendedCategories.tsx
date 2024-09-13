/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import bg from "@/assets/img-franquicias/Group -60.png";
import Image from "next/image";
import newCategories from "@/assets/img/Categorias-Recomendadas/NewCategories/newCategories";

const RecommendedCategories = () => {
  const categories = [
    { name: "Restaurantes", image: newCategories.Restaurantes },
    { name: "Farmacias", image: newCategories.Farmacias },
    { name: "Coaching", image: newCategories.Coaching },
    { name: "Belleza", image: newCategories.Belleza },
    { name: "Educación", image: newCategories.Educación },
    { name: "Tiendas", image: newCategories.Tiendas },
  ];

  return (
    <div className="relative">
      <div className="absolute w-full h-full">
        <Image
          unoptimized
          draggable={false}
          className="images"
          alt=""
          src={bg}
        />
      </div>
      <div className="relative pt-[5vw] pb-[5vw] flex flex-col">
        <div className="mb-16">
          <div className="flex flex-col items-center text-center">
            <p
              className="mb-3 text-[#02C5D5] text-4xl"
              style={{ fontFamily: "Mukata Mahee Bold" }}
            >
              Categorías Recomendadas 2024
            </p>
            <p className="text-white text-2xl">
              Invierte en una empresa de exito
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-10 xl:gap-[10vh] lg:grid lg:grid-cols-3 lg:items-center justify-items-center">
            {categories.map((category, index) => (
              <div
                key={index}
                className="aspect-square h-[300px] rounded-3xl overflow-hidden"
              >
                <div className="text-white relative">
                  <div className="h-[300px] aspect-square">
                    <Image
                      unoptimized
                      draggable={false}
                      src={category.image}
                      className="images"
                      alt=""
                    />
                  </div>
                  <div className="content-card-bottom absolute bottom-0 flex flex-row w-full right-0 left-0">
                    <div className="flex gap-1 flex-col justify-center bg-[#F85E4D] w-full px-3">
                      <a
                        href={`/franquicias-en-ecuador?categoria=${category.name}`}
                        className="text-[#0D132F] text-3xl no-underline cursor-pointer"
                        style={{ fontFamily: "Mukata Mahee Bold" }}
                      >
                        {category.name}
                      </a>
                    </div>
                    <a
                      href={`/franquicias-en-ecuador?categoria=${category.name}`}
                      className="w-[80px] h-[80px] bg-white flex items-center justify-center bottom-0 right-0 cursor-pointer"
                    >
                      <div className="aspect-square p-1 border-2 border-[#F85E4D] rounded-full flex justify-center items-center">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="aspect-square w-6 text-[#F85E4D]"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCategories;
