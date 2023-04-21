import styled from 'styled-components';
import Calculator from '../calculator/Calculator';
import Currency from '../currency/Currency';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 100px;
`;

const Main = () => {
  return (
    <Container>
      <Calculator />
      <Currency />
    </Container>
  );
};

export default Main;
