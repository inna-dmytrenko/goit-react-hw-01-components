import React from 'react';

import { statisticalData } from '../../utils/statistical-data';
import { Aside, Labele } from '../../components/User/User.styles';
import {
  Title,
  StatList,
  StatItem,
  Percentage,
} from '../../components/Statistics/Statistics.styles';

function getRandomColor() {
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
function Statistical() {
  return (
    <Aside>
      <Title>Upload stats</Title>

      <StatList>
        {statisticalData.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: getRandomColor() }}>
            <Labele>{label}</Labele>
            <Percentage>{percentage}%</Percentage>{' '}
          </StatItem>
        ))}
      </StatList>
    </Aside>
  );
}

export default Statistical;
