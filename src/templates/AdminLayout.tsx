import React from 'react';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="admin-layout">
      <header className="bg-gray-800 text-white p-4">Admin Panel</header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default AdminLayout;
