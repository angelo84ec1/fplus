const getBrandDetails = async (brandSlug: string) => {
  try {
    const url = `https://franquiciaplus.com/api/v1/detallemarca/${brandSlug}`;
    const response = await fetch(url);

    if (response.status > 400) throw new Error("Status code err")
    return await response.json();
  } catch (e: any) {

    return null
  }
};

export default getBrandDetails