import styled from "styled-components";

type ConvertButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonEl = styled.button`
  background-color: #3da9fc;
  color: #f1f1f1;
  padding: 8px 12px;
  font-family: inherit;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 1px solid #094067;
  }
`;

const ConvertButton = ({ children, onClick }: ConvertButtonProps) => {
  return <ButtonEl onClick={onClick}>{children}</ButtonEl>;
};

export default ConvertButton;
