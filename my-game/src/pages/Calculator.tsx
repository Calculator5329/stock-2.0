import React from 'react';
import CompoundInterestCalculator from '../components/CompoundInterestCalculator';
import PageLayout from '../layouts/PageLayout';

const CalculatorPage: React.FC = () => {
  return (
    <PageLayout>
        <CompoundInterestCalculator />
    </PageLayout>
  );
};

export default CalculatorPage; 