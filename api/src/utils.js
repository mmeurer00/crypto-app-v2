import { coinsList } from "./data";

export const getCoinByQuery = (string) => {
  const result = coinsList.filter(
    (coin) =>
      coin.id.toLowerCase().toString().indexOf(string.toLowerCase()) !== -1
  );
  if (result === undefined) return [];
  return result;
};

export const getCoinById = (id) => {
  return coinsList.find((coin) => coin.id.toLowerCase() === id.toLowerCase());
};
