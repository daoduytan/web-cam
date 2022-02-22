import { NextPage } from 'next';
import { AddProject, DashboardLayout } from '../../../page-component';

const ProjectNew: NextPage = () => {
  return (
    <DashboardLayout title="Add new project">
      <AddProject />
    </DashboardLayout>
  );
};

export default ProjectNew;
