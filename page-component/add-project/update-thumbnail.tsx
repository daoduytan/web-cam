import { get } from 'lodash';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IImage } from '../../collection';
import { UploadImage } from '../../components';
import { useFormProject } from './state';

function UpdateThumbnail() {
	const [img, setImg] = useState<IImage>();
	const { project, updateFieldProject } = useFormProject();

	const handleUpload = (image: IImage) => {
		updateFieldProject({
			thumbnail: image._id,
		});
		setImg(image);
	};

	useEffect(() => {
		if (get(project, 'thumbnail.url')) {
			setImg(get(project, 'thumbnail'));
		}
	}, [project]);

	return (
		<UploadImage upload={handleUpload}>
			<div className="w-48 h-48 relative flex border items-center justify-center">
				{img ? <Image src={img.url} layout="fill" alt={img.filename} /> : '+'}
			</div>
		</UploadImage>
	);
}

export { UpdateThumbnail };
