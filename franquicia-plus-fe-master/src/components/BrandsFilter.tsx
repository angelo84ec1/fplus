"use client";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Marcas } from "@/types/Marcas";
import { Inversion } from "@/types/Inversion";
import { Sector } from "@/types/Sector";
import { Accordion } from "react-bootstrap";
import Link from "next/link";
import { FaSliders } from "react-icons/fa6";

interface Props {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedUbication: string;
  setSelectedUbication: (value: string) => void;
  selectedInversion: string;
  setSelectedInversion: (value: string) => void;
  directorios: Sector[];
  estados: Sector[];
  ubicacion: Sector[];
  categoria: Sector[];
  inversion: Inversion[];
}

const BrandsFilter = ({
  selectedCategory,
  setSelectedCategory,
  selectedUbication,
  setSelectedUbication,
  selectedInversion,
  setSelectedInversion,
  directorios,
  estados,
  ubicacion,
  categoria,
  inversion,
}: Props) => {
  const [selectedEstado, setSelectedEstado] = useState<string>("Todas"); // Maneja la selección del estado
  const router = useRouter();

  return (
    <>
      <div className="w-[30%] lg:flex hidden flex-col gap-y-4 relative">
        <div className="text-lg ml-4">Buscar otro sector</div>
        <div className="flex flex-col gap-y-4">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
            className="sector-select"
            name="categories"
          >
            <option value="">Categoria</option>
            {categoria.map((cat, index) => (
              <option key={index} value={cat.nombre}>
                {cat.nombre}
              </option>
            ))}
          </select>
          <select
            value={selectedUbication}
            onChange={(e) => {
              setSelectedUbication(e.target.value);
            }}
            className="sector-select"
            name="ubication"
          >
            <option value="">Ubicación</option>
            {ubicacion.map((ubi, index) => (
              <option key={index} value={ubi.nombre}>
                {ubi.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="text-lg">Buscar por:</div>
        <div className="flex flex-col gap-y-4">
          <Accordion className="first:rounded-r-2xl bg-white w-[85%]">
            <Accordion.Header
              style={{ boxShadow: "3px 10px 20px rgb(0 0 0 / 40%)" }}
              className="border overflow-hidden rounded-r-2xl"
            >
              {selectedEstado} {/* Mostrar la opción seleccionada */}
            </Accordion.Header>
            <Accordion.Body
              style={{ boxShadow: "3px 10px 20px rgb(0 0 0 / 40%)" }}
              className="flex flex-col gap-1 text-sm bg-white rounded-br-2xl z-[1] overflow-hidden border"
            >
              {/* Opción "Todas" para revertir el filtro */}
              <Link
                className="no-underline text-black hover:text-[#fa5e4d]"
                onClick={() => setSelectedEstado("Todas")}
                href="/franquicias-en-ecuador"
              >
                Todas
              </Link>

              {/* Mapeo de las opciones de estados */}
              {estados.map((estado) => (
                <Link
                  className="no-underline text-black hover:text-[#fa5e4d]"
                  key={estado.id}
                  href={`/franquicias-en-ecuador?estado=${estado.nombre}`}
                  onClick={() => setSelectedEstado(estado.nombre)} // Actualiza la opción seleccionada
                >
                  {estado.nombre}
                </Link>
              ))}
            </Accordion.Body>
          </Accordion>
          <select
            value={selectedInversion}
            onChange={(e) => setSelectedInversion(e.target.value)}
            className="sector-select"
            name="inversion"
          >
            <option value="">Inversión</option>
            {inversion.map((inv) => (
              <option key={inv.id} value={inv.nombre_url}>
                {inv.nombre}
              </option>
            ))}
          </select>
        </div>
        {/* El resto de tu código sigue igual */}
      </div>
    </>
  );
};

export default BrandsFilter;
