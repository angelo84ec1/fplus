import ErrorPage from "@/components/ErrorPage";
import getBrandDetails from "../utils/getBrandDetails";

const PageLayout = async (props: any) => {
  const DetalleMarca = await getBrandDetails(props.params["brand-slug"]);

  if (!DetalleMarca) {
    return <ErrorPage />;
  }

  return (
    <div>
      <head>
        <title>{"FranquiciaPlus | " + DetalleMarca.nombre}</title>
        <meta name="description" content={DetalleMarca.description_html} />
        <meta
          name="canonical"
          content={`https://www.franquiciaplus.com/${DetalleMarca}`}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css"
        />
      </head>
      <body>{props.children}</body>
    </div>
  );
};

export default PageLayout;
