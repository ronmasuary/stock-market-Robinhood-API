export const getDataBySymbol = async (symbol) => {
  const response = await fetch(`/search/?sym=${encodeURIComponent(symbol)}`);
  try {
    const json = await response.json();
    return json;
  } catch {
    return "";
  }
};
