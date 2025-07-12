import React from 'react';

interface ChartCardProps {
  title: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default ChartCard;
