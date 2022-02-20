import { cloneElement } from 'react';
import { useFormProject } from './state';

interface Props {
	children: JSX.Element;
}

function InputValue({ children }: Props) {
	const { updateFieldProject } = useFormProject();

	const handleChange = (e: any) => {
		console.log(e.target.value);
		updateFieldProject({ [e.target.name]: e.target.value });
	};

	return cloneElement(children, { onChange: handleChange });
}
export { InputValue };
