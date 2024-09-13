import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Somos Franquicia Plus | Comercialización y Consultoría",
  description:
    "Somos una solución para marcas que quieren franquiciar su negocio o que ya son Franquiciantes. Comercializamos negocios de oportunidad en Ecuador.",
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
