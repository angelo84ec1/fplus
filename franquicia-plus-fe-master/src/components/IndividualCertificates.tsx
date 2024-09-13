import Image from "next/image";
import React from "react";
import certificate from "@/assets/fotos-fp/certificate/caja-certificados-visto.png";

interface props {
  title: string;
}

const IndividualCertificates = ({ title }: props) => {
  return (
    <div className="relative aspect-[16/10] lg:h-[6rem] h-[5.5rem]">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          unoptimized
          draggable={false}
          src={certificate}
          className="images"
          alt="checked"
        />
      </div>
      <div
        className="absolute text-sm lg:text-base inset-0 flex items-center justify-center text-white"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

export default IndividualCertificates;
