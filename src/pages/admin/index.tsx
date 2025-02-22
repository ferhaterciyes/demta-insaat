import React from 'react';
import Login from '@/pages/admin/login';
import AdminLayout from "@/templates/AdminLayout";

const AdminPage = () => {
    return (
        <AdminLayout>
            <Login/>
            {/*<Dashboard/>*/}
        </AdminLayout>
    );
};

export default AdminPage;
