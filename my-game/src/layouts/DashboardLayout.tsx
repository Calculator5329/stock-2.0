import React from 'react';
import Navbar from '../components/Navbar';
import ChartCard from '../components/ChartCard';
import AssistantPanel from '../components/AssistantPanel';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dashboard-grid bg-cover bg-center text-white font-body">
      <div className="bg-black/60 min-h-screen p-6 backdrop-blur-sm">
        <Navbar />
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ChartCard title="Live Markets" />
          <ChartCard title="Your Portfolio" />
          <AssistantPanel />
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
