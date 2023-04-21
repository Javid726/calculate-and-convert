import RecentCurrencyItem from "./RecentCurrencyItem";
import styled from "styled-components";
import { useEffect } from "react";
import fetchCurrency from "./fetchCurrency";

const DUMMY_CURR = [
  {
    id: 1,
    currency: "USD",
    isActive: false,
  },
  {
    id: 2,
    currency: "EUR",
    isActive: false,
  },
  {
    id: 3,
    currency: "TRY",
    isActive: false,
  },
  {
    id: 4,
    currency: "RUB",
    isActive: false,
  },
  {
    id: 5,
    currency: "AZN",
    isActive: false,
  },
];

const RecentCurrenciesEl = styled.ul`
  list-style-type: none;
  display: flex;
  width: fit-content;
  border: 1px solid #cecece;
  border-radius: 5px;
  width: 300px;
  overflow: hidden;
  margin: 0 !important;
`;

type CurrencyProps = {
  currencyList: {};
  handleActiveCurrency: any;
  data: any;
  setData: any;
};

// type RecentCurrencies = {
//   currency: [
//     {
//       id: number;
//       currency: string;
//       isActive: false;
//     }
//   ];
// };

const RecentCurrenciesTo = ({
  currencyList,
  handleActiveCurrency,
  data,
  setData,
}: CurrencyProps) => {
  useEffect(() => {
    setData(DUMMY_CURR);
    console.log(currencyList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function recentCurrencies(currency: {
    id: number;
    currency: string;
    isActive: boolean;
  }): void {
    let recentCurr = [];

    DUMMY_CURR.unshift(currency);
    DUMMY_CURR.pop();

    for (let i = 0; i < DUMMY_CURR.length; i++) {
      recentCurr.push(DUMMY_CURR[i]);
    }

    setData(recentCurr);
    checkActive(recentCurr);
  }

  function checkActive(
    arr: { id: number; currency: string; isActive: boolean }[]
  ): void {
    let tempArr = [];
    let firstActive = false;

    for (let i = 0; i < arr.length; i++) {
      if (firstActive) {
        arr[i].isActive = false;
      }

      if (arr[i].isActive === true) {
        firstActive = true;
      }

      tempArr.push(arr[i]);
    }

    setData(tempArr);
  }

  return (
    <RecentCurrenciesEl>
      {data &&
        data.map((item: any) => (
          <RecentCurrencyItem
            key={item.id}
            id={String(item.id)}
            currency={item.currency}
            active={item.isActive}
            onSelectActiveCurrency={handleActiveCurrency}
          />
        ))}
      <select
        style={{ width: "100%", border: "none" }}
        onChange={(e) =>
          recentCurrencies({
            id: Number(e.target.value),
            currency: e.target.selectedOptions[0].innerText,
            isActive: true,
          })
        }
      >
        <option value="0"></option>
        {Object.keys(currencyList).map((option, idx) => (
          <option value={idx} key={idx}>
            {option}
          </option>
        ))}
      </select>
    </RecentCurrenciesEl>
  );
};

export default RecentCurrenciesTo;
