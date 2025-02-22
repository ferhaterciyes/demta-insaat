import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="main-layout">
      <header className="bg-blue-500 text-white p-4">Demta İnşaat</header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default MainLayout;
