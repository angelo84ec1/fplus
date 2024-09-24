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

interface Props {
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
}: Props) => {
  const [marcas, setMarcas] = useState<Marcas>();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedUbication, setSelectedUbication] = useState("");
  const [selectedInversion, setSelectedInversion] = useState("");
  const [selectedPrecioMin, setSelectedPrecioMin] = useState("");
  const [selectedPrecioMax, setSelectedPrecioMax] = useState("");
  const [charge, setCharge] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const brandsPerPage = 9;
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCharge(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const getMarcas = async () => {
    const estado = searchParams.get("estado");
    const directorio = searchParams.get("directorio");
    const categoria = searchParams.get("categoria");
    const ubicacion = searchParams.get("ubicacion");
    const precio_min_sel = searchParams.get("precio__gte");
    const precio_max_sel = searchParams.get("precio__lte");

    setSelectedUbication(ubicacion || "");
    setSelectedCategory(categoria || "");
    setSelectedPrecioMin(precio_min_sel || "");
    setSelectedPrecioMax(precio_max_sel || "");

    try {
      const response = await axios.get(`/api/v1/marcas/`, {
        params: {
          page_size: brandsPerPage,
          categoria__nombre: categoria,
          ubicacion__nombre: ubicacion,
          estado__nombre: estado,
          directorio__nombre: directorio,
          precio__gte: precio_min_sel,
          precio__lte: precio_max_sel,
        },
      });
      setMarcas(response.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.log(error);
      // Aquí podrías agregar lógica para mostrar un mensaje de error en la UI
    }
  };

  useEffect(() => {
    setCharge(true);
    getMarcas();
  }, [searchParams]);

  const newPage = async (page: number) => {
    try {
      const response = await axios.get(`/api/v1/marcas/`, {
        params: {
          page_size: brandsPerPage,
          page: page,
          categoria__nombre: selectedCategory,
          ubicacion__nombre: selectedUbication,
          precio__gte: selectedPrecioMin,
          precio__lte: selectedPrecioMax,
        },
      });
      setMarcas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let sectors = "";
    if (selectedCategory || selectedUbication || selectedPrecioMax || selectedPrecioMin) {
      sectors += "?";

      if (selectedCategory) sectors += `categoria=${encodeURIComponent(selectedCategory)}&`;
      if (selectedUbication) sectors += `ubicacion=${encodeURIComponent(selectedUbication)}&`;
      if (selectedPrecioMin) sectors += `precio__gte=${encodeURIComponent(selectedPrecioMin)}&`;
      if (selectedPrecioMax) sectors += `precio__lte=${encodeURIComponent(selectedPrecioMax)}&`;

      sectors = sectors.slice(0, -1);
    }

    const targetUrl = `/franquicias-en-ecuador${sectors}`;
    router.push(targetUrl);
  }, [selectedCategory, selectedUbication, selectedPrecioMax, selectedPrecioMin]);

  useEffect(() => {
    getMarcas();
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
            directorios={directory}
            estados={state}
            ubicacion={ubication}
            categoria={category}
            inversion={investment}
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
          <div className="w-full flex lg:justify-end justify-center mt-6">
            <div className="flex justify-between">
              <button
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage((prev) => prev - 1);
                    newPage(currentPage - 1);
                  }
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#FA5E4D] text-[#FA5E4D] hover:bg-[#FA5E4D] hover:text-white duration-300"
              >
                <IoIosArrowBack />
              </button>
              <div className="flex items-center text-[#FA5E4D] mx-4">
                {currentPage} de {totalPages}
              </div>
              <button
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage((prev) => prev + 1);
                    newPage(currentPage + 1);
                  }
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#FA5E4D] text-[#FA5E4D] hover:bg-[#FA5E4D] hover:text-white duration-300"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        )}
      </section>
      <Footer />
      <ChatBot />
    </>
  );
};

export default BrandsPageComponent;
