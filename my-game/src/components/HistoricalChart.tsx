import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const generateData = () => {
  const data = [];
  const currentYear = new Date().getFullYear();
  let stockValue = 100;
  let bondValue = 100;
  let goldValue = 100;

  for (let i = 0; i < 100; i++) {
    const year = currentYear - 100 + i;
    stockValue *= 1 + (Math.random() * 0.25 - 0.05); // Average 10% annual return with volatility
    bondValue *= 1 + (Math.random() * 0.06 - 0.01); // Average 5%
    goldValue *= 1 + (Math.random() * 0.1 - 0.03); // Average 7%

    data.push({
      year,
      'Stock Market': parseFloat(stockValue.toFixed(2)),
      'Bonds': parseFloat(bondValue.toFixed(2)),
      'Gold': parseFloat(goldValue.toFixed(2)),
    });
  }
  return data;
};

const HistoricalChart: React.FC = () => {
  const data = generateData();

  return (
    <div className="bg-bgDark/80 p-6 rounded-xl text-white shadow-xl glass">
        <h2 className="text-2xl font-title mb-4 text-neonPink">100-Year Investment Returns</h2>
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />
                <XAxis dataKey="year" stroke="#8884d8" />
                <YAxis
                    stroke="#8884d8"
                    tickFormatter={(value) =>
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            notation: 'compact',
                            compactDisplay: 'short',
                        }).format(value)
                    }
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: 'rgba(14, 14, 44, 0.8)',
                        borderColor: '#00ffe1',
                    }}
                />
                <Legend />
                <Line type="monotone" dataKey="Stock Market" stroke="#00ffe1" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Bonds" stroke="#ff6fcb" strokeWidth={2} dot={false}/>
                <Line type="monotone" dataKey="Gold" stroke="#ffd700" strokeWidth={2} dot={false}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  );
};

export default HistoricalChart; 