import { useForm } from 'react-hook-form';
import { DashboardLayout } from '../../../page-component';

const ExperienceNew = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (value: any) => {
		fetch('/api/recognition', {
			method: 'POST',
			body: JSON.stringify(value),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};

	return (
		<DashboardLayout title="Thêm thành tích">
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<textarea {...register('title')} />
				</fieldset>
				<fieldset>
					<textarea {...register('description')} />
				</fieldset>
				<fieldset>
					<button type="submit">Lưu</button>
				</fieldset>
			</form>
		</DashboardLayout>
	);
};

export default ExperienceNew;
