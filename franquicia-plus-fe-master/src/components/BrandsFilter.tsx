"use client";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import { Marcas } from "@/types/Marcas";
import { Inversion } from "@/types/Inversion";
import { Sector } from "@/types/Sector";
import { Accordion } from "react-bootstrap";
import Link from "next/link";
import { FaSliders } from "react-icons/fa6";

interface props {
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
}: props) => {
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
              Todas
            </Accordion.Header>
            <Accordion.Body
              style={{ boxShadow: "3px 10px 20px rgb(0 0 0 / 40%)" }}
              className="flex flex-col gap-1 text-sm bg-white rounded-br-2xl z-[1] overflow-hidden border"
            >
              {estados.map((estado) => (
                <Link
                  className="no-underline text-black hover:text-[#fa5e4d]"
                  key={estado.id}
                  href={`/franquicias-en-ecuador?estado=${estado.nombre}`}
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
              <option key={inv.id} id={inv.nombre} value={inv.nombre_url}>
                {inv.nombre}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{ boxShadow: "3px 10px 20px rgb(0 0 0 / 40%)" }}
          className="flex flex-col w-[92%] rounded-r-2xl pb-14 mt-2"
        >
          <div
            style={{ fontFamily: "Mukata Mahee Bold" }}
            className="text-[1.8em] leading-[2em] px-[0.8em]"
          >
            Directorio
          </div>
          <div className="flex flex-col gap-y-4">
            {directorios.map((directorio) => (
              <div key={directorio.id} className="pl-10 pr-12">
                <Link
                  href={`/franquicias-en-ecuador?directorio=${directorio.nombre}`}
                  className="text-black hover:text-[#fa5e4d] no-underline w-full flex"
                >
                  <div className="border-b border-[#fa5e4d] w-full px-4 text-lg">
                    {directorio.nombre}
                  </div>
                  <IoIosArrowForward className="text-[#fa5e4d]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:hidden flex w-full ">
        <Accordion className=" bg-white w-full">
          <Accordion.Header className="w-full flex first:flex first:justify-between">
            <FaSliders className="text-[#fa5e4d] text-2xl" />{" "}
            <div className="text-2xl ">
              {"  "}
              Filtrar
            </div>
          </Accordion.Header>
          <Accordion.Body style={{padding: '0px'}} className="flex flex-col gap-2 text-sm bg-white rounded-br-2xl z-[1] w-full overflow-visible">
            
            <div className="text-sm ml-4">Buscar otro sector</div>
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
                {categoria.map((cat) => (
                  <option key={cat.id} id={cat.nombre} value={cat.nombre}>
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
                {ubicacion.map((ubi) => (
                  <option key={ubi.id} id={ubi.nombre} value={ubi.nombre}>
                    {ubi.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-sm">Buscar por:</div>
            <div className="flex flex-col gap-y-4">
              <Accordion className="first:rounded-r-2xl bg-white w-[85%]">
                <Accordion.Header
                  style={{ boxShadow: "3px 10px 20px rgb(0 0 0 / 40%)" }}
                  className="border overflow-hidden rounded-r-2xl"
                >
                  Todas
                </Accordion.Header>
                <Accordion.Body
                  style={{ boxShadow: "3px 10px 20px rgb(0 0 0 / 40%)" }}
                  className="flex flex-col gap-1 text-sm bg-white rounded-br-2xl z-[1] overflow-hidden border"
                >
                  {estados.map((estado) => (
                    <Link
                      className="no-underline text-black hover:text-[#fa5e4d]"
                      key={estado.id}
                      href={`/franquicias-en-ecuador?estado=${estado.nombre}`}
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
            
          </Accordion.Body>
        </Accordion>
      </div>
    </>
  );
};

export default BrandsFilter;
