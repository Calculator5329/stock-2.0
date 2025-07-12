import React from 'react';

const AssistantPanel: React.FC = () => {
  return (
    <div className="min-h-[500px] bg-assistant-bg bg-cover bg-center rounded-xl p-6 text-white shadow-xl">
      <h2 className="text-2xl font-title mb-4">AI Insights</h2>
      <div className="glass p-4 rounded-lg">
        {/* Chat or insight cards here */}
      </div>
    </div>
  );
};

export default AssistantPanel;
