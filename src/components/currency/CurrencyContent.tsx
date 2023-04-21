import styled from 'styled-components';

type BoxProps = {
  children: React.ReactNode;
};

const CurrencyContentEl = styled.div`
  background-color: #fffffe;
  padding: 20px;
  border-radius: 10px;
`;

const CurrencyContent = ({ children }: BoxProps) => {
  return <CurrencyContentEl>{children}</CurrencyContentEl>;
};

export default CurrencyContent;
