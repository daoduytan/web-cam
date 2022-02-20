import { useCallback, useEffect, useMemo, useState } from 'react';
import { IImage } from '../../collection';
import { ImageThum } from './image';
import { InputUpload } from './input-upload';

const useImageList = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [images, setImages] = useState<IImage[]>([]);

	const fetchImageList = useCallback(async () => {
		try {
			setLoading(true);
			console.log('dasd');
			const response = await fetch('/api/image');
			console.log('response', response);
			const { data } = await response.json();

			setImages(data);
		} catch (error) {
			console.log(error);
			setImages([]);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchImageList();
	}, [fetchImageList]);

	return useMemo(
		() => ({ loading, images, fetchImageList }),
		[loading, images, fetchImageList]
	);
};

interface Props {
	select: (img: IImage) => void;
}

function ImageList({ select }: Props) {
	const { loading, images, fetchImageList } = useImageList();

	const handleUpload = (image: IImage) => {
		select(image);
		fetchImageList();
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex gap-3">
			<InputUpload upload={handleUpload} />

			{images.map((img) => (
				<ImageThum select={select} key={img._id} image={img} />
			))}
		</div>
	);
}

export { ImageList };
