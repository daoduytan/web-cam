import { pick } from 'lodash';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DashboardLayout } from '../../../page-component';

interface RemoveBtnProps {
	recognitionId: string;
}

const RemoveBtn = ({ recognitionId }: RemoveBtnProps) => {
	const [loading, setLoading] = useState<boolean>(false);

	const handleRemove = async () => {
		try {
			setLoading(true);

			await fetch(`/api/recognition?_id=${recognitionId}`, {
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
	recognition: any;
	callback: () => void;
}

const FormExperience = ({ recognition, callback }: FormExperienceProps) => {
	const { register, handleSubmit } = useForm({
		defaultValues: pick(recognition, ['title']),
	});

	const onSubmit = async (value: any) => {
		try {
			await fetch('/api/recognition', {
				method: 'PUT',
				body: JSON.stringify({ ...value, _id: recognition._id }),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			callback();
		} catch (err) { }
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input className="px-4 py-1 border" {...register('title')} />
			<textarea className="px-4 py-1 border" {...register('description')} />
			<button className="px-4 py-1 border" type="submit">
				Lưu
			</button>
			<button className="px-4 py-1 border" onClick={callback}>
				Huỷ
			</button>
		</form>
	);
};

interface RecognitionEditProps {
	recognition: any;
}

const RecognitionEdit = ({ recognition }: RecognitionEditProps) => {
	const [isEdit, setEdit] = useState<boolean>(false);

	const toggle = () => setEdit((v) => !v);

	const renderContent = () => {
		if (isEdit) {
			return <FormExperience recognition={recognition} callback={toggle} />;
		}

		return (
			<>
				<span>{recognition.title}</span>
				<button className="ml-2 px-4 py-1 border" onClick={toggle}>
					Edit
				</button>
				<RemoveBtn recognitionId={recognition._id} />
			</>
		);
	};

	return <div className="mb-2">{renderContent()}</div>;
};

const Recognition = () => {
	const [recognitions, setRecognitions] = useState<any[]>([]);

	useEffect(() => {
		async function fetchData() {
			const response: any = await fetch('/api/recognition').then((res) =>
				res.json()
			);

			setRecognitions(response.data);
		}

		fetchData();
	}, []);

	return (
		<DashboardLayout title="Thành tích">
			<Link href="/admin/recognition/new">
				<a>Thêm</a>
			</Link>
			<div>
				{recognitions.map((item) => (
					<RecognitionEdit key={item._id} recognition={item} />
				))}
			</div>
		</DashboardLayout>
	);
};

export default Recognition;
