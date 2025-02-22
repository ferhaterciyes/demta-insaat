import React from 'react';
import AdminLayout from "@/templates/AdminLayout";
import Login from '@/pages/admin/auth/login';

const AdminPage = () => {
    return (
        <AdminLayout>
            <Login/>
            {/*<Dashboard/>*/}
        </AdminLayout>
    );
};

export default AdminPage;
