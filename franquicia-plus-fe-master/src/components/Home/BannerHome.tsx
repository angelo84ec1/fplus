"use client";
import { useState, useEffect } from "react";
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
import { Sector } from "@/types/Sector";
import { Inversion } from "@/types/Inversion";
import axios from "@/app/utils/axios";
import { useRouter } from "next/navigation";

export default function BannerHome() {
  const router = useRouter();
  const [ubicacion, setUbicacion] = useState<Sector[]>([]);
  const [categoria, setCategoria] = useState<Sector[]>([]);
  const [inversion, setInversion] = useState<Inversion[]>([]);
  const [ubicacionElegida, setUbicacionElegida] = useState<string>("");
  const [categoriaElegida, setCategoriaElegida] = useState<string>("");
  const [inversionElegida, setInversionElegida] = useState<string>("");

  useEffect(() => {
    getUbicacion();
    getCategoria();
    getInversion();
  }, []);

  const getUbicacion = async () => {
    await axios
      .get("/api/v1/ubicacion/")
      .then((response) => {
        setUbicacion(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCategoria = async () => {
    await axios.get("/api/v1/categoria/").then((response) => {
      setCategoria(response.data);
    });
  };

  const getInversion = async () => {
    const response = await axios.get("/api/v1/inversion/");
    setInversion(response.data);
  };

  const filtroBuscar = (category?: string, location?: string, inversion?: string) => {
  let queryParameters: { [key: string]: string } = {};

  // Solo agrega parámetros si tienen valor
  if (category) {
    queryParameters['categoria'] = category;
  }
  if (location) {
    queryParameters['ubicacion'] = location;
  }
  if (inversion) {
    queryParameters['inversion'] = inversion;
  }

  // Crea la querystring a partir de los parámetros válidos
  const queryString = new URLSearchParams(queryParameters).toString();
  const targetUrl = `/franquicias-en-ecuador${queryString ? `?${queryString}` : ''}`;

  router.push(targetUrl);
};


  return (
    <section
      className="w-full lg:h-[720px] h-[850px] left-0 right-0"
      id="cajabotones"
    >
      {/* Hero two area start */}
      <div className="relative lg:h-[720px] h-full hidden lg:block">
        <Carousel
          nextIcon={
            <div className="absolute top-0 bottom-0 flex items-center right-52 h-max-[720px]">
              <div className="text-3xl border-4 rounded-full aspect-square h-14 flex items-center justify-center p-2 hover:text-[#F85E4D] hover:border-[#F85E4D]">
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
              <div className="mb-72 fade-in text-white">
                FRANQUICIAS DESDE $4.000
              </div>
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
              <div className="mb-72 fade-in text-white">
                ¿CUÁL FRANQUICIA ES PARA TÍ?
              </div>
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
              <div className="mb-72 fade-in text-white">
                CONSTRUIMOS FRANQUICIAS
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Banner for Phone */}

      <Carousel
        nextIcon={
          <div className="absolute h-[300px] flex right-52 -mb-[130px]">
            <div className="text-3xl border-4 rounded-full aspect-square h-14 flex items-center justify-center p-2 hover:text-[#fa5e4d] hover:border-[#fa5e4d]">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        }
        prevIcon={<div className="hidden pointer-events-none"></div>}
        indicators={false}
        className="block lg:hidden h-full"
      >
        <Carousel.Item interval={3000} className="h-[710px]">
          <Image
            unoptimized
            draggable={false}
            className="images"
            src={ph1}
            alt=""
          />

          <div className="absolute h-full top-0 flex items-start ml-10 text-4xl w-[3rem]">
            <div className="mt-40 fade-in text-white">
              FRANQUICIAS DESDE $4.000
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000} className="h-[710px]">
          <Image
            unoptimized
            draggable={false}
            className="images"
            src={ph2}
            alt=""
          />

          <div className="absolute h-full top-0 flex items-start ml-10 text-4xl w-[3rem]">
            <div className="mt-40 fade-in text-white">
              ¿CUÁL FRANQUICIA ES PARA TÍ?
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000} className="h-[710px]">
          <Image
            unoptimized
            draggable={false}
            className="images"
            src={ph3}
            alt=""
          />

          <div className="absolute h-full top-0 flex items-start ml-10 text-4xl w-[3rem]">
            <div className="mt-40 fade-in text-white">
              CONSTRUIMOS FRANQUICIAS
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* BannerPhoneEnd */}
      <div className="flex justify-center">
        <div
          id="searchBox"
          style={{ boxShadow: "0.125em 1.5em 1.25em 0 #00000063" }}
          className="absolute w-[80%] h-[23em] lg:w-[60em] lg:h-[6em] top-[450px] lg:top-[480px] lg:bottom-0 -bottom-52 z-[2] bg-white mx-auto my-0 p-[5px] rounded-[1.5719em] border-[black]"
        >
          <div className="flex w-full h-full gap-[28px] lg:gap-[48px] px-2 lg:px-8 lg:flex-row flex-col items-center lg:justify-evenly justify-center lg:ml-4 lg:mr-4">
            <div className="w-full mt-0 lg:flex lg:justify-center lg:px-[5px]">
              <select
                value={ubicacionElegida}
                onChange={(e) => setUbicacionElegida(e.target.value)}
                className="card-select inline-block text-2xl lg:text-base"
              >
                <option value="" selected>
                  Ubicación
                </option>
                {ubicacion.map((ubi, index) => (
                  <option key={index} value={ubi.nombre}>
                    {ubi.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full mt-0">
              <select
                value={categoriaElegida}
                onChange={(e) => setCategoriaElegida(e.target.value)}
                className="card-select inline-block text-2xl lg:text-base"
              >
                <option value="" selected>
                  Categorías
                </option>
                {categoria.map((cat, index) => (
                  <option key={index} value={cat.nombre}>
                    {cat.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full mt-0">
              <select
                value={inversionElegida}
                onChange={(e) => setInversionElegida(e.target.value)}
                className="card-select inline-block text-2xl lg:text-base"
              >
                <option value="" selected>
                  Inversión
                </option>
                {inversion.map((inv, index) => (
                  <option key={index} value={inv.nombre_url}>
                    {inv.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full h-[2.125em] lg:h-full flex items-center justify-center mt-4 lg:mt-0">
              <button
                type="button"
                onClick={() =>
                  filtroBuscar(
                    categoriaElegida,
                    ubicacionElegida,
                    inversionElegida
                  )
                }
                style={{ fontFamily: "Mukata Mahee Regular" }}
                className="text-2xl lg:text-base text-white hover:bg-white hover:border-[#0d132f] hover:border-2 border-2 hover:text-[#0d132f] text-center no-underline w-full h-[51px] lg:h-[38px] lg:w-[176px] bg-[#0d132f] rounded-2xl"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
