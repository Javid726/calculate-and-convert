import styled from 'styled-components';

const CurrentDateEl = styled.div`
  margin-top: -10px;
  margin-bottom: 20px;
`;

const CurrentDateSpan = styled.span`
  color: #aca9a9;
  font-weight: 500;
  font-size: 12px;
`;

const CurrentDate = () => {
  return (
    <CurrentDateEl>
      <CurrentDateSpan>
        Data based on 2023-02-12 / 00:58 GMT +04:00
      </CurrentDateSpan>
    </CurrentDateEl>
  );
};

export default CurrentDate;
