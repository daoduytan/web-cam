import { pick } from 'lodash';
import { useState } from 'react';
import { IImage } from '../../collection';

const URL_API = 'https://api.imgbb.com/1/upload';
const CLIENT_API_KEY = 'f7d439c5784190071bcf91db68bd5990';

interface Props {
	upload: (image: IImage) => void;
}

function InputUpload({ upload }: Props) {
	const [loading, setLoading] = useState<boolean>(false);

	const handleUpload = async (e: any) => {
		try {
			setLoading(true);
			const form = new FormData();
			form.append('image', e.target.files[0]);

			const url = `${URL_API}?key=${CLIENT_API_KEY}`;

			const response = await fetch(url, {
				method: 'POST',
				body: form,
			});

			const data = await response.json();

			const imgData = {
				delete_url: data.data.delete_url,
				...pick(data.data.image, ['filename', 'url']),
			};

			console.log('imgData', imgData);

			const imgRes: any = await fetch('/api/upload', {
				method: 'POST',
				body: JSON.stringify(imgData),
				headers: {
					'Content-type': 'application/json',
				},
			});

			upload(imgRes as IImage);
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="relative w-10 h-10 flex items-center justify-center border">
			<span>{loading ? '...' : '+'}</span>
			<input
				onChange={handleUpload}
				type="file"
				className="cursor-pointer absolute top-0 left-0 bottom-0 right-0 opacity-0"
			/>
		</div>
	);
}

export { InputUpload };
