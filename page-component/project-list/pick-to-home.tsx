import { useEffect, useState } from "react"
import { IProject } from "../../collection"
import { useAuth } from "../../context/auth-context";

interface Props {
	project: IProject
	callback?: () => void
};

const PickToHome = ({ project, callback }: Props) => {
	const [pick, setPick] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false);
	const { user } = useAuth();

	const token = user?.token;

	const handlePick = async () => {
		try {
			setLoading(true)

			await fetch(`/api/project/${project._id}`, {
				method: 'PUT',
				body: JSON.stringify({ pick: !project.pick || false }),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
			callback && callback()
		} catch (error) {

		} finally {
			setLoading(false)
		}
	}

	const label = project.pick ? 'Bỏ chọn' : 'Chọn';

	return (
		<button onClick={handlePick} disabled={loading}>
			{label}
		</button>
	)
}

export {
	PickToHome
}