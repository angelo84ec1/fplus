import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificate en F+ con nuestro certificado de franquicias Plus",
  description:
    "Somos la única empresa en el mundo que audita y certifica tu sistema de franquicia con un NFT único, donde podrás demostrar que eres un negocio de exito.",
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
