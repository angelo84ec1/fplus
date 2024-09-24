import ErrorPage from "@/components/ErrorPage";
import getSector from "../utils/getSector";
import BrandsPageComponent from "./BrandsPageComponent";
import { Sector } from "@/types/Sector";

const BrandsPage = async () => {
  const categoria = await getSector("categoria");
  const ubicacion = await getSector("ubicacion");
  const inversion = await getSector("inversion");
  const directorio = await getSector("directorio");
  const estado = await getSector("estado");

  if (!categoria || !ubicacion || !inversion || !directorio || !estado) {
    return <ErrorPage />;

  }

  return (
    <>
      <BrandsPageComponent
        category={categoria}
        ubication={ubicacion}
        investment={inversion}
        directory={directorio}
        state={estado}
      />
    </>
  );
};

export default BrandsPage;
