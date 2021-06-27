import { transactions } from '../../utils/transactions';
// import { Aside } from '../../components/User/User.styles';
import {
  TransactionHistory,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '../../components/Transactions/Transactions.styles';
function Transactions() {
  return (
    <TransactionHistory>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </TransactionHistory>
  );
}
export default Transactions;
