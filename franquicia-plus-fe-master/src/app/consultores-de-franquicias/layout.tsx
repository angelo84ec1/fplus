import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultores de franquicias | F+ | franquiciamos tu negocio",
  description:
    "Somos consultores de Franquicias en Ecuador , te enseñamos a franquiciar tu negocio o marca, a travez de una consultoría certificada por Franquicia Plus.",
};

const PageLayout = async (props: any) => {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body>{props.children}</body>
    </html>
  );
};

export default PageLayout;
