import React from 'react';
import { statisticalData } from '../../utils/statistical-data';
import { Aside, Labele } from '../../components/User/User.styles';
import {
  Title,
  StatList,
  StatItem,
  Percentage,
} from '../../components/Statistics/Statistics.styles';
// function Color() {
//   const colorArray = ['#E74C3C', '#8E44AD', '#3498DB', '#27AE60', '#F39C12'];
//   return{statisticalData.map(({ id }) => (
//           `${colorArray[Number(id.replace(/[^0-9]/g, '')) % 5]}`
//         ))}

// }
function Statistical() {
  return (
    <Aside>
      <Title>Upload stats</Title>

      <StatList>
        {statisticalData.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Labele>{label}</Labele>
            <Percentage>{percentage}%</Percentage>{' '}
          </StatItem>
        ))}
      </StatList>
    </Aside>
  );
}
export default Statistical;
