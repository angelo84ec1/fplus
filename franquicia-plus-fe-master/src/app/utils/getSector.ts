const getSector = async (sector: string) => {
  try {
    const url = `https://franquiciaplus.com/api/v1/${sector}`;
    const response = await fetch(url);

    if (response.status > 400) throw new Error("Status code err")
    return await response.json();
  } catch (e: any) {
    return null
  }
};

export default getSector