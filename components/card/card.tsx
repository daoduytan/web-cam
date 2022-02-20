import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	title?: string;
}

function Card({ children, title }: Props) {
	return (
		<div className="bg-white rounded">
			{title && <div className="px-4 p-2 border-b font-bold">{title}</div>}

			<div className="p-4">{children}</div>
		</div>
	);
}

export { Card };
