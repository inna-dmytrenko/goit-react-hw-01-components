import React from 'react';
import { statisticalData } from '../../data/statistical-data';
function Statistical() {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {statisticalData.map(({ label, percentage }) => (
          <li>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>{' '}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Statistical;
