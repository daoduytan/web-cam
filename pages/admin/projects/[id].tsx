import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AddProjet, DashboardLayout } from '../../../page-component';

const ProjectNew: NextPage = () => {
	const { query } = useRouter();

	return (
		<DashboardLayout title="Dự án">
			<AddProjet projectId={query.id as string} />
		</DashboardLayout>
	);
};

export default ProjectNew;
