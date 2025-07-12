import React from 'react';
import Navbar from '../components/Navbar';
import AssistantPanel from '../components/AssistantPanel';
import HistoricalChart from '../components/HistoricalChart';
import CompoundInterestCalculator from '../components/CompoundInterestCalculator';
import StockAnalyzerPlaceholder from '../components/StockAnalyzerPlaceholder';

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-dashboard-grid bg-cover bg-center text-white font-body">
      <div className="bg-black/60 min-h-screen p-6 backdrop-blur-sm">
        <Navbar />
        <main className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <HistoricalChart />
          </div>
          <div className="lg:col-span-1">
            <StockAnalyzerPlaceholder />
          </div>
          <div className="lg:col-span-2">
            <CompoundInterestCalculator />
          </div>
          <div className="lg:col-span-1">
            <AssistantPanel />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
