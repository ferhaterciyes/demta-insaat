import React from 'react';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (

      <main className="bg-red-600 flex items-center justify-center">
          {children}
      </main>
  );
};

export default AdminLayout;
