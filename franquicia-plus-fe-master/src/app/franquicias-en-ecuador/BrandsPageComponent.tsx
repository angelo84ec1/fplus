"use client";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import banner from "@/assets/img-franquicias/6A.jpg";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import PublicityComponent from "@/components/PublicityComponent";
import { Marcas } from "@/types/Marcas";
import axios from "../utils/axios";
import { Inversion } from "@/types/Inversion";
import { Sector } from "@/types/Sector";
import MarcaCard from "@/components/Marca/MarcaCard";
import BrandsFilter from "@/components/BrandsFilter";
import { CgSpinnerTwoAlt } from "react-icons/cg";

interface props {
  category: Sector[];
  ubication: Sector[];
  investment: Inversion[];
  directory: Sector[];
  state: Sector[];
}

const BrandsPageComponent = ({
  category,
  ubication,
  investment,
  directory,
  state,
}: props) => {
  const directorios = directory;
  const estado = state;
  const ubicacion = ubication;
  const categoria = category;
  const inversion = investment;
  const [marcas, setMarcas] = useState<Marcas>();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedUbication, setSelectedUbication] = useState("");
  const [selectedInversion, setSelectedInversion] = useState("");
  const [, setSelectedState] = useState("");
  const [, setSelectedDirectory] = useState("");
  const [charge, setCharge] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const brandsPerPage = 9;
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCharge(false);
    }, 2000); // Set timeout to 3 seconds (3000 milliseconds)

    return () => clearTimeout(timeout); // Clear timeout on unmount
  }, [charge]);

  const getMarcas = async () => {
    const estado = searchParams.get("estado");
    if (estado) {
      setSelectedState(estado);
    }
    const directorio = searchParams.get("directorio");
    if (directorio) {
      setSelectedDirectory(directorio);
    }
    const categoria = searchParams.get("categoria");
    if (categoria) {
      setSelectedCategory(categoria);
    }
    const ubicacion = searchParams.get("ubicacion");
    if (ubicacion) {
      setSelectedUbication(ubicacion);
    }
    const inversion = searchParams.get("inversion");
    if (inversion) {
      setSelectedInversion(inversion);
    }

    console.log(inversion)

    await axios
      .get(`/api/v1/marcas/`, {
        params: {
          page_size: brandsPerPage,
          categoria__nombre: categoria,
          ubicacion__nombre: ubicacion,
          inversion__nombre_url: inversion,
          estado__nombre: estado,
          directorio__nombre: directorio,
        },
      })
      .then((response) => {
        setMarcas(response.data);
        console.log(response.data);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setCharge(true);
    getMarcas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const newPage = async (page: number) => {
    await axios
      .get(`/api/v1/marcas/`, {
        params: {
          page_size: brandsPerPage,
          page: page,
          categoria__nombre: selectedCategory,
          ubicacion__nombre: selectedUbication,
          inversion__nombre: selectedInversion,
        },
      })
      .then((response) => {
        setMarcas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    let sectors = "";
    if (selectedCategory || selectedUbication || selectedInversion) {
      sectors += "?";
      if (selectedCategory)
        sectors += `categoria=${encodeURIComponent(selectedCategory)}&`;
      if (selectedUbication)
        sectors += `ubicacion=${encodeURIComponent(selectedUbication)}&`;
      if (selectedInversion)
        sectors += `inversion=${encodeURIComponent(selectedInversion)}&`;
      // Remove the trailing '&' character
      sectors = sectors.slice(0, -1);
    }

    const targetUrl = `/franquicias-en-ecuador${sectors}`;
    router.push(targetUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, selectedInversion, selectedUbication]);

  useEffect(() => {
    getMarcas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section>
        <Navbar />
      </section>

      <section>
        <div className="lg:h-[20em] h-[24em] right-0 left-0">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full">
              <Image
                unoptimized
                width={10000}
                height={10000}
                draggable={false}
                id="banner"
                src={banner}
                alt={""}
                className="images"
              />
            </div>
            <div className="absolute top-0 bottom-0 lg:left-[80px] left-[60px] flex flex-col text-start text-white justify-center items-start">
              <div
                data-aos="fade-right"
                data-wow-delay="100"
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="text-5xl lg:block hidden font-bold"
              >
                Invierte en una marca <br /> rentable y comprobada
              </div>
              <div
                data-aos="fade-right"
                data-wow-delay="100"
                style={{ fontFamily: "Mukata Mahee Bold" }}
                className="lg:hidden block text-3xl font-bold"
              >
                Invierte en una <br />
                marca <br />
                rentable y <br />
                comprobada
              </div>
              <div
                data-aos="fade-right"
                data-wow-delay="200"
                className="lg:block hidden text-3xl "
              >
                y sé dueño de tu propio negocio
              </div>
              <div
                data-aos="fade-right"
                data-wow-delay="200"
                className="lg:hidden block text-xl"
              >
                y sé dueño de tu propio <br />
                negocio
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="filter" className="w-full flex lg:flex-row flex-col py-8">
          <BrandsFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedUbication={selectedUbication}
            setSelectedUbication={setSelectedUbication}
            selectedInversion={selectedInversion}
            setSelectedInversion={setSelectedInversion}
            directorios={directorios}
            estados={estado}
            ubicacion={ubicacion}
            categoria={categoria}
            inversion={inversion}
          />
          <div className="flex w-full justify-center px-4">
            {charge ? (
              <div className="flex justify-center items-center">
                <div
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="text-[#fa5e4d] text-9xl animate-spin"
                >
                  <CgSpinnerTwoAlt />
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap mt-5 mb-5 w-full max-w-[1200px]">
                {marcas?.results.map((marca, index) => (
                  <MarcaCard key={index} marca={marca} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section>
        <div className="w-full"></div>
      </section>
      <section>
        {totalPages > 1 && !charge && (
          <div className="w-full flex lg:justify-end justify-center">
            <div className="flex justify-center lg:w-[70vw] items-center py-4 gap-4">
              <div
                onClick={() => {
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                  newPage(Math.max(currentPage - 1, 1));
                  const banner = document.getElementById("banner");
                  banner?.scrollIntoView({ block: "end", behavior: "smooth" });
                }}
                className={`text-5xl w-12 aspect-square flex justify-center items-center ${
                  currentPage === 1
                    ? "text-transparent"
                    : "rounded-full text-[#fa5e4d] hover:bg-slate-200 cursor-pointer"
                }`}
              >
                <IoIosArrowBack />
              </div>
              {Array.from({ length: totalPages }).map((_, index) => (
                <div key={index}>
                  <button
                    onClick={() => {
                      setCurrentPage(index + 1);
                      newPage(index + 1);
                      const banner = document.getElementById("banner");
                      banner?.scrollIntoView({
                        block: "end",
                        behavior: "smooth",
                      });
                    }}
                    className={` relative flex justify-center items-center border text-2xl w-12 aspect-square rounded-full cursor-pointer ${
                      currentPage === index + 1
                        ? "bg-[#fa5e4d] text-white"
                        : "hover:bg-slate-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                </div>
              ))}
              <button
                onClick={() => {
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  newPage(Math.min(currentPage + 1, totalPages));
                  const banner = document.getElementById("banner");
                  banner?.scrollIntoView({ block: "end", behavior: "smooth" });
                }}
                className={`text-5xl w-12 aspect-square flex justify-center items-center ${
                  currentPage === totalPages
                    ? "text-transparent"
                    : "rounded-full text-[#fa5e4d] hover:bg-slate-200 cursor-pointer"
                }`}
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        )}
      </section>
      <section>
        <PublicityComponent />
      </section>

      <section>
        <Footer />
      </section>
      <ChatBot />
    </>
  );
};

export default BrandsPageComponent;
