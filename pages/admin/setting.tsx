import { pick } from 'lodash';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card } from '../../components';
import { DashboardLayout } from '../../page-component';

interface Props {
	data: any;
}

function FormAbout({ data }: Props) {
	const [submiting, setSubmiting] = useState<boolean>(false);
	const { register, handleSubmit } = useForm({
		defaultValues: pick(data, ['aboutTitle', 'aboutTitleSub']),
	});

	const onSubmit = async (value: any) => {
		try {
			setSubmiting(true);
			await fetch('/api/setting', {
				method: 'POST',
				body: JSON.stringify(value),
				headers: {
					'Content-type': 'application/json',
				},
			});
		} catch (error) {
			console.log('error', error);
		} finally {
			setSubmiting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<fieldset className="mb-4">
				<label className="block font-medium mb-1 text-sm">Title</label>
				<input
					className="px-4 py-2 w-full border rounded"
					{...register('aboutTitle')}
				/>
			</fieldset>
			<fieldset className="mb-4">
				<label className="block font-medium mb-1 text-sm">Sub title</label>
				<textarea
					className="px-4 py-2 w-full border rounded"
					{...register('aboutTitleSub')}
				/>
			</fieldset>
			<button
				disabled={submiting}
				className="px-4 py-2 text-white rounded bg-blue-600"
				type="submit"
			>
				Lưu
			</button>
		</form>
	);
}

const Setting: NextPage = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [pageSetting, setPageSetting] = useState();

	useEffect(() => {
		async function loadDataSetting() {
			try {
				setLoading(true);
				const response = await fetch('/api/setting');

				const data = await response.json();

				setPageSetting(data.data);
			} catch (error) {
			} finally {
				setLoading(false);
			}
		}

		loadDataSetting();
	}, []);

	if (loading) {
		return <div>Loading</div>;
	}

	return (
		<DashboardLayout title="Cài đặt">
			<div className="grid gap-4">
				<Card title="About">
					<FormAbout data={pageSetting} />
				</Card>
			</div>
		</DashboardLayout>
	);
};

export default Setting;
