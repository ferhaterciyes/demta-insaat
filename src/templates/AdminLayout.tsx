import React from 'react';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (

      <main className="bg-[#26313c] flex items-center justify-center h-screen p-10">
          {children}
      </main>
  );
};

export default AdminLayout;
