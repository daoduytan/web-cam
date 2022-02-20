import { pick } from 'lodash';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DashboardLayout } from '../../../page-component';

interface RemoveBtnProps {
	experienceId: string;
}

const RemoveBtn = ({ experienceId }: RemoveBtnProps) => {
	const [loading, setLoading] = useState<boolean>(false);

	const handleRemove = async () => {
		try {
			setLoading(true);

			await fetch(`/api/experience?_id=${experienceId}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			});
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	return (
		<button
			className="border ml-2 px-4 py-1"
			onClick={handleRemove}
			disabled={loading}
		>
			Delete
		</button>
	);
};

interface FormExperienceProps {
	experience: any;
	callback: () => void;
}

const FormExperience = ({ experience, callback }: FormExperienceProps) => {
	const { register, handleSubmit } = useForm({
		defaultValues: pick(experience, ['title', 'description']),
	});

	const onSubmit = async (value: any) => {
		try {
			await fetch('/api/experience', {
				method: 'PUT',
				body: JSON.stringify({ ...value, _id: experience._id }),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			callback();
		} catch (err) {}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input className="px-4 py-1 border" {...register('title')} />

			<input className="px-4 py-1 border" {...register('description')} />

			<button className="px-4 py-1 border" type="submit">
				Lưu
			</button>
			<button className="px-4 py-1 border" onClick={callback}>
				Huỷ
			</button>
		</form>
	);
};

interface ExperienceEditProps {
	experience: any;
}

const ExperienceEdit = ({ experience }: ExperienceEditProps) => {
	const [isEdit, setEdit] = useState<boolean>(false);

	const toggle = () => setEdit((v) => !v);

	const renderContent = () => {
		if (isEdit) {
			return <FormExperience experience={experience} callback={toggle} />;
		}

		return (
			<>
				<span>
					{experience.title} | {experience.description}
				</span>
				<button className="ml-2 px-4 py-1 border" onClick={toggle}>
					Edit
				</button>
				<RemoveBtn experienceId={experience._id} />
			</>
		);
	};

	return <div className="mb-2">{renderContent()}</div>;
};

const Experience = () => {
	const [experiences, setExperiences] = useState<any[]>([]);

	useEffect(() => {
		async function fetchData() {
			const response: any = await fetch('/api/experience').then((res) =>
				res.json()
			);

			setExperiences(response.data);
		}
		fetchData();
	}, []);

	return (
		<DashboardLayout title="Kinh nghiệm">
			<Link href="/admin/experience/new">
				<a>Thêm</a>
			</Link>
			<div>
				{experiences.map((item) => (
					<ExperienceEdit key={item._id} experience={item} />
				))}
			</div>
		</DashboardLayout>
	);
};

export default Experience;
