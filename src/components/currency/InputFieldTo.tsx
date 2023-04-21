import styled from "styled-components";

const InputEl = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  border-spacing: 4px;
  outline: none;
  padding: 10px 5px 35px 10px;
  margin-top: 20px;
  font-weight: 600;
  font-size: 24px;
  font-family: inherit;
  --webkit-appearance: none;
  width: 85%;

  &:focus {
    border-color: #ef4565;
  }

  &::after {
    content: "";
  }
`;

type ToProps = {
  getToValue: (val: string) => void;
  value: string;
};

const InputFieldTo = ({ getToValue, value }: ToProps) => {
  return (
    <InputEl
      type="number"
      value={value}
      disabled={true}
      onChange={(e) => getToValue(e.target.value)}
    />
  );
};

export default InputFieldTo;
