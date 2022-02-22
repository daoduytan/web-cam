import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	title?: string;
}
const Card = ({ children, title }: Props) => (
	<div className='border rounded bg-white overflow-hidden'>
		{title &&
			<label className='border-b px-4 py-2 block font-semibold text-sm bg-gray-100'>{title}</label>
		}
		<div className="p-4">
			{children}
		</div>
	</div>
)

export {
	Card
}