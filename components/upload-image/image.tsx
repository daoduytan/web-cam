import NextImage from 'next/image';
import { IImage } from '../../collection';

interface Props {
	image: IImage;
	select: (image: IImage) => void;
}

function ImageThum({ image, select }: Props) {
	const handleSelect = () => {
		select(image);
	};

	return (
		<div className="relative cursor-pointer" onClick={handleSelect}>
			<NextImage
				src={image.url}
				alt={image.filename}
				width={100}
				height={100}
			/>
		</div>
	);
}

export { ImageThum };
