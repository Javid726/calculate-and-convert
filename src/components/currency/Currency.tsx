import styled from "styled-components";
import CurrencyContent from "./CurrencyContent";
import CurrentDate from "./CurrentDate";
import RecentCurrencies from "./RecentCurrencies";
import RecentCurrenciesTo from "./RecentCurrenciesTo";
import InputFieldTo from "./InputFieldTo";
import InputFieldFrom from "./InputFieldFrom";
import ConvertButton from "./ConvertButton";
import { VscArrowSwap } from "react-icons/vsc";
import { useEffect, useState } from "react";
import useCurrencyList from "./useCurrencyList";
// import useCurrency from "./useCurrency";

import { useQuery } from "@tanstack/react-query";
import fetchCurrency from "./fetchCurrency";

const CurrencyEl = styled.div`
  background-color: #d8eefe;
  padding: 20px;
  height: 500px;
  border-radius: 20px;
  flex: 2;
`;

const ArrowSwapContainer = styled.div`
  margin-bottom: 20px;
  margin-right: 30px;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  align-self: flex-end;
  background-color: #ebebeb;
  cursor: pointer;
`;

const Currency = () => {
  const [currencyList, status] = useCurrencyList();
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [currencyValue, setCurrencyValue] = useState(0);
  const [recentDataFrom, setRecentDataFrom] =
    useState<{ id: number; currency: string; isActive: boolean }[]>();
  const [recentDataTo, setRecentDataTo] =
    useState<{ id: number; currency: string; isActive: boolean }[]>();

  const results = useQuery(
    [
      "currency",
      { to: toCurrency, from: fromCurrency, currency: currencyValue },
    ],
    fetchCurrency
  );
  // const [currency] = useCurrency(toCurrency, fromCurrency, +fromValue);

  function getFromValue(value: string) {
    setFromValue(value);
  }

  function getToValue(value: string) {
    setToValue(value);
  }

  function swapExchangeValues(to: string): void {
    setToValue("");
    setRecentDataFrom(recentDataTo);
    setRecentDataTo(recentDataFrom);

    // console.log("From: " + fromCurrency);
    // console.log("To: " + toCurrency);
    // console.log("Status: " + status);
  }

  function setConvertedCurrencies(): void {
    let fromCurrency = recentDataFrom?.find((el) => el.isActive === true);
    let toCurrency = recentDataTo?.find((el) => el.isActive === true);

    if (fromCurrency) {
      setFromCurrency(fromCurrency.currency);
    }

    if (toCurrency) {
      setToCurrency(toCurrency.currency);
    }

    setCurrencyValue(+fromValue);

    console.log(results.data);
  }

  useEffect(() => {
    setToValue(results?.data?.result);
  }, [results?.data]);

  // Lifting recent currencies
  function handleActiveCurrency(e: any, data: any, setData: any) {
    const tempArr = [];
    console.log("here we go");

    const target = Number(e.target.id);
    const selectedCurrency = data && data.find((el: any) => el.id === target);

    if (data && selectedCurrency) {
      selectedCurrency.isActive = true;

      for (let el of data) {
        tempArr.push(el);
      }

      for (let el of tempArr) {
        if (el.id === selectedCurrency.id) {
          el.isActive = true;
        } else {
          el.isActive = false;
        }
      }
    }

    setData(tempArr);
  }

  return (
    <CurrencyEl>
      <CurrencyContent>
        <CurrentDate />
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <div>
            <h3 style={{ letterSpacing: "1px", marginBottom: "15px" }}>
              I have
            </h3>
            <RecentCurrencies
              currencyList={currencyList}
              handleActiveCurrency={(e: any) =>
                handleActiveCurrency(e, recentDataFrom, setRecentDataFrom)
              }
              data={recentDataFrom}
              setData={setRecentDataFrom}
            />
            <InputFieldFrom getFromValue={getFromValue} value={fromValue} />
          </div>
          <ArrowSwapContainer onClick={() => swapExchangeValues(toValue)}>
            <VscArrowSwap />
          </ArrowSwapContainer>
          <div>
            <h3 style={{ letterSpacing: "1px", marginBottom: "15px" }}>
              Want to change
            </h3>
            <RecentCurrenciesTo
              currencyList={currencyList}
              handleActiveCurrency={(
                e: React.MouseEvent<HTMLLIElement, MouseEvent>
              ) => handleActiveCurrency(e, recentDataTo, setRecentDataTo)}
              data={recentDataTo}
              setData={setRecentDataTo}
            />
            <InputFieldTo getToValue={getToValue} value={toValue} />
          </div>
        </div>
        <ConvertButton onClick={setConvertedCurrencies}>Convert</ConvertButton>
      </CurrencyContent>
    </CurrencyEl>
  );
};

export default Currency;
