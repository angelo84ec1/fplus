import ErrorPage from "@/components/ErrorPage";
import getBrandDetails from "../utils/getBrandDetails";
import BrandComponent from "./BrandComponent";

const BrandPage = async (props: any) => {
  const DetalleMarca = await getBrandDetails(props.params["brand-slug"]);

  if (!DetalleMarca) {
    return <ErrorPage />;
  }
  return (
    <>
      <BrandComponent detalleMarca={DetalleMarca} />
    </>
  );
};

export default BrandPage;
