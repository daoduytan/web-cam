import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AddProject, DashboardLayout } from '../../../page-component';

const ProjectNew: NextPage = () => {
	const { query } = useRouter();

	return (
		<DashboardLayout title="Add project">
			<AddProject projectId={query.id as string} />
		</DashboardLayout>
	);
};

export default ProjectNew;
