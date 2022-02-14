import type { NextPage } from 'next';
import { DashboardLayout } from '../../page-component';
import { AdminRoute } from '../../routes/admin-route';

const Admin: NextPage = () => {
  return (
    <AdminRoute>
      <DashboardLayout>
        <div>Admin</div>
      </DashboardLayout>
    </AdminRoute>
  );
};

export default Admin;
