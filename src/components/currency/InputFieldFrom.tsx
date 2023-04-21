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

type FromProps = {
  getFromValue: (val: string) => void;
  value: string;
};

const InputFieldFrom = ({ getFromValue, value }: FromProps) => {
  function valueChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    getFromValue(e.target.value);
  }

  return (
    <InputEl
      type="number"
      value={value}
      onChange={valueChangeHandler}
      min="0"
    />
  );
};

export default InputFieldFrom;
