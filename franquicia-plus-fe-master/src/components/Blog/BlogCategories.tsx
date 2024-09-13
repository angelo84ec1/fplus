"use client";
import categorias from "@/static/Content/Categorias/categorias.json";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Accordion } from "react-bootstrap";
import { FaSliders } from "react-icons/fa6";

interface props {
  selectedCategory: string | null;
}

const Blogs = ({ selectedCategory }: props) => {
  const router = useRouter();
  return (
    <>
      <div className="w-[18vw] lg:flex hidden flex-col gap-y-4">
        <div className="font-semibold text-lg">Categorias:</div>
        {categorias.categorias.map((category) => (
          <button
            onClick={() => {
              router.push(`/blog?categoria=${category.value}`);
            }}
            key={category.id}
            style={{ boxShadow: "0.3em 0.3em 1em -0.3em #6a6969" }}
            className={`w-full flex justify-center py-2 rounded-xl items-center border text-black no-underline ${
              selectedCategory === category.value
                ? "bg-[#02C5D5] border-[#02C5D5]"
                : ""
            }`}
          >
            {category.nombre}
          </button>
        ))}
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
          <Accordion.Body className="flex flex-col gap-4 text-sm bg-white rounded-br-2xl z-[1] w-full overflow-visible">
            Categorias:
            {categorias.categorias.map((category) => (
              <button
                style={{ boxShadow: "0px 10px 21px rgba(0,0,0,1)" }}
                onClick={() => {
                  router.push(`/blog?categoria=${category.value}`);
                }}
                key={category.id}
                className={`w-full flex justify-center py-2 rounded-xl items-center border text-black no-underline ${
                  selectedCategory === category.value
                    ? "bg-[#02C5D5] border-[#02C5D5]"
                    : ""
                }`}
              >
                {category.nombre}
              </button>
            ))}
          </Accordion.Body>
        </Accordion>
      </div>
    </>
  );
};

export default Blogs;
