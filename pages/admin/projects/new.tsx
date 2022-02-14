import { NextPage } from 'next';
import { AddProjet, DashboardLayout } from '../../../page-component';

const ProjectNew: NextPage = () => {
  return (
    <DashboardLayout title="Dự án mới">
      <AddProjet />
    </DashboardLayout>
  );
};

export default ProjectNew;
