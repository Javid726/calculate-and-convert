import { useQuery } from "@tanstack/react-query";
import fetchCurrency from "./fetchCurrency";

export default function useCurrency(
  to: string,
  from: string,
  currency: number
) {
  const results = useQuery(["currency", { to, from, currency }], fetchCurrency);

  console.log(results.data);

  return [results?.data?.currency ?? [], results.status];
}
