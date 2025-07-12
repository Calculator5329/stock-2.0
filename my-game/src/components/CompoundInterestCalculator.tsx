import React, { useState } from 'react';

const CompoundInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(1000);
  const [rate, setRate] = useState<number>(7);
  const [years, setYears] = useState<number>(10);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(100);
  const [futureValue, setFutureValue] = useState<string>('');

  const calculate = () => {
    const P = principal;
    const r = rate / 100 / 12;
    const n = years * 12;
    const M = monthlyContribution;

    // Future value of principal
    const fvPrincipal = P * Math.pow(1 + r, n);
    // Future value of series of contributions
    const fvContributions = M * ((Math.pow(1 + r, n) - 1) / r);

    const total = fvPrincipal + fvContributions;
    setFutureValue(total.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
  };

  return (
    <div className="bg-bgDark/80 p-6 rounded-xl text-white shadow-xl glass">
      <h2 className="text-2xl font-title mb-4 text-neonPink">Compound Interest Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-body">Principal Amount ($)</label>
          <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full p-2 rounded bg-white/10 text-white" />
        </div>
        <div>
          <label className="block mb-1 font-body">Annual Interest Rate (%)</label>
          <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full p-2 rounded bg-white/10 text-white" />
        </div>
        <div>
          <label className="block mb-1 font-body">Years to Grow</label>
          <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full p-2 rounded bg-white/10 text-white" />
        </div>
        <div>
          <label className="block mb-1 font-body">Monthly Contribution ($)</label>
          <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} className="w-full p-2 rounded bg-white/10 text-white" />
        </div>
      </div>
      <button onClick={calculate} className="mt-6 w-full px-6 py-3 rounded-xl bg-neonBlue text-black font-bold hover:scale-105 transition-all">
        Calculate
      </button>
      {futureValue && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-body">Estimated Future Value:</h3>
          <p className="text-3xl font-title text-neonBlue">{futureValue}</p>
        </div>
      )}
    </div>
  );
};

export default CompoundInterestCalculator; 