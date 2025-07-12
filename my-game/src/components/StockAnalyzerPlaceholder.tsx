import React from 'react';

const StockAnalyzerPlaceholder: React.FC = () => {
  return (
    <div className="bg-bgDark/80 p-6 rounded-xl text-white shadow-xl glass h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-title mb-4 text-neonPink">Stock Analyzer</h2>
      <p className="font-body text-center">
        This feature is coming soon. Enter a stock ticker to get a detailed analysis.
      </p>
      <div className="mt-6 w-full max-w-sm">
          <input type="text" placeholder="Enter Stock Ticker (e.g., AAPL)" className="w-full p-2 rounded bg-white/10 text-white placeholder-gray-400" />
          <button className="mt-4 w-full px-6 py-3 rounded-xl bg-gray-600 text-white font-bold cursor-not-allowed">
            Analyze (Coming Soon)
          </button>
      </div>
    </div>
  );
};

export default StockAnalyzerPlaceholder; 