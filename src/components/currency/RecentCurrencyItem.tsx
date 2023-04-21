import styled from "styled-components";

type CurrencyProps = {
  id: string;
  currency: string;
  active: boolean;
  onSelectActiveCurrency: React.MouseEventHandler<HTMLLIElement> | undefined;
};

const RecentCurrencyItemEl = styled.li<{ active: boolean }>`
  color: ${(props) => (!props.active ? "#a2a2a2" : "#f9f9f9")};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.5px;
  padding: 8px 10px;
  text-transform: uppercase;
  text-align: center;
  background-color: ${(props) => (!props.active ? "#fffffe" : "#ef4565")};
  border-right: 1px solid #cecece;
  cursor: pointer;
`;

const RecentCurrencyItem = ({
  id,
  currency,
  active,
  onSelectActiveCurrency,
}: CurrencyProps) => {
  return (
    <RecentCurrencyItemEl
      onClick={onSelectActiveCurrency}
      active={active}
      id={id}
    >
      {currency}
    </RecentCurrencyItemEl>
  );
};

export default RecentCurrencyItem;
