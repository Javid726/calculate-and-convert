import styled from 'styled-components';

const MainHeader = styled.h1`
  font-family: 'Futura';
  text-align: center;
`;

const HeaderEl = styled.header`
  margin: 20px 0;
`;

const Header = () => {
  return (
    <HeaderEl>
      <MainHeader>Currency&Calculator</MainHeader>
    </HeaderEl>
  );
};

export default Header;
