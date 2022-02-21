import { NextPage } from 'next';
import Link from 'next/link';
import { DashboardLayout, ProjectList } from '../../../page-component';

const Projects: NextPage = () => {
  return (
    <DashboardLayout
      title="Project"
      extra={
        <Link href="/admin/projects/new">
          <a className="inline-block px-4 py-2 bg-blue-600 text-white rounded">
            Tạo mới
          </a>
        </Link>
      }
    >
      <ProjectList />
    </DashboardLayout>
  );
};

export default Projects;
