import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: 'Futura';
  text-align: center;
`;

const FooterEl = styled.footer`
  margin: 20px 0;
`;

const Footer = () => {
  return (
    <FooterEl>
      <Paragraph>
        This project will help to combine a calculator and currency exchanger in
        one place
      </Paragraph>
    </FooterEl>
  );
};

export default Footer;
