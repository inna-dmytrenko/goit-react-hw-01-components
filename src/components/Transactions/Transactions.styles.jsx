import styled from '@emotion/styled';

export const TransactionHistory = styled.table`
  border: 1px solid black;
  padding: 20px;
  width: 440px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
export const Thead = styled.thead`
  background-color: teal;
  border: 1px solid black;
`;
export const Tr = styled.tr`
  border: 1px solid black;

  &:nth-of-type(even) {
    background-color: #ddd;
  }
`;
export const Th = styled.th`
  border: 1px solid black;
  padding: 5px;
`;
export const Tbody = styled.tbody`
  border: 1px solid black;
`;
export const Td = styled.td`
  font-size: 14px;
  border: 1px solid black;
  text-align: center;
  padding: 5px;
  text-transform: capitalize;
  cursor: pointer;
  :hover {
    background-color: #8fe99e;
  }
`;
