import { useQuery } from "@tanstack/react-query";
import fetchCurrencyList from "../fetchCurrencyList";

export default function useCurrencyList() {
  const results = useQuery(["currencyList"], fetchCurrencyList);
  // console.log(results);
  return [results?.data?.currencies ?? [], results.status];
}
