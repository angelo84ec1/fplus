/*const handleCountryChange = (e: any) => {
  const selectedCountry = e.target.value;
  setCountry(selectedCountry);

  // Buscar los datos del país seleccionado (código y bandera)
  const selectedCountryData = countries.find(
    (c) => c.name === selectedCountry
  );

  if (selectedCountryData) {
    setPhoneCode(selectedCountryData.code); // Actualiza el código de teléfono
    setFlag(selectedCountryData.flag);     // Actualiza la bandera
    setPhone(selectedCountryData.code);    // Inicializa el campo de teléfono con el nuevo código
  }
};*/
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Partner } from "@/types/Partner";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface props {
  partners: Partner[];
}

const Partners = ({ partners }: props) => {
  const [hover, setHover] = useState("");

  return (
    <>
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="flex justify-center items-center lg:p-4"
          data-aos={partner.animation}
        >
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full w-full flex justify-center items-center"
          >
            <div
              className="w-[80%] aspect-video flex justify-center items-center hover:shadow-2xl"
              onMouseOver={() => setHover(partner.url)}
              onMouseLeave={() => setHover("")}
            >
              <div className="hover:w-[90%] w-[70%] h-auto">
                <Image
                  unoptimized
                  width={1000}
                  height={1000}
                  draggable={false}
                  src={
                    hover === partner.url
                      ? partner.imagenconcolor
                      : partner.imagensincolor
                  }
                  alt={
                    hover === partner.url
                      ? partner.altimagenconcolor
                      : partner.altimagensincolor
                  }
                  title={
                    hover === partner.url
                      ? partner.titleimagenconcolor
                      : partner.titleimagensincolor
                  }
                  className="images"
                />
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Partners;
