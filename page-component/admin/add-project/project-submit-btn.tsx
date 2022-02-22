import { get, pick } from 'lodash';
import { useState } from 'react';
import { Button } from '..';
import { useAuth } from '../../../context/auth-context';
import { useFormProject } from './state';

const getValue = (project: any) => {
	const value = pick(project, [
		'title',
		'description',
		'content',
		'thumbnail',
		'service',
		'credits',
		'agency',
	]);

	return value;
};

function ProjectSubmitBtn() {
	const { user } = useAuth();
	const { project } = useFormProject();
	const [loading, setLoading] = useState<boolean>(false);
	const token = user?.token;

	const addProject = async () => {
		await fetch('/api/project', {
			method: 'POST',
			body: JSON.stringify(getValue(project)),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
	};

	const updateProject = async (id: string) => {
		await fetch(`/api/project/${id}`, {
			method: 'PUT',
			body: JSON.stringify(getValue(project)),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
	};

	const handleSave = async () => {
		console.log('dasd', project);

		try {
			setLoading(true);
			if (get(project, '_id')) {
				await updateProject(get(project, '_id'));
			} else {
				await addProject();
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Button disabled={loading || !project} onClick={handleSave}>
			Save
		</Button>
	);
}

export { ProjectSubmitBtn };
