import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos Franquicia Plus en Ecuador",
  description:
    "Buscas franquicias en Ecuador y no sabes cual es la mejor opción. En Franquicia Plus te brindamos la mejor asesoría para adquirir negocios rentables.",
};

const PageLayout = async (props: any) => {
  return (
    <div>
      <body>{props.children}</body>
    </div>
  );
};

export default PageLayout;
