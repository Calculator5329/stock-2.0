import React from 'react';

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bgDark text-white font-body p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
